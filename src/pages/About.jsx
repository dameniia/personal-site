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
              Lead QA Analyst &amp; SDET at Lululemon with 8+ years shaping
              the quality of e-commerce products. I specialize in test
              automation, CI/CD pipelines, and building processes that help
              engineering teams ship with confidence.
            </p>
            <p>
              I&apos;ve led cross-functional quality efforts, mentored
              teammates, and introduced automation at scale — from smoke suites
              to full end-to-end regression coverage.
            </p>
            <p>
              Curious about the work?{" "}
              <Link to="/projects">Take a look →</Link>
            </p>
          </div>

          <div className="about-card">
            <span className="about-card-label">The Journey</span>
            <p>
              Born and raised in Russia and Kazakhstan. I completed a
              Bachelor&apos;s in Economics &amp; Management in 2007, then
              spent several years working in business and construction before
              making a career pivot into tech.
            </p>
            <p>
              In 2013 I moved to the West Coast of the US, and in 2018 I
              earned an Associate&apos;s Degree in Computer Science from City
              College of San Francisco. That pivot stuck.
            </p>
          </div>

          <div className="about-card">
            <span className="about-card-label">Beyond the Code</span>
            <p>
              Outdoors is where I reset — hiking trails, exploring national
              parks, and chasing views that no screen can replicate. I love
              traveling and always have a next destination in mind.
            </p>
            <p>
              When I&apos;m home, I&apos;m usually tinkering with a side
              project, playing games, watching a good film, or trying a new
              restaurant. I&apos;m also picking up photography — still figuring
              out the golden hour.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
