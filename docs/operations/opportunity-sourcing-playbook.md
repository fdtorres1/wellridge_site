# Opportunity sourcing playbook

Last updated: July 12, 2026

**Status: DECIDED / WORKING DECISION — This is an internal research and control system. It does not authorize outreach, registration, submission, contracting, or public claims.**

## Purpose

Turn scattered account names and market signals into a dated, reviewable sourcing universe without confusing research activity with a qualified sales pipeline.

The sourcing system supports the existing company architecture:

| Account type | Opportunity stream | Existing buyer lane | Intended use |
|---|---|---|---|
| Nonprofit | Nonprofit direct | Nonprofit funding and proposal work | Find organizations with operating capacity and a plausible need for a bounded funding or award-operations scope. |
| Consultant/referral partner | Consultant/prime | Both lanes | Find trusted specialists or proposal shops that may need backend capacity or can make an ethical introduction. |
| Established prime | Consultant/prime | Public-sector proposal and program operations | Find contractors with vehicles, relationships, or past performance for whom Wellridge could own a real first-tier work package. |
| Agency watch account | Selective agency watch | Public-sector proposal and program operations | Monitor narrow, relevant administrative, engagement, reporting, training, or program-launch needs; direct pursuit remains later and readiness-gated. |

These are sourcing streams, not separate businesses and not additional public offers.

## DECIDED / WORKING DECISION — Two front doors remain intact

Signals map into the two existing front-door offers and their bounded modules:

| Observed signal | Initial interpretation | Existing offer/module |
|---|---|---|
| Nonprofit lacks a prioritized funding plan | Possible research and readiness need | Nonprofit Funding Pipeline Sprint |
| Relevant deadline appears approximately 3–8 weeks away | Possible bounded compliance, editing, production, or coordination need | Proposal & Program Operations Support — proposal-sprint module |
| Organization or prime receives a relevant award | Possible implementation, calendar, reporting, partner, or closeout need | Proposal & Program Operations Support — program-launch/compliance module |
| Consultant or prime is pursuing relevant work | Possible white-label proposal or compliance work package | Proposal & Program Operations Support — proposal-sprint module |
| Prime wins relevant work | Possible first-tier administrative, engagement, reporting, or program-operations work package | Proposal & Program Operations Support — program-launch/compliance module |
| Agency posts or forecasts a narrow relevant scope | Research whether Wellridge should watch, team, or eventually bid | Appropriate existing module only after readiness and go/no-go review |

A signal is not proof that an organization wants a contractor, has consulting budget, can charge the work to an award, or would select Wellridge.

## DECIDED / WORKING DECISION — Lifecycle definitions

The documentation status labels and sourcing lifecycle labels answer different questions. `HYPOTHESIS TO TEST` describes the certainty of a claim. The labels below describe where an account sits in the sourcing process.

| Lifecycle status | Required meaning |
|---|---|
| `RESEARCH_TARGET` | A named account has plausible fit and dated evidence, but one or more qualification facts remain unconfirmed. It is not pipeline. |
| `WATCH_ACCOUNT` | A source, institution, or buyer is worth monitoring, but no actionable buyer need is established. It is not pipeline. |
| `QUALIFIED_OPPORTUNITY` | A current solicitation or substantive buyer/partner exchange confirms the problem, responsible buyer/path, budget or procurement path, timing, plausible owned scope, and next action. |
| `HOLD` | Fit may exist, but timing, authority, conflict, formation, capacity, or another gate prevents progress. |
| `DISQUALIFIED` | A hard exclusion or failed qualification fact makes the account or opportunity unsuitable. Record the reason rather than deleting it. |

No automated score, award announcement, job posting, directory listing, or AI inference can create a `QUALIFIED_OPPORTUNITY`.

## DECIDED / WORKING DECISION — Qualification gates

Before an account enters qualified pipeline, record affirmative evidence for all of the following:

1. **Problem:** a current, material need within Wellridge's capability chain.
2. **Buyer/path:** a responsible decision-maker, prime, partner, or procurement route.
3. **Economics:** a credible budget, allowable-cost, contract, task-order, or professional-services payment path.
4. **Timing:** a real decision, proposal, launch, or implementation window.
5. **Owned scope:** a bounded administrative, proposal, engagement, coordination, reporting, or nonclinical program-operations work package.
6. **Inputs and authority:** access to facts, documents, subject-matter review, and final human approval.
7. **Risk fit:** no unresolved clinical, technical, data, conflict, contingent-fee, pass-through, liquidity, or integrity problem.
8. **Next action:** a specific, ethical step with an owner and date.

The disqualification signals in [`strategy/09-go-to-market-and-2026-launch.md`](../strategy/09-go-to-market-and-2026-launch.md) override any numerical score.

