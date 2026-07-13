# Internal template — Program-launch compliance calendar

Last updated: July 12, 2026

**Status: HYPOTHESIS TO TEST — Reusable internal control sample for a bounded Program Launch and Compliance scope. It is not legal, accounting, clinical, technical, evaluation, security, or contract interpretation; a compliance certification; permission to begin work; or proof of current delivery capacity. Accountable humans retain final approval and specialist judgment.**

Completed client calendars may contain confidential contract, personnel, financial, vendor, security, or program information and should live in the approved project control plane, not automatically in this repository.

## DECIDED / WORKING DECISION — Work-start and authority boundary

- Contract date, award date, effective date, and notice-to-proceed date are separate facts.
- Do not schedule active delivery, recognize backlog as exercised, or incur cost for an optional period without written authority.
- Wellridge may coordinate calendars, records, inputs, completeness, and reporting production within its SOW.
- Client contract, finance, certification, program, and data owners retain their authority.
- Licensed clinical leadership owns clinical judgment; qualified technical and evaluation leads own their disciplines.
- Wellridge must not certify costs, legal compliance, clinical results, technical adequacy, or evaluation methodology for another accountable party.

## HYPOTHESIS TO TEST — Control header

| Field | Controlled entry |
|---|---|
| Project / calendar ID | `[PCC-YYYY-NNN]` |
| Lifecycle trace ID | `[shared cross-artifact ID]` |
| Parent artifact ID | `[executed award, contract, proposal, or prior scope ID]` |
| Run mode | `[PRODUCTION_CONTROL / SIMULATION_ONLY]` |
| Pricing gate ID/state | `[PRICE-YYYY-NNN / state]` |
| Client / funder or agency / prime | `[entry]` |
| Program, award, contract, or task title | `[entry]` |
| Award / contract / task-order ID | `[entry]` |
| Award date | `[YYYY-MM-DD / UNKNOWN]` |
| Contract effective date | `[YYYY-MM-DD / UNKNOWN]` |
| Notice-to-proceed date | `[YYYY-MM-DD / NOT ISSUED]` |
| Performance period / optional periods | `[entry; label unexercised options]` |
| Initial horizon | `[first 30/60/90 days]` |
| Calendar baseline / version | `[v# / YYYY-MM-DD]` |
| Source-of-truth location | `[controlled location]` |
| Accountable client program owner | `[named role]` |
| Contract/legal reviewer | `[named qualified role]` |
| Finance/certification approver | `[named role]` |
| Reporting owner | `[named role]` |
| Data steward/security owner | `[named role]` |
| Clinical/technical/evaluation owners | `[named qualified roles as applicable]` |
| Vendor/subrecipient owner | `[named role]` |
| Wellridge coordinator / Felix final QA | `[entry]` |
| Data classification / minimum necessary | `[entry]` |
| BAA/security/access status | `[entry / N/A with approval]` |
| Retention rule | `[contract-approved rule]` |
| Related-party/conflict review | `[status/evidence]` |
| Explicit work-start authority | `[source ID / HOLD]` |

## DECIDED / WORKING DECISION — Controlled operational labels

These labels describe workflow state and do not replace the repository's four decision-status labels.

### Source status

- `CONTROLLING`
- `ACTIVE_SUPPORTING`
- `SUPERSEDED`
- `UNVERIFIED`
- `CONFLICT_REVIEW_REQUIRED`

### Progress

- `NOT_STARTED`
- `MONITORING`
- `INPUT_BLOCKED`
- `IN_PROGRESS`
- `SPECIALIST_REVIEW`
- `CLIENT_APPROVAL`
- `SUBMITTED`
- `ACCEPTED`
- `CORRECTION_REQUIRED`
- `NOT_APPLICABLE`
- `SUPERSEDED`
- `CLOSED`

### Schedule posture

- `ON_TRACK`
- `AT_RISK`
- `PAST_DUE`
- `TRIGGER_NOT_YET_OCCURRED`
- `DATE_UNRESOLVED`

### Acceptance state

- `NOT_SUBMITTED`
- `SUBMITTED_PENDING_ACCEPTANCE`
- `ACCEPTED`
- `REJECTED_OR_CORRECTION_REQUIRED`
- `NOT_APPLICABLE`

`SUBMITTED` never means accepted, invoice-eligible, recognized as revenue, or collected.

## DECIDED / WORKING DECISION — Source manifest

| Source ID | Document/title | Version/effective date | Controlled location | Authority/precedence | Status | Superseded by | Human verifier/date | Interpretation owner | Conflict/caveat |
|---|---|---|---|---|---|---|---|---|---|
| `SRC-001` | `[executed contract/task order]` | | | | `UNVERIFIED` | | | | |

Consider where applicable:

- executed contract, task order, and notice to proceed;
- award notice and approved proposal/workplan;
- budget and payment schedule;
- amendments and approved change orders;
- clauses, funder rules, policies, and reporting instructions;
- data, privacy, security, BAA, and incident terms;
- partner, vendor, and subrecipient agreements;
- insurance, license, and credential requirements; and
- client-approved interpretations and delegations.

