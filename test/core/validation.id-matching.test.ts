import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { promises as fs } from 'fs';
import os from 'os';
import path from 'path';
import { Validator } from '../../src/core/validation/validator.js';
import { extractRequirementBlock, buildRenameMap } from '../../src/utils/requirement-diff.js';

/**
 * validate must agree with archive about which main-spec block a delta header
 * names. With ID-aware matching, a MODIFIED block that keeps its REQ token and
 * changes its title is compared against the block it will replace, and the
 * archive preflight prints no "Archive would refuse" INFO for it.
 */
describe('validate: ID-aware requirement matching', () => {
  let testDir: string;
  let changesDir: string;
  let mainSpecsDir: string;

  const MAIN_BODY = [
    '### Requirement: REQ-WID-001 Widget state',
    'The system SHALL report the widget state.',
    '',
    '#### Scenario: SCN-WID-001-1 Existing scenario',
    '- **WHEN** queried',
    '- **THEN** the state is reported',
    '',
    '#### Scenario: SCN-WID-001-2 Second scenario',
    '- **WHEN** queried twice',
    '- **THEN** the state is reported twice',
    '',
    '### Requirement: Plain widget',
    'The system SHALL keep a plain widget.',
    '',
    '#### Scenario: Plain scenario',
    '- **WHEN** asked',
    '- **THEN** the widget is kept',
  ].join('\n');

  const mainSpec = (body: string) =>
    `# widgets Specification\n\n## Purpose\nDefine widget behavior for these tests.\n\n## Requirements\n\n${body}\n`;

  const writeMainSpec = async (body: string) => {
    const file = path.join(mainSpecsDir, 'widgets', 'spec.md');
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, mainSpec(body));
  };

  const writeChange = async (changeName: string, delta: string) => {
    const changeDir = path.join(changesDir, changeName);
    const specDir = path.join(changeDir, 'specs', 'widgets');
    await fs.mkdir(specDir, { recursive: true });
    await fs.writeFile(path.join(specDir, 'spec.md'), delta);
    return changeDir;
  };

  const validate = (changeDir: string) =>
    new Validator(true).validateChangeDeltaSpecs(changeDir, { mainSpecsDir });

  const messages = (report: { issues: Array<{ message: string }> }) => report.issues.map((i) => i.message);

  const modified = (header: string, scenarios: string[]) =>
    [
      '## MODIFIED Requirements',
      '',
      `### Requirement: ${header}`,
      'The system SHALL report the widget state and its age.',
      '',
      ...scenarios.flatMap((s) => [`#### Scenario: ${s}`, '- **WHEN** queried', '- **THEN** the state is reported', '']),
    ].join('\n');

  beforeEach(async () => {
    testDir = await fs.mkdtemp(path.join(os.tmpdir(), 'openspec-id-validate-'));
    changesDir = path.join(testDir, 'repo', 'openspec', 'changes');
    mainSpecsDir = path.join(testDir, 'repo', 'openspec', 'specs');
    await fs.mkdir(changesDir, { recursive: true });
    await writeMainSpec(MAIN_BODY);
  });

  afterEach(async () => {
    await fs.rm(testDir, { recursive: true, force: true });
  });

  it('prints no "Archive would refuse" INFO for an ID-matched retitle', async () => {
    const changeDir = await writeChange(
      'retitle',
      modified('REQ-WID-001 State of the widget', ['SCN-WID-001-1 Existing scenario', 'SCN-WID-001-2 Second scenario'])
    );
    const report = await validate(changeDir);
    expect(messages(report).filter((m) => m.startsWith('Archive would refuse'))).toEqual([]);
    expect(report.valid).toBe(true);
  });

  it('passes the scenario-loss check when scenarios keep their SCN IDs and change their titles', async () => {
    const changeDir = await writeChange(
      'scn-retitle',
      modified('REQ-WID-001 Widget state', ['SCN-WID-001-1 First one, retitled', 'SCN-WID-001-2 Second one, retitled'])
    );
    const report = await validate(changeDir);
    expect(messages(report).filter((m) => m.includes('omits scenario'))).toEqual([]);
    expect(report.valid).toBe(true);
  });

  it('still reports a dropped scenario by the name the main spec uses', async () => {
    const changeDir = await writeChange('scn-drop', modified('REQ-WID-001 Widget state', ['SCN-WID-001-1 Existing scenario']));
    const report = await validate(changeDir);
    const loss = messages(report).find((m) => m.includes('omits scenario'));
    expect(loss).toContain('"SCN-WID-001-2 Second scenario"');
  });

  it('compares a MODIFIED under a same-ID RENAMED pair against the renamed block', async () => {
    const delta = [
      '## RENAMED Requirements',
      '- FROM: `### Requirement: REQ-WID-001 Widget state`',
      '- TO: `### Requirement: REQ-WID-001 State of the widget`',
      '',
      modified('REQ-WID-001 State of the widget', ['SCN-WID-001-1 Existing scenario']),
    ].join('\n');
    const changeDir = await writeChange('rename-same-id', delta);
    const report = await validate(changeDir);
    const all = messages(report);
    expect(all.find((m) => m.includes('MODIFIED references old name from RENAMED'))).toBeUndefined();
    expect(all.find((m) => m.includes('omits scenario'))).toContain('"SCN-WID-001-2 Second scenario"');
  });

  it('reports a retitled header without an ID as a delta archive would refuse', async () => {
    const changeDir = await writeChange(
      'plain-retitle',
      [
        '## MODIFIED Requirements',
        '',
        '### Requirement: Plain widget, retitled',
        'The system SHALL keep a plain widget.',
        '',
        '#### Scenario: Plain scenario',
        '- **WHEN** asked',
        '- **THEN** the widget is kept',
        '',
      ].join('\n')
    );
    const report = await validate(changeDir);
    expect(messages(report).find((m) => m.startsWith('Archive would refuse'))).toContain('not found');
  });

  it('reports a duplicate within a section by ID even when the titles differ', async () => {
    const changeDir = await writeChange(
      'dup-id',
      [
        '## ADDED Requirements',
        '',
        '### Requirement: REQ-WID-007 First title',
        'The system SHALL do one thing.',
        '',
        '#### Scenario: SCN-WID-007-1 One',
        '- **WHEN** a',
        '- **THEN** b',
        '',
        '### Requirement: REQ-WID-007 Second title',
        'The system SHALL do another thing.',
        '',
        '#### Scenario: SCN-WID-007-2 Two',
        '- **WHEN** c',
        '- **THEN** d',
        '',
      ].join('\n')
    );
    const report = await validate(changeDir);
    expect(messages(report)).toContain('Duplicate requirement in ADDED: "REQ-WID-007 Second title"');
  });

  it('reports a cross-section conflict by ID with the token in the message', async () => {
    const changeDir = await writeChange(
      'cross',
      [
        modified('REQ-WID-001 Any title', ['SCN-WID-001-1 Existing scenario', 'SCN-WID-001-2 Second scenario']),
        '',
        '## REMOVED Requirements',
        '- `### Requirement: REQ-WID-001 Widget state`',
        '',
      ].join('\n')
    );
    const report = await validate(changeDir);
    expect(messages(report)).toContain('Requirement present in both MODIFIED and REMOVED: "REQ-WID-001"');
  });

  describe('show --diff helpers', () => {
    it('finds a main-spec block by ID when the delta title differs', () => {
      const match = extractRequirementBlock(mainSpec(MAIN_BODY), 'REQ-WID-001 Any other title');
      expect(match).not.toBeNull();
      expect(match!.exact).toBe(true);
      expect(match!.name).toBe('REQ-WID-001 Widget state');
    });

    it('keeps the fold fallback for a header without an ID', () => {
      const match = extractRequirementBlock(mainSpec(MAIN_BODY), 'plain  widget');
      expect(match).not.toBeNull();
      expect(match!.exact).toBe(false);
      expect(match!.name).toBe('Plain widget');
      expect(extractRequirementBlock(mainSpec(MAIN_BODY), 'Plain widget, retitled')).toBeNull();
    });

    it('maps a rename back by ID key', () => {
      const map = buildRenameMap([{ from: 'REQ-WID-001 Widget state', to: 'REQ-WID-001 State of the widget' }]);
      expect(map.get('id:REQ-WID-001')).toBe('REQ-WID-001 Widget state');
    });
  });
});
