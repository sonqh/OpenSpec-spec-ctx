# command-generation Delta Specification

## MODIFIED Requirements

### Requirement: REQ-CG-002 ToolCommandAdapter interface

The system SHALL define a `ToolCommandAdapter` interface for per-tool formatting.

#### Scenario: SCN-CG-002-1 Adapter interface structure

- **WHEN** implementing a tool adapter
- **THEN** `ToolCommandAdapter` SHALL require:
  - `toolId`: string identifier matching `AIToolOption.value`
  - `getFilePath(commandId: string)`: returns file path for command (relative from project root, or absolute for global-scoped tools like Codex)
  - `formatFile(content: CommandContent)`: returns complete file content with frontmatter

#### Scenario: SCN-CG-002-2 Claude adapter formatting

- **WHEN** formatting a command for Claude Code
- **THEN** the adapter SHALL output YAML frontmatter with `name`, `description`, `category`, `tags` fields
- **AND** file path SHALL follow pattern `.claude/commands/opsx/<id>.md`

#### Scenario: SCN-CG-002-3 Cursor adapter formatting

- **WHEN** formatting a command for Cursor
- **THEN** the adapter SHALL output YAML frontmatter with `name` as `/opsx-<id>`, `id`, `category`, `description` fields
- **AND** file path SHALL follow pattern `.cursor/commands/opsx-<id>.md`

#### Scenario: SCN-CG-002-4 Windsurf adapter formatting

- **GIVEN** RETIRED — Windsurf was rebranded to Devin Desktop and its config directory moved
- **WHEN** looking for a Windsurf adapter
- **THEN** none SHALL be registered — it is replaced by the Devin adapter below, not kept alongside a second adapter for the same product

#### Scenario: SCN-CG-002-6 Devin Desktop adapter formatting

- **WHEN** formatting a command for Devin Desktop
- **THEN** the adapter SHALL output YAML frontmatter with `name`, `description`, `category`, `tags` fields
- **AND** file path SHALL follow pattern `.devin/workflows/opsx-<id>.md`

#### Scenario: SCN-CG-002-5 Trae adapter formatting

- **WHEN** formatting a command for Trae
- **THEN** the adapter SHALL output YAML frontmatter with `name` and `description` fields
- **AND** file path SHALL follow pattern `.trae/commands/opsx-<id>.md`
