# no-plan App Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a standalone product landing page at `/noplan` that showcases the no-plan iOS fitness app with six full-bleed parallax sections and its own brand identity.

**Architecture:** Standalone React route outside `PortfolioLayout` — same pattern as `/demos/gamestart/shop/mybag`. The page has its own minimal sticky nav (logo + back link) and no portfolio Footer. All styles are scoped in `src/css/noplan.css` with an `np-` prefix to avoid global leakage. Parallax is a `useEffect` scroll listener that sets a `--parallax-offset` CSS custom property on each section.

**Tech Stack:** React 18 · React Router 7 · Vite · plain CSS (no new dependencies)

**Spec:** `docs/superpowers/specs/2026-05-15-noplan-page-design.md`

---

## Files

| Action | Path | Purpose |
|---|---|---|
| Create | `src/pages/NoPlan.jsx` | Page component — all six sections |
| Create | `src/css/noplan.css` | All styles scoped with `np-` prefix |
| Modify | `src/App.jsx` | Add `/noplan` standalone route |
| Modify | `src/components/Nav.jsx` | Add `no-plan` to `navItems` |
| Modify | `src/data/db.json` | Add patch note (postId 13) |
| Modify | `.gitignore` | Add `.superpowers/` entry |

---

## Task 1: Route wiring, nav entry, and NoPlan stub

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/Nav.jsx`
- Create: `src/pages/NoPlan.jsx` (stub only)

- [ ] **Step 1: Add `no-plan` to navItems in Nav.jsx**

Open `src/components/Nav.jsx`. The `navItems` array is at line 5. Add the new entry:

```js
const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/resume", label: "Resume" },
  { path: "/patch-notes", label: "Patch Notes" },
  { path: "/gallery", label: "Gallery" },
  { path: "/noplan", label: "no-plan" },
];
```

- [ ] **Step 2: Create the NoPlan stub component**

Create `src/pages/NoPlan.jsx`:

```jsx
export function NoPlan() {
  return <div style={{ background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>noplan — coming soon</div>;
}
```

- [ ] **Step 3: Add standalone route in App.jsx**

Open `src/App.jsx`. Add the import after the existing imports:

```js
import { NoPlan } from "./pages/NoPlan";
```

Add the route inside `<Routes>`, after the closing `</Route>` of `PortfolioLayout` and before the closing `</Routes>`:

```jsx
{/* no-plan — standalone product page, no portfolio Nav or Footer */}
<Route path="/noplan" element={<NoPlan />} />
```

The bottom of the `<Routes>` block should now look like:

```jsx
        {/* Demo routes — standalone pages, no portfolio Nav or Footer */}
        <Route path="/demos/gamestart/shop/mybag" element={<MyBag />} />

        {/* no-plan — standalone product page, no portfolio Nav or Footer */}
        <Route path="/noplan" element={<NoPlan />} />
      </Routes>
```

- [ ] **Step 4: Verify in browser**

Run: `pnpm dev`

- Open `http://localhost:5173` — confirm "no-plan" appears in the nav bar
- Click "no-plan" — confirm it navigates to a black screen with "noplan — coming soon"
- Confirm the portfolio nav disappears on the `/noplan` route (no Nav bar, no Footer)

- [ ] **Step 5: Add `.superpowers/` to .gitignore**

Open `.gitignore` and add this line before the final `.env` line:

```
.superpowers/
```

- [ ] **Step 6: Commit**

```bash
git add src/App.jsx src/components/Nav.jsx src/pages/NoPlan.jsx .gitignore
git commit -m "feat: add /noplan standalone route and nav entry"
```

---

## Task 2: Create `src/css/noplan.css`

**Files:**
- Create: `src/css/noplan.css`

- [ ] **Step 1: Create the CSS file**

Create `src/css/noplan.css` with the full contents below. Every class uses the `np-` prefix — no global style impact.

```css
/* ── Root ── */
.np-root {
  background: #000;
  color: #fff;
  font-family: -apple-system, system-ui, sans-serif;
  min-height: 100vh;
}

/* ── Mini nav ── */
.np-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 40px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.np-nav-logo {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #fff;
}

.np-nav-back {
  font-size: 12px;
  color: #555;
  text-decoration: none;
  letter-spacing: 0.3px;
  transition: color 0.2s;
}

.np-nav-back:hover {
  color: #999;
}

/* ── Section base ── */
.np-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 40px 80px;
  overflow: hidden;
}

.np-hero       { background: #000; }
.np-vision     { background: #080808; }
.np-features   { background: #000; }
.np-screenshots { background: #050505; }
.np-tech       { background: #000; }
.np-status     { background: #050505; }

/* ── Parallax background layer ── */
.np-parallax-bg {
  position: absolute;
  inset: -30% 0;
  transform: translateY(var(--parallax-offset, 0px));
  will-change: transform;
  z-index: 0;
  pointer-events: none;
}

.np-hero .np-parallax-bg {
  background: radial-gradient(ellipse 80% 50% at 50% 50%, rgba(58, 155, 255, 0.06) 0%, transparent 70%);
}
.np-vision .np-parallax-bg {
  background: radial-gradient(ellipse 60% 40% at 30% 60%, rgba(58, 155, 255, 0.03) 0%, transparent 70%);
}
.np-features .np-parallax-bg {
  background: radial-gradient(ellipse 60% 40% at 70% 40%, rgba(58, 155, 255, 0.04) 0%, transparent 70%);
}
.np-screenshots .np-parallax-bg {
  background: radial-gradient(ellipse 80% 40% at 50% 70%, rgba(58, 155, 255, 0.03) 0%, transparent 70%);
}
.np-tech .np-parallax-bg {
  background: radial-gradient(ellipse 60% 50% at 20% 50%, rgba(58, 155, 255, 0.04) 0%, transparent 70%);
}
.np-status .np-parallax-bg {
  background: radial-gradient(ellipse 70% 50% at 50% 30%, rgba(58, 155, 255, 0.05) 0%, transparent 70%);
}

/* ── Inner content (above parallax bg) ── */
.np-inner {
  position: relative;
  z-index: 1;
  max-width: 860px;
  width: 100%;
}

.np-inner--center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* ── Shared text ── */
.np-eyebrow {
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #3a9bff;
  margin-bottom: 20px;
  font-weight: 500;
}

.np-accent { color: #3a9bff; }

.np-section-heading {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.1;
  margin-bottom: 28px;
}

/* ── Hero ── */
.np-hero .np-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.np-hero-heading {
  font-size: 72px;
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1;
  margin-bottom: 20px;
}

.np-hero-tagline {
  font-size: 20px;
  color: #666;
  margin-bottom: 48px;
  font-weight: 400;
}

/* Phone mockups */
.np-phone-row {
  display: flex;
  gap: 20px;
  align-items: flex-end;
  justify-content: center;
}

.np-phone {
  width: 130px;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #111;
}

.np-phone--center {
  width: 160px;
  transform: translateY(-20px);
  border-color: rgba(58, 155, 255, 0.4);
}

.np-phone-screen {
  height: 260px;
  background: linear-gradient(160deg, #111 0%, #0a0a0a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
}

.np-phone--center .np-phone-screen {
  height: 320px;
}

.np-line {
  height: 8px;
  background: #222;
  border-radius: 4px;
  width: 80%;
}

.np-line--blue {
  background: rgba(58, 155, 255, 0.3);
  width: 50%;
}

.np-line--short { width: 40%; }

.np-phone-home {
  height: 4px;
  background: #222;
  width: 30%;
  margin: 10px auto;
  border-radius: 2px;
}

/* ── Vision ── */
.np-body {
  font-size: 20px;
  color: #666;
  line-height: 1.7;
  max-width: 620px;
  margin-bottom: 20px;
}

.np-body:last-child { margin-bottom: 0; }

.np-body strong {
  color: #ccc;
  font-weight: 500;
}

/* ── Features ── */
.np-feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.np-feature-card {
  background: #0f0f0f;
  border: 1px solid #1e1e1e;
  border-radius: 16px;
  padding: 32px;
}

.np-feature-icon {
  font-size: 28px;
  margin-bottom: 16px;
}

.np-feature-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #fff;
}

.np-feature-card p {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

/* ── Screenshots ── */
.np-screenshots-sub {
  font-size: 15px;
  color: #444;
  margin-bottom: 48px;
  margin-top: -16px;
}

.np-screenshot-row {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 12px;
  scrollbar-width: none;
}

.np-screenshot-row::-webkit-scrollbar { display: none; }

.np-screenshot-slot {
  min-width: 160px;
  height: 300px;
  border-radius: 20px;
  background: #111;
  border: 1px dashed #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.np-screenshot-slot span {
  font-size: 10px;
  color: #333;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* ── Tech ── */
.np-tech-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.np-tech-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: #0a0a0a;
  border: 1px solid #1a1a1a;
  border-radius: 12px;
  padding: 20px;
}

.np-tech-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3a9bff;
  margin-top: 6px;
  flex-shrink: 0;
}

.np-tech-item h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #fff;
}

.np-tech-item p {
  font-size: 13px;
  color: #555;
  line-height: 1.5;
}

/* ── Status ── */
.np-status-sub {
  font-size: 16px;
  color: #555;
  margin-bottom: 48px;
  margin-top: -16px;
}

.np-phase-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  text-align: left;
}

.np-phase {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #111;
}

.np-phase:last-child { border-bottom: none; }

.np-phase-num {
  font-size: 11px;
  color: #333;
  letter-spacing: 1px;
  width: 24px;
  flex-shrink: 0;
}

.np-phase-label {
  font-size: 15px;
  font-weight: 500;
  flex: 1;
}

.np-phase-label--done     { color: #3a9bff; }
.np-phase-label--active   { color: #fff; }
.np-phase-label--upcoming { color: #333; }

.np-phase-badge {
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 20px;
  white-space: nowrap;
  flex-shrink: 0;
}

.np-phase-badge--done {
  background: rgba(58, 155, 255, 0.1);
  color: #3a9bff;
  border: 1px solid rgba(58, 155, 255, 0.2);
}

.np-phase-badge--active {
  background: rgba(255, 255, 255, 0.06);
  color: #888;
  border: 1px solid #222;
}

.np-phase-badge--upcoming {
  color: #2a2a2a;
  border: 1px solid #1a1a1a;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .np-nav { padding: 12px 20px; }

  .np-section { padding: 100px 24px 60px; }

  .np-hero-heading {
    font-size: 40px;
    letter-spacing: -1px;
  }

  .np-hero-tagline { font-size: 16px; }

  /* Show only center phone on mobile */
  .np-phone-row .np-phone:not(.np-phone--center) { display: none; }
  .np-phone--center { transform: none; }

  .np-section-heading {
    font-size: 32px;
    letter-spacing: -0.5px;
  }

  .np-body { font-size: 17px; }

  .np-feature-grid  { grid-template-columns: 1fr; }
  .np-tech-grid     { grid-template-columns: 1fr; }

  /* Disable parallax on mobile — causes jank on iOS Safari */
  .np-parallax-bg { transform: none !important; }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/css/noplan.css
git commit -m "feat: add noplan.css with full page styles"
```

---

## Task 3: Build `NoPlan.jsx` — full component

**Files:**
- Modify: `src/pages/NoPlan.jsx` (replace stub with full component)

- [ ] **Step 1: Replace the stub with the complete component**

Replace the entire contents of `src/pages/NoPlan.jsx`:

```jsx
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../css/noplan.css";

const TECH = [
  { name: "SwiftUI", desc: "Native iOS UI. Fast, fluid, and exactly how Apple intended." },
  { name: "SwiftData", desc: "On-device persistence. No account required. Your data stays yours." },
  { name: "Claude API", desc: "Powers the AI suggestion engine. Quietly watches patterns and suggests when it makes sense." },
  { name: "HealthKit", desc: "Reads workout data from Apple Watch. Logs automatically when you close a ring." },
];

const PHASES = [
  { num: "01", label: "Core logging & history", status: "done" },
  { num: "02", label: "Onboarding & guest profile", status: "done" },
  { num: "03", label: "AI suggestions & HealthKit", status: "active" },
  { num: "04", label: "Plans & scheduling", status: "upcoming" },
  { num: "05", label: "App Store launch", status: "upcoming" },
];

const PHASE_LABEL = { done: "Done", active: "In progress", upcoming: "Coming soon" };

const SCREENSHOTS = ["Dashboard", "Quick Log", "History", "AI Nudge", "Plan"];

export function NoPlan() {
  useEffect(() => {
    const sections = document.querySelectorAll(".np-section");

    const handleScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        section.style.setProperty("--parallax-offset", `${rect.top * 0.25}px`);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="np-root">
      {/* ── Mini nav ── */}
      <nav className="np-nav">
        <span className="np-nav-logo">noplan</span>
        <Link to="/" className="np-nav-back">← back to portfolio</Link>
      </nav>

      {/* ── 1. Hero ── */}
      <section className="np-section np-hero">
        <div className="np-parallax-bg" />
        <div className="np-inner">
          <p className="np-eyebrow">a minimal fitness app</p>
          <h1 className="np-hero-heading">
            You plan.<br /><span className="np-accent">AI helps.</span>
          </h1>
          <p className="np-hero-tagline">No fluff. No streaks. No noise.</p>
          <div className="np-phone-row">
            <div className="np-phone">
              <div className="np-phone-screen">
                <div className="np-line" />
                <div className="np-line np-line--short" />
                <div className="np-line np-line--blue" />
                <div className="np-line" />
                <div className="np-line np-line--short" />
              </div>
              <div className="np-phone-home" />
            </div>
            <div className="np-phone np-phone--center">
              <div className="np-phone-screen">
                <div className="np-line" />
                <div className="np-line np-line--blue" />
                <div className="np-line" />
                <div className="np-line np-line--short" />
                <div className="np-line np-line--blue" />
                <div className="np-line" />
                <div className="np-line np-line--short" />
              </div>
              <div className="np-phone-home" />
            </div>
            <div className="np-phone">
              <div className="np-phone-screen">
                <div className="np-line np-line--short" />
                <div className="np-line" />
                <div className="np-line np-line--blue" />
                <div className="np-line" />
                <div className="np-line np-line--short" />
              </div>
              <div className="np-phone-home" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Vision ── */}
      <section className="np-section np-vision">
        <div className="np-parallax-bg" />
        <div className="np-inner">
          <p className="np-eyebrow">the problem</p>
          <h2 className="np-section-heading">
            Fitness apps are either too much or not enough.
          </h2>
          <p className="np-body">
            <strong>Strava wants you to race strangers.</strong> Generic trackers forget
            everything after 30 days. Simple timers can&apos;t tell you what to do next.
          </p>
          <p className="np-body">
            noplan sits in the middle — it <strong>remembers what you did</strong>, helps
            you <strong>think about what&apos;s next</strong>, and gets{" "}
            <strong>quietly smarter</strong> over time. Nothing else.
          </p>
        </div>
      </section>

      {/* ── 3. Features ── */}
      <section className="np-section np-features">
        <div className="np-parallax-bg" />
        <div className="np-inner">
          <p className="np-eyebrow">what it does</p>
          <h2 className="np-section-heading">Built around how you actually work out.</h2>
          <div className="np-feature-grid">
            <div className="np-feature-card">
              <div className="np-feature-icon">⚡</div>
              <h3>Quick Log</h3>
              <p>Log a completed workout in under 30 seconds. Smart defaults — today&apos;s date, last used type, no friction.</p>
            </div>
            <div className="np-feature-card">
              <div className="np-feature-icon">📊</div>
              <h3>History &amp; Stats</h3>
              <p>Every session. Sorted newest first. Filter by type. A stats strip at a glance — this week, all time.</p>
            </div>
            <div className="np-feature-card">
              <div className="np-feature-icon">🤖</div>
              <h3>AI Nudges</h3>
              <p>After enough sessions, AI notices patterns. &ldquo;You haven&apos;t trained legs in 5 days.&rdquo; Earned suggestions, not spam.</p>
            </div>
            <div className="np-feature-card">
              <div className="np-feature-icon">📅</div>
              <h3>Your Plan</h3>
              <p>Build your own weekly plan at your own pace. AI fills gaps and suggests what fits your rhythm — you&apos;re always in control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Screenshots ── */}
      <section className="np-section np-screenshots">
        <div className="np-parallax-bg" />
        <div className="np-inner">
          <p className="np-eyebrow">in the app</p>
          <h2 className="np-section-heading">See it in action.</h2>
          <p className="np-screenshots-sub">Screenshots coming soon as development progresses.</p>
          <div className="np-screenshot-row">
            {SCREENSHOTS.map((label) => (
              <div key={label} className="np-screenshot-slot">
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Tech ── */}
      <section className="np-section np-tech">
        <div className="np-parallax-bg" />
        <div className="np-inner">
          <p className="np-eyebrow">built with</p>
          <h2 className="np-section-heading">Serious engineering, minimal surface.</h2>
          <div className="np-tech-grid">
            {TECH.map(({ name, desc }) => (
              <div key={name} className="np-tech-item">
                <div className="np-tech-dot" />
                <div>
                  <h4>{name}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Status ── */}
      <section className="np-section np-status">
        <div className="np-parallax-bg" />
        <div className="np-inner np-inner--center">
          <p className="np-eyebrow">where we are</p>
          <h2 className="np-section-heading">In development.</h2>
          <p className="np-status-sub">Building in the open. Coming to the App Store.</p>
          <div className="np-phase-list">
            {PHASES.map(({ num, label, status }) => (
              <div key={num} className="np-phase">
                <span className="np-phase-num">{num}</span>
                <span className={`np-phase-label np-phase-label--${status}`}>{label}</span>
                <span className={`np-phase-badge np-phase-badge--${status}`}>
                  {PHASE_LABEL[status]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify in browser**

With `pnpm dev` running, open `http://localhost:5173/noplan`:

- Mini nav is sticky and frosted glass at the top
- "← back to portfolio" navigates to `/`
- Hero section: large heading, three phone mockups (center one raised), sky blue accent on "AI helps."
- Scroll through all six sections — confirm each renders: Vision, Features (2×2 grid), Screenshots (horizontal scroll row), Tech (2×2 grid), Status (phase list with badges)
- Confirm "no-plan" in the portfolio nav highlights as active when on `/noplan`
- Open DevTools → no console errors

- [ ] **Step 3: Verify parallax**

Scroll slowly through the page. The subtle sky blue radial glow behind each section should drift at a different rate than the content. If it's invisible, that's fine — the gradient is intentionally very faint; the effect is felt more than seen.

- [ ] **Step 4: Commit**

```bash
git add src/pages/NoPlan.jsx
git commit -m "feat: build NoPlan page with all six sections and parallax"
```

---

## Task 4: Mobile responsive check

**Files:**
- Possibly modify: `src/css/noplan.css` (if fixes needed)

The responsive rules are already in `noplan.css` from Task 2. This task is verification only.

- [ ] **Step 1: Open mobile view in DevTools**

In Chrome DevTools (F12), toggle device toolbar and select "iPhone 14 Pro" (393px wide).

Check each section:

| Check | Expected |
|---|---|
| Nav | Readable, no overflow |
| Hero | Heading ≤ 40px, single center phone, no horizontal scroll |
| Vision | Body text readable, no overflow |
| Features | Single-column card stack |
| Screenshots | Horizontal scroll still works |
| Tech | Single-column stack |
| Status | Phase list fits, badges don't overflow |

- [ ] **Step 2: Fix any issues found**

If any layout breaks, fix the relevant rule in `src/css/noplan.css`. Common issues:
- Long phase labels wrapping badly → add `font-size: 13px` inside `@media (max-width: 768px)` for `.np-phase-label`
- Screenshot slot too wide on small screens → add `min-width: 140px` in the media query

- [ ] **Step 3: Commit (only if changes were made)**

```bash
git add src/css/noplan.css
git commit -m "fix: noplan mobile responsive adjustments"
```

---

## Task 5: Patch note

**Files:**
- Modify: `src/data/db.json`

- [ ] **Step 1: Add patch note entry**

Open `src/data/db.json`. Find the `"patch-notes"` array. The last entry has `"postId": 12`. Append a new entry after it (inside the array, after the last `}`):

```json
{
  "postId": 13,
  "date": "May 15, 2026",
  "title": "no-plan app page added",
  "body": "Added a dedicated product page for the no-plan fitness app — the most ambitious project on the site. Six full-bleed sections: vision, features, screenshots, tech stack, and live development roadmap.",
  "link": "/noplan"
}
```

- [ ] **Step 2: Verify patch note appears on Home**

Open `http://localhost:5173`. The "Site update" line at the bottom of the intro should now read "no-plan app page added · May 15, 2026".

Click it — confirm it navigates to `/patch-notes#patch-note-13`.

- [ ] **Step 3: Final full-page walkthrough**

- Navigate to `/noplan` from the home page nav
- Scroll through all six sections end-to-end
- Click "← back to portfolio" — lands on `/`
- Resize to mobile — no layout breaks
- Run `pnpm lint` — no new lint errors

- [ ] **Step 4: Commit**

```bash
git add src/data/db.json
git commit -m "feat: add patch note for no-plan page"
```
