# config-loading Specification

## Purpose
Define how `openspec/config.yaml` is discovered, parsed, validated, and exposed to callers with safe fallbacks.

## Requirements
### Requirement: REQ-COL-001 Load project config from openspec/config.yaml

The system SHALL read and parse the project configuration file located at `openspec/config.yaml` relative to the project root.

#### Scenario: SCN-COL-001-1 Valid config file exists
- **WHEN** `openspec/config.yaml` exists with valid YAML content
- **THEN** system parses the file and returns a ProjectConfig object

#### Scenario: SCN-COL-001-2 Config file does not exist
- **WHEN** `openspec/config.yaml` does not exist
- **THEN** system returns null without error

#### Scenario: SCN-COL-001-3 Config file has invalid YAML syntax
- **WHEN** `openspec/config.yaml` contains malformed YAML
- **THEN** system logs a warning message and returns null

#### Scenario: SCN-COL-001-4 Config file has valid YAML but invalid schema
- **WHEN** `openspec/config.yaml` contains valid YAML that fails Zod schema validation
- **THEN** system logs a warning message with validation details and returns null

### Requirement: REQ-COL-002 Support .yml file extension alias

The system SHALL accept both `.yaml` and `.yml` file extensions for the config file.

#### Scenario: SCN-COL-002-1 Config file uses .yml extension
- **WHEN** `openspec/config.yml` exists and `openspec/config.yaml` does not exist
- **THEN** system reads from `openspec/config.yml`

#### Scenario: SCN-COL-002-2 Both .yaml and .yml exist
- **WHEN** both `openspec/config.yaml` and `openspec/config.yml` exist
- **THEN** system prefers `openspec/config.yaml`

### Requirement: REQ-COL-003 Use resilient field-by-field parsing

The system SHALL parse each config field independently, collecting valid fields and warning about invalid ones without rejecting the entire config.

#### Scenario: SCN-COL-003-1 Schema field is valid
- **WHEN** config contains `schema: "spec-driven"`
- **THEN** schema field is included in returned config

#### Scenario: SCN-COL-003-2 Schema field is missing
- **WHEN** config lacks the `schema` field
- **THEN** no warning is logged (field is optional at parse level)

#### Scenario: SCN-COL-003-3 Schema field is empty string
- **WHEN** config contains `schema: ""`
- **THEN** warning is logged and schema field is not included in returned config

#### Scenario: SCN-COL-003-4 Schema field is invalid type
- **WHEN** config contains `schema: 123` (number instead of string)
- **THEN** warning is logged and schema field is not included in returned config

#### Scenario: SCN-COL-003-5 Context field is valid
- **WHEN** config contains `context: "Tech stack: TypeScript"`
- **THEN** context field is included in returned config

#### Scenario: SCN-COL-003-6 Context field is invalid type
- **WHEN** config contains `context: 123` (number instead of string)
- **THEN** warning is logged and context field is not included in returned config

#### Scenario: SCN-COL-003-7 Rules field has valid structure
- **WHEN** config contains `rules: { proposal: ["Rule 1"], specs: ["Rule 2"] }`
- **THEN** rules field is included in returned config with valid rules

#### Scenario: SCN-COL-003-8 Rules field has non-array value for artifact
- **WHEN** config contains `rules: { proposal: "not an array", specs: ["Valid"] }`
- **THEN** warning is logged for proposal, but specs rules are still included in returned config

#### Scenario: SCN-COL-003-9 Rules array contains non-string elements
- **WHEN** config contains `rules: { proposal: ["Valid rule", 123, ""] }`
- **THEN** only "Valid rule" is included, warning logged about invalid elements

#### Scenario: SCN-COL-003-10 Mix of valid and invalid fields
- **WHEN** config contains valid schema, invalid context type, valid rules
- **THEN** config is returned with schema and rules fields, warning logged about context

### Requirement: REQ-COL-004 Enforce context size limit

The system SHALL reject context fields exceeding 50KB and log a warning.

#### Scenario: SCN-COL-004-1 Context within size limit
- **WHEN** config contains context of 1KB
- **THEN** context is included in returned config

#### Scenario: SCN-COL-004-2 Context at size limit
- **WHEN** config contains context of exactly 50KB
- **THEN** context is included in returned config

#### Scenario: SCN-COL-004-3 Context exceeds size limit
- **WHEN** config contains context of 51KB
- **THEN** warning is logged with size and limit, context field is not included in returned config

### Requirement: REQ-COL-005 Defer artifact ID validation to instruction loading

The system SHALL NOT validate artifact IDs in rules during config load time. Validation happens during instruction loading when schema is known.

#### Scenario: SCN-COL-005-1 Config with rules is loaded
- **WHEN** config contains `rules: { unknownartifact: [...] }`
- **THEN** config is loaded successfully without validation errors

#### Scenario: SCN-COL-005-2 Validation happens at instruction load time
- **WHEN** instructions are loaded for any artifact and config has unknown artifact IDs in rules
- **THEN** warnings are emitted about unknown artifact IDs (see rules-injection spec for details)

### Requirement: REQ-COL-006 Gracefully handle config errors without halting

The system SHALL continue operation with default values when config loading or parsing fails.

#### Scenario: SCN-COL-006-1 Config parse failure during command execution
- **WHEN** config file has syntax errors and user runs `openspec new change`
- **THEN** command executes using default schema "spec-driven"

#### Scenario: SCN-COL-006-2 Warning is visible to user
- **WHEN** config loading fails
- **THEN** system outputs warning message to stderr with details about the failure

