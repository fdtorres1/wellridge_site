# Internal template — Project pricing and cash gate

Last updated: July 12, 2026

**Status: HYPOTHESIS TO TEST — Reusable internal estimating worksheet. It is not a public price list, accounting policy, quote, statement of work, contract approval, outreach authorization, or permission to incur cost. Human commercial, contract, finance, security, clinical, and technical review remains required when triggered.**

Use a separate completed copy for every proposed task and every material rescope. Keep confidential client-specific estimates in an approved secure control plane; the repository should retain only the blank template, sanitized examples, and approved general rules.

## DECIDED / WORKING DECISION — Mandatory use

Do not call a scope internally ready for a statement of work until this gate shows:

1. one primary offer and module;
2. bounded deliverables, inputs, responsibilities, revisions, acceptance, and change triggers;
3. role hours and contingency without double counting;
4. professional fee, pass-through, direct cash cost, imputed founder labor, overhead, and risk separately;
5. contribution, effective-hour realization, and project economic surplus separately;
6. invoice, collection, acceptance, and working-capital timing separately;
7. capacity, contract, data, specialist, conflict, and integrity gates; and
8. a dated decision and accountable approver.

A numerical pass does not authorize external release. `external_release_status` defaults to `NOT_AUTHORIZED` until Felix gives separate, scope-specific approval.

## DECIDED / WORKING DECISION — Controlled operational states

These operational states do not replace the repository's four decision-status labels.

| State | Meaning |
|---|---|
| `DRAFT` | Estimating has begun; no readiness conclusion exists. |
| `HOLD_INPUTS` | A material scope, cost, hour, term, authority, or risk input is unknown. |
| `REPRICE_OR_RESCOPE` | The current combination fails a numeric, capacity, cash, or boundary gate. |
| `INTERNAL_SOW_READY` | All required internal gates pass; external release remains separately controlled. |
| `INTERNAL_SOW_READY_WITH_EXCEPTION` | A named, time-limited learning exception is approved and quantified. |
| `NO_GO` | A hard exclusion or unacceptable risk prevents the scope. |
| `CLOSED_ACTUALS` | Delivery and collection are complete and planned-versus-actual data is recorded. |

## DECIDED / WORKING DECISION — Definitions

| Term | Required meaning |
|---|---|
| Professional-service fee (`F`) | Wellridge's fee after discount, excluding separately identified pass-through or reimbursable billing. |
| Pass-through billing (`PB`) | Third-party cost billed separately. It is gross billing, not retained economic value. |
| Pass-through cost (`PC`) | Cash paid to the pass-through vendor. Any vendor-management compensation belongs transparently in `F`. |
| Gross billings (`B`) | `F + PB`; do not call this retained revenue or profit. |
| Recognized revenue | Amount recognized under the adopted accounting policy. This worksheet records the planning assumption but does not determine accounting treatment. |
| Cash collected | Cleared client receipts. It is not the same as bookings, billings, or recognized revenue. |
| Owned-scope direct cash delivery cost (`DC`) | Project contractors, project-only tools, travel, production, or other cash cost consumed by Wellridge's owned work, excluding pass-through. |
| Fixed-staff allocation (`SA`) | Reasonable project allocation for non-founder staff already carried as fixed cost. Keep separate from direct contractor cash cost. |
| Felix replacement value (`FV`) | Imputed market value of Felix's project labor. It is a cost of delivery even when no separate paycheck is issued. |
| Overhead allowance (`O`) | Project-pricing proxy for general systems, insurance, legal, accounting, administration, and other non-project-specific operating cost. Exclude pass-through and anything recorded in `DC`, `SA`, `FV`, or `R`. |
| Risk/capital allowance (`R`) | Explicit allowance for unusual coordination, collection, warranty, working-capital, or contract risk not captured elsewhere. |
| Total effective hours (`H`) | All attributable discovery, delivery, meetings, coordination, revision, QA, and administration hours across roles, after contingency. |
| Core contribution | `F - DC`; this remains before Felix labor, fixed-staff allocation, overhead, and retained reserves. It is not profit. |
| Project economic surplus proxy | `F - DC - SA - FV - O - R`; still subject to accounting, tax, collection, and company-level allocations. |

## HYPOTHESIS TO TEST — Control header

