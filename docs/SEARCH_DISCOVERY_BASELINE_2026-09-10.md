# Search discovery baseline — September 10, 2026 UTC

Observed September 9 locally (America/Chicago). Search Console domain property: `sc-domain:wellridgegroup.com`; owner access verified. All 20 existing OAuth scopes were preserved. Raw authenticated responses remain outside Git. This report contains only aggregate public-site measurements.

## Google indexing

URL Inspection snapshot: September 10 at 04:03:13 UTC. These are Google's stored index observations, not live tests or new indexing requests.

| Path | Google coverage | Last crawl / canonical |
|---|---|---|
| `/` | Submitted and indexed | Sep 8 17:03:10 UTC; Google and user canonical both `https://www.wellridgegroup.com/` |
| `/grant-writing` | Submitted and indexed | Sep 8 17:05:04 UTC; both canonicals match the exact www URL |
| `/grant-application-review` | URL is unknown to Google | No crawl or canonical returned |
| `/letter-of-inquiry-writing` | URL is unknown to Google | No crawl or canonical returned |
| `/foundation-grant-writing` | URL is unknown to Google | No crawl or canonical returned |
| `/work-examples/letter-of-inquiry` | Discovered - currently not indexed | No crawl or canonical returned |
| `/pricing` | Discovered - currently not indexed | No crawl or canonical returned |

The two indexed-page crawls predate the national service copy and reusable LOI template. They do not establish indexing of those revisions. Missing crawl/canonical fields on the other pages are not evidence of a robots block.

Live checks of the five other pages returned HTTP 200 without redirects, matching canonical tags, and no HTML noindex or X-Robots-Tag. Robots.txt permits crawling and references the canonical sitemap. The live sitemap contains 23 unique URLs, including all five pages. No site-code correction was justified by these checks.

## Sitemap receipt

Before resubmission, Google last downloaded the sitemap September 9 at 06:17:22.784 UTC, before the three newer service pages were included. The processed count was 20 with zero errors/warnings. The API's indexed count of zero is not a reliable count of the site's indexed pages; URL Inspection independently confirms two indexed URLs.

Resubmitted the existing `https://www.wellridgegroup.com/sitemap.xml`: PUT returned 204. Readback at September 10 04:04:46 UTC reported lastSubmitted `2026-09-10T04:04:45.793Z`, pending true, zero errors/warnings, and the previous download time and 20-URL processed count. This confirms acceptance only. No individual Request Indexing action occurred in this pass.

Follow-up at 04:11:46 UTC confirmed processing completed: pending false, lastDownloaded `2026-09-10T04:04:47.111Z`, submitted count 23, zero errors and warnings. This supersedes the immediate pending receipt. It proves Google processed the current sitemap, not that all listed pages were crawled or indexed. The seven URL Inspection observations above were not repeated.

## 28-day performance baseline

August 10–September 6, 2026 inclusive, Pacific Time; Web search, `dataState: final`. The end date was chosen as three days before the current Pacific date, not asserted to be the provider's latest finalized date. This window predates the latest national/template releases.

| Scope | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| All countries, property aggregate | 1 | 1 | 100% | 3 |
| United States, property aggregate | 1 | 1 | 100% | 3 |

The 28 returned all-country daily rows reconcile to those totals; August 14 is the only positive day. U.S. page and query datasets each returned zero rows. This means no usable page/query breakdown was returned, not that all pages or queries had zero activity. There is no basis to name a ranking keyword, distinguish branded traffic, attribute a lead, or infer a trend from one impression. See Google's [Search Analytics query documentation](https://developers.google.com/webmaster-tools/v1/searchanalytics/query) for date, aggregation and row-return limits, and [URL Inspection API](https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect) for inspection behavior.

## Next evidence gates

Recheck the five unindexed URLs after Google has had time to crawl. Compare subsequent consistent 28-day windows; inspect relevant page/query data when available. Prioritize actual crawl errors or canonical conflicts if they appear, rather than repeatedly changing sound pages because indexing is pending. No recurring monitor was created.

Proceed with the [resource-sharing packet](LOI_RESOURCE_SHARING_2026-09-10.md) only through separately authorized outreach. Measure responses, earned resource placements, qualified inquiries and collected payments separately. Analytics remains deferred; no #1 ranking or lead result is established.
