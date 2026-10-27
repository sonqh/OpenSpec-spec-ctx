# cli-artifact-workflow Specification

## Purpose
Define artifact workflow CLI behavior (`status`, `instructions`, `templates`, and setup flows) for scaffolded and active changes.
## Requirements
### Requirement: REQ-CAW-001 Status Command

The system SHALL display artifact completion status for a change, including scaffolded (empty) changes.

> **Fixes bug**: Previously required `proposal.md` to exist via `getActiveChangeIds()`.

#### Scenario: SCN-CAW-001-1 Show status with all states

- **WHEN** user runs `openspec status --change <id>`
- **THEN** the system displays each artifact with status indicator:
  - `[x]` for completed artifacts
  - `[ ]` for ready artifacts
  - `[-]` for blocked artifacts (with missing dependencies listed)

#### Scenario: SCN-CAW-001-2 Status shows completion summary

- **WHEN** user runs `openspec status --change <id>`
- **THEN** output includes completion percentage and count (e.g., "2/4 artifacts complete")

#### Scenario: SCN-CAW-001-3 Status JSON output

- **WHEN** user runs `openspec status --change <id> --json`
- **THEN** the system outputs JSON with changeName, schemaName, isPlanningComplete, isComplete, and artifacts array
- **AND** `isPlanningComplete` is true only when every non-skipped planning artifact exists
- **AND** a skipped artifact counts as satisfied without being created
- **AND** `isComplete` remains a compatibility alias with the same value

#### Scenario: SCN-CAW-001-4 Status JSON includes apply requirements

- **WHEN** user runs `openspec status --change <id> --json`
- **THEN** the system outputs JSON with:
  - `changeName`, `schemaName`, `isPlanningComplete`, `isComplete`, `artifacts` array
  - `applyRequires`: array of artifact IDs needed for apply phase

#### Scenario: SCN-CAW-001-5 Status JSON exposes each artifact's dependency edges

- **WHEN** user runs `openspec status --change <id> --json`
- **THEN** every entry in the `artifacts` array includes `requires`: the array of artifact IDs it directly depends on
- **AND** `requires` is present regardless of the artifact's status, so a `done` artifact still reports its dependencies (letting agents compute the transitive required set from status alone)

#### Scenario: SCN-CAW-001-6 Status lists artifacts in dependency order, declaration order breaking ties

- **WHEN** user runs `openspec status --change <id>` (text or `--json`)
- **THEN** artifacts appear in dependency order, so a dependency is never listed after something that requires it
- **AND** artifacts that become ready at the same time keep the order the schema declares them, rather than being reordered alphabetically
- **AND** the first `ready` entry is therefore the artifact to write next
- **AND** a blocked artifact's `missingDeps` uses that same order

#### Scenario: SCN-CAW-001-7 Status on scaffolded change

- **WHEN** user runs `openspec status --change <id>` on a change with no artifacts
- **THEN** system displays all artifacts with their status
- **AND** root artifacts (no dependencies) show as ready `[ ]`
- **AND** dependent artifacts show as blocked `[-]`

#### Scenario: SCN-CAW-001-8 Missing change parameter

- **WHEN** user runs `openspec status` without `--change`
- **THEN** the system displays an error with list of available changes
- **AND** includes scaffolded changes (directories without proposal.md)

#### Scenario: SCN-CAW-001-9 Unknown change

- **WHEN** user runs `openspec status --change unknown-id`
- **AND** directory `openspec/changes/unknown-id/` does not exist
- **THEN** the system displays an error listing all available change directories

### Requirement: REQ-CAW-002 Next Artifact Discovery

The workflow SHALL use `openspec status` output to determine what can be created next, rather than a separate next-command surface.

#### Scenario: SCN-CAW-002-1 Discover next artifacts from status output

- **WHEN** a user needs to know which artifact to create next
- **THEN** `openspec status --change <id>` identifies ready artifacts with `[ ]`
- **AND** the first `[ ]` entry is the schema's recommended next artifact
- **AND** no dedicated "next command" is required to continue the workflow

### Requirement: REQ-CAW-003 Instructions Command

The system SHALL output enriched instructions for creating an artifact, including for scaffolded changes.

#### Scenario: SCN-CAW-003-1 Show enriched instructions

- **WHEN** user runs `openspec instructions <artifact> --change <id>`
- **THEN** the system outputs:
  - Artifact metadata (ID, output path, description)
  - Template content
  - Dependency status (done/missing)
  - Unlocked artifacts (what becomes available after completion)

#### Scenario: SCN-CAW-003-2 Instructions JSON output

- **WHEN** user runs `openspec instructions <artifact> --change <id> --json`
- **THEN** the system outputs JSON matching ArtifactInstructions interface

#### Scenario: SCN-CAW-003-3 Unknown artifact

- **WHEN** user runs `openspec instructions unknown-artifact --change <id>`
- **THEN** the system displays an error listing valid artifact IDs for the schema

