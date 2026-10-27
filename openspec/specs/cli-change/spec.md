# cli-change Specification

## Purpose
Define `openspec change` command behavior for showing, listing, and validating change proposals and deltas.

## Requirements
### Requirement: REQ-CC-001 Change Command

The system SHALL provide a `change` command with subcommands for displaying, listing, and validating change proposals.

#### Scenario: SCN-CC-001-1 Show change as JSON

- **WHEN** executing `openspec change show update-error --json`
- **THEN** parse the markdown change file
- **AND** extract change structure and deltas
- **AND** output valid JSON to stdout

#### Scenario: SCN-CC-001-2 List all changes

- **WHEN** executing `openspec change list`
- **THEN** scan the openspec/changes directory
- **AND** return list of all pending changes
- **AND** support JSON output with `--json` flag

#### Scenario: SCN-CC-001-3 Show only requirement changes

- **WHEN** executing `openspec change show update-error --requirements-only`
- **THEN** display only the requirement changes (ADDED/MODIFIED/REMOVED/RENAMED)
- **AND** exclude why and what changes sections

#### Scenario: SCN-CC-001-4 Validate change structure

- **WHEN** executing `openspec change validate update-error`
- **THEN** parse the change file
- **AND** validate against Zod schema
- **AND** ensure deltas are well-formed

### Requirement: REQ-CC-002 Legacy Compatibility

The system SHALL retain `openspec change list` as a deprecated alias for listing active changes and direct users to `openspec list`.

#### Scenario: SCN-CC-002-1 Legacy list command

- **WHEN** executing `openspec change list`
- **THEN** display the current list of active changes on stdout
- **AND** write `Warning: "openspec change list" is deprecated. Use "openspec list".` to stderr

#### Scenario: SCN-CC-002-2 Legacy list with JSON output

- **WHEN** executing `openspec change list --json`
- **THEN** output the active changes as a JSON array on stdout
- **AND** write the deprecation warning to stderr without corrupting the JSON output

#### Scenario: SCN-CC-002-3 Unsupported legacy list flag

- **WHEN** executing `openspec change list --all`
- **THEN** reject the unknown option with a nonzero exit code

#### Scenario: SCN-CC-002-4 Preferred list command

- **WHEN** executing `openspec list`
- **THEN** display the current list of active changes without a deprecation warning

### Requirement: REQ-CC-003 Interactive show selection

The change show command SHALL support interactive selection when no change name is provided.

#### Scenario: SCN-CC-003-1 Interactive change selection for show

- **WHEN** executing `openspec change show` without arguments
- **THEN** display an interactive list of available changes
- **AND** allow the user to select a change to show
- **AND** display the selected change content
- **AND** maintain all existing show options (--json, --deltas-only)

#### Scenario: SCN-CC-003-2 Non-interactive fallback keeps current behavior

- **GIVEN** stdin is not a TTY or `--no-interactive` is provided or environment variable `OPEN_SPEC_INTERACTIVE=0`
- **WHEN** executing `openspec change show` without a change name
- **THEN** do not prompt interactively
- **AND** print the existing hint including available change IDs
- **AND** set `process.exitCode = 1`

### Requirement: REQ-CC-004 Interactive validation selection

The change validate command SHALL support interactive selection when no change name is provided.

#### Scenario: SCN-CC-004-1 Interactive change selection for validation

- **WHEN** executing `openspec change validate` without arguments
- **THEN** display an interactive list of available changes
- **AND** allow the user to select a change to validate
- **AND** validate the selected change

#### Scenario: SCN-CC-004-2 Non-interactive fallback keeps current behavior

- **GIVEN** stdin is not a TTY or `--no-interactive` is provided or environment variable `OPEN_SPEC_INTERACTIVE=0`
- **WHEN** executing `openspec change validate` without a change name
- **THEN** do not prompt interactively
- **AND** print the existing hint including available change IDs
- **AND** set `process.exitCode = 1`

