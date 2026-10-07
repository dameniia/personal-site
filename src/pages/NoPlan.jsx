import { Link } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import "../css/noplan.css";

const HIGHLIGHTS = [
  {
    mark: "AI",
    title: "Scan equipment, get exercises.",
    body: "Point your camera at what you have.",
  },
  {
    mark: (
      <svg className="np-mark-icon" viewBox="0 0 34 34" aria-hidden="true">
        <path d="M5 11h24M23 5l6 6-6 6" />
        <path d="M29 23H5M11 17l-6 6 6 6" />
      </svg>
    ),
    title: "Swap and edit on the go.",
    body: "Change an exercise mid-workout.",
  },
  {
    mark: "270",
    title: "Pick from 270. Or add your own.",
    body: "Search by name, muscle, or equipment.",
  },
  {
    mark: (
      <svg className="np-mark-icon np-rings" viewBox="0 0 34 34" aria-hidden="true">
        <circle cx="17" cy="17" r="15" pathLength="100" strokeDasharray="78 100" />
        <circle cx="17" cy="17" r="10" pathLength="100" strokeDasharray="62 100" />
        <circle cx="17" cy="17" r="5" pathLength="100" strokeDasharray="88 100" />
      </svg>
    ),
    title: "Apple Health integration.",
    body: "Workouts sync with Apple Health and Apple Fitness.",
  },
  {
    mark: (
      <svg className="np-mark-icon" viewBox="0 0 34 34" aria-hidden="true">
        <circle cx="17" cy="10" r="6" />
        <path d="M6 32a11 11 0 0 1 22 0" />
      </svg>
    ),
    title: "No account.",
    body: "Your data stays on your iPhone.",
  },
];

const TECH = [
  { name: "SwiftUI", desc: "Native iOS UI, built the way Apple intended — fast, fluid, and at home on the platform." },
  { name: "SwiftData", desc: "On-device persistence. No account, no server, no sync. Your history stays on your iPhone." },
  { name: "Claude API", desc: "Powers the AI features: equipment scanning, exercise suggestions, and workout plans built around your profile." },
  { name: "HealthKit", desc: "Integrates with Apple Health and reads completed workouts from Apple Watch, so closing a ring logs the session for you." },
];

const PHASES = [
  { label: "Tabs and general layout", status: "done" },
  { label: "Profile tab", status: "done" },
  { label: "Workout tab", status: "done" },
  { label: "Exercise database", status: "done" },
  { label: "Chats for Profile and Workout tabs", status: "done" },
  { label: "Workout tab: creating a plan", status: "done" },
  { label: "Workout tab: exercise UX/UI", status: "done" },
  { label: "Workout tab: search", status: "done" },
  { label: "Workout tab: AI suggestions", status: "done" },
  { label: "Workout tab: editing", status: "done" },
  { label: "On-device AI + Claude API integration", status: "done" },
  { label: "Activity tab: progress tracking", status: "done" },
  { label: "AI: chat modes and personalities", status: "done" },
  { label: "AI: context and memory management", status: "done" },
  { label: "Apple Health and Apple Fitness integration", status: "done" },
  { label: "Lock Screen countdown and widgets", status: "done" },
  { label: "Better audio signals and cues", status: "upcoming" },
  { label: "Better performance and faster AI exercise suggestions", status: "upcoming" },
  { label: "New swap-on-the-fly UX", status: "upcoming" },
  { label: "AI pop-ups with summaries and suggestions after a workout", status: "upcoming" },
  { label: "Superset UX", status: "upcoming" },
];

const BADGE = { done: "Completed", active: "In progress", upcoming: "Planned" };

// Hero screen recording (Cloudinary). Until `src` is set, the hero shows the static mockup.
const HERO_VIDEO = {
  src: "",
  poster: "",
};

function Phone({ small, media, children }) {
  return (
    <div className={small ? "np-phone np-phone--sm" : "np-phone"}>
      <div className={media ? "np-screen np-screen--media" : "np-screen"}>
        <div className="np-island" />
        {children}
      </div>
    </div>
  );
}

