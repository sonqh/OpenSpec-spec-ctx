# schema-resolution Specification

## Purpose
Define project-local schema resolution behavior, including precedence order (project-local, then user override, then package built-in) and backward-compatible fallback when `projectRoot` is not provided.
## Requirements
### Requirement: REQ-SR-001 Project-local schema resolution

The system SHALL resolve schemas from the project-local directory (`./openspec/schemas/<name>/`) with highest priority when a `projectRoot` is provided.

#### Scenario: SCN-SR-001-1 Project-local schema takes precedence over user override
- **WHEN** a schema named "my-workflow" exists at `./openspec/schemas/my-workflow/schema.yaml`
- **AND** a schema named "my-workflow" exists at `~/.local/share/openspec/schemas/my-workflow/schema.yaml`
- **AND** `getSchemaDir("my-workflow", projectRoot)` is called
- **THEN** the system SHALL return the project-local path

#### Scenario: SCN-SR-001-2 Project-local schema takes precedence over package built-in
- **WHEN** a schema named "spec-driven" exists at `./openspec/schemas/spec-driven/schema.yaml`
- **AND** "spec-driven" is a package built-in schema
- **AND** `getSchemaDir("spec-driven", projectRoot)` is called
- **THEN** the system SHALL return the project-local path

#### Scenario: SCN-SR-001-3 Falls back to user override when no project-local schema
- **WHEN** no schema named "my-workflow" exists at `./openspec/schemas/my-workflow/`
- **AND** a schema named "my-workflow" exists at `~/.local/share/openspec/schemas/my-workflow/schema.yaml`
- **AND** `getSchemaDir("my-workflow", projectRoot)` is called
- **THEN** the system SHALL return the user override path

#### Scenario: SCN-SR-001-4 Falls back to package built-in when no project-local or user schema
- **WHEN** no schema named "spec-driven" exists at `./openspec/schemas/spec-driven/`
- **AND** no schema named "spec-driven" exists at `~/.local/share/openspec/schemas/spec-driven/`
- **AND** "spec-driven" is a package built-in schema
- **AND** `getSchemaDir("spec-driven", projectRoot)` is called
- **THEN** the system SHALL return the package built-in path

#### Scenario: SCN-SR-001-5 Backward compatibility when projectRoot not provided
- **WHEN** `getSchemaDir("my-workflow")` is called without a `projectRoot` parameter
- **THEN** the system SHALL only check user override and package built-in locations
- **AND** the system SHALL NOT check project-local location

### Requirement: REQ-SR-002 Project schemas directory helper

The system SHALL provide a `getProjectSchemasDir(projectRoot)` function that returns the project-local schemas directory path.

#### Scenario: SCN-SR-002-1 Returns correct path
- **WHEN** `getProjectSchemasDir("/path/to/project")` is called
- **THEN** the system SHALL return `/path/to/project/openspec/schemas`

### Requirement: REQ-SR-003 List schemas includes project-local

The system SHALL include project-local schemas when listing available schemas if `projectRoot` is provided.

#### Scenario: SCN-SR-003-1 Project-local schemas appear in list
- **WHEN** a schema named "team-flow" exists at `./openspec/schemas/team-flow/schema.yaml`
- **AND** `listSchemas(projectRoot)` is called
- **THEN** the returned list SHALL include "team-flow"

#### Scenario: SCN-SR-003-2 Project-local schema shadows same-named user schema in list
- **WHEN** a schema named "custom" exists at both project-local and user override locations
- **AND** `listSchemas(projectRoot)` is called
- **THEN** the returned list SHALL include "custom" exactly once

#### Scenario: SCN-SR-003-3 Backward compatibility for listSchemas
- **WHEN** `listSchemas()` is called without a `projectRoot` parameter
- **THEN** the system SHALL only include user override and package built-in schemas

### Requirement: REQ-SR-004 Schema info includes project source

The system SHALL indicate `source: 'project'` for project-local schemas in `listSchemasWithInfo()` results.

#### Scenario: SCN-SR-004-1 Project-local schema shows project source
- **WHEN** a schema named "team-flow" exists at `./openspec/schemas/team-flow/schema.yaml`
- **AND** `listSchemasWithInfo(projectRoot)` is called
- **THEN** the schema info for "team-flow" SHALL have `source: 'project'`

#### Scenario: SCN-SR-004-2 User override schema shows user source
- **WHEN** a schema named "my-custom" exists only at `~/.local/share/openspec/schemas/my-custom/`
- **AND** `listSchemasWithInfo(projectRoot)` is called
- **THEN** the schema info for "my-custom" SHALL have `source: 'user'`

