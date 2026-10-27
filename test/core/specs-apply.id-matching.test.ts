import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';
import { buildUpdatedSpec, findSpecUpdates } from '../../src/core/specs-apply.js';
import {
  diffScenarioNames,
  foldRequirementName,
  requirementMatchKey,
  scenarioMatchKey,
} from '../../src/core/parsers/requirement-blocks.js';

/**
 * A spec tree adopted by spec-ctx starts every requirement header with an ID
 * token (`REQ-BIL-001 Late fees`) and every scenario header with one
 * (`SCN-BIL-001-1 Thirty days overdue`). Archive matched headers on their full
 * text, so a delta that retitled a requirement under a stable ID was refused
 * with "not found". Headers that carry an ID are matched on the ID. Headers
 * without one keep text matching, so nothing changes for them.
 */
describe('buildUpdatedSpec (ID-aware requirement matching)', () => {
  let tempDir: string;

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'openspec-id-match-'));
  });
  afterEach(async () => {
    await fs.rm(tempDir, { recursive: true, force: true });
  });

  const MAIN_SPEC = [
    '# billing Specification',
    '',
    '## Purpose',
    'Defines how billing behaves for customers and operators.',
    '',
    '## Requirements',
    '### Requirement: REQ-BIL-001 Invoice generation',
    'The system SHALL generate an invoice for every completed billing period.',
    '',
    '#### Scenario: SCN-BIL-001-1 Period closes',
    '- **WHEN** a billing period closes',
    '- **THEN** an invoice is generated',
    '',
    '### Requirement: REQ-BIL-002 Late fees',
    'The system SHALL apply a late fee to invoices overdue by 30 days.',
    '',
    '#### Scenario: SCN-BIL-002-1 Thirty days overdue',
    '- **WHEN** an invoice is 30 days overdue',
    '- **THEN** a late fee is applied',
    '',
    '### Requirement: Refund window',
    'The system SHALL accept a refund request within 14 days of payment.',
    '',
    '#### Scenario: Request inside the window',
    '- **WHEN** a refund is requested 10 days after payment',
    '- **THEN** the refund is accepted',
    '',
  ].join('\n');

  async function build(deltaBody: string, mainSpec = MAIN_SPEC) {
    const specsRoot = path.join(tempDir, 'openspec', 'specs');
    const specsDir = path.join(specsRoot, 'billing');
    const changeDir = path.join(tempDir, 'openspec', 'changes', 'c');
    await fs.mkdir(specsDir, { recursive: true });
    await fs.mkdir(path.join(changeDir, 'specs', 'billing'), { recursive: true });
    await fs.writeFile(path.join(specsDir, 'spec.md'), mainSpec);
    await fs.writeFile(path.join(changeDir, 'specs', 'billing', 'spec.md'), deltaBody);
    const [update] = await findSpecUpdates(changeDir, specsRoot);
    return buildUpdatedSpec(update, 'c', { silent: true });
  }

  const block = (header: string, body: string, scenario: string) =>
    [
      `### Requirement: ${header}`,
      body,
      '',
      `#### Scenario: ${scenario}`,
      '- **WHEN** something happens',
      '- **THEN** the system responds',
      '',
    ].join('\n');

  describe('requirementMatchKey and scenarioMatchKey', () => {
    it('keys an ID header on its token and a plain header on its text', () => {
      expect(requirementMatchKey('REQ-BIL-002 Late fees')).toBe('id:REQ-BIL-002');
      expect(requirementMatchKey('REQ-BIL-002 Late fees ###')).toBe('id:REQ-BIL-002');
      expect(requirementMatchKey('REQ-BIL-002')).toBe('id:REQ-BIL-002');
      expect(requirementMatchKey('Late fees')).toBe('Late fees');
      expect(requirementMatchKey('REQ-BIL-002Late fees')).toBe('REQ-BIL-002Late fees');
      expect(requirementMatchKey('id:REQ-BIL-002')).toBe('id:REQ-BIL-002');
    });

    it('keys a scenario on its SCN token when it has one', () => {
      expect(scenarioMatchKey('SCN-BIL-002-1 Thirty days overdue')).toBe('id:SCN-BIL-002-1');
      expect(scenarioMatchKey('Thirty days overdue')).toBe('Thirty days overdue');
    });

    it('folds two ID headers with different titles to one key', () => {
      expect(foldRequirementName('REQ-BIL-002 Late fees')).toBe(foldRequirementName('REQ-BIL-002 Fees for late payment'));
      expect(foldRequirementName('Late Fees')).toBe(foldRequirementName('late  fees'));
      expect(foldRequirementName('REQ-BIL-002 Late fees')).not.toBe(foldRequirementName('REQ-BIL-003 Late fees'));
    });

    it('compares scenarios by SCN key and reports the original names', () => {
      const current = {
        headerLine: '### Requirement: REQ-XY-001 A',
        name: 'REQ-XY-001 A',
        raw: '### Requirement: REQ-XY-001 A\n\n#### Scenario: SCN-XY-001-1 Old title\n- x\n\n#### Scenario: Plain one\n- y',
      };
      const incoming = {
        headerLine: '### Requirement: REQ-XY-001 A',
        name: 'REQ-XY-001 A',
        raw: '### Requirement: REQ-XY-001 A\n\n#### Scenario: SCN-XY-001-1 New title\n- x',
      };
      const diff = diffScenarioNames(current, incoming);
      expect(diff.missing).toEqual(['Plain one']);
      expect(diff.added).toEqual([]);
    });
  });

  it('applies a MODIFIED block with the same ID and a new title, and the new title lands', async () => {
    const delta = [
      '## MODIFIED Requirements',
      block(
        'REQ-BIL-002 Fees for late payment',
        'The system SHALL apply a late fee to invoices overdue by 45 days.',
        'SCN-BIL-002-1 Forty-five days overdue'
      ),
    ].join('\n');
    const result = await build(delta);
    expect(result.counts.modified).toBe(1);
    expect(result.rebuilt).toContain('### Requirement: REQ-BIL-002 Fees for late payment');
    expect(result.rebuilt).not.toContain('REQ-BIL-002 Late fees');
    expect(result.rebuilt).toContain('overdue by 45 days');
    // Position is kept: the retitled block still sits between its neighbours.
    const order = ['REQ-BIL-001', 'REQ-BIL-002', 'Refund window'].map((h) => result.rebuilt.indexOf(h));
    expect(order).toEqual([...order].sort((a, b) => a - b));
  });

  it('passes the scenario-loss check when scenarios keep their SCN IDs and change their titles', async () => {
    const delta = [
      '## MODIFIED Requirements',
      block(
        'REQ-BIL-002 Late fees',
        'The system SHALL apply a late fee to invoices overdue by 30 days.',
        'SCN-BIL-002-1 An invoice is thirty days overdue'
      ),
    ].join('\n');
    const result = await build(delta);
    expect(result.rebuilt).toContain('#### Scenario: SCN-BIL-002-1 An invoice is thirty days overdue');
  });

  it('still refuses a MODIFIED block that drops a scenario with a different SCN ID', async () => {
    const delta = [
      '## MODIFIED Requirements',
      block(
        'REQ-BIL-002 Late fees',
        'The system SHALL apply a late fee to invoices overdue by 30 days.',
        'SCN-BIL-002-2 A different scenario'
      ),
    ].join('\n');
    await expect(build(delta)).rejects.toThrow(/scenario\(s\) not present in the modified block: "SCN-BIL-002-1 Thirty days overdue"/);
  });

  it('removes a requirement by ID when the REMOVED header has a different title', async () => {
    const delta = ['## REMOVED Requirements', '### Requirement: REQ-BIL-002 Some old wording', '**Reason**: gone', ''].join('\n');
    const result = await build(delta);
    expect(result.counts.removed).toBe(1);
    expect(result.rebuilt).not.toContain('REQ-BIL-002');
    expect(result.rebuilt).toContain('REQ-BIL-001');
  });

  it('treats a RENAMED pair whose FROM and TO share one ID as a retitle', async () => {
    const delta = [
      '## RENAMED Requirements',
      '- FROM: `### Requirement: REQ-BIL-002 Late fees`',
      '- TO: `### Requirement: REQ-BIL-002 Fees for late payment`',
      '',
    ].join('\n');
    const result = await build(delta);
    expect(result.counts.renamed).toBe(1);
    expect(result.rebuilt).toContain('### Requirement: REQ-BIL-002 Fees for late payment');
    expect(result.rebuilt).not.toContain('REQ-BIL-002 Late fees');
  });

  it('accepts a RENAMED same-ID pair together with a MODIFIED under that ID', async () => {
    const delta = [
      '## RENAMED Requirements',
      '- FROM: `### Requirement: REQ-BIL-002 Late fees`',
      '- TO: `### Requirement: REQ-BIL-002 Fees for late payment`',
      '',
      '## MODIFIED Requirements',
      block(
        'REQ-BIL-002 Fees for late payment',
        'The system SHALL apply a late fee to invoices overdue by 60 days.',
        'SCN-BIL-002-1 Sixty days overdue'
      ),
    ].join('\n');
    const result = await build(delta);
    expect(result.rebuilt).toContain('overdue by 60 days');
    expect(result.rebuilt.match(/REQ-BIL-002/g)).toHaveLength(1);
  });

  it('refuses a MODIFIED header whose ID is not in the main spec', async () => {
    const delta = [
      '## MODIFIED Requirements',
      block('REQ-BIL-009 Late fees', 'The system SHALL do a thing.', 'SCN-BIL-009-1 Thing'),
    ].join('\n');
    await expect(build(delta)).rejects.toThrow(/MODIFIED failed for header "### Requirement: REQ-BIL-009 Late fees" - not found/);
  });

  it('refuses an ADDED header whose ID is already in the main spec under another title', async () => {
    const delta = [
      '## ADDED Requirements',
      block('REQ-BIL-002 Something new', 'The system SHALL do a new thing.', 'SCN-BIL-002-9 New'),
    ].join('\n');
    await expect(build(delta)).rejects.toThrow(/ADDED failed for header "### Requirement: REQ-BIL-002 Something new" - already exists/);
  });

  it('errors when two main-spec headers resolve to the same ID', async () => {
    const mainSpec = MAIN_SPEC.replace('### Requirement: REQ-BIL-001 Invoice generation', '### Requirement: REQ-BIL-002 Invoice generation');
    const delta = [
      '## ADDED Requirements',
      block('REQ-BIL-003 Credit notes', 'The system SHALL issue a credit note on refund.', 'SCN-BIL-003-1 Refund'),
    ].join('\n');
    await expect(build(delta, mainSpec)).rejects.toThrow(/duplicate requirement ID REQ-BIL-002 in billing/);
  });

  it('keeps text matching for headers without an ID', async () => {
    const retitled = [
      '## MODIFIED Requirements',
      block('Refund period', 'The system SHALL accept a refund request within 30 days.', 'Request inside the window'),
    ].join('\n');
    await expect(build(retitled)).rejects.toThrow(/MODIFIED failed for header "### Requirement: Refund period" - not found/);

    const exact = [
      '## MODIFIED Requirements',
      block('Refund window', 'The system SHALL accept a refund request within 30 days.', 'Request inside the window'),
    ].join('\n');
    const result = await build(exact);
    expect(result.counts.modified).toBe(1);
    expect(result.rebuilt).toContain('within 30 days');
  });
});
