import { Link } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import "../css/noplan.css";

const HIGHLIGHTS = [
  {
    mark: "30s",
    title: "Log a session before you leave the gym.",
    body: "Smart defaults fill in today's date and your last workout type. Two taps and it's saved.",
  },
  {
    mark: "AI",
    title: "It notices what you skipped.",
    body: "After enough sessions, noplan spots the gaps and says something. Once. Not every morning.",
  },
  {
    mark: "◎",
    title: "Close a ring, it's already logged.",
    body: "HealthKit pulls finished workouts straight off your Apple Watch. No double entry.",
  },
  {
    mark: "0",
    title: "No account. No cloud. No sync.",
    body: "Everything lives on your iPhone in SwiftData. There is no server to leak it.",
  },
];

const TECH = [
  { name: "SwiftUI", desc: "Native iOS UI, built the way Apple intended — fast, fluid, and at home on the platform." },
  { name: "SwiftData", desc: "On-device persistence. No account, no server, no sync. Your history stays on your iPhone." },
  { name: "Claude API", desc: "Powers the suggestion engine. It reads your own logged patterns and speaks up only when there's something worth saying." },
  { name: "HealthKit", desc: "Reads completed workouts from Apple Watch, so closing a ring logs the session for you." },
];

const PHASES = [
  { label: "Core logging and history", status: "done" },
  { label: "Onboarding and guest profile", status: "done" },
  { label: "AI suggestions and HealthKit", status: "active" },
  { label: "Plans and scheduling", status: "upcoming" },
  { label: "App Store launch", status: "upcoming" },
];

const BADGE = { done: "Shipped", active: "In progress", upcoming: "Planned" };

function Phone({ small, children }) {
  return (
    <div className={small ? "np-phone np-phone--sm" : "np-phone"}>
      <div className="np-screen">
        <div className="np-island" />
        {children}
      </div>
    </div>
  );
}

