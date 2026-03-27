export function Resume() {
  return (
    <>
      <header className="main-header">
        <div className="page-header-inner">
          <p className="page-subtitle">Experience &amp; Skills</p>
          <h1 className="page-title">Résumé</h1>
        </div>
      </header>

      <div className="container content">
        <div className="resume-flex">

          <div className="resume-contacts">
            <span>(323) 984-14-56</span>
            <span>adameniia@gmail.com</span>
          </div>

          {/* Summary */}
          <p className="resume-section-title">Summary</p>
          <div className="resume-summary">
            <ul>
              <li>Lead Quality Assurance Analyst and Automation Engineer with 7+ years delivering high-quality products in e-commerce, leading teams of 4–7 QA Engineers</li>
              <li>Reduced production defect rates by 50% and cut regression cycles from 5 days to 3 hours by automating full regression suites with Cypress and Playwright</li>
              <li>Enabling CI/CD with reliable automated end-to-end tests integrated into GitLab pipelines; prevented at least 5 major severity issues in the last year</li>
              <li>Initiated Accessibility testing and proactive quality processes that empowered Product teams to resolve multimillion-dollar issues</li>
              <li>Strong analytical skills using Quantum Metrics, Adobe Analytics, Splunk, and Sentry</li>
              <li>Associate&apos;s Degree in Computer Science; Bachelor&apos;s in Economics &amp; Management with 4 years of business experience</li>
              <li>4.5+ years as a designer and economist in construction</li>
            </ul>
          </div>

          {/* Skills */}
          <p className="resume-section-title">Skills</p>
          <div className="skills-grid">
            <p>
              <span>Languages &amp; frameworks: </span>Java, JavaScript, TypesScript,
              React, Node.js
            </p>
            <p>
              <span>AI tools: </span>Copilot, Claude Code, ChatGPT
            </p>
            <p>
              <span>Automation: </span>Playwright Cypress, WebdriverIO (Selenium)
            </p>
            <p>
              <span>Analytics: </span>Adobe Analytics, Quantum Metrics,
              Splunk, Sentry, DataDog
            </p>
            <p>
              <span>IDEs: </span>VS Code, Eclipse, WebStorm
            </p>
            <p>
              <span>Operating systems: </span>Linux, MacOS, Windows
            </p>
          </div>

          {/* Experience */}
          <p className="resume-section-title">Experience</p>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">Lululemon USA Inc. — Seattle, WA</p>
              <p className="resume-entry-role">Lead Quality Assurance Analyst, AI and Automation Engineer</p>
              <ul>
                <li>Driving AI innovation in QE space (Copilot and Claude Code) — building e2e tests with MCPs reducing development effort from hours to minutes</li>
                <li>Ensured alignment with the company&apos;s best quality practices and reduced production defect rate by 50%</li>
                <li>Enhanced PREPROD E2E automation coverage and integrated PROD E2E tests into CI/CD GitLab pipeline, preventing at least 5 major severity issues in the last year</li>
                <li>Achieved 92.5% automation coverage of regression suite and 98.6% of smoke test suite with Cypress automation</li>
                <li>Prepared proof of concept and cost saving analysis for migrating from Cypress to Playwright, leveraging AI for its delivery</li>
              </ul>
            </div>
            <span className="resume-entry-dates">Mar 2023 – present</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">Lululemon USA Inc. — Seattle, WA</p>
              <p className="resume-entry-role">Senior Quality Assurance Analyst, Automation Engineer</p>
              <ul>
                <li>
                  Analysed guest and business impact of new features and
                  existing friction points using Adobe Analytics, Medallia,
                  Quantum Metrics, and Splunk
                </li>
                <li>Delivered coding and automation training to teammates</li>
              </ul>
            </div>
            <span className="resume-entry-dates">Apr 2021 – Apr 2023</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">Lululemon USA Inc. — Seattle, WA</p>
              <p className="resume-entry-role">Automation Engineer, QA Analyst</p>
              <ul>
                <li>Safeguarded core business deliverables while ensuring guest satisfaction</li>
                <li>
                  Introduced automation into QA processes, building smoke and
                  regression test suites from the ground up
                </li>
              </ul>
            </div>
            <span className="resume-entry-dates">Aug 2018 – Apr 2021</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">City College of San Francisco — San Francisco, CA</p>
              <p className="resume-entry-role">Teaching Assistant</p>
              <ul>
                <li>Tutored and mentored students in Java and Computer Science fundamentals</li>
                <li>
                  Graded assignments and tests for Data Structures and
                  Object-Oriented Programming (Java)
                </li>
                <li>Graded programming assignments for Programming Fundamentals (Java)</li>
              </ul>
            </div>
            <span className="resume-entry-dates">Feb 2018 – Aug 2018</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">18th Street Bar Inc. — San Francisco, CA</p>
              <p className="resume-entry-role">Bartender</p>
              <ul>
                <li>Delivered excellent customer service and maintained a welcoming atmosphere</li>
                <li>Handled cash transactions, charges, and opening and closing procedures</li>
                <li>Monitored and resolved service issues promptly</li>
              </ul>
            </div>
            <span className="resume-entry-dates">Feb 2015 – Aug 2018</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">Svetlyachok LLC — Tyumen, Russia</p>
              <p className="resume-entry-role">Engineer / Cost Estimator</p>
              <ul>
                <li>
                  Designed and estimated costs for custom window constructions
                  for the &ldquo;Green House&rdquo; hotel in Tyumen
                </li>
                <li>Performed quantitative and qualitative analysis of manufacturing and workforce efficiency</li>
                <li>
                  Optimised vendor selection and production costs; resolved
                  customer issues promptly and proactively prevented future ones
                </li>
              </ul>
            </div>
            <span className="resume-entry-dates">May 2012 – Oct 2013</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">West Siberian Tax Consultation Center LLC — Tyumen, Russia</p>
              <p className="resume-entry-role">Tax Specialist</p>
              <ul>
                <li>Prepared federal, state, and local tax returns and reports for individual clients</li>
                <li>
                  Advised clients on minimising tax liability, kept them
                  informed of regulatory changes, and ensured compliance
                </li>
                <li>Assisted with establishing Sole Proprietorships, LLCs, and other business entities</li>
              </ul>
            </div>
            <span className="resume-entry-dates">Mar 2011 – May 2012</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">Rossmet LLC — Tyumen, Russia</p>
              <p className="resume-entry-role">Personal Assistant / Accountant</p>
              <ul>
                <li>Implemented online banking and covered accounting duties as needed</li>
                <li>Liaised with vendors, customers, and tax agencies</li>
                <li>Compiled expense reports and managed incoming and outgoing correspondence</li>
              </ul>
            </div>
            <span className="resume-entry-dates">Mar 2010 – Feb 2011</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">Poll-Hall LLC — Tyumen, Russia</p>
              <p className="resume-entry-role">Sales Associate</p>
              <ul>
                <li>Handled cash transactions and opening and closing procedures</li>
                <li>Managed daily sales revenues and receipts in line with company policies</li>
                <li>Designed, measured, ordered, and coordinated carpet installations</li>
              </ul>
            </div>
            <span className="resume-entry-dates">Feb 2007 – Mar 2010</span>
          </div>

          {/* Education */}
          <p className="resume-section-title">Education</p>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">City College of San Francisco — San Francisco, CA</p>
              <p className="resume-entry-role">Associate&apos;s Degree in Computer Science</p>
            </div>
            <span className="resume-entry-dates">2015 – 2018</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">Tyumen State Oil and Gas University — Tyumen, Russia</p>
              <p className="resume-entry-role">
                Bachelor&apos;s in Management &amp; Economics — GPA 4.6 / 5
              </p>
            </div>
            <span className="resume-entry-dates">2002 – 2007</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">High School No. 14 — Rudnyy, Kazakhstan</p>
              <p className="resume-entry-role">Secondary Education — GPA 4.9 / 5</p>
            </div>
            <span className="resume-entry-dates">Graduated May 2002</span>
          </div>

        </div>
      </div>
    </>
  );
}
