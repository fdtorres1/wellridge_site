# Internal template — Nonprofit Funding Pipeline Sprint delivery workbook

Last updated: July 12, 2026

**Status: HYPOTHESIS TO TEST — Reusable internal sample for a bounded Funding Pipeline Sprint. It contains no client data and is not a grant-eligibility opinion, funder outreach authorization, application, award forecast, continuing-monitoring commitment, or Wellridge sales-pipeline record. Human review and final client approval remain required.**

This single controlled workbook contains the research-qualified funder profiles and the reconciled 6- or 12-month pursuit calendar. Completed client copies should use a secure approved location and the contractually permitted format.

## DECIDED / WORKING DECISION — Critical terminology boundary

`RESEARCH_QUALIFIED_FUNDER_PROFILE` means that a funder-program record meets the client's locked research-completeness standard. It does **not** mean:

- the client is legally or finally eligible;
- the funder has expressed interest;
- an invitation or relationship exists;
- the client is application-ready;
- an award is likely or guaranteed; or
- the record is a Wellridge `QUALIFIED_OPPORTUNITY`.

`QUALIFIED_OPPORTUNITY` is reserved for Wellridge's sales lifecycle and requires evidence of a current buyer problem, responsible buying path, economics, timing, bounded owned scope, authority/inputs, risk fit, and next action.

The operational labels in this template do not replace the repository's four decision-status labels.

## HYPOTHESIS TO TEST — Workbook control and criteria lock

| Field | Locked entry | Evidence/owner |
|---|---|---|
| Project ID | `[FPS-YYYY-NNN]` | |
| Lifecycle trace ID | `[shared cross-artifact ID]` | |
| Parent artifact ID | `[prior account/scope ID / NONE]` | |
| Run mode | `[PRODUCTION_CONTROL / SIMULATION_ONLY]` | |
| Pricing gate ID | `[PRICE-YYYY-NNN]` | |
| Version / delivery as-of date | `[v# / YYYY-MM-DD]` | |
| Research access window | `[YYYY-MM-DD through YYYY-MM-DD]` | |
| Client legal organization | `[client-confirmed]` | |
| Fiscal sponsor, if any | `[client-confirmed / N/A]` | |
| Primary program | `[one priority]` | |
| Population and geography | `[locked definition]` | |
| Calendar horizon | `[6 / 12 months]` | |
| Included funder classes | `[entry]` | |
| Excluded funders/classes/conflicts | `[entry]` | |
| Useful award band | `[client-confirmed / UNKNOWN]` | |
| Invitation-only tolerance | `[client decision]` | |
| Source-recency standard | `[project-specific rule]` | |
| Ranking criteria | `[locked before research]` | |
| Profile-count commitment | `[20–30 or approved variation]` | |
| Client decision owner | `[role; avoid unnecessary PII]` | |
| Consolidated feedback owner | `[role]` | |
| Researcher / coordinator / Felix final QA | `[roles]` | |
| AI assistance used | `[task boundary and human-verification record]` | |

New programs, geographies, funder classes, calendar horizons, or materially changed criteria require written change control. Do not silently change the criteria to make incomplete records countable.

## DECIDED / WORKING DECISION — Client-fact register

Keep client assertions separate from external evidence and Wellridge inference.

| Client input ID | Client fact or statement | Program/scope affected | Status | Controlled artifact reference | Confirmed by role | Confirmation date | Sensitivity | Profiles using input | Caveat/gap |
|---|---|---|---|---|---|---|---|---|---|
| `CI-001` | `[entry]` | | `CLIENT_PENDING_CONFIRMATION` | | | | | | |

Allowed operational statuses:

- `CLIENT_CONFIRMED`
- `CLIENT_ARTIFACT_SUPPORTED`
- `CLIENT_PENDING_CONFIRMATION`
- `NOT_PROVIDED`
- `NOT_APPLICABLE`

A pending or absent fact stays visible. It cannot silently become a Wellridge assertion or an externally verified fact.

## DECIDED / WORKING DECISION — Profile countability and disposition

Create one profile for each funder-program combination. Do not use one institution-level profile when programs have different eligibility, deadlines, application paths, or award patterns.

### Countability state

