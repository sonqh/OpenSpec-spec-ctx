## MODIFIED Requirements

### Requirement: REQ-TEL-005 First-run telemetry notice
The system SHALL display a one-line telemetry disclosure notice on the first command execution, before any telemetry is sent. In `--json` mode the system SHALL NOT display the notice on that run and SHALL leave `noticeSeen` unset, deferring the disclosure to the first later non-JSON run.

#### Scenario: SCN-TEL-005-1 First command execution
- **WHEN** a user runs their first openspec command without `--json`
- **AND** telemetry is enabled
- **THEN** the system displays: "Note: OpenSpec collects anonymous usage stats. Opt out: OPENSPEC_TELEMETRY=0"

#### Scenario: SCN-TEL-005-2 Subsequent command execution
- **WHEN** a user has already seen the notice (noticeSeen: true in config)
- **THEN** the system does not display the notice

#### Scenario: SCN-TEL-005-3 Notice before telemetry
- **WHEN** displaying the first-run notice
- **THEN** the notice appears before any telemetry event is sent

#### Scenario: SCN-TEL-005-4 First command execution in JSON mode
- **WHEN** a user's first openspec command passes `--json`
- **AND** telemetry is enabled
- **THEN** the system displays no notice on stdout
- **AND** `noticeSeen` remains unset

#### Scenario: SCN-TEL-005-5 Disclosure deferred, not skipped
- **WHEN** a user's first run was in `--json` mode and displayed no notice
- **AND** the user later runs a command without `--json`
- **THEN** the system displays the disclosure notice on that later run
