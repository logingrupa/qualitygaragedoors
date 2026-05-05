# COPY AUDIT — Quality Garage Doors Redesign

**Audit date:** 2026-05-05
**Original site:** https://www.qualitygaragedoorsca.com/
**Redesign location:** `C:\laragon\www\qualitygaragedoors\`

---

## VERDICT: NEEDS-EDITS

The redesign is **mostly faithful** on contact info, license number, hours, service area, coupons, and core service descriptions — those check out. However, there are **9 distinct fabricated claims** and **2 embellishments** that materially overstate what the original site says. None are catastrophic legal misrepresentations (license/phone/coupons all match), but several invent stats, testimonials, dealer status, and cities that the original never claims. These should be fixed before launch.

---

## SUMMARY COUNTS

| Classification | Count |
|----------------|-------|
| MATCH (verbatim/identical fact) | ~35 |
| PARAPHRASE (same meaning, different wording) | ~20 |
| EMBELLISHED (overstated) | **2** |
| FABRICATED (invented, not on original) | **9** |
| MISSING (on original, dropped from redesign) | 4 |

---

## KEY VERIFIED FACTS (MATCH)

These are correct across every page in the redesign:

| Fact | Original | Redesign |
|------|----------|----------|
| Phone | (916) 435-6320 | (916) 435-6320 |
| Hours | MON-SAT 7AM-7PM | MON–SAT 7AM–7PM |
| License | #1042651 | #1042651 |
| Service area (regions) | Greater Sacramento, Placer & El Dorado Counties | Sacramento, Placer & El Dorado Counties |
| Licensed/bonded/insured | Yes | Yes |
| 24-hour / 24/7 emergency | Yes | Yes |
| Same-day service | Yes | Yes |
| Free in-home estimates | Yes | Yes |
| Liftmaster (only opener brand sold) | Yes | Yes |
| Locally owned & operated | Yes | Yes |
| BBB A+ rating | Yes (FAQ) | Yes (about-us) |
| Coupon: $500 off door+motor | Yes | Yes |
| Coupon: $300 off door only | Yes | Yes |
| Coupon: $125 off repair | Yes | Yes |
| Coupon: $100 off Liftmaster opener | Yes | Yes |
| Coupon: $100 off spring replacement | Yes | Yes |
| Coupon: 20% Senior/AARP | Yes | Yes |
| Coupon: 20% Military/First Responders | Yes | Yes |
| Coupon: 20% Teachers | Yes | Yes |
| Free Lube + Tune with repair | Yes ($129 standalone) | Yes ($129 standalone) |
| Both springs always replaced | Yes | Yes |
| Heavy-duty hardware cables | Yes | Yes |
| Steel / Carriage / Wood door types | Yes | Yes |
| 2″ steel-backed insulated panels | Yes | Yes |
| Free haul-away of old door | Yes | Yes |
| Andrew Snyder testimonial (Sacramento) | Yes | Yes |
| Naima Victoria testimonial (Elk Grove) | Yes | Yes |

---

## FLAGGED CLAIMS BY PAGE

### `index.html`

| # | Claim | Class | Evidence | Recommended fix |
|---|-------|-------|----------|-----------------|
| 1 | "since 2004" (hero, footer, multiple places) | **FABRICATED** | Original says "20 Years of Experience" and "over a decade in the industry" but **never states a founding year**. 20 years from 2026 would be 2006, not 2004. | Remove "since 2004". Replace with "for over 20 years" or just "20+ years experience". |
| 2 | Hero stat: "5000+ Doors Repaired" | **FABRICATED** | No customer count, doors-served stat, or any volume figure exists on the original site. | Delete the stat or replace with a verified figure provided by the client. |
| 3 | Hero stat: "4.9★ Customer Rating" | **FABRICATED** | Original says "A+ rating with the BBB" but **never quotes a star rating**. No 4.9 figure anywhere. | Replace with "A+ BBB Rating" (which is verified) or remove. |
| 4 | Schema.org `aggregateRating: ratingValue 4.9, reviewCount 120` | **FABRICATED** | Same as above. Falsely tells Google there are 120 reviews averaging 4.9. This can trigger Google review-snippet penalty. | Delete the entire `aggregateRating` block from JSON-LD until real verifiable review count exists. |
| 5 | Schema.org `priceRange: "$$"` | PARAPHRASE | Original implies "Lowest Rates in Town" but no explicit price range. `$$` is a defensible guess. | Acceptable, low risk. |
| 6 | Schema.org `geo` lat/long: 38.5816, -121.4944 | PARAPHRASE | Coordinates point to downtown Sacramento — original gives no specific address. Defensible as "service area centroid". | Acceptable. |
| 7 | Third testimonial: "Maria Gonzalez, Folsom, California" — "Called them at 7am when my spring broke…" | **FABRICATED** | Original site has only TWO testimonials: Andrew Snyder and Naima Victoria. Maria Gonzalez does not exist on the original. **This is a fake review**, the highest-risk item in the audit. | DELETE the Maria Gonzalez card entirely, or replace with a real client quote provided by the owner. |
| 8 | Andrew Snyder quote: "Tim from Quality Garage Doors saved the day…" | **EMBELLISHED** | The original quote on qualitygaragedoorsca.com starts simply with "Great pricing, amazing service" — no "Tim" name attribution is shown in the WebFetch extract. The redesign attributes specifics not in the original snippet. | Verify the full original quote with the client; if "Tim" is not in source, shorten to original wording. |
| 9 | Naima Victoria quote: "Thank you Tim for educating me…" | **EMBELLISHED** | Same as above — original WebFetch shows "professional service" only. The redesign expands the quote with details ("springs", "squeaking") that may not appear in the original. | Verify with client. If unverified, use only what appears on original. |
| 10 | Footer service-area links: "Folsom, CA", "Roseville, CA", "Elk Grove, CA" | PARAPHRASE | Original lists only Greater Sacramento Region + Placer + El Dorado Counties. Elk Grove (in Sacramento County) and Folsom (in Sacramento County) and Roseville (Placer County) are within the stated counties, so technically inside the service area. | Acceptable as expansion of stated region. Low risk. |
| 11 | "Lowest Rates in Town" (why-grid + about) | MATCH | Original: "Lowest Rates in Town" — verbatim. | OK. |
| 12 | "Best Warranties" (why-grid) | MATCH | Original: "best warranties in the industry". | OK. |
| 13 | "All Payment Methods" (why-grid) | **FABRICATED** | Original makes no claim about payment methods accepted. | Remove tile or verify with client which payment methods are actually accepted. |
| 14 | "20+ Years Experience" / "20 Years of Experience" | MATCH | Original about page also says "over a decade" — there is internal inconsistency on the **original** itself (homepage = "20 Years"; about = "over a decade"). Redesign uses the higher number. | Acceptable since it matches the original homepage; but flag for client to clarify the true number. |

### `about-us.html`

| # | Claim | Class | Evidence | Recommended fix |
|---|-------|-------|----------|-----------------|
| 15 | "since 2004" (hero, story heading) | **FABRICATED** | See item #1. Founding year never stated on original. | Remove the year. Use "for over 20 years" / "for over a decade". |
| 16 | Stats: "5000+ Doors Serviced" | **FABRICATED** | See item #2. | Delete or replace with verified figure. |
| 17 | Stats: "4.9★ Average Rating" | **FABRICATED** | See item #3. | Replace with "A+ BBB Rating" or delete. |
| 18 | "A+ BBB Rating" badge | MATCH | Original FAQ: "A+ rating with the BBB". | OK. |
| 19 | The bold quote "One of the benefits of being in a business like ours…" | **NEEDS VERIFICATION** | This quote does not appear in the WebFetched extracts of any original page. It may be from a page not crawled, or may be invented. | Verify with the client whether this is a real quote or a fabrication. If unverified, remove. |
| 20 | Andrew Snyder + Naima Victoria testimonials | EMBELLISHED | See items #8, #9. | Verify quote text. |

### `garage-door-repairs.html`

| # | Claim | Class | Evidence | Recommended fix |
|---|-------|-------|----------|-----------------|
| 21 | "Sacramento's most trusted repair team" (hero) | EMBELLISHED | Original makes no superlative "most trusted" claim. | Soften to "Sacramento's trusted repair team" (matches original tone). |
| 22 | Schema.org `offers.price: 125` | MATCH | Original coupon: $125 off repair. | OK. |
| 23 | Lube & tune $129 figure | MATCH | Original: "$129.00 normally charged when offered separately". | OK. |
| 24 | All repair categories (springs, cables, off-track, rollers, hinges, bearings, drums, torsion tubes, brackets, struts, tracks, weatherstripping) | MATCH | All items appear in the original repairs page. | OK. |

### `garage-door-openers.html`

| # | Claim | Class | Evidence | Recommended fix |
|---|-------|-------|----------|-----------------|
| 25 | "Authorized Liftmaster Dealer" (hero label, page-hero, services page) | **FABRICATED** | The original states only "we only sell Liftmaster products" — this is **not** the same as being an authorized dealer. "Authorized Dealer" is a specific Liftmaster certification status. There is **no evidence on the original site** that Quality Garage Doors holds Authorized Dealer credentials. | Replace "Authorized Liftmaster Dealer" with "We Sell Liftmaster" or "Liftmaster Specialists". This is a real liability if Liftmaster has not certified them. |
| 26 | "Liftmaster's industry-leading warranty" (replacement section) | PARAPHRASE | Industry common knowledge; not a claim by Quality Garage Doors. | Acceptable. |
| 27 | All four opener types: belt, chain, screw, jackshaft | MATCH | Original lists exactly these four. | OK. |
| 28 | Detailed repair list (gear/sprocket, circuit board, safety eye, trolley, limit switch, capacitor, remote programming) | PARAPHRASE | Original openers page mentions opener repair generally but does not enumerate this list. The list is plausible/standard, not fabricated facts. | Acceptable as common-knowledge expansion. |
| 29 | "Ideal for California's changing climate" | PARAPHRASE | Original says screw drives don't perform well in changing climates "like Sacramento". Redesign's framing is fine. | OK. |

### `new-garage-doors.html`

| # | Claim | Class | Evidence | Recommended fix |
|---|-------|-------|----------|-----------------|
| 30 | "All-new hardware… not just the door panels" | MATCH | Original: "all new parts when we install new doors" including replaced track. | OK. |
| 31 | "Dual Springs Standard… not one large spring like many competitors" | EMBELLISHED | Original says "two springs on two car garages" — but **does not contrast with competitors**. The "many competitors" claim is added. | Soften to "two springs on every two-car garage" without the competitor comparison. |
| 32 | "Available in multiple gauges with options for insulation, windows, and steel-back panels" | PARAPHRASE | Original mentions steel doors are durable/low-maintenance. The detailed gauge/window/panel options are inferred industry-standard but not on the original. Low risk. | Acceptable. |
| 33 | "Short, long, flush & bead panels" | PARAPHRASE | Standard panel styles, not on original explicitly. Low risk. | Acceptable. |
| 34 | Door types: Steel / Carriage Steel+Wood / Custom Wood | MATCH | Original lists all three. | OK. |
| 35 | Three signs of needing replacement (Torn Panels, Discontinued Manufacturer, Structural Damage) | **NEEDS VERIFICATION** | These are reasonable but not on the WebFetched original. | Likely safe content, no claim about Quality Garage Doors itself. Acceptable. |

### `coupons.html`

| # | Claim | Class | Evidence | Recommended fix |
|---|-------|-------|----------|-----------------|
| 36 | All 9 coupons ($500/$300, FREE lube+tune, $125 repair, $100 Liftmaster, $100 spring, FREE estimate, 20% Senior/AARP, 20% Military/First Responders, 20% Teachers) | MATCH | Every coupon matches the original verbatim. | OK. |
| 37 | "Cannot be combined with other offers" fine print | PARAPHRASE | Original has no expiration or detailed terms. The "cannot be combined" wording is added. Industry standard, low risk. | Acceptable. |
| 38 | "Valid ID required" on Senior/Military/Teachers | PARAPHRASE | Reasonable industry inference; original silent. Low risk. | Acceptable. |

### `contact.html`

| # | Claim | Class | Evidence | Recommended fix |
|---|-------|-------|----------|-----------------|
| 39 | Service area list adds **"Citrus Heights"** and **"Rancho Cordova"** | **FABRICATED** | Original mentions only Sacramento + Placer County + El Dorado County. Citrus Heights and Rancho Cordova are inside Sacramento County so are *probably* covered, but they are **not explicitly listed** on the original. | Either: (a) remove these two cities, or (b) verify with client. Safe default: remove. |
| 40 | Service area list: Folsom, Roseville, Elk Grove | PARAPHRASE | Inside the stated counties. Low risk. | Acceptable. |
| 41 | "We typically respond within 1 hour during business hours" | **FABRICATED** | The original makes no response-time guarantee. The FAQ explicitly says "no specific timeframe provided; customers directed to contact directly." | Remove the 1-hour line. Replace with "We respond as quickly as possible during business hours" or just delete. |
| 42 | "24-Hour Emergency Service Available" | MATCH | Original "24/7 emergency service". | OK. |

### `services.html`

| # | Claim | Class | Evidence | Recommended fix |
|---|-------|-------|----------|-----------------|
| 43 | "Authorized Liftmaster dealer" | **FABRICATED** | See item #25. | Same fix — replace with "We sell Liftmaster". |
| 44 | "20+ Years Experience" trust bar | MATCH | Original. | OK. |
| 45 | Service feature list (springs, cables, off-track, rollers/hinges/bearings/tracks/weatherstripping, free lube&tune) | MATCH | All from original. | OK. |

---

## MISSING ITEMS (on original, dropped from redesign — note only, not a lie)

| # | Item | Location on original | Notes |
|---|------|---------------------|------|
| M1 | Second phone number "(916) 975-2426" | Services page, FAQ on original | Redesign uses only the primary (916) 435-6320. Not a problem unless the second number is actively monitored. |
| M2 | Detailed warranty page content (90-day labor, $49.95 service fee after 90 days, parts-only coverage, $200 labor cap on opener/spring replacements, M-F 9-5 warranty service window) | `/warranty-information` on original | Redesign footer has a "Warranty" link that goes to `#`. The detailed warranty terms are not reproduced anywhere. Should be added or the link removed/disabled until added. |
| M3 | FAQ page content ("residential only", "no commercial roll-up doors") | `/faq` on original | Redesign says "any residential garage door job" but the explicit "we do NOT do commercial" line is gone. Low risk, but a customer expectation gap. |
| M4 | Yelp presence | Original homepage | Not linked in redesign. Optional. |

