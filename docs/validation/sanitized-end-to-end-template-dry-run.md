# Sanitized end-to-end pricing and delivery-template dry run

Last updated: July 12, 2026

**Status: HYPOTHESIS TO TEST — Every organization, person, funder, source, solicitation, award, date, price, cost, deadline, result, and approval in this report is a synthetic test fixture. This is not market evidence, a quote, a SOW, client work, delivery proof, compliance certification, scope approval, or authorization for external action. On July 12, 2026, Felix provisionally approved the contribution, realization, contingency/stress, overhead, and project-economic-surplus guardrails described below. Those later operating decisions do not validate the synthetic scenarios or approve any other remaining threshold.**

All records use `run_mode=SIMULATION_ONLY`, `external_release_status=NOT_AUTHORIZED`, and blank approval fields. A structural comparison pass remains `HOLD_INPUTS`; the simulation cannot become `INTERNAL_SOW_READY`.

## DECIDED / WORKING DECISION — Test objective

Exercise the four reusable controls as one fictional lifecycle and determine whether they keep these states separate:

1. research-qualified funder profile;
2. client pursuit decision;
3. Wellridge sales qualification and scope authorization;
4. proposal requirements, approval, and client-only submission;
5. award, executed contract, and notice to proceed;
6. program deliverable submission and acceptance;
7. invoice eligibility, recognized-revenue assumption, and cash collection; and
8. contribution, founder labor, true project economics, and cash exposure.

The pricing calculations are stored in the machine-checkable [sanitized pricing dry-run CSV](../data/sanitized-pricing-dry-run.csv).

## HYPOTHESIS TO TEST — Synthetic fixture

| Fixture element | Synthetic value |
|---|---|
| Lifecycle trace ID | `DRYRUN-2099-001` |
| Client | `Example Access Collaborative` |
| Program | `Resource Navigation Operations Pilot` |
| Geography | `Example County` |
| Funder A | `Sample Community Capacity Fund` |
| Funder B | `Illustrative Regional Opportunity Fund` |
| Solicitation | `SYN-RFP-2099-01` |
| Award/agreement | `SYN-AWARD-2099-01` |
| Run mode | `SIMULATION_ONLY` |
| External release | `NOT_AUTHORIZED` |

These labels are intentionally generic and fictional. Synthetic source fixtures use controlled IDs rather than URLs and do not belong in the repository's authoritative source register.

## DECIDED / WORKING DECISION — Cross-artifact trace

| Lifecycle stage | Primary artifact | IDs |
|---|---|---|
| Pipeline pricing | [Pricing gate](../templates/internal-pricing-gate.md) | `DRY-PRICE-001-B`, `DRY-PRICE-001-S`, `DRY-FPS-001` |
| Funding screen | [Funding Pipeline Sprint workbook](../templates/nonprofit-funding-pipeline-delivery-workbook.md) | `DRY-FPS-001`, `DRY-FPS-001-FPR-001`–`003`, `DRY-FPS-001-CAL-001`–`004` |
| Proposal pricing | Pricing gate | `DRY-PRICE-002-B`, `DRY-PRICE-002-S`, `DRY-PRO-001` |
| Proposal control | [Proposal compliance matrix](../templates/proposal-compliance-matrix.md) | `DRY-PCM-001`, `DRY-PCM-001-REQ-001`–`006`, `DRY-PCM-001-CHG-001`, `DRY-PCM-001-EXC-001` |
| Program pricing | Pricing gate | `DRY-PRICE-003-B`, `DRY-PRICE-003-S`, `DRY-PLC-001` |
| Program control | [Program-launch compliance calendar](../templates/program-launch-compliance-calendar.md) | `DRY-PCC-001`, `DRY-PCC-001-XW-001`, `DRY-PCC-001-CAL-001`–`007`, `DRY-PCC-001-TRG-001`, `DRY-PCC-001-CHG-001`, `DRY-PCC-001-EXC-001` |

Namespaced IDs are required because generic `SRC-001`, `CAL-001`, `CHG-001`, and `EXC-001` collide across artifacts.

## DECIDED / WORKING DECISION — Provisional contribution guardrails

Felix approved the following as provisional internal guardrails on July 12, 2026. Core contribution is `(professional-service fee - owned-scope direct cash delivery cost) / professional-service fee`, before Felix labor and overhead; pass-through is excluded. The base value is the normal estimating target. A below-target result requires explicit review, and a result below the stress floor requires repricing or rescoping unless Felix approves a named learning exception.

