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
