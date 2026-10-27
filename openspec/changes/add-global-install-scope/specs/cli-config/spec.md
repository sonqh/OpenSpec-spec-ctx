## ADDED Requirements

### Requirement: REQ-CLC-013 Install scope configuration via profile flow
The config profile workflow SHALL allow users to configure install scope preference.

#### Scenario: SCN-CLC-013-1 Interactive profile includes install scope
- **WHEN** user runs `openspec config profile`
- **THEN** the interactive flow SHALL include install scope selection with values `global` and `project`
- **AND** the currently configured value SHALL be pre-selected

#### Scenario: SCN-CLC-013-2 Save install scope
- **WHEN** user confirms config profile changes
- **THEN** selected install scope SHALL be saved to global config

### Requirement: REQ-CLC-014 Install scope visibility in config output
The config command SHALL display install scope preference in human-readable output.

#### Scenario: SCN-CLC-014-1 Config list shows install scope
- **WHEN** user runs `openspec config list`
- **THEN** output SHALL include current install scope value
- **AND** indicate whether value is default or explicit