Preserve conflicts and route them to the authorized contract or specialist owner. Do not let AI or the coordinator decide which conflicting instruction controls.

## DECIDED / WORKING DECISION — Governance and approval map

| Role/function | Named human or organization | Decision authority | Owned approvals | Cannot approve | Backup | Escalation path |
|---|---|---|---|---|---|---|
| Client program owner | | | | | | |
| Contract/legal | | | | | | |
| Finance/certification | | | | | | |
| Reporting/data | | | | | | |
| Clinical | | | | | | |
| Technical/evaluation | | | | | | |
| Vendor/subrecipient | | | | | | |
| Wellridge coordinator | | control/calendar completeness | | legal/clinical/technical/financial certification | | |
| Felix | | Wellridge scope/final QA | | client or specialist authority | | |

## DECIDED / WORKING DECISION — Award-to-launch crosswalk

Map proposal commitments and assumptions to the executed agreement before creating operating obligations. The executed contract controls; a proposal statement is not automatically a funded or authorized requirement.

| Crosswalk ID | Proposal commitment/source | Executed contract/amendment source | Same/changed/omitted/new | Launch calendar IDs | Scope/price/cash impact | Accountable reviewer | Disposition/evidence |
|---|---|---|---|---|---|---|---|
| `[PCC-YYYY-NNN-XW-001]` | | | | | | | |

## HYPOTHESIS TO TEST — Master compliance calendar

Use one row per independently controlled obligation, deliverable, milestone, approval, invoice trigger, or closeout event.

| Calendar ID | Workstream | Obligation/deliverable | Required action | Source/section | Requirement type | Frequency/trigger | Period covered | Trigger date | Contract due/timezone | Input due | Specialist due | Client approval/certification due | Internal target | Owner / backup | Accountable approver | Specialist owner/category | Dependencies | Partner/vendor dependency | Data class/minimum necessary | Security/BAA gate | Evidence required | Evidence location/version | Progress | Schedule posture | Submitted/evidence | Acceptance/evidence | Invoice/milestone link | Change ID | Next action/escalation | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `CAL-001` | `[entry]` | `[entry]` | `[entry]` | `SRC-001 §[ ]` | `[type]` | `[date/trigger]` | | | | | | | | | | | | | | | | | `NOT_STARTED` | `DATE_UNRESOLVED` | | `NOT_SUBMITTED` | | | | |

### Requirement types

- `GOVERNANCE`
- `PROGRAM_MILESTONE`
- `REPORTING`
- `PERFORMANCE_MEASURE`
- `FINANCIAL_INVOICE`
- `BUDGET_MODIFICATION`
- `PROCUREMENT`
- `VENDOR_SUBRECIPIENT`
- `FLOW_DOWN`
- `INSURANCE_LICENSE`
- `DATA_PRIVACY_SECURITY`
- `CLINICAL_BOUNDARY`
- `TECHNICAL_EVALUATION`
- `COMMUNICATIONS_APPROVAL`
- `RECORDS_RETENTION`
- `INCIDENT_NOTIFICATION`
- `AUDIT_REQUEST`
- `CLOSEOUT`

Every row must have a date or documented trigger, owner, accountable approver, evidence requirement, and next action. `NOT_APPLICABLE` requires source basis and approval.

## HYPOTHESIS TO TEST — First-90-day launch view

This summary must reconcile to the master calendar; it does not replace it.

| Window | Required decision or output | Calendar IDs | Owner | Approval | Critical dependency | Status/risk |
|---|---|---|---|---|---|---|
| Days 0–30 | governance, work-start authority, source baseline, roles, immediate deliverables | | | | | |
| Days 31–60 | operating cadence, partner/vendor inputs, early reporting and QA | | | | | |
| Days 61–90 | first performance review, reporting cycle, corrective action, rebaseline decision | | | | | |

## DECIDED / WORKING DECISION — Trigger and notification register

Use for obligations without fixed calendar dates.

| Trigger ID | Event | Source | Notification/action clock | Detection owner | Decision owner | Recipient/channel | Event date/time | Calculated deadline | Evidence | Status | Incident/change link |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `TRG-001` | `[entry]` | | | | | | | | | `MONITORING` | |

Possible triggers include data incidents, key-personnel changes, insurance lapses, budget-threshold crossings, complaints, audit requests, adverse events, partner default, scope changes, and termination.

Do not auto-roll a weekend, holiday, or ambiguous-timezone deadline without controlling authority. Preserve the stated date and escalate.

## DECIDED / WORKING DECISION — Reporting and metric-definition register

| Metric/report field | Approved definition/version | Source system | Data owner | Reporting period | Aggregation/de-identification | QA rule | Clinical/evaluator approval | Retention | Prohibited use / change history |
|---|---|---|---|---|---|---|---|---|---|
| `[metric]` | | | | | | | | | |

Wellridge may coordinate collection, completeness, and production. A qualified evaluator owns methodology, and licensed clinical leadership owns clinical interpretation. Aggregate or de-identified information is the default wherever feasible.