| Field | Entry |
|---|---|
| Estimate ID | `[PRICE-YYYY-NNN]` |
| Lifecycle trace ID | `[shared cross-artifact ID]` |
| Parent artifact ID | `[prior scope, opportunity, proposal, or award ID / NONE]` |
| Run mode | `[PRODUCTION_CONTROL / SIMULATION_ONLY]` |
| Version / prepared date | `[v# / YYYY-MM-DD]` |
| Account or opportunity ID | `[ID / confidential reference]` |
| Primary buyer problem | `[one problem only]` |
| Offer | `[Pipeline Sprint / Proposal & Program Operations Support]` |
| Primary module | `[Pipeline / Proposal / Program launch-compliance]` |
| Channel | `[direct nonprofit / consultant white-label / prime subcontract / agency direct]` |
| Contract type | `[fixed fee / milestone / task order / other]` |
| Scope-card and SOW source | `[controlled path/version]` |
| Estimate validity date | `[YYYY-MM-DD]` |
| Prepared by / reviewed by | `[role / role]` |
| Operational state | `DRAFT` |
| External release status | `NOT_AUTHORIZED` |

`SIMULATION_ONLY` records may compare provisional guardrails and candidate references but cannot populate project-approval fields, become `INTERNAL_SOW_READY`, or authorize external release. Use namespaced child IDs so pricing, source, calendar, change, and exception records do not collide across artifacts.

### Input-basis labels

Every material estimate should use one label and identify its evidence:

| Label | Meaning |
|---|---|
| `CLIENT_CONFIRMED` | An accountable client role confirmed the input. |
| `VENDOR_QUOTE` | A dated vendor or subcontractor quote supports the input. |
| `HISTORICAL_ACTUAL` | A comparable completed project supports the input and its limits are stated. |
| `CONTRACT_DOCUMENT` | A controlling solicitation, agreement, task order, or amendment supports the input. |
| `HYPOTHESIS` | Internal estimate requiring validation. |
| `UNKNOWN` | Not yet evidenced; any material `UNKNOWN` forces `HOLD_INPUTS`. |

## DECIDED / WORKING DECISION — Scope lock

| Scope control | Locked entry | Basis | Gate result |
|---|---|---|---|
| One primary problem and module | `[entry]` | `[basis]` | `[PASS/FAIL/UNKNOWN]` |
| Deliverables and quantities | `[entry]` | `[basis]` | |
| Acceptance criteria and approver | `[entry]` | `[basis]` | |
| Client inputs and due dates | `[entry]` | `[basis]` | |
| Meetings/interviews | `[number and duration]` | `[basis]` | |
| Revision cycles and correction rule | `[entry]` | `[basis]` | |
| Start conditions | `[entry]` | `[basis]` | |
| Internal final / external deadline | `[date/time/timezone]` | `[basis]` | |
| Rush status and buffer | `[entry]` | `[basis]` | |
| Wellridge-owned responsibilities | `[entry]` | `[basis]` | |
| Client/partner/specialist responsibilities | `[entry]` | `[basis]` | |
| Exclusions | `[entry]` | `[basis]` | |
| Data/security/PHI posture | `[entry]` | `[basis]` | |
| Change-order triggers | `[entry]` | `[basis]` | |

## DECIDED / WORKING DECISION — Contingency and stress method

Apply 20% planned contingency once to each role's base hours. Do not add the same contingency again as a fee line. Every pricing gate must also contain a named stress scenario showing the additional hours and costs caused by specific revision, input, coordination, specialist, production, delay, or defect risks. When credible evidence is unavailable, use stress hours of at least 125% of the contingency-loaded plan.

The stress scenario is an internal viability test, not an automatic client charge. Test its hours against the provisional $110 realization floor and carry its cost effects through contribution, project economic surplus, capacity, and cash exposure. Use actual named-event estimates instead of the 25% fallback when credible evidence exists. Review the method after the first three closed authorized scopes per module.

## DECIDED / WORKING DECISION — Provisional overhead proxies

Use `O_base = 16% × F` and `O_stress = 25% × F`, where `F` is professional-service fee excluding pass-through. Apply each proxy once. Overhead includes general systems, insurance, legal, accounting, administration, and other non-project-specific operating cost. Do not include project delivery cost, fixed-staff allocation, Felix replacement labor, pass-through, or risk already recorded elsewhere.