For a named forecast or solicitation from a government buyer, apply the [direct-government opportunity go/no-go rubric](direct-government-go-no-go-rubric.md) after this account-level screen. The research score below ranks attention; it does not test mandatory references, eligibility, contract terms, technical workshare, cash exposure, or bid readiness.

## DECIDED / WORKING DECISION — Preliminary research score

Score each dimension from 0 to 2. Use only facts available on the access date; record uncertainty in `caveats`.

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Capability fit | Outside owned scope or hard conflict | Partial fit or specialist dependency | Clear fit with an existing bounded module |
| Current-need evidence | No current signal | General activity or an indirect/closed-award signal that proves market activity but not a current outside-support need | A dated signal materially indicating a live, relevant outside-support need, such as an open solicitation, explicit capacity/partner request, or award with an evidenced implementation gap |
| Budget/procurement path | None visible | Organizational capacity or general procurement path | Specific award, contract, budget, or buying path is evidenced |
| Relationship/access path | None known | Public channel, ecosystem route, or relationship to validate | Ethical warm path or explicit partner/supplier route is evidenced |
| Delivery/founder fit | High burden or misaligned work pattern | Manageable with constraints/partners | Daytime, bounded, remote-friendly, high-value work with limited detail burden |

| Total | Research priority |
|---:|---|
| 8–10 | Prioritize for deeper internal qualification |
| 6–7 | Validate material gaps before considering outreach |
| 4–5 | Monitor or research only when a stronger signal appears |
| 0–3 | Archive or disqualify unless facts materially change |

The score ranks research effort. It is not a sales probability, predicted win rate, or outreach authorization.

## HYPOTHESIS TO TEST — Attention allocation

The suggested allocation of approximately 60% nonprofit direct, 30% consultant/prime, and 10% agency-watch effort is a six- to eight-week test, not a standing decision. Measure substantive conversations, qualified opportunities, cycle time, proposed value, wins, and founder effort by source before retaining or changing it.

The ten-account pilot uses four nonprofits, two consultants, three primes, and one agency watch account. That distribution tests source and account-type coverage; it is not a weekly time budget.

## DECIDED / WORKING DECISION — Starting source stack

