## ADDED Requirements

### Requirement: REQ-ATP-010 IBM Bob tool identity

The `AI_TOOLS` entry for `bob` SHALL use the IBM Bob product name without changing its skill or command paths.

#### Scenario: SCN-ATP-010-1 IBM Bob paths and display name

- **WHEN** looking up the `bob` tool
- **THEN** `name` and `successLabel` SHALL be `IBM Bob`
- **AND** `skillsDir` SHALL be `.bob`
- **AND** generated commands SHALL remain under `.bob/commands/`
