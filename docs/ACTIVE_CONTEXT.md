# Active context

## September 7, 2026 website offer and source publication

The `grant-offers` implementation adds a bounded `/grant-writing` service page, the fictional `/work-examples/grant-review` demonstration, and `/resources/grant-application-checklist`. Navigation, contact inquiry drafting, page metadata, structured data, and source sitemap/robots were extended without deployment, submission, outbound contact, or new integrations. The fictional Northside Arts Workshop is clearly labeled and contains no client result or endorsement. Production build (17 pages) and root desktop/mobile browser QA passed.

Follow-up implementation keeps email preparation explicit: the contact page honors `service=grant-writing` or `service=operations`, shows a read-only details preview with copy fallback, and separates “Open email draft” from the plain recipient link. Operations prompts now request scope, deliverables, and deadline; grant application timing states first draft within 5–7 business days after complete materials and access.

Final editorial pass adds prominent Resources index cards for the checklist and fictional sample, removes the resource-index “coming soon” state, and narrows the sample revision to a 203-word grant narrative using only the implementation-brief facts. Byline/date and unresolved-input separation are visible. Build and root desktop/mobile browser QA passed, including navigation, inquiry preparation, and copy feedback. Ready for user review; no deployment or actual email delivery has been tested.

First push verified September 7, 2026 at 15:18 UTC: commit `c7d17219cbd0acc2755a448989bfc70ef27e3e7f` is on `origin/feature/grant-offers-2026-09-07` in `fdtorres1/wellridge_site`. `git ls-remote` returned the same full SHA as local HEAD after the successful push. This documentation follow-up records that evidence, as requested. Prior dirty research and strategy documents remain outside these commits. No main merge or production deployment is implied; read the remote branch for the latest documentation commit.

Last updated: July 12, 2026

## DECIDED / WORKING DECISION — Current objective

Maintain the repository as the internal source of truth for the working **Wellridge Partners** strategy, controlled opportunity-sourcing system, and selective direct-government capture process while keeping the explicitly authorized local website migration reviewable, unreleased, and aligned with the documented claim and scope boundaries.

## Repository state

- Working path: `/Volumes/Felix-SSD-1/Cursor Projects/wellridge_site`
- Local task branch: `wellridge-strategy-docs`
- Starting commit: `0f99d2b`
- Starting state: clean; one worktree; no stashes
- Stack: Astro 5, strict TypeScript, Tailwind CSS 3, MDX content collections
- Deployment boundary: `vercel.json` supplies build settings, but a live Vercel connection and Git deployment triggers have not been verified; no push or deployment is authorized
- Site state: `src/` now contains a local Wellridge Partners migration using **Funding & Program Operations**, two bounded offers, and the existing visual design system
- Canonical site configuration: `https://wellridgepartners.com`; domain ownership, DNS, mailbox, and account control remain launch checks
- Intake state: no form, mailbox, calendar, social, analytics, or newsletter integration is active; the contact page collects no data
- Legacy asset state: the old Advisory wordmark was moved from `public/` to `docs/legacy-assets/` so Astro no longer serves it
- Current uncommitted scope: `README.md`, `DEPLOYMENT.md`, `astro.config.mjs`, public-site source/content under `src/`, the legacy-logo relocation, and the `docs/` source-of-truth system
- Direct-government pass boundary: the existing website and configuration changes are Felix's preserved work; this pass changes documentation only
- Evidence control plane: a separate local private `wellridge-evidence` repository is configured on `main` with three candidate project records, a generated CSV index, and an ignored local source-path map; it has no commits or remotes, and no source artifact was copied

## DECIDED / WORKING DECISION — Canonical boundaries

- The working company name is not legally formed or cleared.
- The strategy documentation is internal planning; `src/` contains local public-facing draft copy that has not been approved or deployed as a public launch.
- The conservative hybrid scenario is the baseline; the $1 million Year-5 model is aggressive.
- Behavioral-health work is nonclinical unless a properly scoped licensed partner owns clinical judgment.
- The July 12 instruction authorized local website changes only; no external execution or release follows from that work.

## HYPOTHESIS TO TEST — Immediate commercial thesis

Two bounded front doors can create a coherent path from near-term nonprofit cash work to larger public-sector program-operations work:

1. Nonprofit Funding Pipeline Sprint
2. Proposal & Program Operations Support

Warm relationships, existing consultants, established primes, and APEX-assisted introductions are expected to outperform mass cold outreach for Felix, but this must be measured.

