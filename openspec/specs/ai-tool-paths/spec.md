# ai-tool-paths Specification

## Purpose
Define AI tool path metadata used to generate OpenSpec skills and commands in tool-specific directories.
## Requirements
### Requirement: REQ-ATP-001 AIToolOption skillsDir field

The `AIToolOption` interface SHALL include an optional `skillsDir` field for skill generation path configuration.

#### Scenario: SCN-ATP-001-1 Interface includes skillsDir field

- **WHEN** a tool entry is defined in `AI_TOOLS` that supports skill generation
- **THEN** it SHALL include a `skillsDir` field specifying the project-local base directory (e.g., `.claude`)

#### Scenario: SCN-ATP-001-2 Skills path follows Agent Skills spec

- **WHEN** generating skills for a tool with `skillsDir: '.claude'`
- **THEN** skills SHALL be written to `<projectRoot>/<skillsDir>/skills/`
- **AND** the `/skills` suffix is appended per Agent Skills specification

### Requirement: REQ-ATP-002 Path configuration for supported tools

The `AI_TOOLS` array SHALL include `skillsDir` for tools that support the Agent Skills specification.

#### Scenario: SCN-ATP-002-1 Claude Code paths defined

- **WHEN** looking up the `claude` tool
- **THEN** `skillsDir` SHALL be `.claude`

#### Scenario: SCN-ATP-002-2 Cursor paths defined

- **WHEN** looking up the `cursor` tool
- **THEN** `skillsDir` SHALL be `.cursor`

#### Scenario: SCN-ATP-002-3 Devin Desktop paths defined

- **WHEN** looking up the `devin` tool
- **THEN** `skillsDir` SHALL be `.devin`

#### Scenario: SCN-ATP-002-4 Legacy Windsurf tool ID

- **WHEN** initializing with `openspec init --tools windsurf`
- **THEN** the `windsurf` alias SHALL resolve to `devin`
- **AND** when skill delivery is enabled, skills SHALL be generated under `.devin/skills/`, not `.windsurf/skills/`

#### Scenario: SCN-ATP-002-5 Kimi Code paths defined

- **WHEN** looking up the `kimi` tool
- **THEN** `skillsDir` SHALL be `.kimi-code`
- **AND** OpenSpec-managed skills remaining under the legacy `.kimi/skills` directory SHALL be migrated to `.kimi-code/skills` during init and update, preserving user files

#### Scenario: SCN-ATP-002-6 Hermes Agent paths defined

- **WHEN** looking up the `hermes` tool
- **THEN** `skillsDir` SHALL be `.hermes`
- **AND** `setupNote` SHALL explain that project `.hermes/skills` must be added to `skills.external_dirs` in `~/.hermes/config.yaml`
- **AND** `openspec init` and `openspec update` SHALL display the note whenever `hermes` is configured

#### Scenario: SCN-ATP-002-7 DeepSeek Harness paths defined

- **WHEN** looking up the `dsh` tool
- **THEN** `skillsDir` SHALL be `.dsh`
- **AND** auto-detection SHALL require `.dsh` to be a directory
- **AND** OpenSpec SHALL write dsh skills under `<projectRoot>/.dsh/skills/` using platform-native path joining

#### Scenario: SCN-ATP-002-8 Grok Build paths defined

- **WHEN** looking up the `grok` tool
- **THEN** `skillsDir` SHALL be `.grok`

#### Scenario: SCN-ATP-002-9 Warp paths and detection defined

- **WHEN** looking up the `warp` tool
- **THEN** `skillsDir` SHALL be `.warp`
- **AND** `detectionPaths` SHALL include `.warp` and `WARP.md`

#### Scenario: SCN-ATP-002-10 Warp invokes skills without command files

- **WHEN** generating workflows for the `warp` tool with delivery set to `commands`
- **THEN** skills SHALL remain installed in `.warp/skills/`
- **AND** no command adapter or command files SHALL be required
- **AND** each skill SHALL be directly invocable by its `/openspec-*` name

#### Scenario: SCN-ATP-002-11 Tools without skillsDir

- **WHEN** a tool has no `skillsDir` defined
- **THEN** skill generation SHALL error with message indicating the tool is not supported

### Requirement: REQ-ATP-003 Cross-platform path handling

The system SHALL handle paths correctly across operating systems.

#### Scenario: SCN-ATP-003-1 Path construction on Windows

- **WHEN** constructing skill paths on Windows
- **THEN** the system SHALL use `path.join()` for all path construction
- **AND** SHALL NOT hardcode forward slashes

#### Scenario: SCN-ATP-003-2 Path construction on Unix

- **WHEN** constructing skill paths on macOS or Linux
- **THEN** the system SHALL use `path.join()` for consistency