| State | Meaning |
|---|---|
| `RQ_PROFILE_COUNTABLE` | All required research fields are complete or explicitly marked with an allowed unknown, and required source controls pass. |
| `RESEARCH_GAP_NOT_COUNTABLE` | A material field, source, or review is missing. |
| `OUTSIDE_LOCKED_CRITERIA` | The funder-program record is outside the agreed screen. |
| `DUPLICATE_NOT_COUNTABLE` | The record duplicates another funder-program profile. |
| `RECHECK_REQUIRED_NOT_COUNTABLE` | Time-sensitive evidence is stale or conflicting and must be rechecked. |

### Wellridge recommendation

- `PURSUE`
- `CULTIVATE`
- `MONITOR`
- `DO_NOT_PURSUE`
- `DECISION_PENDING`

### Client decision

- `CLIENT_APPROVED`
- `CLIENT_DECLINED`
- `CLIENT_DEFERRED`
- `CLIENT_DECISION_PENDING`

Recommendation and client decision are separate. Neither authorizes Wellridge to contact, cultivate, draft, submit, or monitor after delivery.

## HYPOTHESIS TO TEST — Profile index

| Profile ID | Funder | Program | Countability | Recommendation | Priority | Next cycle | Award range or `UNKNOWN` | Application path | Relationship path | Material risk/unknown | Client decision | Calendar IDs | Source IDs | Profile as-of |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `FPR-001` | `[name]` | `[program]` | `RESEARCH_GAP_NOT_COUNTABLE` | `DECISION_PENDING` | `[tier]` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `NO_VERIFIED_PATH` | `[gap]` | `CLIENT_DECISION_PENDING` | | | `[YYYY-MM-DD]` |

The profile index count must reconcile to the detailed profiles. Only `RQ_PROFILE_COUNTABLE` rows count toward the accepted profile total.

## HYPOTHESIS TO TEST — Repeatable funder-profile block

Copy this block once per funder-program combination.

### `[FPR-###] — Funder / program`

#### Record control

| Field | Entry |
|---|---|
| Funder / program | `[entry]` |
| Profile ID / version | `[FPR-### / v#]` |
| Profile as-of date | `[YYYY-MM-DD]` |
| Researcher / reviewer / final QA | `[roles and dates]` |
| Countability state | `[state]` |
| Recommendation / priority | `[disposition / tier]` |
| Concise rationale | `[evidence-based rationale]` |
| Client decision | `[state]` |

**Qualification disclaimer:** This is a dated research screen. It does not confirm eligibility, invitation, funder interest, application readiness, or award probability.

#### Fit and exclusion matrix

Use `STRONG`, `PLAUSIBLE`, `WEAK`, `UNKNOWN`, or `EXCLUSION`. Do not assign an award probability or unexplained confidence score.

| Dimension | Rating | Source or client-input IDs | Rationale / limitation |
|---|---|---|---|
| Mission | | | |
| Program | | | |
| Population | | | |
| Geography | | | |
| Useful award size | | | |
| Timing | | | |
| Readiness/evidence | | | |
| Application/access path | | | |
| Conflict/restriction risk | | | |

#### External fact record

| Fact family | Verified finding or `UNKNOWN_AFTER_SEARCH` | Source IDs | Material caveat / recheck |
|---|---|---|---|
| Published eligibility | | | |
| Client-to-criteria comparison | | | |
| Stated funding interest | | | |
| Comparable-recipient evidence | | | |
| Award amount evidence and basis | | | |
| Deadline/cycle | | | |
| Application status and official channel | | | |
| Invitation/prequalification status | | | |
| Match, restrictions, conflicts, exclusions | | | |
| Conflicting evidence | | | |

Do not call one prior award a “typical grant size.” For comparable awards, record the recipient, program, date, published amount if available, source, and why the comparison is relevant.

#### Application path and relationship path

Keep these separate.

| Control | Allowed state | Evidence/notes |
|---|---|---|
| Application path | `OPEN`, `ROLLING`, `INVITATION_ONLY`, `PREQUALIFICATION_REQUIRED`, `CLOSED_REOPEN_UNKNOWN`, or `UNKNOWN` | |
| Relationship path | `NO_VERIFIED_PATH`, `OFFICIAL_PUBLIC_CHANNEL`, `CLIENT_REPORTED_UNCONFIRMED`, `CLIENT_PERMISSION_CONFIRMED`, or `UNKNOWN` | |

A public form, directory entry, portal, award, or ecosystem connection is not a warm relationship.