| Offer module | Base target | Stress floor | Decision status |
|---|---:|---:|---|
| Pipeline core contribution | 80% | 75% | `DECIDED / WORKING DECISION — PROVISIONAL` |
| Proposal core contribution | 70% | 65% | `DECIDED / WORKING DECISION — PROVISIONAL` |
| Program-launch core contribution | 55% | 50% | `DECIDED / WORKING DECISION — PROVISIONAL` |

The approval applies to the internal policy reference, not to any synthetic project row. The dry-run CSV is preserved as the predecision simulation snapshot, so its scenario-level status and notes are not retroactively rewritten; it retains blank project-approval fields, `approval_status=NOT_REQUESTED`, and `external_release_status=NOT_AUTHORIZED`. Current policy status is controlled by the [decision log](../DECISION_LOG.md) and [pricing gate](../templates/internal-pricing-gate.md).

## DECIDED / WORKING DECISION — Provisional realization references

Felix approved $125 per total effective hour as the base target and $110 per total effective hour as the stress floor on July 12, 2026. Use the base value for normal estimating, flag results from $110 to below $125 for explicit review, and reprice or rescope below $110 unless Felix approves a named learning exception. Review the references after the first three closed authorized scopes per module.

## DECIDED / WORKING DECISION — Provisional contingency and stress method

Apply 20% planned contingency once to each role's base hours; do not add it again as a fee line. Require a named stress scenario for every scope. When credible evidence is unavailable, use stress hours of at least 125% of the contingency-loaded plan. The stress scenario is an internal viability test against the $110 realization floor and the other financial gates, not an automatic client charge. The preserved dry-run stress rows are named synthetic scenarios; the fallback does not retroactively rewrite them. Review the method after the first three closed authorized scopes per module.

## DECIDED / WORKING DECISION — Provisional overhead proxies

Use 16% of professional-service fee in the base case and 25% in stress. Exclude pass-through and any amount already classified as direct delivery cost, fixed-staff allocation, Felix replacement labor, or risk allowance. The stress proxy is an internal project-pricing sensitivity, not an automatic client charge or a worst-case company-overhead forecast. Replace or segment the proxies when trailing actual overhead, recognized revenue, and productive-capacity data are credible.

## DECIDED / WORKING DECISION — Provisional project-economic-surplus references

Use `F - DC - SA - FV - O - R`. Require at least 10% of professional-service fee in base and at least zero in stress. A base result below 10% or stress result below zero requires repricing, rescoping, or a named Felix-approved learning exception. This internal proxy includes imputed Felix replacement labor but is not accounting profit, cash, taxable income, or distributable funds.

## HYPOTHESIS TO TEST — Remaining pricing comparison package

No value below is approved. `approved_value`, `approver`, and `approval_date` remain blank in every synthetic record.

| Candidate control | Base comparison | Stress comparison | Internal-model basis | Decision status |
|---|---:|---:|---|---|
| Owned-scope peak cash exposure | lesser of 10% of `F`, 25% of project-allocable liquidity, or reserve headroom | same | Protects the modeled $5,000 launch reserve and scales by scope/liquidity | `HYPOTHESIS TO TEST` |
| Unprotected pass-through/vendor exposure | zero | zero | Existing no-fronting boundary | `HYPOTHESIS TO TEST` |
| Expected collection beyond 45 days | named reserve or exception | — | Existing 45–60-day cash-gap planning assumption | `HYPOTHESIS TO TEST` |
| Expected collection beyond 60 days | dedicated financing or stronger contract protection | — | Existing cash-risk boundary | `HYPOTHESIS TO TEST` |

**DECIDED / WORKING DECISION — Primary realization definition:** use `service-fee realization = F / total effective hours`, where `F` excludes pass-through and `H` includes discovery, research, production, meetings, coordination, revisions, QA, and unbilled project administration across all delivery roles. Continue reporting `(F - DC) / H` as **cash contribution per effective hour**, a separate diagnostic. Risk is counted once in the project-economic-surplus calculation, not subtracted again from cash contribution per hour. The provisional $125/hour base and $110/hour stress references apply only to service-fee realization.

The conservative [financial scenario data](../data/financial-scenarios.csv) models overhead at 16% of revenue in 2027, about 9.7–13.0% in 2028–2031, and 33.3% during the startup half-year. The approved 25% stress proxy therefore is not a worst-case startup-company ratio. Keep business-level runway separate and replace the project proxies with actual overhead and realistic productive-capacity data when available.

### Scenario results

