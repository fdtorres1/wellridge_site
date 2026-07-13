# CroSS-DFW candidate-evidence locator

Last updated: July 12, 2026

**Status: DECIDED / WORKING DECISION — A separate local private evidence control plane is configured, but no candidate has been cleared for proposal, reference, partner, or public use.**

This Git-safe register records the outcome of a minimal local discovery pass without storing organization names, project names, original filenames, filesystem paths, contact details, or protected work product. It supports the [proof inventory](02-proof-inventory.md); the separate local `wellridge-evidence` repository now holds the private project records and controlled source pointers.

The discovery found credible inputs for a future key-person evidence package, especially role chronology, federal-application controls, requirements and evidence registers, submission-status records, reporting controls, and engagement/measurement planning. A later private review established a bounded role and exact officer engagement basis for the school/community candidate. A scoped read-only search did not locate a controlling engagement, confidentiality, IP-assignment, reuse-license, or delegation instrument in the searched corpus, which is not proof that none exists. It identified an executed award agreement in a restricted grant portal as an unreviewed governing-source candidate and a participant media release whose defined rights run to the prior organization, not Wellridge. The review did **not** establish Wellridge corporate past performance, employee classification, object-level work-product ownership, client or employer permission, final award or acceptance, attributable outcomes, transportation expertise, or reference readiness.

## DECIDED / WORKING DECISION — Two-layer evidence control

| Layer | Permitted content | Current state |
|---|---|---|
| This Git-safe locator | Opaque evidence ID, generic artifact class, sanitized context, claim mapping, discovery state, support limits, and next control | Active; contains no identity or path map |
| Separate private evidence control plane | Actual organization/project identity, role and engagement metadata, dates, ownership/permission states, confidentiality, reference state, and opaque source pointers; absolute paths remain in an ignored local map and source artifacts remain in place | `CONFIGURED_LOCAL`; three candidate project records; no remote or commit |

Evidence IDs are non-semantic and omit direct identifiers, but residual correlation risk remains when a reader already knows the surrounding history. The private control plane maps selected IDs to real records without upgrading their evidence state. Until the required source, role, ownership, permission, and solicitation-fit reviews are complete, each item remains a candidate only.

## DECIDED / WORKING DECISION — Discovery states

These discovery states are deliberately separate from the claim-readiness states in the [claim-provenance register](../../operations/claim-provenance-and-relationship-readiness.md).

| Discovery state | Meaning |
|---|---|
| `DISCOVERED_UNSCREENED` | A likely candidate was identified at filename or directory level; content and sensitivity have not been sufficiently reviewed |
| `MINIMALLY_SCREENED` | The smallest useful portion was reviewed to classify the artifact and record what it can and cannot support; ownership, attribution, and permission remain unresolved |
| `SECURE_MAPPING_REQUIRED` | The candidate is worth carrying into a private ledger before any further substantive review |
| `DO_NOT_CARRY_FORWARD` | The item is irrelevant, duplicative, too sensitive, or outside the Wellridge evidence boundary |

`MINIMALLY_SCREENED` is not equivalent to `ARTIFACT_LOCATED`. Under the repository's stricter claim-readiness definition, `ARTIFACT_LOCATED` requires ownership, scope, and attribution checks that have not been completed for these prior-work candidates.

## OPEN QUESTION — Candidate register

Three project records are configured in the separate private control plane: `CROSS-PRJ-2W9R5H` for the school/community candidate, `CROSS-PRJ-4F8N2K` for the engagement/measurement method sample, and `CROSS-PRJ-7Q3M6V` for restricted federal controls. The school/community record now has source-verified narrow facts, an exact officer engagement basis, and a documented scoped negative search. Its review state is `AWAITING_DECISION`, object-level ownership is assessed and unresolved, every external channel remains closed, and record-wide readiness remains `SELF_REPORTED_INPUT`; the other two remain unverified. No original artifact, protected copy, raw correspondence, participant-level record, or reference contact was added to either repository; absolute source paths and private message locators exist only in the private repository's ignored local map.

