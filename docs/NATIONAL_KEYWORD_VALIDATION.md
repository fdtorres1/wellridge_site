# National keyword validation

Observed September 9, 2026. This report supersedes the earlier unvalidated keyword priorities, not the existing service architecture.

## Finding

The extremely narrow service phrases are not a demonstrated traffic strategy. Of 30 U.S./English queries submitted to DataForSEO's Google Ads search-volume endpoint, nine returned numerical volume and 21 returned null. Null means no reported estimate, not proven zero searches. Keep those phrases where they help buyers understand the offer, but concentrate search acquisition on the existing national hub, pricing page, and useful LOI example.

No phrase is established as an easy #1 opportunity. Six U.S. desktop Google result samples show established service firms, universities, software publishers, directories, and substantial intent mismatch. A low-volume phrase can still be difficult or attract the wrong buyer.

## Measured queries and page ownership

| Query | Estimated U.S. searches/month | Intent and priority | Existing page |
|---|---:|---|---|
| nonprofit grant writing services | 260 | First commercial priority; sampled results include multiple grant service firms | `/grant-writing` |
| grant writing services for nonprofits | 110 | Same buyer cluster; do not create a second synonymous page; not separately SERP-sampled | `/grant-writing` |
| grant proposal writing services | 50 | Secondary phrase; broad scope, not separately SERP-sampled | `/foundation-grant-writing` |
| grant writing cost | 110 | Supporting buyer education; results also address writers setting fees | `/pricing` |
| grant letter of inquiry example | 90 | Supporting informational target; universities, Candid and Instrumentl compete | `/work-examples/letter-of-inquiry` |
| grant writer for nonprofits | 880 | Longer-term secondary hub target; services mixed with jobs, training and tools | `/grant-writing` |
| grant writing services | 1,300 | Broad benchmark; not a quick-win target or separately SERP-sampled | `/grant-writing` |
| grant application review | 210 | Deprioritize as a standalone acquisition target: sampled results concern funder review, reviewer recruitment and software | `/grant-application-review` retains nonprofit-specific language |
| grant proposal editing services | 10 | Deprioritize as a standalone target: sampled organic results focus on academic/scientific editing | `/grant-application-review` retains nonprofit-specific language |

Do not add these estimates together: related queries may overlap. Volume is not clicks, reachable buyers, inquiries, or revenue. The best near-term *commercial fit* in this sample is the first cluster; that is not a claim that it will rank sooner than the others.

## Evidence and reproducibility

- Source: [DataForSEO Google Ads search volume](https://docs.dataforseo.com/v3/keywords_data/google_ads/search_volume/live/), retrieved September 9 at 17:59:59 UTC. United States, English, search partners disabled. Returned monthly observations span August 2025 through July 2026; rounded average volumes are historical estimates.
- [All 30 query rows](research/national-keywords-2026-09-09.csv) preserve null estimates as blank cells plus an explicit `unreported` state. The CSV contains no account identifiers or credentials.
- Source: [DataForSEO Google organic live advanced](https://docs.dataforseo.com/v3/serp/google/organic/live/advanced/), six requests on September 9, United States, English, desktop, depth 10, one crawl page each. [Organic result observations](research/national-serps-2026-09-09.csv) preserve retrieval time, query, URL, organic group position and absolute result position. Returned pages contained eight or nine organic entries because other result types occupied space. These are point-in-time country-level samples, not universal U.S. rankings.
- Wellridge did not appear among the returned organic entries in these six samples. This does not establish its position beyond the returned entries or for other queries, locations, devices or times.
- Cost receipts: one volume request $0.090; six SERP requests $0.012 total; combined **$0.102** from the existing balance. No top-up or Google Ads account changes. Google Ads direct access was not needed.
- Raw responses and request receipts remain in the local task research directory outside Git. Paid advertising competition and CPC were not used as organic difficulty. No organic keyword-difficulty score, backlink strength estimate, or ranking forecast was obtained.

## Competitive implications

For `nonprofit grant writing services`, the sampled organic results included Grant Writing Firm, J. Miller & Associates, Grants Plus, DH Leonard Consulting, Professional Grant Writers and Elevate. The hub needs to make a specific buying decision easier: which fixed scope fits, exact cost, required inputs, the person responsible, and credible work examples. Existing pages already supply much of this; another generic service article would not resolve the competition.

For review work, [D&V's quick support page](https://www.dandvconsulting.com/quicksupportservices) currently offers a $75 review of one application up to 2,500 words with feedback, excluding rewriting. Wellridge's $295 offer includes tracked edits and a missing-items checklist for up to 2,000 words. Keep scope explicit rather than claiming the cheapest review or changing price from one unlike comparison. The [Professional Grant Writers foundation page](https://www.professionalgrantwriter.org/foundation-grant-writing) demonstrates direct national service competition. A prior NPO Grant Consulting search result was discovered, but its `/grant-writing-only` page returned 404 during this pass; do not cite it as a currently verified live offer.

## Next implementation order

1. **Consolidate the hub.** Keep national nonprofit service intent and the existing URL. Evaluate its title/description and buyer answers after recrawls; do not churn the title on publication day. Keep one-time scope and published fees as the distinction, with links to each service.
2. **Improve the existing pricing answer when evidence warrants.** Add a compact comparison of review, LOI and application scope with why scope changes price, what a client supplies, and the actual payment milestones. Much is already present; avoid a duplicate cost article or invented market averages.
3. **Strengthen the existing LOI example.** Implemented in the subsequent September 9 template batch: a copyable blank structure and plain-text download beside the fictional example, instructions for adapting it to one funder's rules, and a link to the $350 service. Fictional facts and authorship remain explicit. See ACTIVE_CONTEXT for release and QA status; implementation does not establish new rankings.
4. **Obtain relevant outside discovery.** Use the [directory and contribution packet](NATIONAL_LINK_OPPORTUNITIES.md). Investigate cost and eligibility first. A listing is a potential referral channel, not proven ranking credit. No external contact or submission has occurred.
5. **Measure before expanding.** After recrawls, confirm indexing and canonical adoption for the three service pages. Compare consistent 28-day Search Console windows, U.S. page/query clusters and nonbranded results where available. Preserve suppressed/missing query data. Track qualified inquiries, deposits, total cash and client-reported discovery privately; exclude synthetic inquiries. Analytics remains deferred.

Use the first 28 days as an observation checkpoint and 90 days as an evaluation window, not a #1 deadline. This pass created no automatic monitor. If relevant indexed pages earn no impressions, broaden the evidence review before creating more narrow pages. If impressions arrive without clicks, inspect the actual queries and result snippets; if visits arrive without qualified inquiries, review offer fit and conversion.