#### Readiness, decision, and next action

| Field | Entry |
|---|---|
| Evidence already available | `[client input IDs]` |
| Client evidence/readiness gaps | `[entry]` |
| Recommended client action | `[entry]` |
| Recommended owner role | `[entry]` |
| Target client decision date | `[YYYY-MM-DD / UNKNOWN]` |
| Dependencies | `[entry]` |
| Defer/no-go trigger | `[entry]` |
| Separate-scope trigger | `[when proposal or other work would require a new SOW]` |
| Calendar item IDs | `[CAL-###]` |

## DECIDED / WORKING DECISION — Evidence and uncertainty controls

### Provenance class

- `OFFICIAL_FUNDER`
- `AUTHORITATIVE_THIRD_PARTY`
- `SECONDARY_SOURCE`
- `CLIENT_SUPPLIED`
- `WELLRIDGE_INFERENCE`

### Verification status

- `VERIFIED_AS_OF`
- `CLIENT_CONFIRMED`
- `SECONDARY_ONLY`
- `UNKNOWN_AFTER_SEARCH`
- `CONFLICTING`
- `STALE_RECHECK_REQUIRED`
- `UNVERIFIED`

A Wellridge inference must cite its basis and remain labeled as inference. It cannot fill an external-fact field. `UNKNOWN_AFTER_SEARCH` should state what was checked.

## HYPOTHESIS TO TEST — Project-local source register

Use stable project-local source IDs rather than treating the repository-wide strategy source register as the client deliverable ledger.

| Source ID | Profiles/fields supported | Title/publisher | Provenance class | URL or controlled client-artifact ID | Publication/effective date | Access date | Page/section | Fact supported | Time-sensitive? | Recheck by | Verification status | Caveat/conflict | Verified by/date | Redistribution/license note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `FPR-001-S01` | `[entry]` | | | | | `[YYYY-MM-DD]` | | | | | | | | |

Requirements:

- Store publication/effective date separately from access date.
- Use ISO access dates on every row.
- Prefer official sources for eligibility, deadlines, application status, and official channels.
- Label secondary evidence and preserve conflicts.
- Use controlled artifact IDs for nonpublic client documents; do not copy sensitive content unnecessarily.
- Recheck every time-sensitive deadline and application status before delivery.
- Observe database, paywall, copyright, and redistribution restrictions.

## HYPOTHESIS TO TEST — Pursuit-calendar event ledger

Use one row per dated event or decision. A profile may have multiple calendar items.

| Calendar ID | Profile ID | Funder/program | Event type | Date/window | Precision | Date basis | Timezone | Source ID | Source access date | Recheck by | Recommendation | Client decision | Recommended client action | Owner role | Dependency/evidence gap | Status at delivery | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `CAL-001` | `FPR-001` | `[entry]` | `FUNDER_CYCLE_RECHECK` | `UNKNOWN` | `UNKNOWN` | `UNKNOWN` | `[if applicable]` | | | | `MONITOR` | `CLIENT_DECISION_PENDING` | `[entry]` | `[client role]` | `[gap]` | `OPEN_AT_DELIVERY` | |

### Date basis

- `OFFICIAL_CONFIRMED`
- `OFFICIAL_ROLLING`
- `PROJECTED_FROM_PRIOR_CYCLE`
- `WELLRIDGE_RECOMMENDED_INTERNAL`
- `CLIENT_SELECTED`
- `UNKNOWN`

### Date precision

- `DAY`
- `MONTH`
- `WINDOW`
- `ROLLING`
- `UNKNOWN`

### Event type

- `FUNDER_DEADLINE`
- `FUNDER_CYCLE_RECHECK`
- `CLIENT_GO_NO_GO`
- `ELIGIBILITY_CONFIRMATION`
- `RELATIONSHIP_PATH_DECISION`
- `READINESS_GAP_DUE`
- `DRAFT_START_RECOMMENDATION`
- `CLIENT_REVIEW_RECOMMENDATION`
- `SUBMISSION_TARGET_RECOMMENDATION`

Projected cycles are not confirmed deadlines. Calendar items are recommended client actions; they do not imply that Wellridge will monitor, cultivate, draft, submit, or chase inputs after delivery.

## DECIDED / WORKING DECISION — Change, exception, and transition control

Use namespaced IDs derived from the project ID.

