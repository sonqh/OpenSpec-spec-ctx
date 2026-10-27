# cli-feedback Specification

## Purpose
Define `openspec feedback` behavior for creating GitHub issues safely via `gh`, with a manual fallback when automation is unavailable.

## Requirements
### Requirement: REQ-CF-001 Feedback command

The system SHALL provide an `openspec feedback` command that creates a GitHub Issue in the openspec repository using the `gh` CLI. The system SHALL use `execFileSync` with argument arrays to prevent shell injection vulnerabilities.

#### Scenario: SCN-CF-001-1 Simple feedback submission

- **WHEN** user executes `openspec feedback "Great tool!"`
- **THEN** the system executes `gh issue create` with title "Feedback: Great tool!"
- **AND** the issue body includes "Great tool!" under a Summary heading
- **AND** the issue is created in the openspec repository
- **AND** the issue has the `feedback` label
- **AND** the system displays the created issue URL

#### Scenario: SCN-CF-001-2 Repository does not define the feedback label

- **WHEN** user executes `openspec feedback "Great tool!"`
- **AND** the repository does not define the `feedback` label, so `gh` refuses to create the issue
- **THEN** the system retries `gh issue create` without the label
- **AND** the issue is created in the openspec repository without the `feedback` label
- **AND** the system displays the created issue URL
- **AND** the system notes that the label was not applied

#### Scenario: SCN-CF-001-3 Safe command execution

- **WHEN** submitting feedback via `gh` CLI
- **THEN** the system uses `execFileSync` with separate arguments array
- **AND** user input is NOT passed through a shell
- **AND** shell metacharacters (quotes, backticks, $(), etc.) are treated as literal text

#### Scenario: SCN-CF-001-4 Feedback with body

- **WHEN** user executes `openspec feedback "Title here" --body "Detailed description..."`
- **THEN** the system creates a GitHub Issue with the specified title
- **AND** the issue body contains the message under a Summary heading
- **AND** the issue body contains the detailed description under a Details heading
- **AND** the issue body includes metadata (OpenSpec version, platform, timestamp)

#### Scenario: SCN-CF-001-5 Long or multiline feedback message

- **WHEN** user executes `openspec feedback` with a long or multiline message
- **THEN** the issue title is a single whitespace-normalized line of at most 72 characters
- **AND** an ellipsis indicates when the title was shortened
- **AND** the complete message is preserved in the issue body

### Requirement: REQ-CF-002 GitHub CLI dependency

The system SHALL use `gh` CLI for automatic feedback submission when available, and provide a manual submission fallback when `gh` is not installed or not authenticated. The system SHALL use platform-appropriate commands to detect `gh` CLI availability.

#### Scenario: SCN-CF-002-1 Missing gh CLI with fallback

- **WHEN** user runs `openspec feedback "message"`
- **AND** `gh` CLI is not installed (not found in PATH)
- **THEN** the system displays warning: "GitHub CLI not found. Manual submission required."
- **AND** outputs structured feedback content with delimiters:
  - "--- FORMATTED FEEDBACK ---"
  - Title line
  - Labels line
  - Body content with metadata
  - "--- END FEEDBACK ---"
- **AND** displays pre-filled GitHub issue URL for manual submission
- **AND** exits with zero code (successful fallback)

#### Scenario: SCN-CF-002-2 Cross-platform gh CLI detection on Unix

- **WHEN** system is running on macOS or Linux (platform is 'darwin' or 'linux')
- **AND** checking if `gh` CLI is installed
- **THEN** the system executes `which gh` command

#### Scenario: SCN-CF-002-3 Cross-platform gh CLI detection on Windows

- **WHEN** system is running on Windows (platform is 'win32')
- **AND** checking if `gh` CLI is installed
- **THEN** the system executes `where gh` command

#### Scenario: SCN-CF-002-4 Unauthenticated gh CLI with fallback

- **WHEN** user runs `openspec feedback "message"`
- **AND** `gh` CLI is installed but not authenticated
- **THEN** the system displays warning: "GitHub authentication required. Manual submission required."
- **AND** outputs structured feedback content (same format as missing gh CLI scenario)
- **AND** displays pre-filled GitHub issue URL for manual submission
- **AND** displays authentication instructions: "To auto-submit in the future: gh auth login"
- **AND** exits with zero code (successful fallback)

