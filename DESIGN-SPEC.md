# DESIGN SPEC — 5-Variant Quality Garage Doors Redesign

This spec is **shared by all 5 design agents**. You MUST follow every rule in this file. Your design agent will additionally receive a unique design-language brief — that controls the *visual style*; this file controls the *facts, structure, SEO, and switching behavior*.

---

## 1. Project Layout

```
C:\laragon\www\qualitygaragedoors\
├── assets\images\          ← SHARED (do NOT duplicate). Reference as ../assets/images/<file>
├── 1\                      ← Design 1 root
│   ├── index.html
│   ├── about-us.html
│   ├── services.html
│   ├── garage-door-repairs.html
│   ├── garage-door-openers.html
│   ├── new-garage-doors.html
│   ├── coupons.html
│   ├── contact.html
│   ├── warranty.html
│   ├── favicon.svg
│   └── assets\
│       ├── css\styles.css
│       └── js\main.js
├── 2\ 3\ 4\ 5\             ← Same structure
```

You build ONLY your assigned slot directory (1, 2, 3, 4, or 5). Do not touch any other slot, root files, or `/assets/images/`.

URL behavior (Apache/Laragon serves directories): `/1/` → `1/index.html`, `/1/services.html` → `1/services.html`. Switching designs preserves the page name.

---

## 2. Page list (9 pages, all required)

| File | Page purpose |
|------|--------------|
| `index.html` | Home — hero, services overview, why us, testimonials, CTA |
| `about-us.html` | Company story, values, team, BBB, testimonials |
| `services.html` | Services hub — links to 3 service pages |
| `garage-door-repairs.html` | Repair service page |
| `garage-door-openers.html` | Liftmaster opener service page |
| `new-garage-doors.html` | New door installation page |
| `coupons.html` | Coupon/deals page (printable) |
| `contact.html` | Contact form + info + emergency CTA |
| `warranty.html` | Warranty terms |

---

## 3. VERIFIED FACTS — use these exactly. Do NOT invent stats, ratings, founding years, addresses, or testimonials.

**Business identity:**
- Name: Quality Garage Doors
- Phone: **(916) 435-6320**  → `tel:9164356320`
- Hours: MON–SAT 7AM–7PM
- License: CA Contractor #1042651 (licensed, bonded, insured)
- Service area: Sacramento, Placer & El Dorado Counties (cities: Sacramento, Elk Grove, Folsom, Roseville)
- BBB: A+ rated
- Experience: "for over 20 years" / "20+ years experience" — NEVER "since 2004"
- 24-hour emergency service. Same-day service. Free in-home estimates.

**FORBIDDEN claims** (these are fabrications flagged in `COPY-AUDIT.md` — do not use):
- ❌ "since 2004" or any specific founding year
- ❌ "5,000+ doors repaired" or any specific volume figure
- ❌ "4.9★" rating, "120 reviews", or any Schema `aggregateRating` block
- ❌ Any third testimonial beyond Andrew Snyder + Naima Victoria
- ❌ "Most trusted" or other unverified superlatives
- ❌ "All payment methods" tile

**Approved testimonials (use only these two):**
1. Andrew Snyder — Sacramento, California — 5★ — "Tim from Quality Garage Doors saved the day when I was unable to go to work when our garage door stopped working. Great pricing, amazing service. I recommend these guys for anyone who is in a sticky situation."
2. Naima Victoria — Elk Grove, California — 5★ — "Thank you Tim for educating me and fixing my garage door springs. Making the squeaking go away is certainly a bonus. We appreciate the fast response and professional service."