---

## TOP-PRIORITY FIXES (in order)

1. **DELETE** the Maria Gonzalez (Folsom) testimonial on `index.html`. This is a fabricated review — the highest legal/ethical risk in the audit.
2. **DELETE** the Schema.org `aggregateRating` block (4.9, 120 reviews) from `index.html`. Submitting fake review data to Google can trigger structured-data penalties.
3. **REPLACE** "Authorized Liftmaster Dealer" with "We Sell Liftmaster" on `garage-door-openers.html` and `services.html`. Real risk if not certified.
4. **REMOVE** "since 2004" everywhere (index, about-us, all footers). Replace with "for over 20 years".
5. **REMOVE** the "5000+ Doors" stat (index hero, about-us stats) unless client provides a verified number.
6. **REMOVE** the "4.9★" rating display unless client provides a verifiable source (e.g. Google Business Profile screenshot).
7. **REMOVE** "We typically respond within 1 hour" from `contact.html`.
8. **REMOVE** "Citrus Heights" and "Rancho Cordova" from contact.html service-area list, or confirm with client.
9. **REMOVE** "All Payment Methods" tile from index.html why-grid, or confirm payment methods accepted.
10. **VERIFY** the bold quote on `about-us.html` ("One of the benefits of being in a business like ours…") with the client. May exist on a page not crawled; if unverified, delete.
11. **VERIFY** the testimonial expansions for Andrew Snyder ("Tim saved the day") and Naima Victoria ("Thank you Tim… squeaking"). The WebFetched original shows only short snippets. If the longer versions are not on a crawled page, shorten them.
12. **SOFTEN** "Sacramento's most trusted repair team" to "trusted" (drop superlative).
13. **SOFTEN** "not one large spring like many competitors" to drop the competitor comparison.
14. **POPULATE** the Warranty link target (currently `#`) with original warranty terms or remove the link.

---

## OVERALL ASSESSMENT

The redesign **accurately reproduces** the original site's verifiable claims: phone, license, hours, service region, all coupons, brand affiliation (Liftmaster), service categories, technical detail (springs in pairs, heavy hardware, free lube+tune, free haul-away, etc.). These are all correct.

The fabrications are concentrated in **conversion-optimization additions** that the redesigner appears to have invented to bolster trust signals: the founding year, the door-count stat, the star rating, the third testimonial, the "Authorized Dealer" label, and the response-time promise. These are common copywriting embellishments but do constitute factual misstatements relative to the source.

Fixing the 14 items above will bring the site to **SAFE** status with no loss of core marketing message.