Phone.propTypes = {
  small: PropTypes.bool,
  media: PropTypes.bool,
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
            No plan.<br />Build and swap as you go.
          </h1>
          <p className="np-hero-sub">
            A distraction-free, AI-powered fitness tracker that helps you build and
            refine your workout plans and stick to a daily routine.
          </p>
          <div className="np-cta-row">
            <a href="#highlights" className="np-pill np-pill--solid np-pill--lg">Get the highlights</a>
            <a href="#privacy" className="np-pill np-pill--ghost np-pill--lg">How your data is handled</a>
          </div>
          <div className="np-split-media">
            {HERO_VIDEO.src ? (
              <Phone media>
                <video
                  className="np-screen-video"
                  src={HERO_VIDEO.src}
                  poster={HERO_VIDEO.poster || undefined}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="noplan app walkthrough: logging a workout, building a plan, and AI suggestions"
                />
              </Phone>
            ) : (
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
            )}
          </div>
        </div>
      </section>

      {/* ── Why ── */}
      <section className="np-section np-section--alt" id="why">
        <div className="np-inner np-inner--center np-reveal">
          <h2 className="np-heading">Why no plan?</h2>
          <p className="np-body">
            noplan challenges the idea that you need to stick to one plan and grind
            through the same exercises every day to make progress. Yes, you&apos;ve got
            to follow the basics, but you can also keep it fun and exciting.
          </p>
          <p className="np-body">
            After more than 15 years in the gym, I found myself wanting to try more
            exercises or change up the ones I already do. Instead of a two-arm dumbbell
            bench press, maybe do it with one arm, or on an incline or decline bench. No app
            on the market gave me that experience and flexibility.
          </p>
        </div>
      </section>

      {/* ── Design ── */}
      <section className="np-section">
        <div className="np-inner np-split np-split--flip np-reveal">
          <div>
            <p className="np-eyebrow">Design</p>
            <h2 className="np-heading">Clean and minimalistic.</h2>
            <p className="np-body">
              A minimalistic, Apple-like design that&apos;s easy to navigate, so you
              never get distracted or overwhelmed. Only what you need.
            </p>
            <ul className="np-body np-points">
              <li>Dark and light mode support</li>
              <li>Only 3 tabs: Profile, Activity, Workouts</li>
              <li>Easy to add or swap exercises on the fly</li>
              <li>
                <strong>No accounts, no quizzes</strong>
              </li>
            </ul>
          </div>
          <div className="np-split-media">
            <Phone small>
              <p className="np-screen-title">Today</p>
              <div className="np-row">
                <span className="np-row-name">Pull day</span>
                <span className="np-row-meta">45 min</span>
              </div>
              <div className="np-row">
                <span className="np-row-name">Easy run</span>
                <span className="np-row-meta">30 min</span>
              </div>
            </Phone>
          </div>
        </div>
      </section>

      {/* ── AI suggestions ── */}
      <section className="np-section np-section--alt">
        <div className="np-inner np-split np-reveal">
          <div>
            <p className="np-eyebrow">AI</p>
            <h2 className="np-heading">Powered by AI.</h2>
            <p className="np-body">
              Optionally, use AI to help build your profile, create or adjust your
              workout plans, learn how to use equipment, and analyze your progress to
              discover gaps.
            </p>
            <p className="np-body">Scan equipment and get suggested exercises.</p>
            <p className="np-body">
              Chats share context from your profile, your progress, and previous
              conversations.
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

      {/* ── Highlights ── */}
      <section className="np-section" id="highlights">
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

      {/* ── Privacy ── */}
      <section className="np-section np-section--alt" id="privacy">
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
      <section className="np-section">
        <div className="np-inner np-stats np-reveal">
          <div>
            <p className="np-stat-num">270</p>
            <p className="np-stat-label">exercises built in</p>
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
      <section className="np-section np-section--alt">
        <div className="np-inner np-reveal">
          <p className="np-eyebrow">Under the hood</p>
          <h2 className="np-heading">Tech stack.</h2>
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
      <section className="np-section" id="roadmap">
        <div className="np-inner np-inner--center np-reveal">
          <p className="np-eyebrow">Roadmap</p>
          <h2 className="np-heading">Built in the open.</h2>
          <p className="np-body">
            {PHASES.filter((p) => p.status === "done").length} of {PHASES.length} phases
            completed.
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
