# Risks, assumptions, and validation system

Last updated: July 12, 2026

## DECIDED / WORKING DECISION — Risk register

| Category | Risk | Early signal | Safeguard | Status |
|---|---|---|---|---|
| Founder/execution | ADHD, context switching, and deadline overload | missed follow-up, scattered files, late inputs, multiple rescues | narrow offers, coordinator, active-work cap, weekly delivery review, one control plane | DECIDED / WORKING DECISION |
| Founder/execution | aversion to routine administration | trackers or invoices age without ownership | delegate named control tasks; fractional bookkeeping; milestone handoff | DECIDED / WORKING DECISION |
| Founder/execution | inconsistent sales activity | no substantive conversations or next actions for two weeks | weekly pipeline review; warm/partner channel targets; dedicated capture on scale path | HYPOTHESIS TO TEST |
| Founder/execution | unrelated ventures consume attention | Wellridge blocks move while other lanes multiply | preserve company boundary and fixed weekly capacity | DECIDED / WORKING DECISION |
| Founder/execution | Felix becomes final approver for every detail | queue waits on low-risk production choices | define delegation/approval matrix; reserve Felix for judgment and final QA | DECIDED / WORKING DECISION |
| Positioning | appears too broad or “prime anything” | buyer cannot repeat category or asks for unrelated technical work | one capability chain, two front doors, scope-based examples, explicit exclusions | DECIDED / WORKING DECISION |
| Positioning | too many buyers before proof | generic copy and low-conversion conversations | use shared machinery but qualify buyer-specific problems and channels | HYPOTHESIS TO TEST |
| Positioning | grant writing, program operations, clinical care, and consulting blur | clinical/technical expectations appear in scope | nonclinical boundary, licensed partners, SOW responsibility map | DECIDED / WORKING DECISION |
| Positioning | site is built before proof | public claims/prices outrun formation or evidence | keep the migrated site local; quarantine unsupported claims and prices; require provenance, validation, and launch approval before deployment | DECIDED / WORKING DECISION |
| Financial | government/prime payment delay | acceptance lag, invoice correction, aging AR | milestones/deposits where allowed, DSO tracking, liquidity targets, cash forecast | HYPOTHESIS TO TEST |
| Financial | fronts vendor cost | committed cash exceeds protected receipts | no material pass-through without reserve, advance, milestone, or contract protection | DECIDED / WORKING DECISION |
| Financial | low-margin pass-through revenue | billings grow while retained contribution falls | apply provisional contribution guardrails; separate gross billings, direct cost, and retained margin | DECIDED / WORKING DECISION |
| Financial | client concentration | one client exceeds sustainable revenue/AR share | track concentration; build renewal and replacement pipeline; contract downside review | HYPOTHESIS TO TEST |
| Financial | hiring ahead of collections | payroll relies on unsigned/uncollected forecast | collection/backlog/runway triggers and staged contractor-to-employee path | DECIDED / WORKING DECISION |
| Financial | owner pay called profit | decisions ignore founder replacement cost | report owner pool and true profit separately | DECIDED / WORKING DECISION |
| Contracting | excessive pass-through/negligible prime value | unclear Wellridge labor or risk ownership | document value-add, workshare, integration, QA, and contract-specific clause review | DECIDED / WORKING DECISION |
| Contracting | limitation-on-subcontracting or flow-down violation | SOW/vendor mix conflicts with solicitation | compliance matrix, counsel/review, similarly situated analysis, subcontract records | DECIDED / WORKING DECISION |
| Contracting | improper contingent fee | compensation tied to award percentage or influence | fixed-fee/milestone model and contract review | DECIDED / WORKING DECISION |
| Contracting | inadequate records | cannot prove version, approval, delivery, or subcontract work | document control, evidence file, acceptance record, closeout checklist | DECIDED / WORKING DECISION |
| Data/clinical | PHI or sensitive-data exposure | raw client data appears in general tools or email | minimum necessary, de-identification, access control, BAA/security review, incident plan | DECIDED / WORKING DECISION |
| Data/clinical | unlicensed clinical activity/control | Felix/AI asked to make triage or care decisions | licensed clinical governance and explicit responsibility boundary | DECIDED / WORKING DECISION |
| AI/quality | plausible but false research, claims, or compliance output | missing primary citation or contradictory rule | source register, human verification, final accountable approver | DECIDED / WORKING DECISION |

## DECIDED / WORKING DECISION — Scorecard definitions

### Sales and capture

| Metric | Definition |
|---|---|
| Sourced research accounts | Unique `RESEARCH_TARGET` and `WATCH_ACCOUNT` records with dated evidence; reported separately from pipeline and forecasts |
| Qualified opportunities added | New opportunities meeting named buyer, problem, budget/procurement path, timing, capability fit, capacity, margin, and next-action criteria |
| Research-to-qualified rate | accounts promoted to `QUALIFIED_OPPORTUNITY` / accounts receiving a completed human qualification review; directory-only records and unreviewed watch accounts excluded |
| Substantive buyer/partner conversations | Live exchanges that confirm need/path/timing and end with a specific next action or documented no-go |
| Scopes submitted | Written, priced, decision-ready SOWs delivered to an authorized buyer; revisions to the same scope do not create new count |
| Proposal value submitted | Total proposed Wellridge contract value submitted in the period, separated from client grant/contract value |
| Win rate by count | won scopes / decided scopes; open scopes excluded |
| Win rate by value | won submitted value / decided submitted value; open scopes excluded |
| Average initial project value | initial signed task value / number of initial signed tasks |
| Sales-cycle length | days from first substantive qualified conversation to signed agreement or closed loss |
| Source/channel | original relationship path credited under a documented rule, not last touch alone |

