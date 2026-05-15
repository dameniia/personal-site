export function Footer() {
  return (
    <footer className="main-footer">
      <div className="container main-footer-container">
        <h3 className="name-footer">
          <a href="mailto:adameniia@gmail.com" className="footer-email-link">
            adameniia@gmail.com
          </a>
        </h3>
        <ul className="footer-nav">
          <li>
            <a
              href="https://www.linkedin.com/in/andrei-dameniia-03a0aa14a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin footer-social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dameniia"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github footer-social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://gitlab.com/dameniia"
              target="_blank"
              rel="noreferrer"
              aria-label="GitLab"
            >
              <i className="fab fa-gitlab footer-social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