| Evidence ID | Generic artifact class | Subject class | Sanitized context | Candidate claim IDs | Discovery state | What current review supports | What remains unproven | Disposition |
|---|---|---|---|---|---|---|---|---|
| `CROSS-EV-7K4M2Q` | Role chronology and capability inventory | Felix individual | Professional-background reference | `CROSS-PF-01`–`06` | `MINIMALLY_SCREENED` | A durable chronology records candidate roles, title stages, bounded capability areas, unsupported claims, and source conflicts | Independent corroboration, exact project roles, results, ownership, permission, and reference readiness | `VERIFICATION_INDEX_ONLY` |
| `CROSS-EV-9D3X6P` | Tailored résumé and source draft | Felix individual | Proposal/program-operations résumé | `CROSS-PF-01`–`06` | `MINIMALLY_SCREENED` | A derivative résumé package exists and can help structure a future key-person chronology | It is not independent evidence and does not prove project results, ownership, permission, or buyer acceptance | `DO_NOT_CARRY_AS_EVIDENCE` |
| `CROSS-EV-5R8T1N` | Requirements matrix, evidence register, submission-status records, and control notes | Prior-organization work | Federal grant application control set A | `CROSS-PF-03`, `CROSS-PF-05` | `MINIMALLY_SCREENED` | Structured requirements, evidence, portal-status, and document-control artifacts exist; the reviewed records distinguish submission status from award status | Felix's authorship and exact role, owner permission, final award, results, transferability, and relevance to CroSS requirements | `REVIEW_IN_PLACE_POINTER_ONLY` |
| `CROSS-EV-2H7V4C` | Go/no-go record, requirements matrix, compliance review, and evidence register | Prior-organization work | Federal grant application control set B | `CROSS-PF-03`, `CROSS-PF-05` | `MINIMALLY_SCREENED` | Artifacts exist showing requirements extraction, blockers, evidence gaps, compliance review, and explicit no-go controls | Felix's authorship and exact role, owner permission, submission outcome, award, results, and external acceptance | `REVIEW_IN_PLACE_POINTER_ONLY` |
| `CROSS-EV-6P3J9W` | Submission preparation and conditional reporting calendar | Prior-organization work | Federal offer and award-readiness control | `CROSS-PF-03`, `CROSS-PF-05` | `MINIMALLY_SCREENED` | Artifacts exist that keep offer-stage, award, reporting, and work-start states separate | A final award, completed reporting, attributable performance, Felix's role, ownership, permission, and result | `REVIEW_IN_PLACE_POINTER_ONLY` |
| `CROSS-EV-8M5Q2K` | Structured evidence-ledger workbook | Felix individual or prior-organization work, unresolved | Grant-evidence ledger | `CROSS-PF-03`, `CROSS-PF-05` | `MINIMALLY_SCREENED` | A small source-index workbook records status, amount basis, candidate role/caveat, evidence type, source locator, confidence, and public-use notes while separating confirmed from offer-stage records | Underlying-source validity, authorship, ownership, exact contribution, permission, performance, reference readiness, and CroSS similarity | `REVIEW_IN_PLACE; EXTRACT_ONE_RECORD_AT_A_TIME; PUBLIC_WORDING_QUARANTINED` |
| `CROSS-EV-4C7N8R` | Reporting worksheets, evidence map, submission control, and service methodology | Prior-organization work | Local grant reporting and submission controls | `CROSS-PF-03`–`05` | `MINIMALLY_SCREENED` | Detailed control artifacts separate requirements, working assumptions, accepted/attended counts, eligible-cost candidates, reporting status, evidence gaps, and no-submit boundaries | Felix's exact role, owner permission, completed reporting, acceptance, result, and transferable use | `REVIEW_IN_PLACE_POINTER_ONLY` |
| `CROSS-EV-3W6H9P` | Partner, engagement, measurement, and production planning | Prior-organization work | Community-engagement planning | `CROSS-PF-01`, `04`–`06` | `MINIMALLY_SCREENED` | Planning artifacts define partner roles, commitment gates, channel/owner/tracking controls, privacy-minimized measurement, schedule, and reporting design | Authorship, ownership, permission, partner commitment, execution, acceptance, results, and CroSS similarity | `REVIEW_IN_PLACE_RELATIONSHIP_SENSITIVE` |
| `CROSS-EV-1Q5T7V` | Public professional biography | Felix individual | Self-published public profile | `CROSS-PF-01`, `CROSS-PF-04` | `MINIMALLY_SCREENED` | A public, self-published source records limited chronology and community/education themes | Independent validation, project performance, results, permission from prior organizations, and reference readiness | `PUBLIC_DISCOVERY_LEAD_ONLY` |
| `CROSS-EV-0R4M8K` | Sanitized case-study PDFs | Felix individual or prior-client work, unresolved | Contract analysis and operational infrastructure | `CROSS-PF-02`, `CROSS-PF-05` | `DISCOVERED_UNSCREENED` | Potential work-sample candidates were identified | Primary-source traceability, redaction history, authorship, ownership, permission, accuracy, outcomes, and procurement usability | `QUARANTINE_PENDING_PROVENANCE` |
| `CROSS-EV-3J7Q5N` | Verified partner-reply, key-person message, and governance pointers | Prior-organization work | School-partner youth/community program | `CROSS-PF-01`, `CROSS-PF-04` | `MINIMALLY_SCREENED` | The exact official-organization reply supports a completed program relationship and bounded qualitative feedback; official role/governance sources and contemporaneous key-person messages support a human-confirmed bounded role and officer-only engagement basis | Employee classification, sole project management, object-level ownership, causal outcomes, public-agency contracting, external-use permission, current commitment, and reference consent | `REFERENCE_CANDIDATE_NOT_CONTACT_READY / INTERNAL_REVIEW_ONLY` |