The stress proxy is an internal project-pricing sensitivity, not an automatic client charge or a worst-case company-overhead forecast. Keep the company-level runway and actual operating-expense review separate; the startup financial model's 33.3% overhead ratio is higher than the 25% project stress proxy. Replace or segment these proxies when trailing actual overhead, recognized revenue, and productive-capacity data are credible, and review no later than the first three closed authorized scopes and first quarterly reforecast.

## DECIDED / WORKING DECISION — Provisional project-economic-surplus references

Calculate project economic surplus as `F - DC - SA - FV - O - R`. Require at least `10% × F` in the base case and at least zero in stress. A base result below 10% or a stress result below zero requires `REPRICE_OR_RESCOPE` unless Felix approves a named learning exception with quantified investment, objective, maximum loss/hours/cash, expiration, and post-project review.

This is an internal project-pricing proxy after direct cost, fixed-staff allocation, imputed Felix replacement labor, overhead, and risk. It is not accounting profit, cash collected, taxable income, distributable cash, or a substitute for company-level reserves. Review after the first three closed authorized scopes per module.

## HYPOTHESIS TO TEST — Role-hour and labor inputs

| Role | Base hours | Contingency % | Planned hours | Cash-cost rate or fixed cost | Direct cash cost | Imputed value rate | Imputed labor value | Classification | Capacity confirmed? |
|---|---:|---:|---:|---:|---:|---:|---:|---|---|
| Felix | | | | `N/A` | `0` | | | `FV` | |
| Research analyst | | | | | | `[only if unpaid/internal]` | | `[DC or SA]` | |
| Compliance/project coordinator | | | | | | `[only if unpaid/internal]` | | `[DC or SA]` | |
| Editor/production specialist | | | | | | | | `[DC or SA]` | |
| Clinical/technical/evaluation specialist | | | | | | | | `[DC or SA]` | |
| Other | | | | | | | | | |
| **Total** | | | **`H`** | | **role cash cost** | | **imputed labor** | | |

```text
planned role hours = base role hours × 1.20
H_plan = sum of planned role hours

H_stress = H_plan + named incremental stress hours
fallback when credible stress evidence is absent: H_stress = H_plan × 1.25
```

Use `H_plan` in the base column and `H_stress` in the stress column. **DECIDED / WORKING DECISION — `H` definition:** total effective hours include discovery, research, production, meetings, coordination, revisions, QA, and unbilled project administration across every delivery role. Do not subtract paid contractor labor twice. Its cash cost belongs in `DC`; its hours still belong in `H` for capacity and realization analysis, but no second imputed value is added unless a distinct unpaid/internal cost exists. Fixed-staff allocation must likewise avoid duplicating direct cash cost or an imputed labor value.

## HYPOTHESIS TO TEST — Fee, cost, and economic inputs

| Variable | Base case | Stress case | Input basis and evidence |
|---|---:|---:|---|
| List professional fee | | | |
| Discount or learning investment | | | |
| **Professional-service fee after discount (`F`)** | | | |
| Pass-through billing (`PB`) | | | |
| Pass-through vendor cost (`PC`) | | | |
| Owned-scope direct cash cost (`DC`) | | | |
| Fixed-staff allocation (`SA`) | | | |
| Felix replacement value (`FV`) | | | |
| Overhead allowance (`O`) | `16% × F` | `25% × F` | `[provisional proxy; exclude pass-through and duplicate classifications]` |
| Risk/capital allowance (`R`) | | | |
| Desired project economic surplus | `10% × F` | `0` | `[provisional reference; not accounting profit]` |
| Total effective hours (`H`) | | | |
| Planned recognized-revenue amount and timing | | | `[planning assumption only; accounting review required]` |
| Planned cash collected in delivery period | | | `[must reconcile to collection schedule]` |
| Applicable core-contribution guardrail | | | `[module / base target / stress floor]` |
| Applicable realization guardrail | | | `[$125 base target / $110 stress floor]` |
| Available project-allocable liquidity | | | |

Include merchant fees, taxes, retainage, optional periods, shared software, licensed-data restrictions, travel, rush changes, client-delay risk, and cancellation exposure where applicable. Do not count an unexercised option as fee, backlog, or cash.

## DECIDED / WORKING DECISION — Required calculations

Calculate both base and stress cases.