The current internal sourcing system separates nonprofit direct, consultant/prime, and selective agency-watch streams. The original scope-card pilot remains five `RESEARCH_TARGET`s, three `WATCH_ACCOUNT`s, and two `HOLD`s. A separate July 12 sourcing batch adds 21 net-new records: nine `RESEARCH_TARGET`s, nine `WATCH_ACCOUNT`s, two `HOLD`s, and one `DISQUALIFIED` current solicitation. Across both files there are 31 unique records and zero `QUALIFIED_OPPORTUNITY`s; every outreach flag remains `NO`.

## OPEN QUESTION — Next decision package

The immediate commercial research queue is now Wellness Center for Older Adults, For Oak Cliff, From Ordinary to Extraordinary, Maximus, and American Institutes for Research. TEA Local Accountability awardees, Tarrant County Community Outreach Fund awardees, and the Dallas Eviction Advocacy re-solicitation are dated watch triggers. The next local sourcing step is to reduce relationship, staffing, allowable-cost, and work-package uncertainty for the first five—not to expand them into pipeline or contact them automatically. See the [dated sourcing batch](operations/opportunity-sourcing-batch-2026-07-12.md).

For the direct-government lane, the four-part CroSS-DFW capture packet, sanitized candidate-evidence locator, and three-project proof-development shortlist are now assembled under `opportunities/cross-dfw/`. The next release-triggered task is to verify the official RFP, preserve its packet, and populate the intake checklist before any pursuit decision. Until then, CroSS-DFW remains `WATCH / PRE-CAPTURE`; do not name partners, fill proof gaps by inference, or calculate an optimistic bid score.

The expanded evidence pass records eleven sanitized candidate groups and ranks three proof-development paths: a community engagement/measurement method sample, restricted federal offer/award-readiness controls, and a school/community reference candidate. A separate local private evidence control plane is configured with one structured record for each path; real business identities are tracked there, absolute source paths remain in its ignored local map, and underlying artifacts remain in place. For the school/community candidate, the exact official partner reply, public organization-role sources, a de-identified aggregate, and three contemporaneous key-person messages are verified in place. Felix confirmed on July 12 that the bounded role wording accurately covers participant recruitment and communications, distribution of artistic materials and repertoire, and post-event partner liaison. Governance evidence supports the exact private engagement value `OFFICER` and separately identifies Felix from voting directors. A scoped read-only repository, Drive, Gmail, and candidate-document search did not locate a controlling Felix engagement, confidentiality, IP-assignment, reuse-license, or board-delegation instrument; that negative result does not prove no instrument exists. The search did identify grant guidelines pointing to an executed award agreement in a restricted grant portal, plus a participant media release whose defined rights run to the prior organization rather than Wellridge. The executed agreement remains unreviewed and must be checked first if Felix elects to pursue external use. Employee classification and object-level work-product ownership remain unresolved. The private record is now `AWAITING_DECISION`: Felix has not selected an external channel or authorized drafting. Internal review is still the only allowed use; proposal, partner-diligence, reference, and public channels remain closed. The first potentially clearable use is a bounded key-person statement that excludes copied work product, private partner feedback, logos, participant media, and implied endorsement. A disinterested prior-organization governing-body approval, or an officer with documented delegated authority for the exact use, is the conservative institutional route; any partner-controlled statement or material retains its own authority chain. Record-wide readiness stays `SELF_REPORTED_INPUT`, and the reference remains `NOT_CONTACT_READY`. An unsigned derivative support rendering remains quarantined because it adds advocacy and grant language absent from the verified reply. The next gate is Felix's decision whether a real near-term need justifies one specified channel and bounded wording/object; no draft, request, or contact is authorized. The grant-evidence workbook remains an index only and its public-win wording is quarantined. Neither repository supports CroSS-ready corporate past performance or a filled reference slot.

The two internal scope cards, their ten-account stress test, claim-provenance/relationship-readiness register, mandatory pricing/cash gate, Funding Pipeline Sprint delivery workbook, proposal compliance matrix, and program-launch compliance calendar now exist. A `SIMULATION_ONLY` lifecycle dry run exercised all four controls. On July 12, Felix provisionally approved the contribution guardrails—Pipeline 80% base target / 75% stress floor; Proposal 70% / 65%; Program Launch 55% / 50%—approved `professional-service fee / total effective hours` as the primary service-fee realization definition, provisionally approved $125/hour base / $110/hour stress realization references, provisionally approved 20% planned role-hour contingency with a required named stress scenario and 25%-above-plan fallback when credible stress evidence is unavailable, provisionally approved 16% base / 25% stress project-pricing overhead proxies, and provisionally approved 10% base / zero stress project-economic-surplus references. Working-capital, pass-through, and collection-timing references remain hypotheses. All base dry-run comparisons passed, while the Proposal and Program stress cases failed the candidate cash-exposure test; every synthetic pass remains `HOLD_INPUTS`, every synthetic project-approval field is blank, and external release remains `NOT_AUTHORIZED`. The next pricing decision is whether to approve, modify, or defer the owned-scope cash-exposure formula and zero-unprotected-pass-through rule. Retain the pilot stress test's `HOLD` and scope corrections unless better evidence appears. Buyer conversations, prospective-partner contact, supplier profiles, portal registrations, event registrations, and outreach require new explicit authorization.

