# Worklog

Append-only record of material repository work. Decisions belong in `DECISION_LOG.md`; current handoff belongs in `ACTIVE_CONTEXT.md`.

## 2026-09-08 — Search Console authorization and Wellridge sitemap submission

- Completed the additive Google OAuth upgrade in the verified owner account; all 19 original scopes remained and `https://www.googleapis.com/auth/webmasters` was added, for 20 total scopes with zero removals. Refresh and identity were verified. No credentials, backup paths, or private audit identifiers were recorded in the repository.
- Submitted `https://www.wellridgegroup.com/sitemap.xml` at 16:49:07 UTC. The PUT returned HTTP 204; the GET readback at 16:49:08 UTC succeeded with 17 processed URLs, zero errors, and zero warnings.
- Current API inspection found the homepage `Duplicate without user-selected canonical` with Google's selected canonical still at `https://wellridge-site.vercel.app/` from the September 1 crawl; the three new pages are `Discovered - currently not indexed` and listed in the sitemap. The UI still reported the new pages unknown. Four individual indexing requests were accepted into the priority crawl queue: homepage, grant-writing offer, grant-review sample, and grant-application checklist. No later indexing or canonical adoption is claimed.
- Verification: production build passed with 17 pages; documentation diff checks passed. No public-site source changed during this handoff update.

## 2026-07-11 — Strategy and operating documentation pass

**Status: DECIDED / WORKING DECISION — Documentation-only implementation.**

- Audited the clean repository, branch/history, Astro/Tailwind stack, public pages, content collections, Vercel configuration, deployment guide, and all material legacy identity/service/pricing strings.
- Confirmed that the prototype presents **Wellridge Advisory** as an operating grant/RFP consultancy and contains deployment-capable configuration.
- Identified material conflicts: old identity and endpoints, broad audiences, retainers, absent program-operations positioning, unverified operating/result/network claims, public prices, and testimonial-like award stories.
- Preserved all public code and assets; recorded the migration boundary instead of replacing strings.
- Verified time-sensitive federal, local, labor-rate, public-scope, behavioral-health, workforce, and name-search sources where accessible; recorded caveats and discrepancies.
- Created the repository-native strategy, financial, source, decision, roadmap, worklog, active-context, risk, metric, and migration documentation system.
- Added a restrained root README link to the internal strategy without turning the README into a business plan.
- Reconciled the financial CSV formulas, $913,000 conservative cumulative total, and $165,000 aggressive Year-5 true-profit calculation.
- Checked local relative links, source anchors, required-file presence, status labels, whitespace, names, dates, and changed-file scope.
- Incorporated independent source-fidelity review corrections for Arlington’s $50,000 boundary conflict, accelerated payment, pass-through notice calculations, VetHUB eligibility, Beaumont wording, TWC per-trainee figures, and mixed clinical/nonclinical Austin evidence.
- Ran `npm run build`; all 14 existing Astro pages built successfully with only pre-existing dependency-age and unused-import warnings.

**EXPLICITLY OUT OF SCOPE / REJECTED — No deploy, preview deployment, commit, push, pull request, formation, filing, purchase, registration, outreach, submission, or public-site edit occurred.**

## 2026-07-12 — Opportunity-sourcing control system and pilot

**Status: DECIDED / WORKING DECISION — Local documentation and public-source research only.**

- Converted a proposed three-stream opportunity-search approach into an internal control system beneath the existing two buyer lanes and two public offers.
- Defined `RESEARCH_TARGET`, `WATCH_ACCOUNT`, `QUALIFIED_OPPORTUNITY`, `HOLD`, and `DISQUALIFIED` lifecycle states; documented eight required qualification gates and a five-component 0–10 research-priority score.
- Preserved the suggested 60/30/10 sourcing allocation as a six- to eight-week `HYPOTHESIS TO TEST`, not a weekly-hour commitment or settled channel mix.
- Created a 29-field CSV schema and ten-account pilot: four nonprofits, two consultants, three established primes, and one agency watch account.
- Recorded eight `RESEARCH_TARGET`s and two `WATCH_ACCOUNT`s; recorded zero qualified opportunities and set `outreach_authorized` to `NO` on every row.
- Verified current public evidence and caveats for SuperVive, Vickery Meadow Youth Development Foundation, CLC, Cowtown Clubhouse, Social Impact Architects, M. Gale, Abt Global, ICF, Public Consulting Group, and NCTCOG.
- Added eleven dated source-register entries, including the pilot-account evidence and starting nonprofit source stack.
- Updated go-to-market, scorecard, roadmap, decisions, documentation index, and active handoff files without changing the public Astro prototype.
- Parsed and validated the ten-row CSV, component-score arithmetic, unique IDs, lifecycle values, source anchors, access dates, outreach flags, and all local Markdown links.
- Incorporated independent QA corrections that distinguish three opportunity streams from four account types and reserve a 2-point current-need score for evidence of a live outside-support need; no pilot account meets that stronger standard yet.
- Ran `npm run build`; all 14 existing Astro pages built successfully with only the existing browser-data-age and Astro/Vite unused-import warnings.

**EXPLICITLY OUT OF SCOPE / REJECTED — No organization or person was contacted; no supplier, vendor, event, bidder-list, or procurement registration was created; no proposal was sent; and no deploy, commit, push, purchase, filing, or public-site edit occurred.**

## 2026-07-12 — Local Wellridge Partners site migration

**Status: DECIDED / WORKING DECISION — Explicitly authorized local source migration; no deployment.**

- Migrated the site identity, canonical configuration, metadata, and resource attribution to **Wellridge Partners** and `https://wellridgepartners.com`.
- Reframed public copy around **Funding & Program Operations**, the Nonprofit Funding Pipeline Sprint, Proposal & Program Operations Support, and one consistent delivery-control process.
- Removed unsupported testimonials, award-result claims, founder “millions” language, implied partner-network capacity, numeric public price hypotheses, outcome promises, and open-ended retainer positioning.
- Removed the fake Formspree action and unverified email, Calendly, LinkedIn, and newsletter interfaces; contact intake remains explicitly inactive and collects no information.
- Labeled working heuristics and hypothetical examples, preserved nonclinical/specialist boundaries, corrected publication-date handling, and kept the existing visual brand tokens and component language.
- Relocated the legacy Advisory wordmark from `public/` to `docs/legacy-assets/` so it is preserved but no longer publicly served.
- Corrected tablet navigation overflow, long-form article typography, resource heading structure, populated insight filters, and mouse/keyboard pricing-tab behavior during rendered QA.
- Updated README, deployment guidance, decisions, roadmap, risk, migration, and active-context documentation to match the implemented local state.
- Ran `npm run build`; all 14 Astro routes generated successfully. Browser QA passed at desktop, tablet, and mobile sizes with no relevant console errors or horizontal overflow.

**EXPLICITLY OUT OF SCOPE / REJECTED — No deployment, DNS change, endpoint activation, formation, filing, purchase, registration, outreach, commit, push, or pull request occurred.**

## 2026-07-12 — Offer scope cards, pilot stress test, and proof controls

**Status: DECIDED / WORKING DECISION — Internal documentation and analysis only.**

- Created internal scope cards for the Nonprofit Funding Pipeline Sprint and the two-module Proposal & Program Operations Support category, including qualification gates, exclusions, inputs, milestones, revision limits, acceptance, delivery roles, data/AI boundaries, and pricing tests.
- Made the pricing contradictions explicit rather than resolving them by assumption: the $2,250 pipeline pilot does not support every stated labor, outside-cost, contingency, and contribution combination; the lower proposal/program price points likewise require tighter direct-cost and scope caps.
- Stress-tested both cards against all ten pilot accounts and retained zero qualified opportunities and zero buyer-facing quotes.
- Narrowed each account to one current problem/module; moved Social Impact Architects and M. Gale to `HOLD`; moved Public Consulting Group to `WATCH_ACCOUNT`; and preserved NCTCOG as `WATCH_ACCOUNT` with the cited clinical award classified as market evidence only.
- Reconciled the pilot to five `RESEARCH_TARGET`s, three `WATCH_ACCOUNT`s, two `HOLD`s, and `outreach_authorized=NO` for every record.
- Created a claim-provenance and relationship-readiness register that separates self-reported inputs, located artifacts, permission, public usability, formal procurement routes, and verified warm paths. No warm path is currently documented for any pilot account.
- Preserved the concurrent local website and deployment changes without editing, reverting, formatting, or treating them as proof.

