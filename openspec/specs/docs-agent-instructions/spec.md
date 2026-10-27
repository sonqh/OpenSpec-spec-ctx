# docs-agent-instructions Specification

## Purpose
Define authoring standards for generated agent instruction docs so templates, examples, and validation checklists are clear and copy-ready.

## Requirements
### Requirement: REQ-DAI-001 Quick Reference Placement
The AI instructions SHALL begin with a quick-reference section that surfaces required file structures, templates, and formatting rules before any narrative guidance.

#### Scenario: SCN-DAI-001-1 Loading templates at the top
- **WHEN** `openspec/AGENTS.md` is regenerated or updated
- **THEN** the first substantive section after the title SHALL provide copy-ready headings for `proposal.md`, `tasks.md`, spec deltas, and scenario formatting
- **AND** link each template to the corresponding workflow step for deeper reading

### Requirement: REQ-DAI-002 Embedded Templates and Examples
`openspec/AGENTS.md` SHALL include complete copy/paste templates and inline examples exactly where agents make corresponding edits.

#### Scenario: SCN-DAI-002-1 Providing file templates
- **WHEN** authors reach the workflow guidance for drafting proposals and deltas
- **THEN** provide fenced Markdown templates that match the required structure (`## Why`, `## ADDED Requirements`, `#### Scenario:` etc.)
- **AND** accompany each template with a brief example showing correct header usage and scenario bullets

### Requirement: REQ-DAI-003 Pre-validation Checklist
`openspec/AGENTS.md` SHALL offer a concise pre-validation checklist that highlights common formatting mistakes before running `openspec validate`.

#### Scenario: SCN-DAI-003-1 Highlighting common validation failures
- **WHEN** a reader reaches the validation guidance
- **THEN** present a checklist reminding them to verify requirement headers, scenario formatting, and delta sections
- **AND** include reminders about at least `#### Scenario:` usage and descriptive requirement text before scenarios

### Requirement: REQ-DAI-004 Progressive Disclosure of Workflow Guidance
The documentation SHALL separate beginner essentials from advanced topics so newcomers can focus on core steps without losing access to advanced workflows.

#### Scenario: SCN-DAI-004-1 Organizing beginner and advanced sections
- **WHEN** reorganizing `openspec/AGENTS.md`
- **THEN** keep an introductory section limited to the minimum steps (scaffold, draft, validate, request review)
- **AND** move advanced topics (multi-capability changes, archiving details, tooling deep dives) into clearly labeled later sections
- **AND** provide anchor links from the quick-reference to those advanced sections

### Requirement: REQ-DAI-005 Behavior-First Spec Authoring Guidance
Agent instruction docs SHALL explicitly teach that specs capture observable behavior contracts, while implementation details belong in design/tasks.

#### Scenario: SCN-DAI-005-1 Distinguishing spec vs implementation content
- **WHEN** `openspec/AGENTS.md` explains how to write `spec.md`
- **THEN** it SHALL instruct agents to include externally verifiable behavior, inputs/outputs, errors, and constraints
- **AND** it SHALL instruct agents to avoid internal library/framework choices and class/function-level implementation details in specs

#### Scenario: SCN-DAI-005-2 Routing detail to the right artifact
- **WHEN** implementation detail is necessary
- **THEN** instructions SHALL direct the agent to place it in `design.md` or `tasks.md`, not in the behavioral requirements section of `spec.md`

### Requirement: REQ-DAI-006 Lightweight-by-Default Guidance
Agent instruction docs SHALL promote minimal ceremony and proportional rigor for spec authoring.

#### Scenario: SCN-DAI-006-1 Applying progressive rigor
- **WHEN** an agent drafts specs for routine changes
- **THEN** instructions SHALL favor concise, lightweight requirements and scenarios
- **AND** reserve deeper, fuller specification style for higher-risk changes (such as API breaks, migrations, cross-team, or security/privacy sensitive work)

#### Scenario: SCN-DAI-006-2 Time-to-clarity optimization
- **WHEN** guidance discusses drafting workflow
- **THEN** it SHALL emphasize producing the smallest spec that is still testable and reviewable
