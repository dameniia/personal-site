import { Link } from "react-router-dom";
import db from "../data/db.json";

const notes = db["patch-notes"];
const latest = notes[notes.length - 1];

export function Home() {
  return (
    <>
      <header className="hero-header">
        <div className="hero-inner">
          <p className="hero-eyebrow">Lead QA · SDET · Playwright &amp; Cypress</p>
          <h1 className="hero-name">Andrei Dameniia</h1>
          <div className="hero-stack">
            <span className="hero-stack-badge">Playwright</span>
            <span className="hero-stack-badge">Cypress</span>
            <span className="hero-stack-badge">TypeScript</span>
            <span className="hero-stack-badge">JavaScript</span>
            <span className="hero-stack-badge">GitLab CI</span>
          </div>
        </div>
      </header>

      <section className="container content">
        <div className="hero-cta-row">
          <Link to="/resume" className="hero-cta-btn">View Résumé</Link>
          <a href="mailto:adameniia@gmail.com" className="hero-cta-btn hero-cta-btn--ghost">Contact me</a>
        </div>
        <div className="home-intro">
          <div className="home-intro-text">
            <p>
              Hey, I&apos;m <strong>Andrei</strong> — a Lead QA Analyst and
              SDET with 8+ years in e-commerce, currently at Lululemon. I
              spend my days building reliable test automation, driving quality
              across engineering teams, and making sure great software actually
              ships.
            </p>
            <p>
              Outside of work, you&apos;ll find me on a hiking trail, planning
              my next trip somewhere new, or deep in a side project.
              I&apos;m also slowly learning photography — still chasing the
              perfect light.
            </p>
            <p>
              <Link to="/projects">Browse my projects →</Link>
            </p>
            <p className="home-patch-note">
              <span>Site update: </span>
              <Link
                to={`/patch-notes#patch-note-${latest.postId}`}
              >
                {latest.title}
              </Link>
              {" "}·{" "}
              <span>{latest.date}</span>
            </p>
          </div>

          <figure className="profile-photo">
            <img
              width="300"
              height="320"
              src="/images/index_pic.jpeg"
              alt="Andrei Dameniia"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