**EXPLICITLY OUT OF SCOPE / REJECTED — No buyer, partner, agency, registry, portal, event, domain, host, or external account was contacted or changed; no filing, purchase, deployment, submission, commit, push, or pull request occurred.**

## 2026-07-12 — Selective direct-government capture controls

**Status: DECIDED / WORKING DECISION — Local documentation and public-source review only.**

- Reviewed the supplied three-stream opportunity-sourcing recommendation and kept direct government as a selective, readiness-gated stream rather than the primary cold-start cash lane.
- Used three independent read-only reviews to verify the CroSS-DFW forecast, the closed Workforce Solutions strategic-planning RFP, and Tarrant County F2026147.
- Created a CroSS-DFW pre-release capture brief with an official `WATCH / PRE-CAPTURE` status, a likely `TEAM-ONLY` posture, a preliminary workshare, technical boundaries, release gates, and a local-only 48-hour intake sequence.
- Kept the $6.25 million CroSS-DFW figure labeled as overall initiative funding, not consultant contract value, Wellridge pipeline, or expected revenue.
- Created a reusable direct-government rubric using mandatory gates before a six-dimension, 100-point score; missing eligibility, proof, central competence, contract, cash, ethics, or delivery readiness overrides the score.
- Calibrated the rubric against a high-fit but closed $20,000–$30,000 Workforce Solutions planning archetype and a live Tarrant County marketing prime `NO-BID` with only a possible future bounded subcontract path.
- Added three dated direct-government source-register entries and linked the brief and rubric through the strategy, sourcing playbook, roadmap, decision log, documentation index, and active handoff.
- Preserved concurrent local scope-card, stress-test, claim-provenance, website, configuration, and other strategy changes; reconciled the pilot handoff to five `RESEARCH_TARGET`, three `WATCH_ACCOUNT`, and two `HOLD` records without changing public-site code in this pass.
- Verified 55 source anchors, local links across the root README and all 26 documentation Markdown files, the 100-point rubric weights, the ten-row sourcing CSV, the 12-row financial CSV, and clean patch whitespace.
- Ran `npm run build`; all 14 Astro routes generated successfully with only existing browser-data-age and Astro/Vite unused-import warnings.

**EXPLICITLY OUT OF SCOPE / REJECTED — No portal or bidder-list registration, RSVP, agency or partner contact, proposal question, submission, deploy, commit, push, purchase, filing, or external action occurred.**

## 2026-07-12 — Pricing gate and reusable delivery controls

**Status: DECIDED / WORKING DECISION — Local internal-template implementation only.**

- Created a mandatory pricing and cash gate that separates professional fee, pass-through, gross billings, recognized-revenue assumption, cash collected, direct cost, role hours, contingency, imputed Felix labor, overhead, risk allowance, contribution, realization, project economic surplus, and peak working-capital exposure.
- Added base/stress calculations and sanitized arithmetic tests showing that hourly realization, contribution margin, and cash protection can produce different pass/fail results.
- Created one combined Funding Pipeline Sprint delivery workbook with client-fact separation, one funder-program record per profile, countability controls, project-local sources, uncertainty states, a reconciled pursuit-calendar ledger, QA, and acceptance boundaries.
- Created a proposal compliance-matrix template with controlled-source/addenda, requirement, ownership, specialist, attachment, change, exception, submission-authority, and closeout controls.
- Created a program-launch compliance-calendar template with work-start authority, governance, source, 30/60/90-day, trigger, metric, vendor/subrecipient, data, acceptance, change, and closeout controls.
- Linked the templates through the scope cards, pricing strategy, operating model, canonical documentation index, roadmap, decision log, and active handoff.
- Preserved and indexed the concurrently created CroSS-DFW workshare, proof-inventory, technical-partner, release-intake, and source-register work without rewriting its capture analysis.

**EXPLICITLY OUT OF SCOPE / REJECTED — No client file was populated; no quote, SOW, proposal, certification, outreach, partner contact, portal action, deployment, commit, push, purchase, filing, or external-system change occurred.**

## 2026-07-12 — CroSS-DFW four-part pre-release capture packet

**Status: DECIDED / WORKING DECISION — Local capture-control implementation only.**

- Expanded the CroSS-DFW brief from a research finding into a linked four-part internal packet: workshare map, proof inventory, technical-partner criteria, and release-intake checklist.
- Mapped twelve integrated workstreams and explicit decision rights across Wellridge, transportation/safety, data/evaluation, technology/field, communications/accessibility, and NCTCOG roles.
- Preserved a technical-lead/team-only default and prohibited Wellridge from owning engineering, safety, statistical, technology, field, cybersecurity, professional-signature, or technical-liability authority.
- Created an evidence inventory that separates firm, key-person, prior-employer/client, and partner proof; all three reference slots remain unfilled, and the repository supports no CroSS-ready corporate past performance.
- Created a 100-point technical-partner screen with hard gates for technical authority, comparable delivery, independence, data/field safety, insurance, federal terms, workshare, cash, conflicts, and reference quality; no firm was named or scored.
- Created a pre-seeded first-48-hours checklist covering source/document/addenda control, dates, forms, eligibility, proof, evaluation, workshare, federal/DBE, insurance/data/field risk, economics, formal questions, compliance, and Felix's decision.
- Added official USDOT SS4A guidance, FY2024 award terms, and NCTCOG standard terms as dated pre-release risk context while making clear that the released RFP and incorporated contract determine actual flow-downs.
- Incorporated independent read-only QA corrections separating source facts from human decisions, distinguishing authorization `HOLD` from an analytical `NO-BID`, narrowing cost-allowability language, and limiting reference failures to unresolved material problems.
- Updated the documentation index, capture brief, strategy, roadmap, decision log, active handoff, and source register without editing public-site code in this pass.
- Validated 35 Markdown files, 56 source anchors, both 100-point scorecards, the ten-row sourcing CSV, the 12-row financial CSV, local links, and patch whitespace.
- Ran `npm run build`; all 14 Astro routes generated successfully with only existing browser-data-age and Astro/Vite unused-import warnings.

**EXPLICITLY OUT OF SCOPE / REJECTED — No firm or reference was named, contacted, scored, or asked for permission; no portal, registration, RSVP, question, teaming action, submission, deployment, commit, push, purchase, filing, or external-system change occurred.**

## 2026-07-12 — CroSS-DFW candidate-evidence discovery and locator

**Status: DECIDED / WORKING DECISION — Minimal local discovery and Git-safe documentation only.**

- Located a durable professional-background inventory, derivative résumé materials, a candidate grant-evidence ledger, application requirements/evidence/compliance controls, submission-status records, conditional reporting controls, community-engagement planning artifacts, and possible sanitized case studies.
- Used minimal-content review to distinguish artifact existence from authorship, ownership, permission, award, acceptance, results, and reference readiness.
- Created a Git-safe locator with ten opaque evidence groups and no organization/project identities, original filenames, source paths, contacts, or protected artifact contents.
- Kept prior-work claim readiness at `SELF_REPORTED_INPUT` because the repository's `ARTIFACT_LOCATED` state requires ownership, scope, and attribution checks that have not occurred.
- Preserved Wellridge-designed templates as method artifacts only; they do not establish prior delivery, corporate past performance, or buyer acceptance.
- Updated the CroSS proof inventory, capture brief, claim-provenance register, index, roadmap, decision log, and active handoff to point to the new evidence-control layer.
- Validated the then-current 37 Markdown files across the root README and `docs/`, ten unique evidence IDs, local links, sanitized-locator path/name leakage, and patch whitespace; preserved a concurrently added validation artifact outside this workstream.
- Ran `npm run build`; all 14 Astro routes generated successfully with only the existing dependency-age and Astro/Vite unused-import warnings.