Before deployment or contact activation, resolve at least:

- name/domain/mark clearance status;
- proof and provenance for founder, network, case-study, and award claims;
- launch price and scope caps;
- verified control and operating ownership for any contact, calendar, social, analytics, or newsletter endpoint;
- final nonclinical boundary language; and
- whether the business is actually formed and ready to receive inquiries.

## DECIDED / WORKING DECISION — Verification completed

- All required strategy, sourcing, data, source, decision, roadmap, worklog, active-context, risk, scorecard, and migration deliverables are present.
- Relative links across the root README and the current documentation tree resolve locally.
- All 71 source-register anchors exist and all explicit source-ID references resolve.
- The opportunity-sourcing CSV parses as 10 unique records; all five-component scores reconcile; lifecycle counts are five `RESEARCH_TARGET`, three `WATCH_ACCOUNT`, and two `HOLD`; and every `outreach_authorized` value is `NO`.
- The dated sourcing-batch CSV parses as 21 unique net-new records; all five-component scores reconcile; lifecycle counts are nine `RESEARCH_TARGET`, nine `WATCH_ACCOUNT`, two `HOLD`, and one `DISQUALIFIED`; and every `outreach_authorized` value is `NO`.
- The 12-row financial CSV parses successfully; conservative owner-pool/true-profit formulas reconcile; conservative cumulative revenue is $913,000; and the aggressive Year-5 P&L reconciles to $165,000 true operating profit.
- `npm run build` completed successfully after the documentation integration and generated all 14 Astro routes. Warnings were limited to existing browser-data age and an Astro/Vite unused-import warning.
- Browser QA passed at 1203×905, 768×900, and 390×844 with no relevant console warnings/errors or horizontal overflow. Homepage identity, mobile navigation, pricing mouse/keyboard tabs, insight filters, article typography, publication dates, and the inactive contact state were exercised.
- The quarantined Advisory logo is absent from both `public/` and the built `dist/`; each resource detail route renders one H1.
- The changed-file boundary includes `README.md`, `DEPLOYMENT.md`, `astro.config.mjs`, `src/`, removal of the old public logo plus its archive copy under `docs/legacy-assets/`, and the `docs/` source-of-truth system. Hosting configuration, CI, package manifests, and lockfiles remain unchanged.
- The direct-government brief, four-part CroSS packet, rubric, and four dated source entries were produced through local public-source research and independent read-only reviews; no portal, RSVP, outreach, registration, reference contact, partner contact, or submission action occurred.
- A July 12 official-page refresh still did not show CroSS-DFW in NCTCOG Transportation's `Current Procurements` list. BidNet was not directly readable in this pass, so the opportunity remains `WATCH / PRE-CAPTURE` rather than being treated as conclusively absent from every portal surface.
- The supporting CroSS candidate-evidence locator records only opaque IDs and sanitized classifications. Candidate identities, paths, contacts, and protected work product remain outside Git; no ownership, attribution, permission, or reference state was upgraded by discovery alone.
- The CroSS proof-development shortlist contains three sanitized candidates, zero `ARTIFACT_LOCATED` prior-work claims, and one reference candidate that remains `NOT_CONTACT_READY`; no permission or outreach action occurred.
- The school/community candidate's exact `OFFICER` status is source-supported internally, but its employee classification and object-level ownership remain unresolved. A scoped negative search is documented without claiming no instrument exists. Its private record is `AWAITING_DECISION`; the permission matrix keeps every external channel closed and makes the bounded key-person statement—not an email, partner quote, work sample, case study, or reference—the first potential clearance target.
- The four reusable pricing/delivery templates contain only blank controls and sanitized arithmetic; they do not contain client data, authorize external release, certify compliance, or establish delivery history.
- The sanitized lifecycle report and six-row pricing CSV use fictional 2099 fixtures, blank approvals, namespaced IDs, and no external URLs. They test structure only and are not price validation, client proof, recognized-revenue policy, or delivery evidence.
- Work remains local, uncommitted, and unpushed on `wellridge-strategy-docs`.

## EXPLICITLY OUT OF SCOPE / REJECTED — Current branch

Do not deploy, push, open a pull request, form an entity, purchase or configure a domain, change hosting, activate endpoints, register with vendors, RSVP to procurement events, contact agencies or prospective partners, submit proposals, or make additional public-site changes without new explicit authorization.
