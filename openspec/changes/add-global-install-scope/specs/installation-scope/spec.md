## Purpose

Define the install scope model for OpenSpec-generated skills and commands, including scope preference, effective scope resolution, and fallback/error semantics.

## ADDED Requirements

### Requirement: REQ-IS-001 Install scope preference model
The system SHALL support a user-level install scope preference with values `global` and `project`.

#### Scenario: SCN-IS-001-1 Default install scope
- **WHEN** install scope is not explicitly configured
- **THEN** the system SHALL resolve a migration-aware default:
- **AND** use `global` for newly created configs
- **AND** use `project` for legacy schema-evolved configs until explicit migration

#### Scenario: SCN-IS-001-2 Explicit install scope
- **WHEN** user configures install scope to `project`
- **THEN** generation and update flows SHALL use `project` as the preferred scope

### Requirement: REQ-IS-002 Effective scope resolution by tool surface
The system SHALL compute effective scope per tool surface (skills, commands) based on preferred scope and tool capability support.

#### Scenario: SCN-IS-002-1 Preferred scope is supported
- **WHEN** preferred scope is supported for a tool surface
- **THEN** the system SHALL use that scope as the effective scope

#### Scenario: SCN-IS-002-2 Preferred scope is unsupported but alternate is supported
- **WHEN** preferred scope is not supported for a tool surface
- **AND** the alternate scope is supported
- **THEN** the system SHALL use the alternate scope as effective scope
- **AND** SHALL record a fallback note for user-facing output

#### Scenario: SCN-IS-002-3 No supported scope
- **WHEN** neither `global` nor `project` is supported for a tool surface
- **THEN** the command SHALL fail before writing files
- **AND** SHALL display actionable remediation

### Requirement: REQ-IS-003 Effective scope reporting
The system SHALL report effective scope decisions in command output when they differ from the preferred scope.

#### Scenario: SCN-IS-003-1 Fallback reporting
- **WHEN** fallback resolution occurs for any selected/configured tool surface
- **THEN** init/update summaries SHALL include effective scope notes per affected tool

### Requirement: REQ-IS-004 Cross-platform path behavior
Install scope resolution SHALL produce platform-correct target paths.

#### Scenario: SCN-IS-004-1 Global scope path on Windows
- **WHEN** effective scope is `global`
- **AND** the command runs on Windows
- **THEN** resolved target paths SHALL use Windows path conventions and separators
- **AND** SHALL NOT reuse POSIX-style home-relative defaults directly

### Requirement: REQ-IS-005 Cleanup safety for scope transitions
Scope transitions SHALL update new targets first and clean old managed targets safely.

#### Scenario: SCN-IS-005-1 Automatic cleanup for managed files on scope change
- **WHEN** update or init applies a scope transition for a configured tool/surface
- **THEN** the system SHALL write new artifacts in the new effective scope before cleanup
- **AND** SHALL automatically remove only OpenSpec-managed files in the previous effective scope

#### Scenario: SCN-IS-005-2 Cleanup scope boundaries
- **WHEN** cleanup runs after a scope transition
- **THEN** the system SHALL leave non-managed files untouched
- **AND** SHALL limit removal scope to the affected tool/workflow-managed paths

#### Scenario: SCN-IS-005-3 Cleanup failure after successful writes
- **WHEN** new artifacts were written successfully in the new scope
- **AND** cleanup of old managed targets fails
- **THEN** the command SHALL report failure with leftover cleanup paths
- **AND** SHALL NOT rollback successfully written new-scope artifacts
