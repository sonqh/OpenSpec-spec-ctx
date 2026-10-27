# cli-show Specification

## Purpose
Define top-level `openspec show` behavior for interactive and direct display of change and spec content.

## Requirements
### Requirement: REQ-CS-001 Top-level show command

The CLI SHALL provide a top-level `show` command for displaying changes and specs with intelligent selection.

#### Scenario: SCN-CS-001-1 Interactive show selection

- **WHEN** executing `openspec show` without arguments
- **THEN** prompt user to select type (change or spec)
- **AND** display list of available items for selected type
- **AND** show the selected item's content

#### Scenario: SCN-CS-001-2 Non-interactive environments do not prompt

- **GIVEN** stdin is not a TTY or `--no-interactive` is provided or environment variable `OPEN_SPEC_INTERACTIVE=0`
- **WHEN** executing `openspec show` without arguments
- **THEN** do not prompt
- **AND** print a helpful hint with examples for `openspec show <item>` or `openspec change/spec show`
- **AND** exit with code 1

#### Scenario: SCN-CS-001-3 Direct item display

- **WHEN** executing `openspec show <item-name>`
- **THEN** automatically detect if item is a change or spec
- **AND** display the item's content
- **AND** use appropriate formatting based on item type

#### Scenario: SCN-CS-001-4 Type detection and ambiguity handling

- **WHEN** executing `openspec show <item-name>`
- **THEN** if `<item-name>` uniquely matches a change or a spec, show that item
- **AND** if it matches both, print an ambiguity error and suggest `--type change|spec` or using `openspec change show`/`openspec spec show`
- **AND** if it matches neither, print not-found with nearest-match suggestions

#### Scenario: SCN-CS-001-5 Explicit type override

- **WHEN** executing `openspec show --type change <item>`
- **THEN** treat `<item>` as a change ID and show it (skipping auto-detection)

- **WHEN** executing `openspec show --type spec <item>`
- **THEN** treat `<item>` as a spec ID and show it (skipping auto-detection)

### Requirement: REQ-CS-002 Output format options

The show command SHALL support various output formats consistent with existing commands.

#### Scenario: SCN-CS-002-1 JSON output

- **WHEN** executing `openspec show <item> --json`
- **THEN** output the item in JSON format
- **AND** include parsed metadata and structure
- **AND** maintain format consistency with existing change/spec show commands

#### Scenario: SCN-CS-002-2 Flag scoping and delegation

- **WHEN** showing a change or a spec via the top-level command
- **THEN** accept common flags such as `--json`
- **AND** pass through type-specific flags to the corresponding implementation
  - Change-only flags: `--deltas-only` (alias `--requirements-only` deprecated)
  - Spec-only flags: `--requirements`, `--no-scenarios`, `-r/--requirement`
- **AND** ignore irrelevant flags for the detected type with a warning

### Requirement: REQ-CS-003 Interactivity controls

- The CLI SHALL respect `--no-interactive` to disable prompts.
- The CLI SHALL respect `OPEN_SPEC_INTERACTIVE=0` to disable prompts globally.
- Interactive prompts SHALL only be shown when stdin is a TTY and interactivity is not disabled.

#### Scenario: SCN-CS-003-1 Change-specific options

- **WHEN** showing a change with `openspec show <change-name> --deltas-only`
- **THEN** display only the deltas in JSON format
- **AND** maintain compatibility with existing change show options

#### Scenario: SCN-CS-003-2 Spec-specific options

- **WHEN** showing a spec with `openspec show <spec-id> --requirements`
- **THEN** display only requirements in JSON format
- **AND** support other spec options (--no-scenarios, -r)
- **AND** maintain compatibility with existing spec show options