**EXPLICITLY OUT OF SCOPE / REJECTED — No private evidence locker was created; no protected artifact was copied; no identity, path, contact, or confidential work product was added to Git; and no owner, client, employer, agency, partner, or reference was contacted. No deployment, commit, push, purchase, filing, registration, or submission occurred.**

## 2026-07-12 — Sanitized cross-template lifecycle and pricing dry run

**Status: DECIDED / WORKING DECISION — Local synthetic validation only; all threshold values remain hypotheses.**

- Created a fully fictional 2099 lifecycle fixture spanning a Funding Pipeline Sprint, a separate proposal request, a synthetic addendum and exception, a fictional award, notice to proceed, first-90-day program controls, submission, acceptance, invoice, recognized-revenue assumption, cash collection, and closeout.
- Created a six-row machine-checkable pricing CSV covering base/stress cases for Pipeline, Proposal, and Program Launch scopes while keeping recognized revenue, cash, direct cost, Felix hours/value, overhead, contribution, realization, economic surplus, and peak cash exposure separate.
- Kept every threshold row `HYPOTHESIS TO TEST`, every approval field blank, every synthetic structural pass on `HOLD_INPUTS`, and every external-release status `NOT_AUTHORIZED`.
- Proposed a human-review package for contribution, realization definition, contingency, overhead sensitivity, project economic surplus, cash exposure, pass-through, and collection timing without adding those values to the working-decision table.
- Demonstrated that all base cases passed candidate comparisons, while proposal and program stress cases failed the candidate cash-exposure limit even though their contribution and realization tests passed.
- Corrected the Offer 2 formula so service-fee realization and cash contribution per effective hour are separate measures.
- Added lifecycle/parent/run-mode trace fields, namespaced control IDs, downstream pricing-gate references, Pipeline change/exception/transition controls, and an award-to-launch crosswalk to the reusable templates.
- Preserved concurrent CroSS-DFW candidate-evidence work and did not alter its opaque identities, proof states, or release boundaries.

**EXPLICITLY OUT OF SCOPE / REJECTED — No real client, funder, solicitation, award, source, deadline, approval, invoice, revenue, or cash event was used. No quote, SOW, submission, outreach, partner/reference contact, portal action, deployment, commit, push, purchase, filing, registration, or external-system change occurred.**

## 2026-07-12 — CroSS candidate proof-development shortlist

**Status: DECIDED / WORKING DECISION — Local evidence triage and Git-safe documentation only.**

- Reviewed the existing grant-evidence workbook through its pre-existing inspection sidecar and rendered previews because the required spreadsheet runtime was unavailable; did not open, edit, export, or rewrite the workbook with an unsupported library.
- Determined that the workbook is a useful record/source index but not a complete private past-performance ledger. It lacks ownership, exact contribution, permission, acceptance/performance, reference, confidentiality, and solicitation-similarity controls.
- Quarantined the workbook's public wording because applicant/contact indicators do not independently support personal win, secured-funding, leadership, or causal claims; preserved the useful confirmed-versus-offer-stage distinction.
- Tightened the evidence locator's residual-correlation warning and safe carry-forward rules; marked the derivative résumé as a drafting aid, the ledger as review-in-place/high-risk aggregation, self-published biography as a discovery lead, and unproven case studies as quarantined.
- Added one opaque derived evidence note pointing to a possible official school-partner record, bringing the locator to eleven candidate groups without storing names, correspondence, contact data, identifiers, or source paths in Git; the raw record was not reviewed in this pass.
- Ranked three complementary candidates: engagement/measurement method design, federal offer/award-readiness controls, and a school/community reference candidate. Set the risk-first clearance order to school/community, engagement method, then restricted federal controls.
- Preserved multi-stage role chronology, July 2026 role-ending corrections, and the boundary against converting an independent-practice entry or unrelated prior venture into Wellridge corporate past performance.
- Updated the proof inventory, reference-slot state, capture brief, claim-provenance register, documentation index, roadmap, decision log, and active handoff without editing public-site code.
- Refreshed NCTCOG Transportation's official `Current Procurements` page; CroSS-DFW was not listed. BidNet pages were not directly readable, so retained `WATCH / PRE-CAPTURE` without claiming a conclusive portal-wide absence.
- Validated the then-current 38 Markdown files, eleven unique evidence IDs, three unique project IDs, cross-document evidence references, local links, sanitized identity/path leakage, and patch whitespace.
- Ran `npm run build`; all 14 Astro routes generated successfully with only the existing dependency-age and Astro/Vite unused-import warnings.

**EXPLICITLY OUT OF SCOPE / REJECTED — No protected artifact was copied or moved; no private locker was selected or created; no raw correspondence, source path, organization identity, project identity, contact, PII, PHI, student record, credential, or financial record was added to Git. No owner, client, employer, agency, partner, or reference was contacted, and no deployment, commit, push, filing, purchase, registration, submission, or external-system action occurred.**

## 2026-07-12 — Provisional contribution guardrails approved

**Status: DECIDED / WORKING DECISION — Internal provisional pricing control only.**

- Felix approved the first dry-run decision: Pipeline 80% base target / 75% stress floor; Proposal 70% / 65%; Program Launch 55% / 50%.
- Defined core contribution as professional-service fee less owned-scope direct cash delivery cost, divided by professional-service fee, before Felix labor and overhead and excluding pass-through.
- Applied the base value as the normal estimating target, required explicit review below target, and retained `REPRICE_OR_RESCOPE` below the stress floor unless Felix approves a named learning exception.
- Set the review trigger after the first three closed authorized scopes per module using actual direct cost, hours, rework, acceptance, and collection evidence.
- Updated the canonical decision log, pricing gate, scope cards, strategy, dry-run decision package, roadmap, and active handoff while keeping every other proposed threshold unresolved.
- Preserved blank synthetic project-approval fields, `HOLD_INPUTS` simulation states, and `NOT_AUTHORIZED` external-release status.

**EXPLICITLY OUT OF SCOPE / REJECTED — This decision did not approve a quote, fee, SOW, client scope, public price, outreach, deployment, commit, push, purchase, filing, registration, or external-system change.**

## 2026-07-12 — Primary realization definition approved

**Status: DECIDED / WORKING DECISION — Internal pricing-measure definition only.**

- Felix approved `professional-service fee / total effective hours` as the primary service-fee realization definition.
- Defined professional-service fee to exclude pass-through and total effective hours to include discovery, research, production, meetings, coordination, revisions, QA, and unbilled project administration across every delivery role.
- Preserved cash contribution per effective hour as the separate `(professional-service fee - owned-scope direct cash delivery cost) / total effective hours` diagnostic.
- Corrected the Offer 2 scope card by removing risk/capital allowance from cash contribution per hour; risk is now counted once in project economic surplus with Felix replacement labor, fixed-staff allocation, and overhead.
- Kept the $125/hour base and $110/hour stress realization references as `HYPOTHESIS TO TEST` and advanced them as the next pricing decision.
- Synchronized the decision log, pricing gate, services/pricing strategy, risk register, dry-run decision package, roadmap, and active handoff.

**EXPLICITLY OUT OF SCOPE / REJECTED — This decision did not approve a realization value, public price, quote, fee, SOW, client scope, outreach, deployment, commit, push, purchase, filing, registration, or external-system change.**

## 2026-07-12 — Provisional realization references approved

**Status: DECIDED / WORKING DECISION — Internal provisional pricing guardrails only.**

