# Legacy public-site copy inventory and migration note

Baseline audited: July 11, 2026
Local migration implemented: July 12, 2026
Second local identity pass: July 16, 2026

**Status: DECIDED / WORKING DECISION — The public-site source was migrated locally after a separate July 12 instruction and updated to the selected Wellridge Group identity after a bounded July 16 instruction. No deployment, domain purchase, DNS change, form activation, external account change, or public launch occurred.**

The table below preserves the July 11 prototype baseline. It explains why each legacy surface was preserved, superseded, quarantined, or verified during the contextual migration rather than through a mass replacement.

## Disposition key

| Disposition | Meaning |
|---|---|
| Preserve | Reusable structure or content concept, subject to review |
| Supersede | Strategy has changed; future approved copy should replace it |
| Quarantine | Do not reuse publicly without proof, permission, ownership, legal review, or activation decision |
| Verify | Fact or control status must be established before migration |

## Inventory

| Surface | Existing prototype evidence | Conflict/risk | Future disposition | Status |
|---|---|---|---|---|
| Global identity | `src/components/Header.astro:18`, `Footer.astro:16,74`, `src/layouts/BaseLayout.astro:11,22` use **Wellridge Advisory** | Working identity is Wellridge Partners; company is unformed/uncleared | Supersede only after clearance and formation decision | OPEN QUESTION |
| Root technical docs | `README.md:1-3,198` and `DEPLOYMENT.md:3` describe Wellridge Advisory | Accurate historical prototype context but not current strategy | Preserve context; link to internal source of truth | DECIDED / WORKING DECISION |
| Logo asset | `public/wellridge-logo.png`; README says retained for future use | Image visibly contains Wellridge Advisory wordmark | Quarantine as legacy asset; do not silently repurpose | DECIDED / WORKING DECISION |
| Homepage category | `src/pages/index.astro:5,9-14` uses Strategic Grant & RFP Support / Win More Grants | Current category is Funding & Program Operations and avoids outcome promise | Supersede after validated positioning | DECIDED / WORKING DECISION |
| Homepage audiences | `index.astro:13`, `Footer.astro:18`, `BaseLayout.astro:11` target nonprofits, municipalities, educational institutions | New model uses nonprofit and established-prime/public-sector lanes | Supersede with buyer-specific language | DECIDED / WORKING DECISION |
| Homepage front doors | `index.astro:59-78` shows three categories including Ongoing Partnership | Launch decision is two bounded front doors | Preserve useful grant concepts; supersede architecture | DECIDED / WORKING DECISION |
| Process | `src/pages/process.astro:33-149` covers discovery through stewardship | Useful proposal machinery but post-award stops short of implementation/program controls | Preserve go/no-go, calendars, compliance, QA; expand only in future migration | DECIDED / WORKING DECISION |
| Service catalog | `src/pages/services.astro:18-93` lists six grant categories and Advisory Retainers | Too broad for launch; program operations absent; retainer unbounded | Supersede with two front doors and bounded modules | DECIDED / WORKING DECISION |
| Outcome claim | `services.astro:100-103` says “Our clients win grants and RFPs” | Implies operating history and causal results | Quarantine pending substantiation and compliant wording | OPEN QUESTION |
| Client stories | `services.astro:107-129` contains literal quotations claiming $150,000 and $500,000 awards and a district retainer | No provenance or permission established; company unformed | Quarantine; never migrate without client, attribution, evidence, permission, and legal review | OPEN QUESTION |
| Founder formation claim | `src/pages/about.astro:79-82` says Felix founded Wellridge and helped secure millions | Company not formed/launched; “millions” requires attribution and proof | Quarantine; separate Felix’s prior experience from firm results | OPEN QUESTION |
| Partner-network claim | `about.astro:97` says the consultancy maintains trusted writer/evaluator/designer relationships | Bench availability and permission not established | Verify each partner/capability before public claim | OPEN QUESTION |
| Nonprofit pricing | `src/pages/pricing.astro:53-81` shows $2,500–$5,000 proposals, $3,000–$7,000 monthly retainer, $1,500–$3,500 support | Conflicts with pipeline sprint and bounded-task hypotheses | Quarantine legacy prices; validate new scope economics | HYPOTHESIS TO TEST |
| Public-sector pricing | `pricing.astro:90-119` shows $5,000–$12,000 RFPs, $12,000–$25,000+ federal work, $4,000–$9,000 monthly retainer | Program-launch category absent; broad federal/retainer positioning premature | Quarantine; replace only with approved, validated ranges | HYPOTHESIS TO TEST |
| Add-ons/session | `pricing.astro:124-176` lists add-ons and a $1,500 discovery session | May fragment the two-offer launch | Preserve as research; do not publish without product decision | OPEN QUESTION |
| Compatible pricing rule | `pricing.astro:168-175,187-201` prefers fixed quotes and rejects commission/percentage models | Aligned with current strategy | Preserve concept; tighten contingent-fee and scope language | DECIDED / WORKING DECISION |
| Contact form | `src/pages/contact.astro:21-23` posts to Formspree placeholder | Nonfunctional endpoint could expose data or mislead | Quarantine/keep inactive until endpoint, privacy, and launch approval | DECIDED / WORKING DECISION |
| Old email/domain | `contact.astro:110-112` displays `hello@wellridgeadvisory.com` | Domain ownership/control not established | Verify; do not activate or migrate by assumption | OPEN QUESTION |
| Calendly | `contact.astro:119-125` links old Advisory handle | Control/availability not established | Verify and approve scheduling policy before use | OPEN QUESTION |
| LinkedIn | `Footer.astro:39-47` links old Advisory company URL | Account existence/control not established | Verify; do not create or alter during migration prep | OPEN QUESTION |
| Newsletter | `Footer.astro:50-68` and `insights/index.astro:45-63` have no configured action | Looks active but has no consent/data workflow | Quarantine until privacy, consent, storage, and operating owner exist | DECIDED / WORKING DECISION |
| Resource footers | three files under `src/content/resources/` display `wellridgeadvisory.com/resources` | Old domain/control assumption | Preserve resource concepts; supersede attribution only after clearance | OPEN QUESTION |
| Clinical example | `src/content/resources/executive-summary-scaffold.md:17,25,55-63` uses a mobile mental-health example | Could be mistaken for Wellridge-owned clinical delivery | Preserve only with explicit hypothetical/client-example and nonclinical boundary | DECIDED / WORKING DECISION |
| Heuristics | `insights/7-minute-go-no-go.md:43-48`; `insights/how-reviewers-read.md:9-21` | Threshold and reviewer-time claims are unsourced heuristics | Label as heuristics or source before future publication | OPEN QUESTION |
| Hosting/deployment | `vercel.json`; `DEPLOYMENT.md:38-42` says main pushes deploy and PRs preview | Documentation work can trigger external publication if pushed/PR’d | Keep local/uncommitted; require explicit release authorization | DECIDED / WORKING DECISION |

