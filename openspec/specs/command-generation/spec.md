# command-generation Specification

## Purpose
Define tool-agnostic command content and adapter contracts for generating tool-specific OpenSpec command files.

## Requirements
### Requirement: REQ-CG-001 CommandContent interface

The system SHALL define a tool-agnostic `CommandContent` interface for command data.

#### Scenario: SCN-CG-001-1 CommandContent structure

- **WHEN** defining a command to generate
- **THEN** `CommandContent` SHALL include:
  - `id`: string identifier (e.g., 'explore', 'apply')
  - `name`: human-readable name (e.g., 'OpenSpec Explore')
  - `description`: brief description of command purpose
  - `category`: grouping category (e.g., 'OpenSpec')
  - `tags`: array of tag strings
  - `body`: the command instruction content

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

- **WHEN** formatting a command for Windsurf
- **THEN** the adapter SHALL output YAML frontmatter with `name`, `description`, `category`, `tags` fields
- **AND** file path SHALL follow pattern `.windsurf/workflows/opsx-<id>.md`

#### Scenario: SCN-CG-002-5 Trae adapter formatting

- **WHEN** formatting a command for Trae
- **THEN** the adapter SHALL output YAML frontmatter with `name` and `description` fields
- **AND** file path SHALL follow pattern `.trae/commands/opsx-<id>.md`

### Requirement: REQ-CG-003 Command generator function

The system SHALL provide a `generateCommand` function that combines content with adapter.

#### Scenario: SCN-CG-003-1 Generate command file

- **WHEN** calling `generateCommand(content, adapter)`
- **THEN** it SHALL return an object with:
  - `path`: the file path from `adapter.getFilePath(content.id)`
  - `fileContent`: the formatted content from `adapter.formatFile(content)`

#### Scenario: SCN-CG-003-2 Command references match the name the tool registers

- **WHEN** the adapter's file path names the command by filename (`opsx-<id>`)
- **THEN** `generateCommand` SHALL rewrite `/opsx:<id>` references in the body to `/opsx-<id>` before formatting
- **WHEN** the adapter's file path does not name the command by filename (for example it namespaces the command under an `opsx/` directory)
- **THEN** the body's `/opsx:<id>` references SHALL be left unchanged

#### Scenario: SCN-CG-003-3 Command references use the tool's own invocation prefix

- **WHEN** an adapter declares an `invocationPrefix` because its files are not invoked with a slash (Amazon Q loads `.amazonq/prompts/opsx-<id>.md` into a prompt library invoked with `@`)
- **THEN** `generateCommand` SHALL rewrite `/opsx:<id>` references in the body to `<prefix>opsx-<id>` — for Amazon Q, `@opsx-<id>` — replacing the leading slash rather than adding to it
- **AND** generated skills and the `init`/`update` "Getting started" hint SHALL use the same form
- **WHEN** an adapter declares no `invocationPrefix`
- **THEN** the prefix SHALL default to `/`

#### Scenario: SCN-CG-003-4 Generate multiple commands

- **WHEN** generating all opsx commands for a tool
- **THEN** the system SHALL iterate over command contents and generate each using the tool's adapter

### Requirement: REQ-CG-004 CommandAdapterRegistry

The system SHALL provide a registry for looking up tool adapters.

#### Scenario: SCN-CG-004-1 Get adapter by tool ID

- **WHEN** calling `CommandAdapterRegistry.get('cursor')`
- **THEN** it SHALL return the Cursor adapter or undefined if not registered

#### Scenario: SCN-CG-004-2 Get all adapters

- **WHEN** calling `CommandAdapterRegistry.getAll()`
- **THEN** it SHALL return array of all registered adapters

#### Scenario: SCN-CG-004-3 Adapter not found

- **WHEN** looking up an adapter for unregistered tool
- **THEN** `CommandAdapterRegistry.get()` SHALL return undefined
- **AND** caller SHALL handle missing adapter appropriately

### Requirement: REQ-CG-005 Shared command body content

The body content of commands SHALL be shared across all tools.

#### Scenario: SCN-CG-005-1 Same instructions across tools

- **WHEN** generating the 'explore' command for Claude and Cursor
- **THEN** both SHALL use the same `body` content
- **AND** only the frontmatter, the file path, and the spelling of `/opsx:*` command references SHALL differ