- Felix approved $125 per total effective hour as the provisional base target and $110 per total effective hour as the provisional stress floor.
- Applied the references only to service-fee realization under the approved `professional-service fee / total effective hours` definition; cash contribution per hour remains a separate diagnostic without an approved numerical threshold.
- Required explicit review from $110 to below $125 and retained `REPRICE_OR_RESCOPE` below $110 unless Felix approves a named learning exception.
- Set the review trigger after the first three closed authorized scopes per module using complete time, cost, rework, acceptance, economic-surplus, and collection records.
- Corrected the Pipeline Sprint pressure-test table so realization hour limits use the full professional-service fee rather than contribution dollars; direct cost remains separately governed by contribution and economic tests.
- Updated the decision log, pricing gate, both offer cards, services/pricing strategy, risk register, dry-run decision package, roadmap, and active handoff.
- Advanced 20% planned contingency with named stress sensitivity as the next pricing decision.

**EXPLICITLY OUT OF SCOPE / REJECTED — This decision did not approve a public hourly price, quote, fee, SOW, client scope, contingency, overhead, economic-surplus threshold, cash limit, outreach, deployment, commit, push, purchase, filing, registration, or external-system change.**

## 2026-07-12 — Separate private evidence control plane configured

**Status: DECIDED / WORKING DECISION — Local pointer-first evidence system only; every candidate remains unverified or self-reported.**

- Created a separate sibling repository named `wellridge-evidence` on local branch `main` without a commit or remote.
- Made one Markdown record per project the canonical store, with strict flat front matter for controlled evidence states and a narrative body for claim limits, source notes, ownership, permission, and next-review actions.
- Added a dependency-free validator, custom schema manifest, and generated `index.csv`; validation passed for three records and three index rows with no unexpected files or credential-pattern findings.
- Seeded the school/community reference candidate, engagement/measurement method sample, and restricted federal-control candidate using real business identities in the private repository.
- Kept absolute source paths in an ignored `.local/source-map.json` file and left every underlying artifact in its existing location.
- Deferred Google Sheets and SQLite because three judgment-heavy records do not yet require multi-user synchronization or relational querying.
- Synchronized this deployable repository's sanitized evidence locator, active context, decision log, and roadmap without adding real project identities or source paths here.

**EXPLICITLY OUT OF SCOPE / REJECTED — No source artifact, raw correspondence, private contact, credential, PHI, student-level record, tax or banking data, or protected work product was copied. No reference, client, agency, partner, or owner was contacted. No external repository, backup, commit, push, deployment, purchase, filing, registration, or submission occurred.**

## 2026-07-12 — School/community evidence source verified

**Status: DECIDED / WORKING DECISION — Narrow source facts verified; project-specific attribution and all external-use gates remain unresolved.**

- Verified the exact official school-district reply in place through one read-only Gmail API path without retaining the body, quoted thread, signature, or inline image.
- Recorded only an opaque pointer and content hashes in the separate private control plane.
- Confirmed that the reply supports a delivered program relationship, student opportunity, bounded qualitative feedback, and interest in continued or expanded partnership; it does not attribute project work to Felix or authorize public use.
- Verified organization-level role information from official public sources and kept it separate from the unresolved claim that Felix personally owned defined 2025 project workstreams.
- Reviewed a de-identified aggregate supporting bounded registration facts while keeping registrations distinct from attendance and excluding the participant-level workbook.
- Quarantined an unsigned derivative support rendering because it adds first-person advocacy, signature, and grant-consideration language absent from the verified reply.
- Updated the sanitized locator, proof inventory, shortlist, decision log, roadmap, active handoff, private record, and generated index.

**EXPLICITLY OUT OF SCOPE / REJECTED — No reference or permission request was drafted or sent; no Gmail label or message state changed; no Drive file was downloaded or edited; no participant-level data, raw correspondence, protected artifact, or private path was added here; and no commit, push, deployment, portal action, purchase, filing, registration, or submission occurred.**

## 2026-07-12 — Bounded school/community key-person role sourced

**Status: DECIDED / WORKING DECISION — Bounded role facts are source-supported and awaiting Felix's human review; external use remains unauthorized.**

- Ran a targeted read-only search across 61 contemporaneous project messages and identified ten authored by Felix from organizational addresses.
- Selected three minimum-necessary message pointers supporting participant recruitment and communications, distribution of artistic materials and repertoire, and post-event school-partner liaison.
- Stored only opaque source IDs and hashes in the private control plane; no body, recipient list, attachment, contact coordinate, or participant information was retained.
- Narrowed the role claim to visible actions and explicitly rejected upgrades to sole project management, ownership of all logistics, government contracting, causal outcomes, or Wellridge corporate past performance.
- Moved the private record to `AWAITING_DECISION` while retaining `SELF_REPORTED_INPUT` as the record-wide readiness ceiling until Felix completes human review and ownership/permission decisions.

**EXPLICITLY OUT OF SCOPE / REJECTED — No message or label changed; no email, permission request, or reference request was drafted or sent; no attachment or participant record was downloaded; and no commit, push, deployment, portal action, publication, purchase, filing, registration, or submission occurred.**

## 2026-07-12 — Bounded role wording confirmed by Felix

**Status: DECIDED / WORKING DECISION — Claim wording human-confirmed; ownership and external-use gates remain unresolved.**

- Felix confirmed that the bounded role wording is accurate.
- Advanced the claim-level support state to `SOURCE_SUPPORTED / HUMAN_CONFIRMED`.
- Marked the private record `COMPLETE_FOR_CURRENT_SCOPE` for bounded-role verification only.
- Kept record-wide evidence readiness at `SELF_REPORTED_INPUT`, permission at `INTERNAL_REVIEW_ONLY`, and reference status at `NOT_CONTACT_READY`.
- Advanced ownership and permitted-channel review as the next evidence gate.

**EXPLICITLY OUT OF SCOPE / REJECTED — The confirmation does not establish sole project management, ownership of every workstream, government-contracting past performance, causal outcomes, proposal permission, public-use permission, or reference consent. No external action occurred.**

## 2026-07-12 — School/community ownership and channel review

**Status: DECIDED / WORKING DECISION — Officer status supported; object-level ownership assessed and unresolved; external use remains unauthorized.**

- Reviewed governance records, role descriptions, a tax-return filing package, and signed bylaws through the private pointer-first workflow.
- Recorded an officer-only engagement basis for the school/community candidate and preserved that the person was identified separately from voting directors.
- Kept employee-versus-contractor classification unresolved; an officer title, organizational account, assigned duty, compensation indicator, or document custody does not by itself settle copyright work-made-for-hire status.
- Split factual experience from evidence-object reuse. A truthful bounded key-person statement, authored organizational emails, third-party correspondence, attachments/program materials, program data, public role pages, governance records, and a derivative rendering have different ownership, confidentiality, authority, and permission questions.
- Added an assessed-but-unresolved ownership state in the private schema and retained `SELF_REPORTED_INPUT`, `INTERNAL_REVIEW_ONLY`, pointer-only handling, and `NOT_CONTACT_READY` at the record level.
- Defined separate gates for partner diligence, proposals, named project sheets, partner paraphrases/quotes, work samples, references, and public use. The bounded key-person statement is the first potential clearance target; every external channel remains closed.
- Synchronized only opaque IDs and sanitized conclusions here; no prior-organization identity, source path, contact, message body, participant record, or protected work product was added.

**OPEN QUESTION — Locate a controlling engagement, IP-assignment, confidentiality, grant, partner, or board-delegation instrument. If none exists, Felix may separately decide whether to authorize drafting a narrow prior-organization permission request for the bounded key-person statement.**

**EXPLICITLY OUT OF SCOPE / REJECTED — No permission or reference request was drafted or sent. No organization, partner, owner, sender, or reference was contacted. No Drive object was changed. No commit, push, deployment, publication, registration, filing, purchase, portal action, or submission occurred.**

## 2026-07-12 — School/community controlling-instrument search closed to a Felix decision gate

**Status: DECIDED / WORKING DECISION — Scoped negative search documented; every external channel remains closed.**