No `Wellbridge` occurrence was found. No `Wellridge Partners`, `program operations`, `program administration`, or `program delivery` occurrence existed in the audited public source.

## DECIDED / WORKING DECISION — July 12 local migration result — historical

- `src/` now uses **Wellridge Partners** and the **Funding & Program Operations** descriptor.
- `https://wellridgepartners.com` is configured as the Astro site and canonical metadata domain.
- The homepage and service architecture now present two bounded front doors: the Nonprofit Funding Pipeline Sprint and Proposal & Program Operations Support.
- Process and pricing pages now emphasize qualification, explicit ownership, bounded statements of work, fixed fees or milestones, change control, program operations, and specialist boundaries.
- Unsupported testimonials, award/result claims, “millions” language, implied partner capacity, public price hypotheses, and broad retainer promises were removed from public source.
- The fake Formspree action, unverified email, Calendly, LinkedIn, and newsletter controls were removed. The site currently collects no inquiry or subscription data.
- Resource and insight content now identifies working heuristics, hypothetical examples, and accountable human-review requirements.
- The existing Tailwind tokens, typography, colors, content model, cards, icons, and section rhythm were preserved. The old Advisory wordmark was moved to `docs/legacy-assets/wellridge-advisory-logo.png`, outside Astro's public directory.
- Deployment remains a separate, explicitly authorized release task.

## DECIDED / WORKING DECISION — July 16 current identity result

- The dominant visual brand is **WELLRIDGE**.
- The selected public company name is **Wellridge Group**; the legal entity name and suffix remain unresolved.
- `https://wellridgegroup.com` is the single local canonical URL. Purchase, ownership, DNS, mailbox, and account control remain unverified.
- Current public-site identity, metadata, resource attribution, contact-status copy, technical documentation, and the favicon were updated contextually.
- Dated Wellridge Partners and Wellridge Advisory records remain historical evidence and were not mass-replaced.
- Deployment, domain purchase, registration, endpoint activation, commit, and push remain outside this local update.

## OPEN QUESTION — Release-candidate claim review

The local migration is not yet a public-proof or operating-readiness artifact. Before release, reconcile the current source against the [claim-provenance and relationship-readiness register](operations/claim-provenance-and-relationship-readiness.md), including:

- present-tense descriptions of what Wellridge “helps,” “uses,” “accepts,” or does on every engagement;
- founder background, authorship, delivery-process, and available-capacity wording;
- the candidate canonical domain and any wording that could imply ownership or control;
- conversation-oriented calls to action while intake is intentionally inactive;
- the six-step public shorthand versus the eight-step internal control loop; and
- deployment instructions that still refer to testing a contact-form submission even though no form is active.

These are release-review items, not authorization to modify the concurrent public-site or deployment work in this documentation task.

## DECIDED / WORKING DECISION — Reusable prototype elements

- Astro/Tailwind structure and static content model
- Design tokens and general visual hierarchy
- Content collections and resource-library concept
- Go/no-go, alignment, budget, calendar, compliance, red-team, and QA concepts
- Felix photo, subject to future public-use approval
- Fixed-quote/no-percentage principle

## OPEN QUESTION — Remaining launch sequence

The local rewrite and build steps are complete. Before public launch:

1. Confirm legal/brand readiness, domain control, and the deployment owner.
2. Complete human business, claim-provenance, legal, clinical, and privacy review where relevant.
3. Approve final offer, price, scope, boundary, and disclaimer language.
4. Verify any mailbox, form, calendar, social, analytics, or newsletter workflow before activation.
5. Re-run page, metadata, asset, link, responsive, and interaction checks against the release candidate.
6. Deploy only under a new explicit instruction with rollback and post-release verification steps.

## EXPLICITLY OUT OF SCOPE / REJECTED

- Treating legacy testimonials, awards, founder claims, or partner claims as approved proof
- Activating placeholder forms or unverified accounts
- Renaming assets or strings without contextual review
- Publishing because documentation is complete