#### Scenario: SCN-CF-002-5 Authenticated gh CLI

- **WHEN** user runs `openspec feedback "message"`
- **AND** `gh auth status` returns success (authenticated)
- **THEN** the system proceeds with feedback submission

### Requirement: REQ-CF-003 Issue metadata

The system SHALL include relevant metadata in the GitHub Issue body.

#### Scenario: SCN-CF-003-1 Standard metadata

- **WHEN** creating a GitHub Issue for feedback
- **THEN** the issue body includes:
  - OpenSpec CLI version
  - Platform (darwin, linux, win32)
  - Submission timestamp
  - Separator line: "---\nSubmitted via OpenSpec CLI"

#### Scenario: SCN-CF-003-2 Windows platform metadata

- **WHEN** creating a GitHub Issue for feedback on Windows
- **THEN** the issue body includes "Platform: win32"
- **AND** all platform detection uses Node.js `os.platform()` API

#### Scenario: SCN-CF-003-3 No sensitive metadata

- **WHEN** creating a GitHub Issue for feedback
- **THEN** the issue body does NOT include:
  - File paths from user's system
  - Project names or directory names
  - Environment variables
  - IP addresses

### Requirement: REQ-CF-004 Feedback always works

The system SHALL allow feedback submission regardless of telemetry settings.

#### Scenario: SCN-CF-004-1 Feedback with telemetry disabled

- **WHEN** user has disabled telemetry via `OPENSPEC_TELEMETRY=0`
- **AND** user runs `openspec feedback "message"`
- **THEN** the feedback is still submitted via `gh` CLI
- **AND** telemetry events are not sent

#### Scenario: SCN-CF-004-2 Feedback in CI environment

- **WHEN** `CI=true` is set in the environment
- **AND** user runs `openspec feedback "message"`
- **THEN** the feedback submission proceeds normally (if `gh` is available and authenticated)

### Requirement: REQ-CF-005 Error handling

The system SHALL handle feedback submission errors gracefully.

#### Scenario: SCN-CF-005-1 gh CLI execution failure

- **WHEN** `gh issue create` command fails for any reason other than the repository not defining the `feedback` label
- **THEN** the system displays the error output from `gh` CLI
- **AND** exits with the same exit code as `gh`
- **AND** does not retry the submission

#### Scenario: SCN-CF-005-2 Network failure

- **WHEN** `gh` CLI reports network connectivity issues
- **THEN** the system displays the error message from `gh`
- **AND** suggests checking network connectivity
- **AND** exits with non-zero code

### Requirement: REQ-CF-006 Feedback skill for agents

The system SHALL provide a `/feedback` skill that guides agents through collecting and submitting user feedback.

#### Scenario: SCN-CF-006-1 Agent-initiated feedback

- **WHEN** user invokes `/feedback` in an agent conversation
- **THEN** the agent gathers context from the conversation
- **AND** drafts a feedback issue with enriched content
- **AND** anonymizes sensitive information
- **AND** presents the draft to the user for approval
- **AND** submits via `openspec feedback` command on user confirmation

#### Scenario: SCN-CF-006-2 Context enrichment

- **WHEN** agent drafts feedback
- **THEN** the agent includes relevant context such as:
  - What task was being performed
  - What worked well or poorly
  - Specific friction points or praise

#### Scenario: SCN-CF-006-3 Anonymization

- **WHEN** agent drafts feedback
- **THEN** the agent removes or replaces:
  - File paths with `<path>` or generic descriptions
  - API keys, tokens, secrets with `<redacted>`
  - Company/organization names with `<company>`
  - Personal names with `<user>`
  - Specific URLs with `<url>` unless public/relevant

#### Scenario: SCN-CF-006-4 User confirmation required

- **WHEN** agent has drafted feedback
- **THEN** the agent MUST show the complete draft to the user
- **AND** ask for explicit approval before submitting
- **AND** allow the user to request modifications
- **AND** only submit after user confirms

### Requirement: REQ-CF-007 Shell completions

The system SHALL provide shell completions for the feedback command.

#### Scenario: SCN-CF-007-1 Command completion

- **WHEN** user types `openspec fee<TAB>`
- **THEN** the shell completes to `openspec feedback`

#### Scenario: SCN-CF-007-2 Flag completion

- **WHEN** user types `openspec feedback "msg" --<TAB>`
- **THEN** the shell suggests available flags (`--body`)