```text
gross billings B = F + PB

core contribution dollars = F - DC
core contribution margin = (F - DC) / F

gross-billings contribution dollars = B - DC - PC
gross-billings contribution margin = (B - DC - PC) / B

pass-through share = PB / B

service-fee realization = F / H
cash contribution per effective hour = (F - DC) / H

project economic surplus proxy = F - DC - SA - FV - O - R
base project-economic-surplus reference = F × 0.10
stress project-economic-surplus floor = 0

O_base = F × 0.16
O_stress = F × 0.25

base realization-boundary fee = H_plan × $125
stress realization-boundary fee = H_stress × $110
rate-boundary fee = maximum of base and stress realization-boundary fees

contribution-boundary fee = DC / (1 - selected core-contribution boundary)
economic-boundary fee when overhead is entered as dollars
= DC + SA + FV + O + R + desired project economic surplus

economic-boundary fee with the provisional overhead percentage
= (DC + SA + FV + R + desired dollar surplus) / (1 - overhead percentage)

base economic-boundary fee with 16% overhead and 10% surplus
= (DC_base + SA_base + FV_base + R_base) / (1 - 0.16 - 0.10)

stress economic-boundary fee with 25% overhead and zero surplus
= (DC_stress + SA_stress + FV_stress + R_stress) / (1 - 0.25)

required professional-service fee
= maximum of rate-boundary fee, contribution-boundary fee, and economic-boundary fee
```

State whether the contribution-boundary calculation uses the provisional base target or stress floor. If the selected boundary is 100% or more, the formula is invalid. If `H`, `F`, or material cost is unknown, stop at `HOLD_INPUTS`. Pass-through billing cannot satisfy the professional-service fee boundary.

Use the percentage-based economic boundary because the provisional overhead proxy is defined as a percentage of `F`. If `R` or desired surplus is also defined as a percentage of `F`, subtract those percentages in the denominator—for example, `(DC + SA + FV) / (1 - overhead% - risk% - desired-surplus%)`—and record the method. Do not calculate a percentage allowance from an unknown fee and then treat it as independent.

### Calculation worksheet

| Output | Base case | Stress case | Gate or interpretation |
|---|---:|---:|---|
| Gross billings (`B`) | | | Do not present as retained value. |
| Core contribution dollars | | | Before founder labor/overhead; not profit. |
| Core contribution margin | | | Compare with the applicable provisional base target and stress floor. |
| Gross-billings contribution margin | | | Report with pass-through share; can be distorted. |
| Pass-through share | | | High share requires value-add and cash review. |
| Service-fee realization | | | Use approved `F / H` definition; compare with the provisional $125 base target and $110 stress floor. |
| Cash contribution per effective hour | | | Shows what remains after outside direct cost. |
| Project economic surplus proxy | | | Base must be at least `10% × F`; stress must be at least zero; includes imputed founder labor. |
| Rate-boundary fee | | | |
| Contribution-boundary fee | | | |
| Economic-boundary fee | | | |
| **Required professional-service fee** | | | Use the highest applicable boundary. |
| Proposed fee variance | | | `F - required fee` |

## DECIDED / WORKING DECISION — Provisional core-contribution guardrails

Felix provisionally approved these internal guardrails on July 12, 2026:

| Scope | Base target | Stress floor |
|---|---:|---:|
| Funding Pipeline Sprint | 80% | 75% |
| Proposal operations | 70% | 65% |
| Program launch/compliance | 55% | 50% |

Calculate core contribution as `(professional-service fee - owned-scope direct cash delivery cost) / professional-service fee`, before Felix labor and overhead. Pass-through is excluded from both fee and direct cost for this calculation. Use the base value as the normal estimating target. Flag a result between the base target and stress floor for explicit commercial review. A result below the stress floor requires `REPRICE_OR_RESCOPE` unless Felix approves a named learning exception with quantified investment, learning objective, maximum hours and cash cost, expiration, and mandatory post-project review.

These guardrails are provisional, internal, and subject to review after the first three closed authorized scopes per module. They do not validate a price, substitute for founder-labor/economic-surplus or cash review, authorize an external quote, or populate a synthetic project's approval fields.

## DECIDED / WORKING DECISION — Primary realization definition

Use `service-fee realization = professional-service fee / total effective hours`, or `F / H`, as the primary realization measure. `F` excludes pass-through billing. Report `(F - DC) / H` separately as cash contribution per effective hour. Do not subtract the risk/capital allowance in that diagnostic; count risk once in project economic surplus so it is not double-counted.