## DECIDED / WORKING DECISION — Vendor and subrecipient dependency register

| Entity | Role/workshare | Agreement status | Deliverables | Flow-downs | Reporting dates | Invoice evidence | Acceptance owner | Data access | Insurance/license | Conflict status | Wellridge value-add | Escalation owner |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `[entity]` | | | | | | | | | | | | |

Make pass-through, related-party, and first-tier responsibility visible. A late vendor deliverable must show downstream schedule, acceptance, cash, and escalation effects.

## DECIDED / WORKING DECISION — Change-control log

| Change ID | Date | Trigger/source | Calendar/source/metric rows affected | Scope/fee impact | Pricing gate ID/state | Schedule/cash impact | Specialist/data/security impact | Decision required | Owner/deadline | Disposition | Written authority | New baseline |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `[PCC-YYYY-NNN-CHG-001]` | | | | | | | | | | | | |

No rebaselining occurs without written authority. Changes include amendments, budget revisions, schedule shifts, new reporting periods, metric changes, key staff, partners, data access, additional operating months, and early termination.

## DECIDED / WORKING DECISION — QA and exception log

| Exception ID | Calendar/source item | Severity | Description | Detected by/date | Correction owner | Due | Resolution evidence | Re-test | Client/specialist decision | Closed by/date |
|---|---|---|---|---|---|---|---|---|---|---|
| `EXC-001` | | | | | | | | | | |

| Severity | Meaning |
|---|---|
| `CRITICAL` | Work-start, legal, clinical, technical, data/security, certification, mandatory deliverable, or deadline failure. |
| `MAJOR` | Material reporting, performance, budget, partner, evidence, or acceptance risk. |
| `MINOR` | Production/control defect without material compliance effect. |

## DECIDED / WORKING DECISION — Initial-calendar acceptance

| Acceptance control | Result | Reviewer/date | Evidence/exception |
|---|---|---|---|
| Controlling sources and amendments reconciled | `[PASS/FAIL]` | | |
| Work-start authority confirmed | | | |
| First 90 days loaded | | | |
| Every obligation has owner and approver | | | |
| Every obligation has a date or documented trigger | | | |
| Dependencies and evidence requirements identified | | | |
| Specialist and data/security gates named | | | |
| Contract, budget, metric, and data conflicts logged | | | |
| Client program owner approval recorded | | | |
| Felix final QA recorded | | | |

Initial acceptance means the control calendar is complete against the reviewed sources. It does not certify that the client or program is substantively compliant.

## DECIDED / WORKING DECISION — Periodic QA

For every reporting or deliverable cycle, verify:

- controlling source and period;
- data and metric definition version;
- calculations and budget-to-scope consistency;
- minimum-necessary data and approved transfer;
- clinical/technical/evaluation review where required;
- partner/vendor inputs and acceptance;
- client approval or certification;
- evidence-file location and version;
- submission time and receipt;
- buyer/prime acceptance or correction;
- invoice eligibility; and
- next period/change-control impact.

## DECIDED / WORKING DECISION — Closeout record

| Closeout item | Owner | Due/status | Evidence/acceptance |
|---|---|---|---|
| Final deliverables and corrective actions | | | |
| Final reporting and authorized certifications | | | |
| Client-led financial reconciliation | | | |
| Vendor/subrecipient closeout | | | |
| Property/inventory disposition | | | |
| Evidence and records index | | | |
| Audit/retention owner and end date | | | |
| Access revocation | | | |
| Contract-governed data return/deletion | | | |
| Final invoice and acceptance | | | |
| Open claims or disputes | | | |
| Actual Wellridge hours/direct cost/defects | | | |
| Collection timing | | | |
| Reusable sanitized method | | | |
| Permissioned reference readiness | | | |

Early termination triggers accelerated closeout, access/data disposition, final acceptance, and financial review.

## EXPLICITLY OUT OF SCOPE / REJECTED

- Beginning work or incurring cost without documented authority
- Treating award, contract, effective, and notice-to-proceed dates as interchangeable
- Activating unexercised optional periods
- Wellridge or AI making legal, clinical, technical, accounting, evaluation, security, or allowability judgments
- Unnamed specialist ownership
- Storing unnecessary PHI, credentials, secrets, or beneficiary-level data
- Treating `SUBMITTED` as accepted, invoice-eligible, recognized revenue, or cash
- Backdating, unsupported evidence, concealed incidents, or silent metric changes
- Rebaselining without written authority
- Automatic related-party routing or pass-through without conflict review and real Wellridge value
- Calling the calendar itself proof of program compliance

## OPEN QUESTION

- Approved project-control platform and access model
- Standard internal buffers and escalation times
- Contract and amendment interpretation authority
- Standard data-retention, incident-response, and evidence-file rules
- Minimum insurance, security, and liquidity gates
- Standard metric-definition and evaluator-review process
- Client-facing versus internal calendar fields
- Closeout retention and audit-support period