Phone.propTypes = {
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export function NoPlan() {
  useEffect(() => {
    const targets = document.querySelectorAll(".np-reveal");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("np-in"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("np-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="np-root">
      <nav className="np-nav">
        <span className="np-nav-logo">noplan</span>
        <div className="np-nav-actions">
          <Link to="/projects" className="np-pill np-pill--ghost">All projects</Link>
          <a href="#roadmap" className="np-pill np-pill--solid">See the roadmap</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="np-section np-hero">
        <div className="np-inner np-inner--center">
          <p className="np-eyebrow">noplan</p>
          <h1 className="np-heading np-heading--hero">
            Log less.<br />Know more.
          </h1>
          <p className="np-hero-sub">
            A fitness tracker that remembers what you did, notices what you skipped,
            and otherwise leaves you alone.
          </p>
          <div className="np-cta-row">
            <a href="#highlights" className="np-pill np-pill--solid np-pill--lg">Get the highlights</a>
            <a href="#privacy" className="np-pill np-pill--ghost np-pill--lg">How your data is handled</a>
          </div>
          <div className="np-split-media">
            <Phone>
              <p className="np-screen-title">This week</p>
              <div className="np-ring-row">
                <div className="np-ring" />
                <p className="np-ring-stat"><b>4 sessions</b>2 pull · 1 legs · 1 run</p>
              </div>
              <div className="np-nudge">
                <p className="np-nudge-label">Suggested</p>
                <p className="np-nudge-text">You haven&apos;t trained legs in five days. Want to slot it in tomorrow?</p>
              </div>
              <div className="np-row">
                <span className="np-row-name">Pull day</span>
                <span className="np-row-meta">Today</span>
              </div>
              <div className="np-row">
                <span className="np-row-name">Easy run</span>
                <span className="np-row-meta">Sun</span>
              </div>
              <div className="np-row">
                <span className="np-row-name">Push day</span>
                <span className="np-row-meta">Sat</span>
              </div>
            </Phone>
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="np-section np-section--alt" id="highlights">
        <div className="np-inner">
          <h2 className="np-heading np-reveal">Get the highlights.</h2>
          <div className="np-rail">
            {HIGHLIGHTS.map(({ mark, title, body }) => (
              <article key={title} className="np-card">
                <p className="np-card-mark">{mark}</p>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI suggestions ── */}
      <section className="np-section">
        <div className="np-inner np-split np-reveal">
          <div>
            <p className="np-eyebrow">Suggestions</p>
            <h2 className="np-heading">It notices. So you don&apos;t have to.</h2>
            <p className="np-body">
              Most apps nag you on a schedule. noplan waits until it has actually seen
              something in <strong>your own logged history</strong> — a muscle group
              you&apos;ve dropped, a week that fell apart, a pattern you keep repeating.
            </p>
            <p className="np-body">
              Then it says one thing. You can act on it or ignore it, and it moves on
              either way. <strong>No streaks to protect. No guilt.</strong>
            </p>
          </div>
          <div className="np-split-media">
            <Phone small>
              <p className="np-screen-title">Today</p>
              <div className="np-nudge">
                <p className="np-nudge-label">Suggested</p>
                <p className="np-nudge-text">Three push days, no pull. Balance it out this week?</p>
              </div>
              <div className="np-row">
                <span className="np-row-name">Push day</span>
                <span className="np-row-meta">Mon</span>
              </div>
              <div className="np-row">
                <span className="np-row-name">Push day</span>
                <span className="np-row-meta">Wed</span>
              </div>
              <div className="np-row">
                <span className="np-row-name">Push day</span>
                <span className="np-row-meta">Fri</span>
              </div>
            </Phone>
          </div>
        </div>
      </section>

      {/* ── Quick Log + HealthKit ── */}
      <section className="np-section np-section--alt">
        <div className="np-inner np-split np-split--flip np-reveal">
          <div>
            <p className="np-eyebrow">Quick Log</p>
            <h2 className="np-heading">Thirty seconds. Then back to your day.</h2>
            <p className="np-body">
              Open the app, confirm what it already guessed, done. Today&apos;s date and
              your last workout type are filled in before you touch anything.
            </p>
            <p className="np-body">
              Or skip it entirely — <strong>close a ring on your Apple Watch</strong> and
              HealthKit hands the session straight to noplan. The best logging is the
              kind you never do.
            </p>
          </div>
          <div className="np-split-media">
            <Phone small>
              <p className="np-screen-title">Log a session</p>
              <div className="np-row">
                <span className="np-row-name">Type</span>
                <span className="np-row-meta">Pull day</span>
              </div>
              <div className="np-row">
                <span className="np-row-name">Date</span>
                <span className="np-row-meta">Today</span>
              </div>
              <div className="np-row">
                <span className="np-row-name">Duration</span>
                <span className="np-row-meta">52 min</span>
              </div>
              <div className="np-nudge">
                <p className="np-nudge-text">Save session</p>
              </div>
              <div className="np-row">
                <span className="np-row-name">From Apple Watch</span>
                <span className="np-row-meta">Auto</span>
              </div>
            </Phone>
          </div>
        </div>
      </section>

      {/* ── Privacy ── */}
      <section className="np-section" id="privacy">
        <div className="np-inner np-inner--center np-reveal">
          <p className="np-eyebrow">On-device</p>
          <h2 className="np-heading">Your data stays yours.</h2>
          <p className="np-body">
            There is no account to create and no cloud to sync with. Every session you
            log is written to SwiftData on your iPhone and never leaves it. Nothing to
            breach, nothing to sell, nothing to export to an advertiser.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="np-section np-section--alt">
        <div className="np-inner np-stats np-reveal">
          <div>
            <p className="np-stat-num">30s</p>
            <p className="np-stat-label">to log a finished session</p>
          </div>
          <div>
            <p className="np-stat-num">0</p>
            <p className="np-stat-label">accounts, passwords, or servers</p>
          </div>
          <div>
            <p className="np-stat-num">100%</p>
            <p className="np-stat-label">of your history stored on device</p>
          </div>
        </div>
      </section>

      {/* ── Tech ── */}
      <section className="np-section">
        <div className="np-inner np-reveal">
          <p className="np-eyebrow">Under the hood</p>
          <h2 className="np-heading">Serious engineering, minimal surface.</h2>
          <div className="np-tech-list">
            {TECH.map(({ name, desc }) => (
              <details key={name} className="np-tech">
                <summary>
                  <span className="np-tech-plus" aria-hidden="true">+</span>
                  {name}
                </summary>
                <p>{desc}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="np-section np-section--alt" id="roadmap">
        <div className="np-inner np-inner--center np-reveal">
          <p className="np-eyebrow">Roadmap</p>
          <h2 className="np-heading">Built in the open.</h2>
          <p className="np-body">
            Two phases shipped, one in progress. Headed for the App Store.
          </p>
          <div className="np-phases">
            {PHASES.map(({ label, status }) => (
              <div key={label} className={`np-phase np-phase--${status}`}>
                <span className="np-phase-label">{label}</span>
                <span className={`np-badge np-badge--${status}`}>{BADGE[status]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="np-bar">
        <p><b>noplan</b> — in development, coming to the App Store.</p>
        <Link to="/" className="np-pill np-pill--ghost">Back to portfolio</Link>
      </div>
    </div>
  );
}