- Synchronized the private record's bounded read-only repository, Drive, Gmail, and candidate-document search without copying identities, paths, correspondence, personnel details, or protected work product here.
- Recorded only the Git-safe conclusion: no controlling engagement, confidentiality, IP-assignment, reuse-license, or delegation instrument was located in the searched corpus as of July 12. This is not proof that no instrument exists; unshared, paper, outside-counsel, deleted, non-indexed, or unexpectedly named records remain possible.
- Recorded that grant guidelines point to an executed award agreement in a restricted grant portal and that a participant media release grants defined rights to the prior organization rather than Wellridge. The agreement remains unreviewed and must be checked first if Felix elects to pursue external use.
- Replaced the ambiguous private officer/board classification with exact `OFFICER`; the evidence does not imply board membership.
- Moved the private record to `AWAITING_DECISION` without upgrading evidence readiness, ownership, permission, reference status, confidentiality, solicitation fit, or any claim.
- Recorded the conservative institutional route as disinterested prior-organization governing-body approval, or documented delegation to an officer for the exact use. Partner-controlled statements and materials retain a separate authority chain.
- Made the next gate explicit: Felix must identify a real near-term need, exact bounded wording/object, and one external channel and separately authorize drafting before any permission request may be prepared.

**OPEN QUESTION — Felix has not selected an external channel or authorized a draft, request, reference outreach, or release.**

**EXPLICITLY OUT OF SCOPE / REJECTED — No Drive or Gmail state changed; no external wording, permission request, or reference request was drafted or sent; no organization, governing-body member, officer, partner, sender, owner, or reference was contacted; and no commit, push, deployment, publication, registration, filing, purchase, portal action, or submission occurred.**

## 2026-07-12 — Provisional contingency and stress method approved

**Status: DECIDED / WORKING DECISION — Internal provisional estimating control only.**

- Felix approved 20% planned contingency applied once at the role-hour level and prohibited adding the same contingency again as a fee line.
- Required a named stress scenario for every scope; when credible stress evidence is unavailable, the fallback is at least 125% of the contingency-loaded planned hours.
- Kept stress as an internal viability test against the $110 realization floor, contribution, economic-surplus, capacity, and cash gates rather than an automatic client charge.
- Added explicit `H_plan` and `H_stress` formulas and required the realization boundary to use the greater of `H_plan × $125` and `H_stress × $110`.
- Updated both offer cards, including Pipeline Sprint math showing that 16–20 raw hours become 19.2–24.0 planned and 24.0–30.0 fallback-stress hours.
- Updated the decision log, pricing gate, services/pricing strategy, risk register, dry-run package, roadmap, and active handoff while preserving concurrent evidence-control work.
- Advanced the 16% base / 25% stress overhead proxies as the next pricing decision.

**EXPLICITLY OUT OF SCOPE / REJECTED — This decision did not approve a public price, automatic stress charge, quote, fee, SOW, client scope, overhead proxy, economic-surplus threshold, cash limit, outreach, deployment, commit, push, purchase, filing, registration, or external-system change.**

## 2026-07-12 — Provisional overhead proxies approved

**Status: DECIDED / WORKING DECISION — Internal provisional project-pricing allocation only.**

- Felix approved 16% of professional-service fee as the base overhead proxy and 25% as the stress proxy.
- Excluded pass-through and any amount already classified as direct delivery cost, fixed-staff allocation, Felix replacement labor, or risk allowance.
- Kept the stress proxy as an internal project-pricing sensitivity rather than an automatic client charge or worst-case company-overhead forecast.
- Preserved a separate business-level runway check because the startup financial model's 33.3% overhead ratio exceeds the 25% project stress proxy.
- Added the explicit percentage-based economic-boundary formula and required the proxies to be replaced or segmented when trailing actual overhead, recognized revenue, and productive-capacity data are credible.
- Updated the decision log, pricing gate, both offer cards, services/pricing strategy, risk register, dry-run package, roadmap, and active handoff while preserving concurrent evidence-control work.
- Advanced the 10% base / zero stress project-economic-surplus references as the next pricing decision.

**EXPLICITLY OUT OF SCOPE / REJECTED — This decision did not approve a public price, automatic overhead charge, accounting allocation policy, economic-surplus threshold, quote, fee, SOW, client scope, cash limit, outreach, deployment, commit, push, purchase, filing, registration, or external-system change.**

## 2026-07-12 — Provisional project-economic-surplus references approved

**Status: DECIDED / WORKING DECISION — Internal provisional project-pricing guardrails only.**

- Felix accepted a minimum base project economic surplus of 10% of professional-service fee and a stress floor of zero.
- Defined the proxy as `F - DC - SA - FV - O - R`, including imputed Felix replacement labor, provisional overhead, and risk.
- Required `REPRICE_OR_RESCOPE` below either reference unless Felix approves a named learning exception.
- Kept the proxy separate from accounting profit, cash collected, taxable income, distributable funds, and company-level reserves.
- Added explicit base and stress economic-boundary formulas using the approved overhead percentages: base denominator `1 - 0.16 - 0.10`; stress denominator `1 - 0.25` when risk is a dollar input.
- Updated the decision log, pricing gate, both offer cards, services/pricing strategy, risk register, dry-run package, roadmap, and active handoff while preserving concurrent evidence-control work.
- Advanced the owned-scope cash-exposure formula and zero-unprotected-pass-through rule as the next pricing decision.

**EXPLICITLY OUT OF SCOPE / REJECTED — This decision did not establish accounting profit, tax treatment, distributable cash, a public price, quote, fee, SOW, client scope, cash-exposure limit, pass-through protection rule, outreach, deployment, commit, push, purchase, filing, registration, or external-system change.**

## 2026-07-12 — Three-stream sourcing resumed with a net-new dated batch

**Status: DECIDED / WORKING DECISION — Local public-source research and documentation only.**

- Preserved the original ten-account pilot as a calibration baseline and created a separate 21-record batch rather than rewriting prior scores or lifecycle history.
- Added seven nonprofit-direct records, six consultant/prime records, and eight selective agency-watch records from dated official or authoritative sources.
- Recorded nine `RESEARCH_TARGET`s, nine `WATCH_ACCOUNT`s, two `HOLD`s, one `DISQUALIFIED` current solicitation, zero `QUALIFIED_OPPORTUNITY`s, and `outreach_authorized=NO` on every row.
- Established a first local research queue: Wellness Center for Older Adults, For Oak Cliff, From Ordinary to Extraordinary, Maximus, and American Institutes for Research.
- Preserved TEA Local Accountability awardees, Tarrant County Community Outreach Fund awardees, and the Dallas Eviction Advocacy re-solicitation as named watch triggers rather than Wellridge pipeline.
- Kept program funding, contract value, Wellridge revenue, cash, contribution, owner compensation, and true profit separate; kept clinical, legal, statistical, engineering, technical, child-welfare, and statewide enrollment authority outside Wellridge-owned scope.
- Added source-register entries OS12–OS26 and a compact operating readout linked through the documentation index, roadmap, and active handoff.

**EXPLICITLY OUT OF SCOPE / REJECTED — No organization or person was contacted; no supplier, partner, vendor, bidder, event, or grant registration was created; no proposal, application, question, RSVP, or submission was sent; and no deployment, commit, push, purchase, filing, or external-system change occurred.**

## 2026-09-07 — local grant-offer website overlay

- Implemented bounded grant-writing service, fictional Northside Arts Workshop review example, grant application checklist, scoped navigation/footer links, metadata/structured data, source sitemap/robots, and a non-submitting inquiry mailto composer.
- Preserved existing service strategy and copied dirty baseline docs/scripts. No deployment, push, outbound send, payment, or external integration occurred.

- Follow-up pass replaced stale “When intake opens” copy, added typed query-aware inquiry fields, a read-only prepared-details preview and copy fallback, separate email-draft control, accurate operations prompts, and the 5–7-business-day application first-draft wording. `npm run build` and `git diff --check` pass; browser QA remains root-owned.

