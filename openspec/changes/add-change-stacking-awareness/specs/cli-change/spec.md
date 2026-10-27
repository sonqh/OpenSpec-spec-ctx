## ADDED Requirements

### Requirement: REQ-CC-005 Stack Planning Commands
The change CLI SHALL provide commands for dependency-aware sequencing of active changes.

#### Scenario: SCN-CC-005-1 Show dependency graph
- **WHEN** a user runs `openspec change graph`
- **THEN** the CLI SHALL display dependency relationships for active changes
- **AND** SHALL include a deterministic recommended order for execution

#### Scenario: SCN-CC-005-2 Show next unblocked changes
- **WHEN** a user runs `openspec change next`
- **THEN** the CLI SHALL list changes that are not blocked by unresolved dependencies
- **AND** SHALL use deterministic tie-breaking when multiple options are available

### Requirement: REQ-CC-006 Split Large Change Scaffolding
The change CLI SHALL support scaffolding child slices from an existing large change.

#### Scenario: SCN-CC-006-1 Split command scaffolds child changes
- **WHEN** a user runs `openspec change split <change-id>`
- **THEN** the CLI SHALL create child change directories with proposal/tasks stubs
- **AND** generated metadata SHALL include `parent` and dependency links back to the source change

#### Scenario: SCN-CC-006-2 Re-running split on an already-split change
- **WHEN** a user runs `openspec change split <change-id>` for a parent whose generated child directories already exist
- **THEN** the CLI SHALL fail with a deterministic, actionable error
- **AND** SHALL NOT mutate existing child change content unless an explicit overwrite mode is requested
