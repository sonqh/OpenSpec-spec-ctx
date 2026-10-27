# List Command Specification

## Purpose

The `openspec list` command SHALL provide developers with a quick overview of all active changes in the project, showing their names and task completion status.
## Requirements
### Requirement: REQ-CL-001 Command Execution
The command SHALL scan and analyze either active changes or specs based on the selected mode.

#### Scenario: SCN-CL-001-1 Scanning for changes (default)
- **WHEN** `openspec list` is executed without flags
- **THEN** scan the `openspec/changes/` directory for change directories
- **AND** exclude the `archive/` subdirectory from results
- **AND** parse each change's `tasks.md` file to count task completion

#### Scenario: SCN-CL-001-2 Scanning for specs
- **WHEN** `openspec list --specs` is executed
- **THEN** scan the `openspec/specs/` directory for capabilities
- **AND** read each capability's `spec.md`
- **AND** parse requirements to compute requirement counts

### Requirement: REQ-CL-002 Task Counting

The command SHALL accurately count task completion status using standard markdown checkbox patterns.

#### Scenario: SCN-CL-002-1 Counting tasks in tasks.md

- **WHEN** parsing a `tasks.md` file
- **THEN** count tasks matching these patterns:
  - Completed: Lines containing `- [x]`
  - Incomplete: Lines containing `- [ ]`
- **AND** calculate total tasks as the sum of completed and incomplete

### Requirement: REQ-CL-003 Output Format
The command SHALL display items in a clear, readable table format with mode-appropriate progress or counts.

#### Scenario: SCN-CL-003-1 Displaying change list (default)
- **WHEN** displaying the list of changes
- **THEN** show a table with columns:
  - Change name (directory name)
  - Task progress (e.g., "3/5 tasks" or "✓ Complete")

#### Scenario: SCN-CL-003-2 Displaying spec list
- **WHEN** displaying the list of specs
- **THEN** show a table with columns:
  - Spec id (directory name)
  - Requirement count (e.g., "requirements 12")

### Requirement: REQ-CL-004 Flags
The command SHALL accept flags to select the noun being listed.

#### Scenario: SCN-CL-004-1 Selecting specs
- **WHEN** `--specs` is provided
- **THEN** list specs instead of changes

#### Scenario: SCN-CL-004-2 Selecting changes
- **WHEN** `--changes` is provided
- **THEN** list changes explicitly (same as default behavior)

### Requirement: REQ-CL-005 Empty State
The command SHALL provide clear feedback when no items are present for the selected mode.

#### Scenario: SCN-CL-005-1 Handling empty state (changes)
- **WHEN** no active changes exist (only archive/ or empty changes/)
- **THEN** display: "No active changes found."

#### Scenario: SCN-CL-005-2 Handling empty state (specs)
- **WHEN** no specs directory exists or contains no capabilities
- **THEN** display: "No specs found."

### Requirement: REQ-CL-006 Error Handling

The command SHALL gracefully handle missing files and directories with appropriate messages.

#### Scenario: SCN-CL-006-1 Missing tasks.md file

- **WHEN** a change directory has no `tasks.md` file
- **THEN** display the change with "No tasks" status

#### Scenario: SCN-CL-006-2 Missing changes directory

- **WHEN** `openspec/changes/` directory doesn't exist
- **THEN** display error: "No OpenSpec changes directory found. Run 'openspec init' first."
- **AND** exit with code 1

### Requirement: REQ-CL-007 Sorting

The command SHALL maintain consistent ordering of changes for predictable output.

#### Scenario: SCN-CL-007-1 Ordering changes

- **WHEN** displaying multiple changes
- **THEN** sort them in alphabetical order by change name

## Why

Developers need a quick way to:
- See what changes are in progress
- Identify which changes are ready to archive
- Understand the overall project evolution status
- Get a bird's-eye view without opening multiple files

This command provides that visibility with minimal effort, following OpenSpec's philosophy of simplicity and clarity.