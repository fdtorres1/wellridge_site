# Internal template — Proposal compliance matrix

Last updated: July 12, 2026

**Status: HYPOTHESIS TO TEST — Reusable internal control sample for a bounded Proposal Operations scope. It is not legal or contract interpretation, a compliance certification, pursuit approval, submission authority, permission to begin work, or proof of current delivery capacity. Accountable humans retain final approval and all regulated or specialist judgment.**

Completed client-specific matrices may contain confidential, procurement-sensitive, or credential-adjacent information and should live in the approved project control plane, not automatically in this repository.

## DECIDED / WORKING DECISION — Submission and authority boundary

- Default submission authority is `CLIENT_ONLY`.
- Any delegation requires express written authorization, a named authorized submitter, secure credential custody, responsibility allocation, and contract/portal review.
- Never place passwords, recovery codes, tokens, private keys, or shared credentials in this matrix.
- Wellridge may coordinate, draft assigned content, and perform QA only for the responsibilities in the signed SOW.
- Client factual, pricing, signature, eligibility, legal, and final submission approval remain with named accountable humans.
- Clinical, technical, evaluation, accounting, security, and legal judgments require named qualified owners.

## HYPOTHESIS TO TEST — Control header

| Field | Controlled entry |
|---|---|
| Artifact/project ID | `[PCM-YYYY-NNN]` |
| Lifecycle trace ID | `[shared cross-artifact ID]` |
| Parent artifact ID | `[qualified opportunity, client request, or prior scope ID]` |
| Run mode | `[PRODUCTION_CONTROL / SIMULATION_ONLY]` |
| Pricing gate ID/state | `[PRICE-YYYY-NNN / state]` |
| Client / issuing buyer | `[entry]` |
| Solicitation title and number | `[entry]` |
| Offer 2 variant | `[compliance-production / substantive writing-coordination / other bounded SOW]` |
| Opportunity stage / pursuit posture | `[entry from approved go/no-go]` |
| Felix go/no-go decision / date | `[entry]` |
| Wellridge-owned sections | `[entry]` |
| Excluded sections/responsibilities | `[entry]` |
| Source-of-truth location | `[controlled location]` |
| Matrix baseline / version | `[v# / YYYY-MM-DD]` |
| Addenda reconciled through | `[number/date]` |
| External deadline | `[YYYY-MM-DD HH:MM timezone]` |
| Internal final / submission buffer | `[entry]` |
| Client response lead | `[named role]` |
| Client factual approver | `[named role]` |
| Client finance/pricing approver | `[named role]` |
| Specialist reviewers | `[legal/clinical/technical/security/accounting/evaluation as applicable]` |
| Wellridge coordinator / Felix final QA | `[entry]` |
| Authorized submitter / authority basis | `CLIENT_ONLY / [written authority reference]` |
| Portal owner | `[client role]` |
| Data classification | `[public/internal/confidential/restricted/PHI as approved]` |
| Approved transfer method | `[entry]` |
| Credential rule | `[secure custody link/reference only; never credential content]` |

## DECIDED / WORKING DECISION — Controlled operational labels

These labels describe workflow state and do not replace the repository's four decision-status labels.

### Source status

- `CONTROLLING`
- `ACTIVE_SUPPORTING`
- `SUPERSEDED`
- `UNVERIFIED`
- `CONFLICT_REVIEW_REQUIRED`

### Requirement class

- `ELIGIBILITY`
- `PASS_FAIL`
- `EVALUATED`
- `ADMINISTRATIVE`
- `INFORMATIONAL`
- `UNKNOWN_REVIEW_REQUIRED`

### SOW ownership

- `WELLRIDGE`
- `CLIENT`
- `NAMED_SPECIALIST`
- `PARTNER`
- `SHARED`
- `PROHIBITED`
- `UNASSIGNED`

### Progress

- `NOT_STARTED`
- `INPUT_BLOCKED`
- `IN_PROGRESS`
- `SPECIALIST_REVIEW`
- `CLIENT_REVIEW`
- `QA_READY`
- `QA_EXCEPTION`
- `CLIENT_APPROVED`
- `REOPENED_CHANGE_IMPACT`
- `NOT_APPLICABLE`
- `SUPERSEDED`

### Approval

- `NOT_REQUIRED`
- `PENDING`
- `APPROVED`
- `REJECTED`
- `EXPIRED`