## DECIDED / WORKING DECISION — Provisional realization references

Use $125 per total effective hour as the normal base target and $110 per total effective hour as the stress floor. Flag results from $110 to below $125 for explicit commercial review. A result below $110 requires `REPRICE_OR_RESCOPE` unless Felix approves a named learning exception with quantified investment, learning objective, maximum hours and cash cost, expiration, and mandatory post-project review.

These references are provisional, internal, and subject to review after the first three closed authorized scopes per module. They apply only to service-fee realization under the approved `F / H` definition; cash contribution per hour, project economic surplus, contribution margin, and cash exposure remain separate tests. They are not public hourly prices or external-release authorization.

## DECIDED / WORKING DECISION — Collection and working-capital schedule

Keep contract value, invoice, acceptance, recognized revenue, and cash collection as separate events.

| Date or milestone | Gross billing | Invoice submitted | Acceptance trigger/lag | Expected collection | Owned-scope cash outflow | Pass-through outflow | Running project cash | Basis |
|---|---:|---|---|---:|---:|---:|---:|---|
| Contract/deposit | | | | | | | | |
| Milestone 1 | | | | | | | | |
| Milestone 2 | | | | | | | | |
| Final/closeout | | | | | | | | |

```text
running project cash
= cumulative cleared collections - cumulative project cash outflows

peak working-capital exposure
= absolute value of the lowest negative running-project-cash balance
```

| Cash gate | Entry |
|---|---:|
| Peak working-capital exposure | |
| Available project-allocable liquidity | |
| Unprotected exposure | |
| Longest expected collection gap | |
| Retainage or acceptance risk | |
| Vendor cancellation exposure | |
| Deposit/milestone protection | |
| Cash-gate result | `[PASS/FAIL/UNKNOWN/EXCEPTION]` |

A project can pass margin and still fail cash protection. Do not front material vendor or pass-through cost without adequate cleared cash, reserve, milestone protection, or contract terms.

## DECIDED / WORKING DECISION — Mandatory gate record

Use `PASS`, `FAIL`, `UNKNOWN`, or `EXCEPTION`. Any `UNKNOWN` on a material item prevents `INTERNAL_SOW_READY`.

| Gate | Result | Evidence | Owner/reviewer | Corrective action or exception |
|---|---|---|---|---|
| One bounded problem and primary module | | | | |
| Deliverables, inputs, revisions, acceptance, and change control | | | | |
| Hours, contingency, and capacity | | | | |
| Material direct and pass-through costs | | | | |
| Provisional core-contribution guardrail | | | | |
| Realization reference | | | | |
| Economic-surplus review including Felix labor | | | | |
| Invoice, acceptance, and payment path | | | | |
| Peak working-capital exposure within approved liquidity | | | | |
| Pass-through value-add and contract treatment | | | | |
| Channel-specific pricing and flow-downs | | | | |
| Contract/legal/procurement review | | | | |
| Data, privacy, security, and retention | | | | |
| Clinical, technical, evaluation, and accounting ownership | | | | |
| Conflict and related-party review | | | | |
| Insurance, licenses, references, and formation readiness | | | | |
| Integrity and claim-substantiation review | | | | |
| Felix final commercial/scope approval | | | | |
| External release authorization | `NOT_AUTHORIZED` | | Felix | Separate decision required. |

## EXPLICITLY OUT OF SCOPE / REJECTED — Hard stops

Use `NO_GO`, `HOLD_INPUTS`, or `REPRICE_OR_RESCOPE` when any applicable condition remains:

- unknown fee, hours, material cost, payment path, or acceptance trigger;
- unbounded work, no primary module, unlimited revisions, or employee-like retainer;
- percentage-of-award grant compensation or prohibited contingent government compensation;
- zero or negative direct contribution;
- contribution below its applicable provisional stress floor, or service-fee realization below the provisional $110/hour stress floor, without a documented learning exception;
- base project economic surplus below 10% of professional-service fee, or stress project economic surplus below zero, without a documented learning exception;
- material vendor or pass-through cost exposed beyond approved liquidity;
- pass-through structure without documented Wellridge integration, QA, coordination, reporting, or risk ownership;
- consultant/prime/public-sector channel used without channel-specific repricing and flow-down review;
- capacity, insurance, reference, formation, contract, data, security, PHI, clinical, technical, evaluation, or licensing failure;
- unsupported claims, backdating, fabricated evidence, credential sharing, or other integrity concern; or
- external release without Felix's separate authorization.