## DECIDED / WORKING DECISION — Evidence-ledger assessment

`CROSS-EV-8M5Q2K` is a useful source index, not an approved private project ledger and not an authoritative source by itself.

Useful controls already present:

- one record per funding component;
- separate confirmed and offer-stage statuses;
- amount basis, candidate role, other-owner caveat, evidence type, source locator, confidence, and public-use note; and
- formulas that keep confirmed and offer-stage components visible separately.

Material defects and risks:

- summary wording upgrades applicant/contact indicators into causal claims that Felix personally led, materially won, or secured funding;
- a combined total can obscure the difference between confirmed and offer-stage amounts even when the component rows preserve it;
- the workbook does not establish underlying-source validity, work-product owner, exact contribution, permission, acceptance, performance, reference consent, confidentiality, or solicitation similarity; and
- it aggregates identities and source links and therefore should not be imported wholesale into another locker.

**DECIDED / WORKING DECISION — Quarantine every public-wording cell from `CROSS-EV-8M5Q2K`. Review the underlying source for one candidate project at a time, retain the minimum pointer, and rebuild any eventual claim from primary evidence.**

## DECIDED / WORKING DECISION — Safe internal conclusions

The current evidence set is sufficient only to support these internal planning conclusions:

- a candidate key-person chronology exists and is organized enough for controlled verification;
- candidate work samples exist for requirements extraction, evidence tracking, submission-status control, reporting calendars, go/no-go discipline, document production, and engagement planning;
- one official school-partner reply, three contemporaneous key-person messages, and governance/role sources have been verified in place; Felix has human-confirmed the bounded participant-communication, artistic-material, and partner-follow-up wording; officer status is supported, while employee classification, object-level ownership, external-use permission, and reference consent remain unresolved;
- an unsigned derivative support rendering adds advocacy and grant language absent from the verified reply and is quarantined as `DO_NOT_USE_AS_EVIDENCE`;
- some artifacts explicitly preserve important distinctions such as submitted versus awarded and offer-stage versus final award;
- the evidence-discovery task is feasible without treating public copy or strategy prose as proof; and
- the object-level ownership, channel-permission assessment, and bounded controlling-instrument search are complete for the searched corpus; the next gate is Felix's decision whether to pursue one exact external channel and authorize a bounded permission draft.