- Final editorial/navigation pass added Resources index cards for the checklist and fictional sample, removed the resource-index “coming soon” state, tightened the sample to a 203-word fact-bound narrative with visible Wellridge byline/date, and kept unresolved inputs outside the narrative. `npm run build` and `git diff --check` pass.

- Root browser QA passed on the production build at desktop and 390px mobile widths: grant offer, sample, checklist, mobile menu/resource discovery, inquiry navigation, correct recipient/body, and successful copy feedback. No browser console errors or horizontal overflow on the three new routes. Actual mail delivery, publication, indexing, and production performance remain untested external steps.

## 2026-09-07 — Prepare authorized source pushes

- Reconciled current context, roadmap, and canonical decision log with the completed 17-page build and browser checks. Kept `DECISIONS.md` as its existing pointer to `DECISION_LOG.md`.
- User authorized implementation/documentation push to `origin/feature/grant-offers-2026-09-07`, followed by a second documentation commit recording the confirmed first push. Only the current task's source and documentation changes are staged; prior copied research and strategy work stays unstaged.
- Verified GitHub account `fdtorres1`, repository `fdtorres1/wellridge_site`, and existing base `1ea88039e216c4d3c948e7780fe8cd039e2acd01` on `origin/wellridge-strategy-docs`. No main merge or production deployment is included.

## 2026-09-07 — First push verified; documentation follow-up

- Committed implementation and task-only documentation as `c7d17219cbd0acc2755a448989bfc70ef27e3e7f` (`feat: add bounded grant offers and fictional work example`).
- Pushed successfully to `origin/feature/grant-offers-2026-09-07` in `fdtorres1/wellridge_site`; upstream tracking was established.
- Remote readback at 15:18 UTC returned the identical full SHA via `git ls-remote`. Production build passed at 17 pages, with existing dependency-age and unused-import warnings.
- Verified the staged content against a 17-file task-only manifest. Only the new website changes and dated documentation additions were committed; older copied research and strategy work remains unstaged.
- This second, documentation-only commit records first-push evidence and updates current context/roadmap. No main merge, production deployment, outbound message, or social post was performed.

## 2026-09-07 — Authorized main merge and production verification

- User explicitly authorized the merge. Verified the exact feature head, full main comparison including the two previously committed identity/strategy changes, repository permissions, and successful Vercel preview status.
- Main merge: `30f5eb92eae467b939d439a65d8eacc7617db902`. Production deployment: `6312071418`, successful at 15:49:19 UTC.
- Verified HTTP 200 and expected content on the public grant-writing offer, grant-review example, and application checklist. Vercel serves them after the existing apex-to-www redirect.
- Used a clean checkout of merged main to record release evidence. Older dirty research/strategy work remained untouched and outside the release. No outbound or social message was sent; inquiry delivery, indexing, and acquisition outcomes remain unmeasured in this release check.

## 2026-09-07 — SEO canonical and sharing foundation

- Aligned Astro's site origin, generated canonical/OG URLs, structured-data URLs, and robots/sitemap URLs to `https://www.wellridgegroup.com`, matching the live apex redirect target.
- Added an original branded PNG sharing card (1738×905, 1,372,600 bytes), visually reviewed for text and brand consistency. OG/Twitter metadata includes the actual dimensions, PNG type, descriptive alt text, and `summary_large_image`.
- Verified Search Console domain owner access. Baseline: no submitted sitemap, homepage Google canonical at the old Vercel hostname from its September 1 crawl, and three newly released URLs unknown to Google.
- Preserved unrelated historical planning documents and dirty original checkouts. Build, production deployment, sitemap receipt, and inquiry delivery readbacks belong to the final release record.
- Root validation passed: production build and all 17 route canonicals, OG/image metadata, sitemap origins, and packaged PNG bytes. Existing dependency-age and unused-import warnings only.
- External synthetic inquiry reached the intended `hello@wellridgegroup.com` Google inbox with exact body match and passing SPF/DKIM/DMARC; private message identifiers remain outside the public repository.
- Search Console API submission is blocked by the existing read-only OAuth scope (HTTP 403 insufficient authentication scopes). Owner-UI submission or a separately consented write-scope upgrade remains necessary; no sitemap-submission or indexing success is claimed.

## 2026-09-07 — SEO first push and production follow-up

- First source push verified: `cceec49e56fd9b66c791cf51a709630b4456ca20` on `origin/fix/seo-foundation-2026-09-07`. Merged as `65a00c5500a82bfe4325efb9559b706e8189cda4`; Vercel Production deployment `6312439855` succeeded at 16:13:32 UTC.
- Live readback caught a trailing-slash mismatch between generated canonical paths and static sitemap paths. Normalized canonical and OG paths to the sitemap's slashless page URLs, preserving `/` for the homepage. This follow-up requires a fresh build and production verification before being treated as complete.
- Follow-up production build passed at 17 pages before interruption. On resumption, verified the saved source and exact equality of all 17 built canonical/OG URLs with the sitemap. Confirmed the first Wellridge deployment and Elaren documentation deployment both succeeded; both synthetic inquiry receipts remain recorded. The Mac currently has 41 GiB free; the cause of the earlier interruption is unconfirmed.

## 2026-09-09 — Grant conversion implementation

- Created an isolated worktree from current main `954b6a3cae0770e0a4e14530b8e36b6dd79050b8`. Preserved original dirty strategy work and prior worktrees. Owner authorization covers this implementation, push/merge/deployment, and documentation follow-up.
- Two native workers requested as Luna medium implemented bounded offer/content slices; one also adapted the public IndexNow tool. Root reviewed their files, corrected frontmatter/YAML errors through follow-up, restored exact application-payment wording, removed forthcoming/internal-facing copy, and integrated contact/privacy/header/footer/sitemap changes. Root also requested read-only inquiry review and fixed JavaScript-free entry by disabling fields until handlers load.
- Implemented direct Wellridge-specific FormSubmit delivery, package/service selection, required contact fields, honeypot, duplicate protection, timeout, explicit reset, failure retention and copy/email fallback. The activated route's two labeled setup messages reached the intended inbox with matching markers. No prospect data or attachments were used; both messages are excluded from business measures.
- Current Google URL Inspection reports homepage and grant-writing Submitted and indexed with matching www-domain user/Google canonicals. Last crawls: September 8, 17:03:10 and 17:05:04 UTC. The routine token refresh preserved all 20 scopes exactly; no added/removed permission.
- Initial build generated 20 pages. Three inquiry and six IndexNow tests passed. Existing dependency-age and Astro unused-import warnings are unrelated to the change. Browser interactions have timed out intermittently; account identity was verified in Bing, but its Wellridge ownership/submission state is not yet complete. Final QA and release evidence follow separately.
- Updated README/DEPLOYMENT to distinguish the deployed site from historical setup instructions, current-context/roadmap/decision records, inquiry handling, and IndexNow operating instructions. Historical July strategy snapshots remain preserved and explicitly marked as superseded for deployment/intake state.

## 2026-09-09 — Grant conversion release and external receipts

- Verified first push `51ff54aefabb4aa81c13a0a226d3a9238ce6f596` on the feature branch; merged to main as `a74a9dee2d12b190abefb85a90499e4b1c10e7c4`. Vercel Production deployment `6343743457` succeeded at 06:14:33 UTC. All 20 live sitemap pages returned 200 without redirects; ownership markup, canonical destinations and public IndexNow key were read back.
- Final build, three inquiry tests, six IndexNow tests and static checks passed. Checks cover page titles/descriptions, one H1 per page, exact canonical/OG/sitemap agreement, internal links/fragments, JSON-LD, production provider route and initially disabled JavaScript-free fields. Root also bounded resource body width and wrapped the buyer comparison table for horizontal scrolling.
- Personal Chrome desktop checks passed for package/operations preselection, required-field blocking, retained-input failure and fallback visibility, guide and LOI rendering, production submission and explicit reset. Production console was clear. Fresh mobile viewport and clipboard feedback readback were not completed; no claim is made for them.
- One labeled production-browser inquiry reached the intended mailbox with exact marker, To, Delivered-To, $350 LOI selection, `/contact` source and reply email. Together with two setup messages, three synthetic messages are excluded from business metrics. No prospect outreach occurred.
- Bing Wellridge ownership verified through the independently read meta tag. Selected property and sitemap receipt read back: Submitted / Processing. Google sitemap PUT 204 at 06:17:21 UTC; GET pending, zero errors/warnings, previous 17-URL count. Account identity was verified through the authorized Gmail profile endpoint after the userinfo endpoint rejected access. Refresh preserved all 20 OAuth scopes exactly.
- IndexNow returned HTTP 202 for ten explicit changed canonical URLs after public-key and route checks. These are submission receipts, not evidence of new-page indexing, rankings, or acquisition. Analytics remains deferred. This follow-up records the push and deployment before its own separate documentation push/merge.

