# no-plan App Page — Design Spec
_Date: 2026-05-15_

## Summary

A standalone product landing page at `/noplan` that showcases the no-plan iOS fitness app. It has a nav entry in the portfolio but renders without the portfolio Nav or Footer — its own minimal chrome. The page is designed to feel like a real product site, not a portfolio project card.

---

## Routing & Integration

- **Route:** `/noplan` — added as a standalone route in `App.jsx` (outside `PortfolioLayout`, same pattern as `/demos/gamestart/shop/mybag`)
- **Nav entry:** Added to `navItems` in `Nav.jsx` with label `"no-plan"` and path `/noplan`
- **Active state:** `useLocation` already handles highlighting — no changes needed to Nav logic
- **Page component:** `src/pages/NoPlan.jsx`

---

## Page Chrome

A sticky minimal header replaces the portfolio Nav on this page:

- **Left:** `noplan` wordmark (SF Pro / system-ui, weight 600, white)
- **Right:** `← back to portfolio` link — navigates to `/` via React Router `Link`
- **Background:** `rgba(0,0,0,0.7)` with `backdrop-filter: blur(12px)` and a subtle bottom border
- No Footer on this page.

---

## Visual Identity

| Token | Value |
|---|---|
| Background | `#000` (base), sections alternate `#000` / `#080808` / `#050505` |
| Text primary | `#fff` |
| Text secondary | `#666` |
| Text muted | `#333` – `#555` |
| Accent | `#3a9bff` (sky blue) |
| Border | `#1e1e1e` — `#2a2a2a` |
| Font | `-apple-system, system-ui, sans-serif` (SF Pro on Apple devices) |
| Card radius | `16px` |
| Section padding | `120px 40px 80px` |

---

## Sections (top to bottom)

All six sections are full-viewport-height (`min-height: 100vh`) with parallax scrolling between them.

### 1. Hero

- **Eyebrow:** `a minimal fitness app` — sky blue, uppercase, letter-spaced
- **Heading:** `You plan.` / `AI helps.` — 72px, weight 700, `AI helps.` in sky blue
- **Tagline:** `No fluff. No streaks. No noise.` — 20px, muted grey
- **Visual:** Row of three phone mockups — outer two are smaller and upright, center is taller and raised (`translateY(-20px)`), bordered in sky blue. Phone screens are placeholder dark layouts with muted lines; replaced with real screenshots when available.
- **Background:** `#000`

### 2. Vision

- **Eyebrow:** `the problem`
- **Heading:** `Fitness apps are either too much or not enough.` — 48px
- **Body:** Two paragraphs explaining why noplan exists — Strava is too social, generic trackers forget, simple timers can't suggest. noplan remembers, helps plan, and gets smarter.
- **Background:** `#080808`

### 3. Features

- **Eyebrow:** `what it does`
- **Heading:** `Built around how you actually work out.`
- **Layout:** 2×2 grid of cards (`feature-card`) — dark background, subtle border, 32px padding
- **Four cards:**
  1. ⚡ Quick Log — log in under 30 seconds, smart defaults
  2. 📊 History & Stats — all sessions, filter by type, stats strip
  3. 🤖 AI Nudges — pattern-based suggestions, earned not spammed
  4. 📅 Your Plan — build your own, AI fills gaps, you stay in control
- **Background:** `#000`

### 4. Screenshots

- **Eyebrow:** `in the app`
- **Heading:** `See it in action.`
- **Subtext:** `Screenshots coming soon as development progresses.` — hidden once real screenshots are added
- **Layout:** Horizontal scrollable row of phone-shaped slots (160px × 300px, 20px radius, dashed border). Five slots labeled: Dashboard, Quick Log, History, AI Nudge, Plan.
- **Implementation note:** Slots are `<div>` placeholders. When screenshots are ready, replace with `<img>` tags — no structural change needed.
- **Background:** `#050505`

### 5. Tech Stack

- **Eyebrow:** `built with`
- **Heading:** `Serious engineering, minimal surface.`
- **Layout:** 2×2 grid of tech items — small sky blue dot, name + one-sentence description
- **Four items:**
  1. **SwiftUI** — Native iOS UI, fast and fluid
  2. **SwiftData** — On-device persistence, no account required
  3. **Claude API** — AI suggestion engine, watches patterns
  4. **HealthKit** — Reads Apple Watch data, auto-logs workouts
- **Background:** `#000`

### 6. Status / Roadmap

- **Eyebrow:** `where we are`
- **Heading:** `In development.`
- **Subtext:** `Building in the open. Coming to the App Store.`
- **Layout:** Vertical phase list — phase number, label, status badge
- **Five phases:**

| # | Phase | Status |
|---|---|---|
| 01 | Core logging & history | Done (sky blue) |
| 02 | Onboarding & guest profile | Done (sky blue) |
| 03 | AI suggestions & HealthKit | In progress (white) |
| 04 | Plans & scheduling | Up next (dark) |
| 05 | App Store launch | Coming soon (dark) |

- **Background:** `#050505`

---

## Parallax Scrolling

Each section uses CSS `background-attachment: fixed` on a background layer, or a lightweight JS scroll handler to shift a `transform: translateY()` on the section's background element. The effect gives depth as the user scrolls between full-bleed panels.

Implementation approach: `useEffect` with a passive `scroll` listener on `window`, updating a `--scroll-y` CSS custom property. Each section's background layer reads this via `calc()` to shift its `translateY`. CSS `background-attachment: fixed` is not used — it is unreliable inside React's render tree and broken on iOS Safari.

---

## Responsive Behaviour

- **Desktop (> 768px):** Full layout as described above
- **Mobile (≤ 768px):**
  - Hero phones: single center phone only, smaller
  - Feature grid: 1-column stack
  - Tech grid: 1-column stack
  - Parallax disabled (CSS `background-attachment: scroll` instead of `fixed` on mobile — `fixed` causes jank on iOS)
  - Font sizes scale down: headings ~36px on mobile

---

## CSS

New file: `src/css/noplan.css` — imported only in `NoPlan.jsx`. No global style impact.

---

## Data / Content

No data files needed. All content is hardcoded in the component — it's a single product page for a single app. If the roadmap phases change, they're updated directly in `NoPlan.jsx`.

---

## Patch Note

Add a patch note entry to `src/data/db.json` after the page ships:
- Title: `no-plan app page added`
- Body: Brief description linking to `/noplan`

---

## Out of Scope

- App Store link (not yet available — add when app ships)
- Contact / mailing list form
- Blog / devlog section
- Dark/light toggle (page is dark-only)
- Animations beyond parallax (no scroll-triggered reveal libraries)