**Approved differentiators:**
- Lowest rates in town
- Same-day service
- Licensed & insured (#1042651)
- Honest staff
- BBB A+
- Discount coupons
- 20+ years experience
- Best warranties in the industry
- Free lube + tune with every repair (normally $129)
- Both springs always replaced (not just the broken one)
- Heavy-duty hardware
- Liftmaster openers (the only opener brand they install)
- Steel, carriage-house, custom wood doors
- 2″ steel-backed insulated panels available
- Free haul-away of old door

---

## 4. Coupons (use exact amounts/wording)

| Amount | Offer | Fine print |
|--------|-------|-----------|
| **$500** | OFF any new garage door & motor combo | Cannot be combined. Present at time of service. |
| **$300** | OFF any new garage door only | Cannot be combined. Present at time of service. |
| **FREE** | Lube + tune + safety inspection with any garage door repair | Normally $129 standalone. Included free with every repair. |
| **$125** | OFF garage door repair | Cannot be combined. Present at time of service. |
| **$100** | OFF any new Liftmaster opener | Cannot be combined. Present at time of service. |
| **$100** | OFF single or double spring replacement (any size) | Cannot be combined. Present at time of service. |
| **FREE** | In-home garage door estimate | No obligation. Anywhere in our service area. |
| **20%** | OFF repair — Senior Citizens & AARP Members | Valid ID required. |
| **20%** | OFF repair — Military & First Responders | Valid ID required. |
| **20%** | OFF repair — Teachers & Educators | Valid ID required. |

---

## 5. Warranty (warranty.html content)

- **90-day labor warranty** on every repair and installation.
- **Parts warranty after 90 days** continues under manufacturer terms; $49.95 service fee for trip + diagnosis applies.
- **$200 labor cap** on out-of-warranty opener and spring replacement labor.
- Excludes: damage from misuse, accidents, weather, attempted self-repair, normal wear on consumables.

---

## 6. Available images (in `../assets/images/`)

Use these — do NOT request new images.

```
logo.png                          (header/footer logo)
garage-door-hero.jpg              (hero — main)
modern-garage-door.jpg            (modern aesthetic)
wood-garage-door-house.jpg        (carriage/wood)
carriage-wood-door.webp           (carriage close-up)
carriage-signature-door.jpg       (carriage option)
garage-door-pic3.jpg              (general)
garage-door-service.jpg           (service shot)
torsion-springs.webp              (repairs page)
technician.png                    (cutout)
technician-repair.jpg             (technician at work)
repair-service.png                (opener/repair illustrative)
about-team.jpg                    (about page)
quality-badge.png                 (trust badge)
bbb-seal.png                      (BBB)
payment-methods.png               (only use if listing methods — verify with client first; safer to omit)
```

Use `loading="lazy"` on all images except the LCP hero. Provide descriptive `alt` text. Set `width`/`height` attributes to prevent CLS.

---

## 7. SEO requirements (2026 best practices) — every page

Every HTML file MUST include:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#<your design's primary>">
  <title>{Page-specific title — keyword + brand + phone}</title>
  <meta name="description" content="{Unique 150–160 char description}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="https://qualitygaragedoorsca.org/{N}/{filename}">
  <link rel="icon" type="image/svg+xml" href="favicon.svg">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="{...}">
  <meta property="og:description" content="{...}">
  <meta property="og:url" content="...">
  <meta property="og:image" content="../assets/images/garage-door-hero.jpg">
  <meta property="og:site_name" content="Quality Garage Doors">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="...">
  <meta name="twitter:description" content="...">
  <meta name="twitter:image" content="../assets/images/garage-door-hero.jpg">

  <!-- Preload LCP hero on home (only on index.html) -->
  <link rel="preload" as="image" href="../assets/images/garage-door-hero.jpg">

  <!-- CSS -->
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
```

**Schema.org JSON-LD** — include on every page in the `<head>`:
- `LocalBusiness` block (home, contact, about) with `name`, `telephone`, `address` (locality Sacramento, region CA, country US), `openingHours` "Mo-Sa 07:00-19:00", `areaServed` array, `priceRange "$$"`. **Do NOT include `aggregateRating`.**
- `Service` schema on the 3 service pages (`@type: Service`, `provider: LocalBusiness`).
- `BreadcrumbList` on inner pages.
- `FAQPage` if you include an FAQ section.
- `Offer` schema on coupons page (one per coupon).

**Per-page meta requirements:**
- `index.html`: title 50–60 chars, includes "Sacramento" + "Garage Door" + phone
- All inner pages: page-specific titles + descriptions, no duplication
- All pages: unique H1, single H1 only, hierarchical headings (H1→H2→H3 — never skip)
- Image `alt` attributes are descriptive (not "image" or empty)
- Phone numbers everywhere are click-to-call: `<a href="tel:9164356320">`
- Forms have `autocomplete` attributes and proper `<label>` associations
- All interactive elements are keyboard-accessible (focus rings visible)
- Color contrast WCAG AA: 4.5:1 for text, 3:1 for large text/UI

**Performance:**
- Mobile-first CSS (default styles for mobile, `@media (min-width: ...)` to add desktop)
- Inline critical CSS if your design supports it; otherwise minimize external CSS calls
- No CSS frameworks/CDNs — write your own CSS
- One JS file per design (vanilla JS only, no libraries)
- All images have explicit `width`/`height`
- Use `font-display: swap` for any web fonts

---

## 8. Design Switcher Widget (REQUIRED on every page, every design)

Every page must include a small **design switcher** that lets the user jump between designs while preserving the current page. Place it as a floating pill at top-right (or as part of nav — your choice, but visible without scrolling).

**Required HTML structure** (style it however you want for your design):

```html
<div class="design-switcher" role="navigation" aria-label="Design variant switcher">
  <span class="design-switcher-label">Design</span>
  <a href="/1/{currentpage}" data-design="1">1</a>
  <a href="/2/{currentpage}" data-design="2">2</a>
  <a href="/3/{currentpage}" data-design="3">3</a>
  <a href="/4/{currentpage}" data-design="4">4</a>
  <a href="/5/{currentpage}" data-design="5">5</a>
</div>
```

**Required JS** (build dynamic links so users can browse without it breaking — works even with file:// or non-Apache servers):

```js
(function () {
  const sw = document.querySelector('.design-switcher');
  if (!sw) return;
  const path = window.location.pathname;
  // Get filename, defaulting to index.html
  let file = path.split('/').filter(Boolean).pop() || 'index.html';
  if (!file.endsWith('.html')) file = 'index.html';
  // Mark active design
  const m = path.match(/\/([1-5])\//);
  const active = m ? m[1] : null;
  sw.querySelectorAll('a').forEach(a => {
    const n = a.dataset.design;
    a.href = `/${n}/${file}`;
    if (n === active) a.classList.add('is-active');
  });
})();
```

The switcher must be visually distinct in each design (don't just copy the snippet — restyle it to match).

---

## 9. Favicon

Create `favicon.svg` at the root of your slot directory. SVG, 32×32 viewBox, mark inspired by your design's palette. Subject can be: a stylized garage door silhouette, a "Q" mark, a wrench/door hybrid, or any iconic shape. Must look distinct from the other 4 designs' favicons.

---

## 10. Mobile-first / responsiveness

- Default styles target mobile (≤640px). Add `@media (min-width: 768px)` and `@media (min-width: 1024px)` for tablet/desktop.
- Tap targets ≥ 44×44px.
- Sticky bottom call-button on mobile (`<a href="tel:9164356320">`).
- Mobile menu (drawer or full-screen overlay).
- Hero text remains readable at 360px width.
- Forms stack on mobile, side-by-side on tablet+.
- Test mentally at 360, 414, 768, 1024, 1440 widths.

---

## 11. Quality bar — what "done" looks like

- All 9 pages exist and load without errors.
- Internal navigation between pages works (clicking "Services" goes to `services.html` within your slot).
- The design switcher works between slots (verify the JS preserves filename).
- Distinct visual identity from the other 4 designs (they will all use this same content, so colors/typography/layout must clearly differ).
- No fabricated facts. No "since 2004", no fake review counts, no fake testimonials.
- Mobile renders cleanly at 360px.
- Lighthouse-style: semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`).
- One H1 per page. Logical heading order.
- All `<a href="tel:...">` and `<a href="mailto:...">` work.
- Form on contact.html has client-side validation.
- Print stylesheet on coupons.html (`@media print` — coupons display as printable cards).

---

## 12. Out of scope — do NOT do these

- Do not modify root files (`index.html`, `services.html`, etc. at the project root).
- Do not modify `/assets/images/` or any other slot's directory.
- Do not add `aggregateRating` to JSON-LD.
- Do not invent service areas beyond Sacramento/Placer/El Dorado.
- Do not add a 3rd testimonial.
- Do not use a CSS framework (Tailwind/Bootstrap/etc.).
- Do not use any JS library (no jQuery, no React, no Alpine).
- Do not include analytics scripts, fonts CDN you don't load with `font-display: swap`, or external trackers.