| Scope/case | Fee | Margin | `F / H` | Economic surplus | Peak exposure / candidate limit | Comparison result | Operational state |
|---|---:|---:|---:|---:|---:|---|---|
| Pipeline base | $4,000 | 82.5% | $144.93 | $1,810 / 45.3% | $0 / $400 | Passes applicable references | `HOLD_INPUTS` |
| Pipeline stress | $4,000 | 77.5% | $129.03 | $1,075 / 26.9% | $0 / $400 | Passes applicable references | `HOLD_INPUTS` |
| Proposal base | $8,000 | 77.5% | $160.00 | $2,020 / 25.3% | $0 / $800 | Passes applicable references | `HOLD_INPUTS` |
| Proposal stress | $8,000 | 70.0% | $133.33 | $0 / 0% | $1,000 / $800 | Fails cash; economics are fragile | `REPRICE_OR_RESCOPE` |
| Program base | $25,000 | 64.0% | $185.19 | $7,000 / 28.0% | $1,500 / $2,500 | Passes applicable references | `HOLD_INPUTS` |
| Program stress | $25,000 | 56.0% | $161.29 | $1,250 / 5.0% | $3,500 / $2,500 | Fails cash despite passing economic references | `REPRICE_OR_RESCOPE` |

Recognized revenue and cash are deliberately different in the program fixture: the model carries a $25,000 recognized-revenue planning assumption but only $7,500 of collected cash in the modeled period. The worksheet does not decide whether that recognition assumption is valid.

### Pricing conclusion

**DECIDED / WORKING DECISION — Provisional contribution package:** use the approved contribution target/floor pair for the first three authorized scope reviews in each module, then compare it with actual direct cost, hours, rework, acceptance, and collection. The guardrails are internal and provisional; they are not validated permanent policy, public pricing, or release authorization.

**DECIDED / WORKING DECISION — Provisional realization package:** use the approved `F / H` definition with the $125/hour base target and $110/hour stress floor for the first three closed authorized scope reviews per module. These are internal guardrails, not public hourly prices or proof of market acceptance.

**DECIDED / WORKING DECISION — Provisional contingency package:** use 20% planned role-hour contingency once, a named stress scenario, and the 25%-above-plan fallback only when better stress evidence is unavailable. Keep the stress case out of the client fee as a separate automatic line and test it internally.

**DECIDED / WORKING DECISION — Provisional overhead package:** use 16% of professional-service fee in base and 25% in stress, exclude pass-through and duplicate classifications, and keep company-level runway separate.

**DECIDED / WORKING DECISION — Provisional project-economic-surplus package:** require at least 10% of professional-service fee in base and at least zero in stress after direct cost, fixed-staff allocation, Felix replacement labor, overhead, and risk.

**HYPOTHESIS TO TEST — Remaining package:** working-capital exposure, pass-through protection, and collection-timing rules remain unapproved hypotheses.

**OPEN QUESTION — Learning exception:** no lower automatic exception floor is proposed. Any intentional threshold miss should quantify the investment, learning objective, maximum loss/hours/cash, prohibited risk classes, approver, expiration, and post-close review.

## HYPOTHESIS TO TEST — Stage 1: Funding Pipeline Sprint workbook

### Criteria lock and client facts

| Control | Synthetic entry |
|---|---|
| Project / trace / run mode | `DRY-FPS-001` / `DRYRUN-2099-001` / `SIMULATION_ONLY` |
| Primary program | Resource Navigation Operations Pilot |
| Geography / horizon | Example County / six months |
| Test-only profile commitment | one countable profile plus two exception/control records |
| Client input `CI-SIM-001` | synthetic organization-status artifact; `CLIENT_ARTIFACT_SUPPORTED` |
| Client input `CI-SIM-002` | synthetic matching-fund source; `CLIENT_PENDING_CONFIRMATION` |
| Pricing gate | `DRY-PRICE-001-B/S`; `HOLD_INPUTS` |

### Profile index result

| Profile | Countability | Recommendation | Client decision | Key control |
|---|---|---|---|---|
| `DRY-FPS-001-FPR-001` | `RQ_PROFILE_COUNTABLE` for structural testing only | `PURSUE` | `CLIENT_DECISION_PENDING` | Synthetic current guide and amount evidence are complete; match remains a visible client gap. |
| `DRY-FPS-001-FPR-002` | `RECHECK_REQUIRED_NOT_COUNTABLE` | `MONITOR` | `CLIENT_DEFERRED` | Only a prior-cycle fixture exists; current deadline and open status remain unknown. |
| `DRY-FPS-001-FPR-003` | `OUTSIDE_LOCKED_CRITERIA` | `DO_NOT_PURSUE` | `CLIENT_DECLINED` | Synthetic geography conflicts with the criteria lock. |