It is not sufficient to state that Wellridge or Felix won an award, delivered a named project, produced a result, served a public agency, has transportation or SS4A experience, or can provide a permission-ready reference.

## DECIDED / WORKING DECISION — Private record controls

The configured private records cover identity, engagement basis, dates, role state, evidence/source/claim IDs, ownership, permission, confidentiality, reference readiness, solicitation fit, reviewer state, and a next-review trigger. Before a record is cleared for any external use, its record body must also settle or explicitly leave unresolved:

- actual organization, project, and artifact identity;
- original controlled location and a file hash or version marker;
- contract, employment, grantee, client, and work-product ownership context;
- exact dates, scope, scale, and source for each fact;
- Felix's precise role, contribution, and limits;
- what the artifact proves and does not prove;
- confidentiality, IP, procurement, PII/PHI, student-data, and conflict screening;
- owner/approver, permission date, permitted channel, wording limits, and revocation or expiry;
- reference identity, consent, permitted discussion scope, and current contact check, if applicable;
- mapping to the released solicitation's exact recency, similarity, reference, and key-person rules; and
- final human reviewer, decision, and review date.

Default every permission field to `NOT_ASSESSED`, every public-use field to `NO`, every Git-copy field to `NO`, and every reference state to `NOT_CONTACT_READY`. A completed internal source review may advance the operating ceiling only to `INTERNAL_REVIEW_ONLY`; it does not create proposal, reference, or public permission.

## DECIDED / WORKING DECISION — Next evidence sequence

1. Use the configured private `wellridge-evidence` control plane; review source material in place and do not copy raw artifacts into Git.
2. Use `CROSS-EV-7K4M2Q` only as a verification index to settle chronology, title stages, role labels, and source conflicts one role at a time.
3. Do not import `CROSS-EV-8M5Q2K` wholesale; extract one underlying record at a time and quarantine its public wording.
4. For the human-confirmed school/community role wording, preserve the scoped negative search and wait for Felix to select an exact channel and bounded wording/object. Only a separate explicit instruction may authorize drafting a narrow prior-organization permission request; if Felix proceeds, review the executed award agreement first and do not combine the permission step with reference outreach. Require disinterested governing-body approval or documented delegated authority for the exact use, plus a separate authority chain for partner-controlled content. Broader role claims require more evidence. Then continue to the engagement/measurement method sample and restricted federal controls.
5. For each approved candidate, establish owner, Felix's role, dates, smallest sufficient pointer or artifact, result limits, and confidentiality constraints.
6. Ask Felix to decide whether any permission or reference request should be drafted; do not contact anyone from this register.
7. After the RFP is released, test only cleared evidence against its actual firm/key-person, recency, similarity, and reference requirements.

## EXPLICITLY OUT OF SCOPE / REJECTED

- Copying organization identities, source paths, or contact details into this deployable repository; copying source artifacts, protected work product, PII, PHI, student data, credentials, raw correspondence, or permission records into any Git repository
- Treating `DISCOVERED_UNSCREENED` or `MINIMALLY_SCREENED` as verified experience
- Inferring authorship, ownership, causation, client acceptance, award, or permission from file existence or local possession
- Relabeling prior-organization, client, employer, or individual experience as Wellridge corporate past performance
- Introducing prior music-administration work as a Wellridge service line
- Contacting an owner, employer, client, agency, partner, or reference without separate explicit authorization
