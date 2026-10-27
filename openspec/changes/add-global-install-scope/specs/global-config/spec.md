## ADDED Requirements

### Requirement: REQ-GC-007 Install scope field in global config
The global config schema SHALL include install scope preference.

#### Scenario: SCN-GC-007-1 Config shape supports install scope
- **WHEN** reading or writing global config
- **THEN** config SHALL support `installScope` with allowed values `global` and `project`

#### Scenario: SCN-GC-007-2 Schema evolution default
- **WHEN** loading legacy config without `installScope`
- **THEN** the system SHALL preserve schema compatibility without mutating the file
- **AND** effective install scope SHALL resolve to `project` until user explicitly sets `installScope`
- **AND** preserve all other existing fields

#### Scenario: SCN-GC-007-3 New config default
- **WHEN** creating a new global config
- **THEN** the system SHALL persist `installScope: global` by default
- **AND** users MAY switch to `project` explicitly

#### Scenario: SCN-GC-007-4 Invalid install scope value
- **WHEN** config validation receives an invalid install scope value
- **THEN** the value SHALL be rejected
- **AND** the system SHALL preserve the existing valid configuration