| Change ID | Date | Trigger | Profiles/calendar/source rows affected | Scope/schedule/fee impact | Pricing gate ID/state | Decision owner | Disposition/evidence |
|---|---|---|---|---|---|---|---|
| `[FPS-YYYY-NNN-CHG-001]` | | | | | | | |

| Exception ID | Profile/calendar/source item | Severity | Description | Correction owner/due | Resolution evidence | Re-test/closeout |
|---|---|---|---|---|---|---|
| `[FPS-YYYY-NNN-EXC-001]` | | | | | | |

| Transition ID | From artifact/state | Proposed next scope | Required new authorization | New pricing/SOW IDs | Status/evidence |
|---|---|---|---|---|---|
| `[FPS-YYYY-NNN-TRN-001]` | Accepted Pipeline Sprint | `[proposal/readiness/other]` | New client request, Wellridge qualification/go-no-go, pricing gate, and signed SOW | | `NOT_AUTHORIZED` |

Client approval of a funder profile does not authorize proposal work. A new module requires its own current need, qualification, pricing, capacity, risk, and external-release decisions.

## DECIDED / WORKING DECISION — Internal QA worksheet

| QA control | Result | Reviewer/date | Exception/correction |
|---|---|---|---|
| Criteria lock and client-fact register complete | `[PASS/FAIL]` | | |
| Profile, source, client-input, and calendar IDs unique | | | |
| One profile per funder-program combination | | | |
| Only complete countable records included in promised total | | | |
| Missing permitted facts marked `UNKNOWN_AFTER_SEARCH` | | | |
| Every material external fact has source ID and access date | | | |
| Eligibility/deadline/application path uses official source or disclosed limitation | | | |
| Prior awards not mislabeled as typical amounts | | | |
| Projected cycles not shown as confirmed deadlines | | | |
| Conflicting evidence preserved | | | |
| Recommendations have stated rationale | | | |
| Profile and calendar IDs reconcile | | | |
| Date logic and timezones checked | | | |
| Client facts, external facts, and inference remain distinct | | | |
| Licensed-source redistribution reviewed | | | |
| No unnecessary PII, PHI, credentials, or banking data | | | |
| AI-assisted facts and calculations human-verified | | | |
| Felix final QA recorded | | | |

## DECIDED / WORKING DECISION — Acceptance boundary

Acceptance means only that:

- the locked number of countable profiles was delivered;
- required fields are complete or properly marked unknown;
- priority, exclusion, risk, evidence-gap, and next-action rationales are present;
- calendar entries reconcile to profiles;
- sources and access dates are included; and
- files open and contain no known Wellridge defect.

Acceptance does not mean confirmed eligibility, funder interest, invitation, award probability, proposal readiness, or authorization for Wellridge to contact or submit.

## DECIDED / WORKING DECISION — Data, AI, and human review

- Use minimum-necessary organization-level information.
- Keep PII, PHI, credentials, banking data, and protected client material out of this template unless separately authorized and secured.
- AI may assist discovery, comparison, deduplication, drafting, and checklist review.
- AI may not establish eligibility, deadlines, award sizes, relationships, legal meaning, fit, ranking, or final recommendations independently.
- Human reviewers verify every material fact, source, calculation, profile, and calendar entry.
- The client owns its facts and pursuit decisions; Felix owns final Wellridge QA.

## EXPLICITLY OUT OF SCOPE / REJECTED

- Calling a funder profile a Wellridge qualified opportunity
- Grant guarantees, award probabilities, or unsupported confidence scores
- Counting directories, duplicates, stale records, or materially incomplete profiles
- Treating old cycles, aggregate announcements, or one prior award as a current typical amount
- Converting blank fields into “no” instead of recording an unknown
- Combining client assertions, external facts, and Wellridge inference without labels
- Calling a public channel or ecosystem adjacency a warm relationship
- Implying ongoing monitoring, cultivation, proposal drafting, submission, or administration
- Redistributing licensed or protected database content without permission
- Letting acceptance imply legal eligibility or funder confirmation

## OPEN QUESTION

- Final source-recency standard by funder and fact type
- Final ranking criteria and priority-tier method
- Final client-facing file format and permitted licensed-data fields
- Whether contact information is limited to official application channels
- Standard recheck window before client use after delivery
- Secure storage, access, retention, and deletion rules for completed workbooks