Accepted count is one, not three. Directory presence, stale cycles, exclusions, and incomplete records do not satisfy the promised profile count.

### Project-local source fixtures

| Source | Test class | Supports | Production meaning |
|---|---|---|---|
| `DRY-FPS-001-SRC-001` | `SYNTHETIC_TEST_FIXTURE` | fictional current funder guide | No external fact; never migrate to a client file. |
| `DRY-FPS-001-SRC-002` | `SYNTHETIC_TEST_FIXTURE` | fictional comparable-award table | Does not prove a typical amount. |
| `CI-SIM-001/002` | synthetic client inputs | client-to-criteria comparison | Remain separate from external facts. |

### Pursuit-calendar result

| Calendar item | Date basis | Expected control |
|---|---|---|
| `DRY-FPS-001-CAL-001` | `CLIENT_SELECTED` | match-source confirmation before go/no-go |
| `DRY-FPS-001-CAL-002` | `OFFICIAL_CONFIRMED` within the fixture | fictional deadline, clearly marked simulation-only |
| `DRY-FPS-001-CAL-003` | `PROJECTED_FROM_PRIOR_CYCLE` | never displayed as a confirmed deadline |
| `DRY-FPS-001-CAL-004` | `WELLRIDGE_RECOMMENDED_INTERNAL` | separate-scope decision; no proposal work authorized |

**Dry-run result:** the workbook preserves profile countability, source uncertainty, client facts, and calendar reconciliation. Client approval of a profile would still not authorize Wellridge outreach or a proposal module.

## HYPOTHESIS TO TEST — Stage 2: Proposal compliance matrix

### Control state

| Control | Synthetic entry |
|---|---|
| Matrix / trace / run mode | `DRY-PCM-001` / `DRYRUN-2099-001` / `SIMULATION_ONLY` |
| Parent artifact | new synthetic client request after the Pipeline Sprint; not an automatic transition |
| Pricing gate | `DRY-PRICE-002-B/S` |
| Authorized submitter | `CLIENT_ONLY` |
| External release | `NOT_AUTHORIZED` |

### Requirement and exception exercise

| Requirement | Owner | Test progression |
|---|---|---|
| `DRY-PCM-001-REQ-001` eligibility representation | `CLIENT` | human source verification → client review; Wellridge does not certify |
| `DRY-PCM-001-REQ-002` narrative/page limit | `WELLRIDGE` | `QA_READY` → `REOPENED_CHANGE_IMPACT` after addendum |
| `DRY-PCM-001-REQ-003` budget certification | `CLIENT` | `INPUT_BLOCKED`; cannot be cleared by narrative completion |
| `DRY-PCM-001-REQ-004` aggregate-outcome method | `NAMED_SPECIALIST` | `SPECIALIST_REVIEW`; evaluator owns methodology |
| `DRY-PCM-001-REQ-005` signature | `CLIENT` | missing at internal final creates `CRITICAL` exception |
| `DRY-PCM-001-REQ-006` partner annex | `SHARED` | newly added by synthetic addendum; source and attachment manifest reopen |

`DRY-PCM-001-CHG-001` reduces the page limit and adds the partner annex. It reopens affected rows, attachment controls, schedule, and the pricing gate. `DRY-PCM-001-EXC-001` blocks a clean handoff until the synthetic client signer resolves the missing-signature exception.

**Dry-run result:** base pricing passes candidate comparisons, but the stress case reaches zero economic surplus and exceeds the candidate cash cap by $200. The operational state is `REPRICE_OR_RESCOPE`; client-only submission, receipt, and any later award remain separate fictional events.

## HYPOTHESIS TO TEST — Stage 3: Program-launch compliance calendar

### Award-to-launch boundary

| Control | Synthetic entry |
|---|---|
| Calendar / trace / run mode | `DRY-PCC-001` / `DRYRUN-2099-001` / `SIMULATION_ONLY` |
| Parent artifact | `SYN-AWARD-2099-01` and `DRY-PCM-001` |
| Award date / effective date / NTP | three separate fictional dates |
| Work-start state | `TRIGGER_NOT_YET_OCCURRED` until synthetic NTP |
| Pricing gate | `DRY-PRICE-003-B/S` |

The crosswalk `DRY-PCC-001-XW-001` maps the proposal's aggregate-reporting promise to the executed synthetic agreement. A changed metric definition becomes a contract/calendar change rather than being inherited silently.

### First-90-day exercise

