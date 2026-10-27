# cli-init Delta Specification

## ADDED Requirements

### Requirement: REQ-CI-019 Shared .agents target initialization

`openspec init` SHALL accept the shared `agents` target wherever tool IDs are selected, and SHALL treat it as a skills-only tool.

#### Scenario: SCN-CI-019-1 Non-interactive selection of the shared target

- **WHEN** the user runs `openspec init --tools agents`
- **THEN** OpenSpec SHALL generate skills for the `agents` target
- **AND** initialization SHALL NOT fail because `agents` has no registered command adapter

#### Scenario: SCN-CI-019-2 Shared agents target skips command-file generation

- **GIVEN** the configured delivery includes command generation
- **WHEN** the user selects the shared `agents` target during initialization
- **THEN** command-file generation SHALL be skipped because no `agents` adapter is registered
- **AND** `agents` SHALL be listed among the tools reported as having commands skipped