## DECIDED / WORKING DECISION — Source and addenda manifest

Record conflicts without deciding authority unless the contract, buyer, or authorized reviewer resolves them.

| Source ID | Document/title | Version/date | URL or controlled file | Received/accessed | Authority/precedence | Status | Superseded by | Human verifier/date | Notes/conflict |
|---|---|---|---|---|---|---|---|---|---|
| `SRC-001` | `[solicitation]` | | | | | `UNVERIFIED` | | | |

Minimum sources to consider where applicable:

- solicitation and all attachments;
- amendments/addenda;
- official Q&A and portal notices;
- required forms and certifications;
- pricing instructions;
- draft or final contract terms;
- incorporated policies, clauses, and external standards; and
- client-approved pursuit and SOW documents.

## HYPOTHESIS TO TEST — Master requirement matrix

Use one row per independently testable requirement. Preserve superseded rows for the audit trail.

| Req ID | Class | Mandatory? | Requirement/action paraphrase | Source/version | Page/section/portal field | Human source verifier/date | Points/consequence | SOW ownership | Task owner | Accountable approver | Specialist owner/category | Input/evidence needed | Input owner/due | Draft due | Specialist due | QA due | External due/timezone | Dependencies | Response/file/portal location | Evidence location/version | Progress | Approval/evidence | QA reviewer/date/result | Risk/blocker | Change ID | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `REQ-001` | `UNKNOWN_REVIEW_REQUIRED` | `UNKNOWN` | `[entry]` | `SRC-001` | | | | `UNASSIGNED` | | | | | | | | | | | | | `NOT_STARTED` | `PENDING` | | | | |

Required row rules:

- A row cannot become `CLIENT_APPROVED` until a human verifies the controlling source.
- `NOT_APPLICABLE` requires rationale, source basis, and accountable approval.
- Eligibility, mandatory, signature, pricing, and certification requirements receive explicit consequence review.
- AI-assisted extraction or drafting does not satisfy human-source verification or specialist approval.
- Clinical, technical, legal, accounting, evaluation, security, and pricing judgments require named accountable humans.
- An addendum or material fact change moves every affected approved row to `REOPENED_CHANGE_IMPACT`.
- Do not delete conflicting, rejected, or superseded requirements.

## HYPOTHESIS TO TEST — Production and attachment manifest

Use this manifest for items that can disappear inside a narrative-focused matrix.

| File ID | Required file/form/volume | Source requirement | Owner | Template/version | Signature? | Authorized signer | Format/page/size rule | Final filename | Due | QA result | Final version | Included? | Exception |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `FILE-001` | `[entry]` | `REQ-###` | | | | | | | | | | `NO` | |

Consider forms, resumes, references, certifications, letters, pricing files, workplans, budgets, organizational documents, samples, and portal-only fields.

## DECIDED / WORKING DECISION — Responsibility and approval map

| Decision or artifact | Responsible | Accountable approver | Required specialist | Cannot be approved by Wellridge alone | Evidence |
|---|---|---|---|---|---|
| Eligibility representation | | Client | Legal/contract as applicable | Yes | |
| Technical/clinical solution | | Client | Named qualified specialist | Yes | |
| Price and budget | | Client finance | Accounting/contract as applicable | Yes | |
| Past performance/reference | | Client | Reference/claims owner | Yes | |
| Narrative/workplan assigned to Wellridge | Wellridge | Client factual approver | SME as applicable | Final facts remain client-owned | |
| Production compliance | Wellridge | Felix / client response lead | Contract reviewer as applicable | Buyer compliance certification | |
| Signature/certification | Client | Authorized signer | Legal/finance as applicable | Yes | |
| Submission | `CLIENT_ONLY` by default | Client | Security/portal owner | Yes without written delegation | |

## DECIDED / WORKING DECISION — Change-control log

| Change ID | Date/time | Trigger/source | Rows/files affected | Schedule impact | Fee/SOW impact | Pricing gate ID/state | Specialist/data/security impact | Decision required | Owner | Decision deadline | Disposition | Approver/date | New baseline |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `[PCM-YYYY-NNN-CHG-001]` | | | | | | | | | | | | | |

Allowed dispositions:

- `ABSORBED_WITHIN_SCOPE`
- `CHANGE_ORDER_REQUIRED`
- `SCHEDULE_RESET_REQUIRED`
- `NO_GO_ESCALATION`
- `REJECTED`
- `DEFERRED`

No material addendum, changed client fact, portal instruction, or scope request may be absorbed silently.

## DECIDED / WORKING DECISION — QA and exception log

| Exception ID | Requirement/file | Severity | Description | Detected by/date | Correction owner | Due | Resolution evidence | Re-test result | Client decision evidence | Closed by/date |
|---|---|---|---|---|---|---|---|---|---|---|
| `EXC-001` | | | | | | | | | | |

### Severity

| Severity | Meaning |
|---|---|
| `CRITICAL` | Eligibility, mandatory requirement, unauthorized claim, missing signature, unapproved specialist judgment, or unusable submission. |
| `MAJOR` | Material evaluated requirement, inconsistency, or production failure. |
| `MINOR` | Production defect not affecting substantive compliance. |

An unresolved critical exception prevents a clean ready handoff. A client may decide to submit despite a disclosed exception, but Wellridge must not relabel the package compliant.

## DECIDED / WORKING DECISION — Internal QA checklist

| Control | Result | Reviewer/date | Evidence/exception |
|---|---|---|---|
| Complete source manifest and precedence review | `[PASS/FAIL]` | | |
| All addenda and Q&A reconciled | | | |
| Eligibility and pass/fail requirements identified | | | |
| Every requirement has source location and human verification | | | |
| Every requirement has owner, approver, due date, and response location | | | |
| Specialist judgments have named qualified owners | | | |
| Client facts and claims are substantiated and approved | | | |
| Page, format, filename, signature, and portal rules checked | | | |
| Narrative, workplan, budget, pricing, and forms cross-reconcile | | | |
| Attachments and portal-only fields complete | | | |
| `NOT_APPLICABLE` dispositions approved | | | |
| Change log and reopened rows resolved | | | |
| Critical exceptions closed or expressly disclosed | | | |
| Submission authority and credential controls confirmed | | | |
| Data transfer and retention controls followed | | | |
| AI-assisted content human-verified | | | |
| Felix final QA / client final approval recorded | | | |

## DECIDED / WORKING DECISION — Submission handoff

Submission, portal receipt, buyer acceptance, award, invoice, revenue recognition, and cash collection are separate events.

| Handoff field | Evidence/status |
|---|---|
| Final matrix baseline | |
| Final-file manifest version | |
| Client factual approval | |
| Specialist approvals | |
| Finance/pricing approval | |
| Signature readiness | |
| Open exceptions | |
| Authorized submitter | `CLIENT_ONLY` unless written delegation is attached |
| Written submission authorization | |
| Submission window/portal | |
| Receipt/control number and timestamp | |
| Clarification or correction after submission | |

## DECIDED / WORKING DECISION — Closeout record

| Closeout field | Actual/evidence |
|---|---|
| Contracted Wellridge deliverables accepted | |
| Invoice trigger / invoice date | |
| Recognized revenue | |
| Cash collection / date | |
| Hours and cost by role | |
| Revision cycles / defects | |
| Submission result, if client shares it | `[separate from Wellridge performance]` |
| Credential/access revocation | |
| Data return/deletion/retention owner | |
| Reusable sanitized method/template | |
| Permissioned reference readiness | |
| Pricing/scope lesson | |

## EXPLICITLY OUT OF SCOPE / REJECTED

- Treating AI extraction as authoritative compliance review
- Wellridge certifying eligibility, legal compliance, technical adequacy, clinical judgment, or client facts
- Unnamed specialist ownership
- Storing credentials or sensitive secrets in the matrix
- Marking a requirement `N/A` without rationale and approval
- Deleting superseded or conflicting requirements
- Silently absorbing addenda, late client changes, or expanded scope
- Calling a package compliant while a critical exception remains
- Assuming submission authority or using client credentials without written controls
- Treating receipt, acceptance, award, invoice, revenue, or cash as the same event
- Backdating, unsupported claims, fabricated evidence, or concealed exceptions

## OPEN QUESTION

- Approved project-control platform and access model
- Standard internal deadline buffer by solicitation type
- Standard severity/escalation owner and response time
- Contract-review and submission-authority policy
- Secure credential-custody workflow if client submission is ever delegated
- Record-retention and deletion schedule
- Client-facing versus internal matrix fields