| Research purpose | Starting sources | Control |
|---|---|---|
| Nonprofit discovery and capacity signals | North Texas Giving Day directory, ProPublica Nonprofit Explorer, Texas Grants Resource Center, United Way of Tarrant County RFPs, and official funder/recipient announcements ([OS11](../sources/SOURCES.md#os11)) | Directories establish existence; awards and tax filings establish dated facts; neither establishes outside-consultant demand. |
| Consultant and prime discovery | Official firm capability/client pages; official supplier or partner pages; USAspending; SBA prime/subcontracting resources ([S05](../sources/SOURCES.md#s05)); Cross Timbers APEX ([S14](../sources/SOURCES.md#s14)) | A supplier portal, directory, or award creates a research path only. Do not register or infer a live work package. |
| Agency watch | Official work programs, forecasts, board packets, procurement pages, designated portals, award notices, and closed-solicitation history | Verify live status in the buyer's designated portal; pages can be stale or internally inconsistent. Use the direct-government rubric before treating a named forecast or solicitation as a pursuit. |
| Capacity signals | Official job postings, executive transitions, new programs, collaborations, and award announcements | Treat as hypotheses. A job posting does not prove preference or budget for a contractor. |

Use official or authoritative sources first. Label secondary data mirrors, trade reporting, and vendor-hosted portal records. Preserve the access date and recheck all time-sensitive facts before action.

## DECIDED / WORKING DECISION — Sheet schema

The canonical pilot data is [`../data/opportunity-sourcing-pilot.csv`](../data/opportunity-sourcing-pilot.csv). Preserve these field meanings:

| Field group | Required fields and rules |
|---|---|
| Identity | Stable `record_id`; account name; account type; sourcing stream; buyer lane; geography; niche tags. |
| Signal | Dated current signal; signal date; likely-need hypothesis stated as a hypothesis, not buyer fact. |
| Offer mapping | One existing front-door offer and bounded module, or explicit `NO_FIT_CURRENT_EVIDENCE` with any future mapping labeled conditional. |
| Access/economics | Relationship path and budget/procurement evidence; use `UNKNOWN` when not evidenced. |
| Scoring | Five 0–2 component scores and a calculated 0–10 total; scoring rationale belongs in `caveats` when not obvious. |
| Control | Lifecycle status; explicit `outreach_authorized`; owner; next local step; next review date. |
| Provenance | Source-register IDs, source URLs, access date, and material caveats. |

Use semicolons inside multi-value CSV fields. Do not place private relationship details, sensitive personal data, PHI, credentials, or confidential client information in this file.

## DECIDED / WORKING DECISION — Ten-account pilot snapshot

All ten records were researched from public sources accessed July 12, 2026. Scores are preliminary research priorities, not sales probabilities.

| ID | Account | Type | Score | Lifecycle | Material uncertainty to resolve |
|---|---|---|---:|---|---|
| OSP-001 | SuperVive / Rosa Es Rojo | Nonprofit | 6 | `RESEARCH_TARGET` | Whether capacity funds or a current implementation gap could support outside nonclinical operations work |
| OSP-002 | Vickery Meadow Youth Development Foundation | Nonprofit | 7 | `RESEARCH_TARGET` | Whether a funding-pipeline gap exists despite experienced leadership and capacity funding |
| OSP-003 | CLC, Inc. | Nonprofit | 6 | `RESEARCH_TARGET` | Whether an experienced federal grantee has a bounded overflow or program-operations gap |
| OSP-004 | Cowtown Clubhouse | Nonprofit | 5 | `WATCH_ACCOUNT` | Affordability, buying authority, reporting burden, and strict data/nonclinical boundaries |
| OSP-005 | Social Impact Architects | Consultant | 5 | `HOLD` | Complementary backend need versus direct service overlap and competition |
| OSP-006 | M. Gale | Consultant | 5 | `HOLD` | Complementary government/grant-operations need versus existing in-house capability |
| OSP-007 | Abt Global | Prime | 8 | `RESEARCH_TARGET` | A specific first-tier work package and whether Wellridge can meet prime-readiness requirements |
| OSP-008 | ICF | Prime | 8 | `RESEARCH_TARGET` | A localized, nontechnical work package and high supplier-qualification requirements |
| OSP-009 | Public Consulting Group | Prime | 5 | `WATCH_ACCOUNT` | A real supplier path and administrative work separate from IT/data-heavy scopes |
| OSP-010 | NCTCOG | Agency | 6 | `WATCH_ACCOUNT` | A live narrow scope, readiness to prime, and separation from clinical/technical authority |

The pilot intentionally includes formal supplier/procurement paths, several general public channels, and no verified warm relationship. Formal and warm-path definitions are maintained in the [`claim provenance and relationship readiness register`](claim-provenance-and-relationship-readiness.md). The pilot therefore tests public-source research more than the warm-channel thesis.

## DECIDED / WORKING DECISION — Operating workflow

1. Capture a dated signal from an authoritative or clearly labeled secondary source.
2. Dedupe by organization and buyer problem; tag recent recipients within the nonprofit stream rather than counting them as a separate universe.
3. Record only sourced facts; put every inferred need in `likely_need_hypothesis`.
4. Apply the hard scope/conflict screen, then score the account.
5. Assign `RESEARCH_TARGET`, `WATCH_ACCOUNT`, `HOLD`, or `DISQUALIFIED` as the evidence requires; default `outreach_authorized` to `NO`.
6. Complete the next local research step and recheck time-sensitive facts before any human go/no-go decision; for direct-government work, run the mandatory gates before weighted scoring.
7. If Felix separately authorizes outreach, record the allowed account, channel, representation, and message boundary before contact.
8. Promote to `QUALIFIED_OPPORTUNITY` only after all qualification gates are evidenced.
9. Review source age, status, next action, and disqualification reason weekly once active sourcing is authorized.

## HYPOTHESIS TO TEST — Pilot success criteria

The ten-account pilot is useful if it demonstrates that:

- official/current sources can produce plausible accounts without unsupported demand claims;
- another reviewer can reproduce the scores within approximately one point;
- the two existing offers cover the observed needs without offer proliferation;
- nonprofit, consultant, prime, and agency signals remain distinguishable;
- duplicate accounts and stale signals are controlled; and
- the system makes the difference between a research target and qualified pipeline unmistakable.

The pilot does **not** validate buyer demand, pricing, conversion, or niche choice. Those require authorized conversations and paid-market evidence.

## OPEN QUESTION

- Which existing Felix relationships create ethical, permissioned warm paths?
- How much weekly Wellridge sourcing time is actually available?
- Who should own research refreshes and data quality?
- What CRM or sheet should become the live control plane after the local pilot?
- What minimum score, if any, should trigger a human outreach go/no-go review?
- When should named contacts be added, and where can they be stored appropriately?
- Which account-specific formation, insurance, security, and contract gates must be cleared before outreach or pursuit?

## EXPLICITLY OUT OF SCOPE / REJECTED

- Treating the sourcing universe as booked work, qualified pipeline, or a forecast
- Creating new public offers from every observed buyer signal
- Mass generic outreach, automated contact scraping, or unsolicited bulk email
- Contacting organizations, primes, consultants, agencies, or named individuals in this documentation task
- Registering in portals, joining bidder lists, buying bid-match services, or applying for certifications
- Representing Wellridge Partners, LLC as formed, cleared, insured, certified, or currently operating
- Recording PHI, confidential client information, credentials, or unnecessary personal data
- Pursuing clinical, engineering, construction, software-development, or other technical authority Wellridge cannot own
