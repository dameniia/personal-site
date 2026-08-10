import { Link } from "react-router-dom";

export function About() {
  return (
    <>
      <header className="main-header">
        <div className="page-header-inner">
          <p className="page-subtitle">Get to know me</p>
          <h1 className="page-title">About</h1>
        </div>
      </header>

      <section className="content-section container content">
        <div className="about-grid">
          <div className="about-card">
            <span className="about-card-label">The Professional</span>
            <p>
              Senior Quality Engineer at Lululemon. I&apos;ve been in the QA and
              automation space for 8+ years — mostly e-commerce, mostly
              large-scale. Right now I lead a few QE teams and spend a lot of
              time on automation tooling and figuring out where AI actually
              saves time versus where it just adds noise.
            </p>
            <p>
              Curious about the work?{" "}
              <Link to="/projects">Take a look →</Link>
            </p>
          </div>

          <div className="about-card">
            <span className="about-card-label">The Journey</span>
            <p>
              Grew up in Russia and Kazakhstan, studied Economics in Tyumen,
              worked in construction and business for a few years, then moved
              to San Francisco in 2013 with a fairly open plan.
            </p>
            <p>
              Ended up at City College taking CS classes, liked it a lot more
              than expected, and haven&apos;t really looked back since.
            </p>
          </div>

          <div className="about-card">
            <span className="about-card-label">Beyond the Code</span>
            <p>
              I hike a lot. National parks, trail runs, anything that gets me
              away from a screen for a few hours. I travel when I can and
              usually have a next trip loosely planned.
            </p>
            <p>
              At home it&apos;s usually a side project, a game, or a film.
              Also trying to get decent at photography — still working on it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
