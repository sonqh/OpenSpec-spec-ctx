## MODIFIED Requirements

### Requirement: REQ-ATP-001 AIToolOption skillsDir field
The `AIToolOption` interface SHALL include scope support metadata in addition to path metadata.

#### Scenario: SCN-ATP-001-3 Scope support metadata present
- **WHEN** a tool entry is defined in `AI_TOOLS`
- **THEN** it MAY declare supported install scopes for skills and commands
- **AND** this metadata SHALL be used for effective scope resolution

#### Scenario: SCN-ATP-001-4 Scope support metadata absent
- **WHEN** a tool entry in `AI_TOOLS` omits scope support metadata for a surface
- **THEN** resolver behavior SHALL default that surface to project-only support
- **AND** effective scope resolution SHALL apply normal preferred/fallback rules against that default

### Requirement: REQ-ATP-002 Path configuration for supported tools
Path metadata SHALL support both project and global install targets via resolver logic.

#### Scenario: SCN-ATP-002-14 Project scope path
- **WHEN** effective scope is `project` for skills
- **THEN** `skillsDir` SHALL be treated as a tool-specific container path under project root
- **AND** managed skill artifacts SHALL be written under `<projectRoot>/<skillsDir>/skills/`
- **AND** tool definitions SHALL set `skillsDir` accordingly (for example `.openspec` -> `.openspec/skills/`)

#### Scenario: SCN-ATP-002-15 Global scope path
- **WHEN** effective scope is `global` for a supported tool/surface
- **THEN** paths SHALL resolve to tool-specific global directories
- **AND** environment overrides (for example `CODEX_HOME`) SHALL be respected where applicable

#### Scenario: SCN-ATP-002-16 Windows global path resolution for Codex commands
- **WHEN** effective scope is `global`
- **AND** tool is Codex
- **AND** platform is Windows
- **THEN** command targets SHALL resolve to `%CODEX_HOME%\prompts` when `CODEX_HOME` is set
- **AND** SHALL otherwise resolve to `%USERPROFILE%\.codex\prompts`