#### Scenario: SCN-CAW-003-4 Artifact with unmet dependencies

- **WHEN** user requests instructions for a blocked artifact
- **THEN** the system displays instructions with a warning about missing dependencies

#### Scenario: SCN-CAW-003-5 Instructions on scaffolded change

- **WHEN** user runs `openspec instructions proposal --change <id>` on a scaffolded change
- **THEN** system outputs template and metadata for creating the proposal
- **AND** does not require any artifacts to already exist

### Requirement: REQ-CAW-004 Templates Command
The system SHALL show resolved template paths for all artifacts in a schema.

#### Scenario: SCN-CAW-004-1 List template paths with default schema
- **WHEN** user runs `openspec templates`
- **THEN** the system displays each artifact with its resolved template path using the default schema

#### Scenario: SCN-CAW-004-2 List template paths with custom schema
- **WHEN** user runs `openspec templates --schema tdd`
- **THEN** the system displays template paths for the specified schema

#### Scenario: SCN-CAW-004-3 Templates JSON output
- **WHEN** user runs `openspec templates --json`
- **THEN** the system outputs JSON mapping artifact IDs to template paths

#### Scenario: SCN-CAW-004-4 Template resolution source
- **WHEN** displaying template paths
- **THEN** the system indicates whether each template is from user override or package built-in

### Requirement: REQ-CAW-005 New Change Command
The system SHALL create new change directories with validation.

#### Scenario: SCN-CAW-005-1 Create valid change
- **WHEN** user runs `openspec new change add-feature`
- **THEN** the system creates `openspec/changes/add-feature/` directory

#### Scenario: SCN-CAW-005-2 Invalid change name
- **WHEN** user runs `openspec new change "Add Feature"` with invalid name
- **THEN** the system displays validation error with guidance

#### Scenario: SCN-CAW-005-3 Duplicate change name
- **WHEN** user runs `openspec new change existing-change` for an existing change
- **THEN** the system displays an error indicating the change already exists

#### Scenario: SCN-CAW-005-4 Create with description
- **WHEN** user runs `openspec new change add-feature --description "Add new feature"`
- **THEN** the system creates the change directory with description in README.md

### Requirement: REQ-CAW-006 Schema Selection
The system SHALL support custom schema selection for workflow commands.

#### Scenario: SCN-CAW-006-1 Default schema
- **WHEN** user runs workflow commands without `--schema`
- **THEN** the system uses the "spec-driven" schema

#### Scenario: SCN-CAW-006-2 Custom schema
- **WHEN** user runs `openspec status --change <id> --schema tdd`
- **THEN** the system uses the specified schema for artifact graph

#### Scenario: SCN-CAW-006-3 Unknown schema
- **WHEN** user specifies an unknown schema
- **THEN** the system displays an error listing available schemas

### Requirement: REQ-CAW-007 Output Formatting
The system SHALL provide consistent output formatting.

#### Scenario: SCN-CAW-007-1 Color output
- **WHEN** terminal supports colors
- **THEN** status indicators use colors: green (done), yellow (ready), red (blocked)

#### Scenario: SCN-CAW-007-2 No color output
- **WHEN** `--no-color` flag is used or NO_COLOR environment variable is set
- **THEN** output uses text-only indicators without ANSI colors

#### Scenario: SCN-CAW-007-3 Progress indication
- **WHEN** loading change state takes time
- **THEN** the system displays a spinner during loading

### Requirement: REQ-CAW-008 Schema Apply Block

The system SHALL support an `apply` block in schema definitions that controls when and how implementation begins.

#### Scenario: SCN-CAW-008-1 Schema with apply block

- **WHEN** a schema defines an `apply` block
- **THEN** the system uses `apply.requires` to determine which artifacts must exist before apply
- **AND** uses `apply.tracks` to identify the file for progress tracking (or null if none)
- **AND** uses `apply.instruction` for guidance shown to the agent

#### Scenario: SCN-CAW-008-2 Schema without apply block

- **WHEN** a schema has no `apply` block
- **THEN** the system requires all non-skipped artifacts to exist before apply is available
- **AND** once those artifacts exist, uses default instruction: "All required artifacts complete. Proceed with implementation."

### Requirement: REQ-CAW-009 Apply Instructions Command

The system SHALL generate schema-aware apply instructions via `openspec instructions apply`.

#### Scenario: SCN-CAW-009-1 Generate apply instructions