## HYPOTHESIS TO TEST — Sanitized arithmetic tests

These examples test the gate; they are not quotes, recommendations, or market evidence.

| Case | Inputs | Core contribution | Realization | Result |
|---|---|---:|---:|---|
| Pipeline pilot | `F=$2,250`; `DC=$800`; 18 base hours give `H_plan=21.6`; absent better evidence, `H_stress=27.0` | $1,450 / 64.4% | planned service fee ≈ $104.17/hour; fallback-stress service fee ≈ $83.33/hour | `REPRICE_OR_RESCOPE`; misses the provisional contribution and realization floors. Base realization boundary is $2,700; stress realization boundary is $2,970; contribution boundary is $3,200. |
| Proposal project | `F=$4,000`; `DC=$2,000`; `H=28.8` | $2,000 / 50.0% | service fee ≈ $138.89/hour; cash contribution ≈ $69.44/hour | Realization can pass while contribution fails the provisional 65% stress floor. |
| Program task | `F=$25,000`; `DC=$10,000`; opening collection $5,000 before $10,000 vendor outflow | $15,000 / 60.0% | Hours still required | Contribution exceeds the provisional 55% base target while cash protection still fails with at least $5,000 peak exposure. |
| Pass-through contract | `F=$30,000`; `PB=PC=$70,000`; `B=$100,000` | $30,000 before other direct cost | Hours still required | 70% pass-through; $100,000 contract size is not retained economic value. |

The [sanitized end-to-end dry run](../validation/sanitized-end-to-end-template-dry-run.md) applies the provisional contribution and realization guardrails plus the remaining candidate references across all three offer modules. Its passing comparisons remain `HOLD_INPUTS` because no synthetic record may populate project approvals or become SOW-ready.

## DECIDED / WORKING DECISION — Approval record

| Review | Required result | Approver | Date | Evidence/conditions |
|---|---|---|---|---|
| Scope and commercial | | Felix | | |
| Finance/accounting assumption | | `[qualified reviewer when triggered]` | | |
| Contract/procurement | | `[qualified reviewer when triggered]` | | |
| Data/security/privacy | | `[accountable reviewer when triggered]` | | |
| Clinical/technical/evaluation | | `[named qualified specialist when triggered]` | | |
| Learning exception | | Felix | | `[amount, objective, cap, expiration]` |
| Internal SOW state | | Felix | | |
| External release | `NOT_AUTHORIZED` by default | Felix | | |

## DECIDED / WORKING DECISION — Post-close actuals

Complete this after acceptance and collection; do not overwrite the approved estimate.

| Measure | Approved plan | Actual | Variance and cause |
|---|---:|---:|---|
| Gross billings | | | |
| Recognized revenue | | | |
| Cash collected / date | | | |
| Professional-service fee | | | |
| Pass-through billing and cost | | | |
| Hours by role | | | |
| Direct cash delivery cost | | | |
| Core contribution dollars and margin | | | |
| Service-fee realization | | | |
| Imputed Felix replacement value | | | |
| Project economic surplus proxy | | | |
| Peak working-capital exposure | | | |
| Revision cycles / defects | | | |
| Client-caused delay | | | |
| Acceptance-to-collection days | | | |

Record the pricing lesson, reusable estimate, and required scope-card or decision-log change. Never relabel Felix's labor compensation or the owner-compensation pool as true profit.

## OPEN QUESTION

- Whether actual delivery supports retaining, changing, or segmenting the provisional contribution targets/floors by offer and channel
- Whether actual delivery supports retaining or segmenting the provisional $125/hour base and $110/hour stress service-fee realization references
- Whether actual delivery supports retaining the 20% planned contingency, named-stress method, and 25%-above-plan fallback or requires offer/risk-specific variants
- Standard imputed rates by role and annual refresh rule
- Whether trailing actuals support retaining or segmenting the provisional 16% base / 25% stress project-pricing overhead proxies
- Whether actual delivery supports retaining or segmenting the provisional 10% base / zero stress project-economic-surplus references
- Standard risk-allocation method
- Maximum project working-capital exposure and collection-gap threshold
- Deposit, cancellation, retainage, and rush-price policy
- Treatment of reimbursables and pass-through under the eventual accounting policy
- Where confidential completed worksheets and approvals will be stored