### Delivery

| Metric | Definition |
|---|---|
| On-time milestone rate | accepted milestones delivered by agreed date / milestones due, with client-caused extensions separately tagged |
| Contribution margin by offer | (recognized revenue - direct delivery cost) / recognized revenue; excludes Felix labor and fixed overhead unless separately reported |
| Felix hours by project | all discovery, delivery, coordination, revision, QA, and project administration time attributable to the project |
| Coordinator/research hours | actual attributable hours by role, including rework |
| Revision cycles | consolidated client revision rounds after first complete draft; corrections of Wellridge defects separately tagged |
| Compliance defects | missed or incorrect mandatory requirement found before submission; escaped defects reported separately |
| Client satisfaction/reference readiness | structured closeout rating plus explicit permission/status for a reference or case study |

### Cash and resilience

| Metric | Definition |
|---|---|
| Bookings | signed contract/task value in the period; not revenue or cash |
| Recognized revenue | revenue recognized under the adopted accounting policy |
| Cash collected | cleared client receipts in the period |
| Accounts receivable | valid issued invoices not yet collected, aged by due date |
| Days sales outstanding | ending accounts receivable / trailing-period credit revenue × days in period; also track invoice-level days |
| Signed backlog | signed value not yet recognized, net of known cancellations/constraints |
| Cash reserve | unrestricted operating cash less committed near-term obligations |
| Months of runway | available operating cash / normalized monthly cash operating cost |
| Client concentration | largest and top-three client share of revenue, AR, and backlog |

### Strategic learning

| Metric | Definition |
|---|---|
| Revenue by lane | recognized revenue attributed to nonprofit versus public-sector/prime lane |
| Revenue by niche/program family | recognized revenue by behavioral-health, workforce, engagement, or other qualified family |
| Repeat/expansion revenue | recognized revenue from a prior client after the initial task, separately tagging renewal and expansion |
| Reusable templates/IP | artifacts used successfully on at least two paid engagements, with confidential/client material removed |
| Founder-independent delivery share | delivery hours or milestones completed without Felix as day-to-day owner, measured consistently |
| Partner strength | active partners scored by capability, trust, availability, contract path, evidence, and successful joint work |

## DECIDED / WORKING DECISION — Review cadence

- Weekly: pipeline, delivery, risks, inputs, next actions
- Monthly: bookings, revenue, cash, AR/DSO, backlog, margin, capacity, client concentration
- Per project: hours, outside cost, revisions, defects, acceptance, collection, satisfaction, reuse
- Quarterly: price, offer, channel, niche, staffing, capital, scenario, and decision-log review

## HYPOTHESIS TO TEST — Validation gates

| Question | Evidence | Decision |
|---|---|---|
| Do the two front doors make sense? | buyer comprehension, qualified-opportunity rate, scope conversion, objection themes | keep, narrow, rename, or split |
| Are prices viable? | realized effective rate, contribution, revisions, cycle time, loss reasons | raise, hold, narrow scope, or stop offer |
| Can warm/partner channels sustain pipeline? | opportunities, value, wins, cycle, repeat by source | deepen channel or add targeted outbound capacity |
| Is behavioral health the niche? | paid repetition, proof, partner path, margin, payment, founder fit | specialize, continue testing, or demote |
| Is workforce adjacent or distracting? | same evidence plus participant-admin burden | add, partner-only, or reject |
| Is a coordinator justified? | control-task hours, deadline/defect risk, collected contribution, backlog, runway | contract, hire, or defer |
| Is direct-prime work ready? | past performance, systems, value-add, clauses, liquidity, insurance, partners | pursue selectively or remain subcontract-first |
| Is the aggressive path credible? | annual staircase, anchor clients, repeat share, capture capacity, capital | fund, reforecast, or treat as longer horizon |

## OPEN QUESTION — Remaining thresholds and permanent-policy inputs

- Whether actual delivery supports retaining, changing, or segmenting the provisionally approved contribution base targets and stress floors
- Whether actual delivery supports retaining or segmenting the provisionally approved $125/hour base and $110/hour stress realization references
- Whether trailing actuals support retaining or segmenting the provisionally approved 16% base / 25% stress project-pricing overhead proxies
- Whether actual delivery supports retaining or segmenting the provisionally approved 10% base / zero stress project-economic-surplus references
- Whether actual delivery supports retaining the provisionally approved 20% planned contingency, named-stress method, and 25%-above-plan fallback or requires offer/risk-specific variants
- Maximum owned-scope working-capital exposure and zero-unprotected-pass-through rule
- Maximum client concentration by revenue, AR, and backlog
- Maximum DSO before pausing new work
- Minimum runway before each hire
- Formal severity and response standard for compliance defects
- Data-retention and incident-response thresholds
- Exact founder-independent-delivery formula

## EXPLICITLY OUT OF SCOPE / REJECTED

- Vanity metrics without a decision attached
- Win-rate claims that exclude losses or manipulate the denominator
- Treating submitted client grant value as Wellridge proposal value
- Using revenue without margin, cash, founder time, or concentration context
- Collecting identifiable clinical/client data merely because a dashboard could display it
