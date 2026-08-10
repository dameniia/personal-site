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
            <span className="hero-stack-badge">AI</span>
          </div>
        </div>
      </header>

      <section className="container current-project-section">
        <div className="current-project-card">
          <span className="current-project-eyebrow">Currently building</span>
          <div className="current-project-inner">
            <div className="current-project-left">
              <div className="current-project-identity">
                <figure className="current-project-icon">
                  <img src="/images/noplan-icon.png" alt="no-plan-app icon" width="56" height="56" />
                </figure>
                <h2 className="current-project-name">no-plan-app</h2>
              </div>
              <p className="current-project-desc">
                Minimal-distraction fitness tracking that encourages building plans on the fly with AI. Scan equipment and get suggested exercises instantly — no noise, no quizzes, no accounts.
              </p>
              <p className="current-project-stack">Swift · iOS · HealthKit · Claude AI</p>
              <a href="/noplan" className="current-project-link">View project →</a>
            </div>
            <div className="current-project-phones">
              <figure className="phone-frame">
                <img src="https://res.cloudinary.com/dvhlgdwdh/image/upload/w_400/pre_upload_wzjjxy.png" alt="no-plan-app: upload equipment photo" width="148" />
              </figure>
              <figure className="phone-frame phone-frame--offset">
                <img src="https://res.cloudinary.com/dvhlgdwdh/image/upload/w_400/post_upload_rzqu4c.png" alt="no-plan-app: AI suggested exercises" width="148" />
              </figure>
              <figure className="phone-frame phone-frame--watch">
                <img src="https://res.cloudinary.com/dvhlgdwdh/image/upload/w_400/iWatch_a67uiw.png" alt="no-plan-app: iWatch tracker" width="100" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="container content">
        <div className="home-intro">
          <div className="home-intro-text">
            <p>
              Hey, I&apos;m <strong>Andrei</strong> — Senior Quality Engineer
              at Lululemon. I&apos;ve been in QA and automation for 8+ years,
              mostly in e-commerce. These days I lead a few QE teams and spend
              a lot of time on CI/CD and AI tooling.
            </p>
            <p>
              Outside of work I hike, travel, and usually have some side
              project going. Currently building a fitness app. Also slowly
              learning photography.
            </p>
            <p className="home-links">
              <Link to="/projects">Browse my projects →</Link>
              <Link to="/resume">View Résumé →</Link>
              <a href="mailto:adameniia@gmail.com">Contact me →</a>
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