| Calendar item | Obligation | Test state |
|---|---|---|
| `DRY-PCC-001-CAL-001` | notice-to-proceed/work-start authority | `TRIGGER_NOT_YET_OCCURRED`, then `CLOSED`; no cost before NTP |
| `DRY-PCC-001-CAL-002` | governance/approval map | `ACCEPTED` in the fixture |
| `DRY-PCC-001-CAL-003` | metric-definition baseline | `INPUT_BLOCKED` / `AT_RISK` pending evaluator/client resolution |
| `DRY-PCC-001-CAL-004` | partner aggregate-data input | `PAST_DUE`, then escalated through trigger control |
| `DRY-PCC-001-CAL-005` | first aggregate report | `SUBMITTED_PENDING_ACCEPTANCE`, then separately `ACCEPTED` |
| `DRY-PCC-001-CAL-006` | invoice linked to report acceptance | not eligible until acceptance; collection recorded later |
| `DRY-PCC-001-CAL-007` | optional-period kickoff | `TRIGGER_NOT_YET_OCCURRED`; not exercised backlog |

`DRY-PCC-001-EXC-001` records conflicting synthetic definitions of “participant served.” The source remains `CONFLICT_REVIEW_REQUIRED`; Wellridge does not choose the definition. `DRY-PCC-001-CHG-001` records the accountable client/evaluator resolution. `DRY-PCC-001-TRG-001` shows how a late partner input affects report, acceptance, invoice, and cash timing.

**Dry-run result:** base pricing passes candidate comparisons. Stress margin, realization, and economic surplus still pass, but $3,500 peak exposure exceeds the $2,500 candidate limit. The scope remains `REPRICE_OR_RESCOPE` until payment timing, vendor exposure, or funded protection changes.

## DECIDED / WORKING DECISION — Control improvements produced by the dry run

The reusable templates were updated to add:

- shared `lifecycle_trace_id`, `parent_artifact_id`, and `run_mode` fields;
- pricing-gate IDs on downstream artifacts and change logs;
- namespaced control IDs;
- a Pipeline Sprint change, exception, and transition ledger;
- an award-to-launch crosswalk; and
- explicit simulation rules preventing a fictional record from becoming internally SOW-ready.

## HYPOTHESIS TO TEST — What the dry run supports

- The schemas can separate client inputs, synthetic external facts, and Wellridge inference.
- Incomplete, stale, duplicate, or excluded funder records do not count toward acceptance.
- Addenda reopen requirements, attachments, schedule, and price instead of disappearing into revision work.
- Submission authority, specialist judgment, and client approval stay with named humans.
- Award, contract, NTP, submission, acceptance, invoice, recognized revenue, and cash remain distinct.
- Margin and realization can pass while cash protection fails.
- Pass-through and gross billings cannot substitute for retained service economics.

## OPEN QUESTION — What remains unproven

- Buyer willingness to pay any modeled fee
- Actual Felix, analyst, coordinator, specialist, and revision hours
- Actual contractor rates and availability
- Whether actual delivery supports retaining or segmenting the provisional realization references by channel or role mix
- Actual overhead, productive capacity, and allocation method
- Appropriate risk allowance by channel and contract type
- Permanent contribution policy after the provisional guardrails are tested, and the still-unapproved cash-exposure policy
- Secure live control plane for wide matrices and confidential completed artifacts
- Contract, accounting, privacy, security, and specialist-review procedures
- Whether the templates remain usable under real time pressure

The wide Markdown tables are durable schemas, not necessarily the final live delivery interface. A spreadsheet or project-control system may be more usable, but selecting or creating one requires a separate approved implementation decision.

## EXPLICITLY OUT OF SCOPE / REJECTED

- Treating this simulation as a case study, price validation, client proof, or market evidence
- Copying synthetic names, dates, sources, approvals, or outcomes into public or client-facing claims
- Populating approval fields or setting `INTERNAL_SOW_READY`
- Contacting a real funder, buyer, partner, agency, or reference
- Creating a portal account, submitting, invoicing, recognizing actual revenue, or collecting cash
- Treating a remaining candidate threshold as decided, or treating the provisional contribution guardrails as validated permanent policy
- Deploying, committing, pushing, purchasing, filing, or changing an external system

## OPEN QUESTION — Remaining human decision package

**DECIDED / WORKING DECISION — Completed July 12, 2026:** contribution, realization, contingency/stress, overhead, and project-economic-surplus guardrails were approved provisionally.

Felix may still approve, modify, or defer each remaining candidate independently:

1. the owned-scope cash-exposure formula and zero unprotected pass-through rule; and
2. the rule for 45–60+ day collection exposure.

Until those reviews occur, every remaining value stays `HYPOTHESIS TO TEST`. All synthetic project-approval fields remain blank, and external release remains `NOT_AUTHORIZED`.