## 2026-09-09 — Focused service page implementation and QA

- Started `feature/grant-entry-pages-2026-09-09` from clean verified main `f3f84cb856fa09c27de4ab8290e246f94bcb2b2f` in the existing isolated conversion worktree; other worktrees remain untouched. One native worker requested as Luna medium owned only the two new service pages. Root reviewed both, improved responsive headings and visible fees, removed internal-facing wording, and integrated pricing, shared service paths, guide/sample links and sitemap entries.
- Added review and LOI pages with shared offer terms, factual inputs/deliverables, existing fictional demonstrations, scoped timing and client approval/submission. Expanded Pricing with six buyer questions while retaining custom operations quotes.
- `npm run build` passed with 22 pages; `node --test scripts/inquiry.test.ts` passed all three tests; `git diff --check` passed. Static checks verified all page H1/description/canonical/OG URLs, sitemap equality, internal links/fragments, JSON-LD and correct selected-package links and fees. Existing dependency-age and Astro unused-import warnings remain unrelated.
- Personal Chrome browser QA used the local built-site preview and existing production contact page. Review/LOI CTAs selected the expected $295/$350 packages. At 390×844, service pages, Pricing, contact and guide had no whole-page horizontal overflow; the comparison table scrolls inside its region. The contact menu opened and copy confirmation plus exact clipboard-marker readback passed without submitting a new inquiry. Desktop review/LOI checks at 1680px were clear, with no app console errors or framework overlay. Screenshots stay outside the repository; viewport restored.
- Updated README, ACTIVE_CONTEXT, ROADMAP, DECISION_LOG, WORKLOG and INQUIRIES for the new page architecture and completed QA. Existing deployment and IndexNow procedures are unchanged. Source push/merge/provider receipts follow separately; analytics remains deferred.

## 2026-09-09 — Focused service page release receipts

- First push `6c520fd9f54d647f6405c594fa56fc9673d146ac` was verified against the remote feature branch. GitHub merge `784471370fe55edf6a63a7912d23b9b9316e0fdc` deployed successfully through Vercel Production `6349487842` at 12:17:18 UTC.
- All 22 live sitemap routes returned HTTP 200 with exact canonical destinations. New service fees, selected-package links and JSON-LD, plus Pricing buyer answers, were read back. Both live service-to-contact navigations selected the correct $295 review / $350 LOI package.
- One IndexNow request for the two new services, pricing, grant overview, buyer guide, review sample and LOI sample returned HTTP 200. Receipt is verified; new-page indexing, rankings, and client inquiries are not established. Existing Google/Bing sitemap registrations continue to point to the updated canonical sitemap; no OAuth permissions or analytics settings changed.
- This documentation follow-up records the completed source push and deployment before its own separate push/merge. The existing deployment runbook was reviewed and needed no procedural changes; historical strategy records were preserved.

## 2026-09-09 — About inquiry invitation

- Owner requested correction of the stale About-page contact-status wording. Replaced the closing heading with “Tell Us What You Need,” added a direct invitation to share the opportunity, deadline and work, and changed the existing `/contact` button to “Send an inquiry.” Existing layout and contact destination are preserved. Build and production readback are release checks.
- Build and built-page assertions passed. First push `fd91690bd1b23e192152f55b5ed8a43623ce7ed5` matched the remote branch; main merge `86e8b1234376a852f76599d0e05aa30b5d717d8c` deployed through Vercel Production `6355398790`, successful at 17:18:32 UTC. Live `/about` returned 200 with the new invitation and without the stale status/availability wording. This follow-up records the completed push and deployment.

## 2026-09-09 — National grant services implementation and QA

- Owner approved nationwide nonprofit buyer-task positioning. Created `feature/national-grant-services-2026-09-09` from refreshed main `b6f9bd81079280a021d65d45eb9e9b727fc236e3` in the clean conversion worktree. Verified GitHub identity `fdtorres1`, repository and main deployment target; original dirty strategy checkout preserved.
- Changed grant hub metadata/hero/answers to national service and no-retainer hiring; retained Texas/DFW in supporting copy. Review and LOI pages now include national nonprofit intent, U.S. service-area markup, annotated fictional excerpts, and cross-links to the new `/foundation-grant-writing` page. Shared application service path automatically links the hub and Pricing; added buyer-guide, home and Services context and the 23rd sitemap entry.
- A native worker requested as `gpt-5.6-luna` medium owned only the new application page. Root reviewed and revised the result: shared price/payment/timing text, national hero, useful fictional prompt/response, and explicit first-draft versus final-delivery timing. No credentials, private client work, grant wins, or new specialist capabilities were claimed.
- Root `npm run build` generated 23 pages; three existing inquiry tests and `git diff --check` passed. Static checks covered all H1s/descriptions, exact canonical/OG/sitemap agreement, internal links/fragments, parsed JSON-LD, U.S. service area, fees and package links. Existing dependency-age/unused-import warnings remain unrelated.
- Personal Chrome: national hub desktop screenshot at 1680×947; three service-page heroes at 390×844; meaningful content, no framework overlay, and clear inspected console logs. Hub-to-application navigation and each service-to-contact CTA passed, selecting $750/$295/$350 respectively. Intermittent inspection/locator timeouts resolved using fresh state and documented DOM controls. No form was submitted, no new inbox test was needed, and viewport was restored. Screenshots are temporary artifacts outside Git; full-page overflow across every breakpoint was not separately measured.
- Updated README, ACTIVE_CONTEXT, ROADMAP, DECISION_LOG and this log; added NATIONAL_GRANT_SEO for keyword/page ownership and measurement limits. DEPLOYMENT and INDEXNOW runbooks were reviewed and their procedures remain unchanged. Demand/volume/ranking validation is future evidence work, not a completed result. Analytics remains deferred. Release receipts follow separately.

## 2026-09-09 — National grant service release receipts

- First push `dcea81368f1c080b4f33cfc2ff6761907d74bb62` matched the remote feature branch. GitHub main merge `799f89e9327951433a26937c6f975c3503fbaf79` triggered Vercel Production deployment `6355966682`, successful at 17:50:45 UTC.
- All 23 sitemap URLs returned HTTP 200 at their exact canonical destinations; each live HTML response matched the tested production build exactly. The new application page and the national service metadata, pricing links, excerpts, and U.S. markup are therefore present in production.
- Personal Chrome live application page rendered without overlay or app console errors; its CTA selected the $750 application on the production contact form. No message sent. Desktop production screenshot saved outside the repository.
- IndexNow returned HTTP 200 for eight explicit changed URLs, as listed in INDEXNOW.md. Existing Google/Bing sitemap registrations still point to `/sitemap.xml`; no OAuth or analytics settings changed. These receipts do not establish indexing, ranking, demand, or revenue.
- This follow-up records the completed first push, merge and deployment before its own separate documentation push and merge, per the owner's release workflow.

## 2026-09-09 — National keyword validation and outside discovery research