#### Scenario: SCN-SR-004-3 Package built-in schema shows package source
- **WHEN** "spec-driven" exists only as a package built-in
- **AND** `listSchemasWithInfo(projectRoot)` is called
- **THEN** the schema info for "spec-driven" SHALL have `source: 'package'`

### Requirement: REQ-SR-005 Schemas command shows source

The `openspec schemas` command SHALL display the source of each schema.

#### Scenario: SCN-SR-005-1 Display format includes source
- **WHEN** user runs `openspec schemas`
- **THEN** the output SHALL show each schema with its source label (project, user, or package)

### Requirement: REQ-SR-006 Use config schema as default for new changes

The system SHALL use the schema field from `openspec/config.yaml` as the default when creating new changes without an explicit `--schema` flag, and SHALL fall back to the planning-home default when the config supplies no schema.

#### Scenario: SCN-SR-006-1 Create change without --schema flag and config exists
- **WHEN** user runs `openspec new change foo` and config contains `schema: "tdd"`
- **THEN** system creates change with schema "tdd", even when a planning-home default applies

#### Scenario: SCN-SR-006-2 Create change without --schema flag and no config
- **WHEN** user runs `openspec new change foo`, no config file exists, and no planning-home default applies
- **THEN** system creates change with default schema "spec-driven"

#### Scenario: SCN-SR-006-3 Create change with explicit --schema flag
- **WHEN** user runs `openspec new change foo --schema custom` and config contains `schema: "tdd"`
- **THEN** system creates change with schema "custom" (CLI flag overrides config)

### Requirement: REQ-SR-007 Resolve schema with updated precedence order

The system SHALL resolve the schema for a change using the following precedence order: CLI flag, change metadata, project config, planning-home default, hardcoded default.

#### Scenario: SCN-SR-007-1 CLI flag is provided
- **WHEN** user runs command with `--schema custom`
- **THEN** system uses "custom" regardless of change metadata or config

#### Scenario: SCN-SR-007-2 Change metadata specifies schema
- **WHEN** change has `.openspec.yaml` with `schema: bound` and config has `schema: tdd`
- **THEN** system uses "bound" from change metadata

#### Scenario: SCN-SR-007-3 Only project config specifies schema
- **WHEN** no CLI flag or change metadata exists, but config has `schema: tdd`
- **THEN** system uses "tdd" from project config, even when a planning-home default applies

#### Scenario: SCN-SR-007-4 No schema specified anywhere
- **WHEN** no CLI flag, change metadata, project config, or planning-home default
- **THEN** system uses hardcoded default "spec-driven"

### Requirement: REQ-SR-008 Support project-local schema names in config

The system SHALL allow the config schema field to reference project-local schemas defined in `openspec/schemas/`.

#### Scenario: SCN-SR-008-1 Config references project-local schema
- **WHEN** config contains `schema: "my-workflow"` and `openspec/schemas/my-workflow/` exists
- **THEN** system resolves to the project-local schema

#### Scenario: SCN-SR-008-2 Config references non-existent schema
- **WHEN** config contains `schema: "nonexistent"` and that schema does not exist
- **THEN** system shows error when attempting to load the schema with fuzzy match suggestions and list of all valid schemas

### Requirement: REQ-SR-009 Provide helpful error message for invalid schema

The system SHALL display schema error with fuzzy match suggestions, list of available schemas, and fix instructions.

#### Scenario: SCN-SR-009-1 Schema name with typo (close match)
- **WHEN** config contains `schema: "spce-driven"` (typo)
- **THEN** error message includes "Did you mean: spec-driven (built-in)" as suggestion

#### Scenario: SCN-SR-009-2 Schema name with no close matches
- **WHEN** config contains `schema: "completely-wrong"`
- **THEN** error message shows list of all available built-in and project-local schemas

#### Scenario: SCN-SR-009-3 Error message includes fix instructions
- **WHEN** config references invalid schema
- **THEN** error message includes "Fix: Edit openspec/config.yaml and change 'schema: X' to a valid schema name"

#### Scenario: SCN-SR-009-4 Error distinguishes built-in vs project-local schemas
- **WHEN** error lists available schemas
- **THEN** output clearly labels each as "built-in" or "project-local"

### Requirement: REQ-SR-010 Maintain backwards compatibility for existing changes

The system SHALL continue to work with existing changes that do not have project config.

#### Scenario: SCN-SR-010-1 Existing change without config
- **WHEN** change was created before config feature and no config file exists
- **THEN** system resolves schema using existing logic (change metadata or hardcoded default)

#### Scenario: SCN-SR-010-2 Existing change with config added later
- **WHEN** config file is added to project with existing changes
- **THEN** existing changes continue to use their bound schema from `.openspec.yaml`