- **WHEN** user runs `openspec instructions apply --change <id>`
- **AND** all required artifacts (per schema's `apply.requires`) exist
- **THEN** the system outputs:
  - `contextFiles` mapping artifact IDs to arrays of concrete paths for all existing artifacts
  - Schema-specific instruction text
  - Progress tracking file path (if `apply.tracks` is set)

#### Scenario: SCN-CAW-009-2 Apply blocked by missing artifacts

- **WHEN** user runs `openspec instructions apply --change <id>`
- **AND** required artifacts are missing
- **THEN** the system indicates apply is blocked
- **AND** lists which artifacts must be created first

#### Scenario: SCN-CAW-009-3 Apply instructions JSON output

- **WHEN** user runs `openspec instructions apply --change <id> --json`
- **THEN** the system outputs JSON with:
  - `contextFiles`: object mapping artifact IDs to arrays of concrete paths for existing artifacts
  - `instruction`: the apply instruction text
  - `tracks`: path to progress file or null
  - `applyRequires`: list of required artifact IDs

### Requirement: REQ-CAW-010 Tool selection flag

The `artifact-experimental-setup` command SHALL accept a `--tool <tool-id>` flag to specify the target AI tool.

#### Scenario: SCN-CAW-010-1 Specify tool via flag

- **WHEN** user runs `openspec artifact-experimental-setup --tool cursor`
- **THEN** skill files are generated in `.cursor/skills/`
- **AND** command files are generated using Cursor's frontmatter format

#### Scenario: SCN-CAW-010-2 Missing tool flag

- **WHEN** user runs `openspec artifact-experimental-setup` without `--tool`
- **THEN** the system displays an error requiring the `--tool` flag
- **AND** lists valid tool IDs in the error message

#### Scenario: SCN-CAW-010-3 Unknown tool ID

- **WHEN** user runs `openspec artifact-experimental-setup --tool unknown-tool`
- **AND** the tool ID is not in `AI_TOOLS`
- **THEN** the system displays an error listing valid tool IDs

#### Scenario: SCN-CAW-010-4 Tool without skillsDir

- **WHEN** user specifies a tool that has no `skillsDir` configured
- **THEN** the system displays an error indicating skill generation is not supported for that tool

#### Scenario: SCN-CAW-010-5 Tool without command adapter

- **WHEN** user specifies a tool that has `skillsDir` but no command adapter registered
- **THEN** skill files are generated successfully
- **AND** command generation is skipped with informational message

### Requirement: REQ-CAW-011 Output messaging

The `openspec init` command SHALL display clear output about what was generated.

#### Scenario: SCN-CAW-011-1 Show target tool in output

- **WHEN** initialization creates or refreshes a tool configuration
- **THEN** output includes the tool name under `Created:` or `Refreshed:`, respectively

#### Scenario: SCN-CAW-011-2 Show generated paths

- **WHEN** initialization generates skills or commands
- **THEN** output summarizes their counts and destination directories
- **AND** only reports the types enabled by the selected profile and delivery mode

#### Scenario: SCN-CAW-011-3 Show skipped commands message

- **WHEN** initialization skips command generation due to a missing adapter
- **THEN** output includes message: "Commands skipped for: <tools> (no adapter)"
- **AND** `<tools>` lists the skipped tool IDs separated by commas

### Requirement: REQ-CAW-012 Status JSON provides planning context
The status command SHALL provide machine-readable planning context for changes.

#### Scenario: SCN-CAW-012-1 Reporting next steps
- **WHEN** a user runs `openspec status --change <id> --json`
- **THEN** the output SHALL include next step guidance for agents
- **AND** the guidance SHALL use plain action language

### Requirement: REQ-CAW-013 Status JSON action context
The status command SHALL expose action context that lets agents act without hardcoded filesystem assumptions.

#### Scenario: SCN-CAW-013-1 Repo-local action context
- **GIVEN** the change is repo-local
- **WHEN** a user runs `openspec status --change <id> --json`
- **THEN** status JSON SHALL preserve existing artifact status behavior
- **AND** it SHALL report a repo-local planning home for agents that use action context

### Requirement: REQ-CAW-014 Instructions use resolved planning paths
Artifact and apply instructions SHALL use resolved planning paths rather than hardcoded repo-local change paths.

#### Scenario: SCN-CAW-014-1 Repo-local artifact instructions
- **GIVEN** the change is repo-local
- **WHEN** a user runs `openspec instructions <artifact> --change <id> --json`
- **THEN** instruction output SHALL preserve existing repo-local paths

### Requirement: REQ-CAW-015 Workflow skills use CLI artifact context
Generated workflow skills SHALL use OpenSpec CLI output as the source of truth for artifact locations.

#### Scenario: SCN-CAW-015-1 Skills inspect status before artifact work
- **WHEN** a generated workflow skill needs to inspect or create artifacts for a change
- **THEN** it SHALL instruct the agent to run `openspec status --change <id> --json`
- **AND** it SHALL use returned planning context and artifact paths rather than assuming a repo-local change path

#### Scenario: SCN-CAW-015-2 Skills use instructions before writing artifacts
- **WHEN** a generated workflow skill is about to create or update an artifact
- **THEN** it SHALL instruct the agent to run `openspec instructions <artifact> --change <id> --json`
- **AND** it SHALL write to the resolved artifact path returned by the command