- Created `docs/national-keyword-validation-2026-09-09` from clean refreshed main `96ef3cd790adedcb153471401540f7e9d3eec671`; preserved the unrelated original checkout. Reverified GitHub identity and `fdtorres1/wellridge_site` main target.
- User identified Google Ads and DataForSEO access. Verified the saved DataForSEO account and actual endpoint prices with credentials only in process memory. One 30-keyword U.S./English Google Ads request cost $0.090; six depth-10 U.S. desktop Google organic requests cost $0.012. No top-up or Google Ads configuration changes. Requests have local pre-request markers and receipts; no paid request was retried.
- Nine volume estimates were numerical and 21 unreported. Saved sanitized 30-row demand CSV and 52-row organic observation CSV; retained raw responses outside Git. Broad review/editing searches showed funder/scientific intent mismatch. Reprioritized existing national hub, pricing and LOI example without claiming easy rankings or changing public source.
- Read-only native Luna worker researched directory/contribution opportunities. Root checked recommended primary routes, corrected suggested landing URLs to real site paths, removed any implication of membership/credentials, and deferred paid or unsuitable editorial channels. Prepared truthful listing copy and two unsent information requests; no external contact or submission occurred.
- Updated keyword plan, current context, roadmap, decision log and README. This pass is documentation/research only; prior build and browser checks remain dated historical evidence. Current checks cover CSV reconciliation, documentation links and whitespace. Push and merge receipts follow separately.

## 2026-09-09 — National research publication receipt

- `git diff --check`, documentation-only scope, local Markdown link resolution, 30 unique volume rows (nine reported / 21 unreported), and 52 organic observations across six queries passed. API receipts reconcile to $0.102. No application test rerun was needed for this documentation-only change.
- First push `2000ee8bbe2d284d7c8f2accb89cc48354764daa` matched the remote research branch. GitHub merged into main at `695860b66140c3c46867eb9d47335cb939ba658f`, confirmed by remote readback. Vercel Production deployment `6356396523` reported success at 18:15:54 UTC.
- This separate documentation follow-up records the push, merge and provider success. It contains no new public-site content or claim of indexing/ranking improvement. Directory inquiries remain unsent; no listing or membership exists as a result of this research.

## 2026-09-09 — Reusable LOI template implementation

- Created `feature/loi-template-2026-09-09` from refreshed main `fc9638c6ff6529bac83e134cc0743b0250a0688a` in the clean conversion worktree; original dirty checkout preserved. Reverified GitHub account `fdtorres1`, repository and main deployment target. No applicable local AGENTS files or stashes were found.
- Added a reusable blank template from one public text source, imported into the existing example page. Copy confirmation uses a polite live status; failure selects the text and explains manual copy/download. Standard text download and manual selection remain available without JavaScript. Existing paid scope uses shared $350 offer data.
- Updated example metadata, H1 and Article description; added section navigation, a clearly labeled fictional-example heading, funder-rule guidance and a primary reference. Resources and the LOI service link to the improved asset. No new HTML route, dependency, form, tracking or analytics was added.
- Independent native worker requested as `gpt-5.6-luna` medium reviewed source content only, changed no files, and confirmed sample budget/date consistency. Root incorporated guidance for placeholders, approved facts, planned outcomes, funding status and funder-specific requirements. Michigan Tech's public LOI guide was checked; Candid direct access returned 403 and was not used as a new source.
- Production build generated 23 routes. Root static checks passed for H1s, canonicals, parsed structured data, internal links/fragments, and exact equivalence of rendered/template/download text. The initial check's root-URL assertion was corrected to include the existing canonical slash; no site correction was needed. Existing dependency-age and unused-import build warnings remain.
- Personal Chrome at 1680×947 and 390×844 showed meaningful content, no framework overlay, no horizontal page overflow and clear inspected app console logs. Section navigation, desktop/mobile copy confirmation, template-to-service-to-contact navigation with the $350 LOI selected, and a browser download event passed. Chrome's separate virtual clipboard reader returned empty, so OS clipboard byte readback was not established. No inquiry was submitted. Intermittent browser locator timeouts were resolved using fresh state and documented DOM controls.
- Updated README, ACTIVE_CONTEXT, ROADMAP, DECISION_LOG and keyword validation status; deployment/IndexNow procedures are unchanged. Source is ready for the authorized release; live receipts follow separately. Directory messages remain unsent and analytics remains deferred.
- A controlled browser copy-failure check was interrupted by input timeouts; the temporary local override was removed by reload and the mobile viewport reset. An isolated execution of the actual page script passed both success and rejected-clipboard paths, including full multiline value, selection/focus fallback and button re-enablement. This verifies handler behavior with simulated DOM/clipboard objects, not a completed browser failure interaction. No testing overrides remain.

## 2026-09-09 — LOI template release receipts

- First push `748a828ec32db647880df318f0b14a9678d45ed6` matched the remote feature branch; main merge `73309505c0f3c70faf1d6e7bf245eb644f9f55ba` matched remote main. Vercel Production deployment `6364103506` reported success September 10 at 03:44:04 UTC, September 9 local time.
- `/work-examples/letter-of-inquiry`, `/letter-of-inquiry-writing`, `/resources` and `/downloads/grant-letter-of-inquiry-template.txt` returned HTTP 200 without redirects and matched the tested build exactly. The download was served as UTF-8 plain text. Live Personal Chrome confirmed page URL, title, visible heading and clear console logs.
- IndexNow accepted the three changed HTML pages with HTTP 200 after key and URL verification. No new indexing or ranking measurement is implied. No inquiry or directory message was sent; analytics remains deferred.
- This separate documentation follow-up records the completed push, merge and production verification, per the owner's requested workflow. Local QA artifacts remain outside Git.

## 2026-09-10 UTC / September 9 locally — Search discovery and resource-sharing preparation

- Created the documentation branch from refreshed main `b0c3432a4eb29386c95e864660451570d9b287b7` in the clean conversion worktree. Original dirty checkout preserved. Reverified repository `fdtorres1/wellridge_site`, GitHub identity `fdtorres1`, and main target. No applicable nested AGENTS or stashes were found.
- Verified Google owner access and preserved all 20 scopes. Seven URL inspections show two indexed with correct canonicals, three unknown, two discovered/not indexed. Indexed crawls predate the latest release. Five live page checks found exact canonical URLs, HTTP 200, and no noindex directives; robots permits crawling and the sitemap has 23 unique URLs.
- Resubmitted the existing Google sitemap (204). Immediate readback was pending; follow-up at 04:11:46 UTC confirmed processing complete, 23 submitted URLs, zero errors/warnings, lastDownloaded 04:04:47.111 UTC. This is sitemap processing, not page indexing.
- Final Web performance for August 10–September 6 (Pacific dates) returned one impression/click, both U.S.; no U.S. page/query rows. Daily totals reconcile. Recorded the tiny denominator and missing-breakdown limits; no ranking, organic acquisition or lead claim.
- Native research worker requested as `gpt-5.6-luna` medium completed a bounded read-only candidate inventory. Root verified sources, replaced inaccessible/weak entries, corrected department contacts and flagged reference-service restrictions. Final packet contains eight candidates and eight unsent drafts; first four have the clearest fit. No outside contact, purchase, listing or membership occurred.
- Added baseline and sharing documents; updated README, ACTIVE_CONTEXT, ROADMAP and national measurement plan. Report totals, seven inspections, eight drafts, scope count, local Markdown links and `git diff --check` passed. Documentation only; no application test rerun justified. Raw authenticated evidence remains outside Git. Publication receipts follow separately; analytics remains deferred.

## 2026-09-10 UTC — Discovery documentation publication receipt

- First push `74e2b109fea8e5e07425aa23bf28280cb3826f23` matched the remote branch. GitHub main merge `8ba4cf8db0074e71718d776ef8a3d2ae58b0b11e` matched remote main; Vercel Production deployment `6364419116` reported success.
- This separate follow-up records the first push, merge and provider completion before a second documentation push/merge. No public code changed, no outreach occurred, and Google page indexing remains at the dated inspection snapshot rather than a claimed new result.
