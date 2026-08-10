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

          <div className="resume-download-row">
            <a
              href="/resume/Andrei_Dameniia_Resume.pdf"
              download="Andrei_Dameniia_Resume.pdf"
              className="resume-download-btn"
            >
              ↓ Download PDF
            </a>
          </div>

          <div className="resume-contacts">
            <span>adameniia@gmail.com</span>
          </div>

          {/* Summary */}
          <p className="resume-section-title">Summary</p>
          <div className="resume-summary">
            <ul>
              <li>Sr. Automation Engineer and Lead Quality Engineer with <strong>8+ years</strong> of hands-on experience in advancing test automation and leading teams of <strong>3–7 QA Engineers</strong></li>
              <li>Proven success in reducing production defect rates by <strong>50%</strong>, enabling and maintaining CI/CD end-to-end automation, and automating full regression suites — cutting regression cycles from <strong>5 days to just 3 hours</strong></li>
              <li>Initiated and implemented proactive quality processes including <strong>Accessibility testing</strong> that empowered Product teams to uncover new opportunities and resolve <strong>multimillion-dollar issues</strong></li>
              <li>After several years leading quality analysis, moved onto the engineering track to go deeper into automation and CI/CD — building the pipelines, quality gates, and AI tooling that let teams ship faster with more confidence</li>
              <li>Associate&apos;s Degree in Computer Science; Bachelor&apos;s in Economics &amp; Management</li>
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
              <span>Automation: </span>Playwright, Cypress, WebdriverIO (Selenium)
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
              <p className="resume-entry-role">Senior Quality Engineer</p>
              <ul>
                <li>Lead <strong>5 functional QE teams</strong> and an automation team of 3 SDETs, coordinating automation, functional, and cross-team delivery for a major enterprise program</li>
                <li>Define the automation strategy and &ldquo;hard and soft gate&rdquo; rollout plan governing quality criteria across the program</li>
                <li>Drive <strong>AI adoption</strong> in the quality space (Copilot, Claude Code) by building the instruction sets, skills, and agents that let the team produce end-to-end tests <strong>2–3× faster</strong></li>
                <li>Champion shift-left and automation-first practices, enabling developers to catch and fix defects before functional and UAT validation and shortening the development cycle by <strong>~30%</strong></li>
              </ul>
            </div>
            <span className="resume-entry-dates">May 2026 – present</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">Lululemon USA Inc. — Seattle, WA</p>
              <p className="resume-entry-role">Lead Quality Assurance Analyst, AI and Automation Engineer</p>
              <ul>
                <li>Ensured alignment with the company&apos;s best quality practices and reduced production defect rate by <strong>50%</strong></li>
                <li>Enhanced PREPROD E2E automation coverage and integrated PROD E2E tests into <strong>CI/CD GitLab pipeline</strong>, preventing at least <strong>5 major severity issues</strong> in the last year</li>
                <li>Achieved <strong>92.5%</strong> automation coverage of regression suite and <strong>98.6%</strong> of smoke test suite with Cypress automation</li>
                <li>Prepared proof of concept and cost saving analysis for migrating from <strong>Cypress to Playwright</strong>, leveraging AI for its delivery</li>
              </ul>
            </div>
            <span className="resume-entry-dates">Mar 2023 – May 2026</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">Lululemon USA Inc. — Seattle, WA</p>
              <p className="resume-entry-role">Senior Quality Assurance Analyst, Automation Engineer</p>
              <ul>
                <li>Automated key tests with WebdriverIO, reducing manual regression run time from <strong>5 days to 3 hours</strong></li>
                <li>Implemented <strong>4 internal tools</strong> for the team that helped with repeated tasks and saved <strong>20–40%</strong> of time</li>
                <li>Developed script to update test data in preprod environment, saving teams <strong>20–30%</strong> of time</li>
                <li>Implemented daily guest feedback review process, uncovering over <strong>$30 million</strong> in production bugs</li>
                <li>Delivered critical project to replace BE system for FE app under tight timelines by pivoting development towards <strong>Test-Driven Development</strong></li>
                <li>Analysed guest and business impact using Adobe Analytics, Medallia, Quantum Metrics, and Splunk</li>
              </ul>
            </div>
            <span className="resume-entry-dates">Apr 2021 – Apr 2023</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">Lululemon USA Inc. — Seattle, WA</p>
              <p className="resume-entry-role">Automation Engineer, QA Analyst</p>
              <ul>
                <li>Utilized Splunk, Adobe Analytics, Quantum Metrics, and Sentry to analyze guest and business impacts, reducing issue prioritization time by <strong>50%</strong> for Product Managers and Business Analysts</li>
                <li>Identified architectural flaws saving the company over <strong>$20M annually</strong></li>
                <li>Introduced and implemented E2E tests in the FE app pipeline, enabling developers to deploy to production with higher confidence</li>
                <li>Introduced automation into QA processes, building smoke and regression test suites <strong>from the ground up</strong></li>
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
            <span className="resume-entry-dates">2016 – 2018</span>
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

          {/* Certifications */}
          <p className="resume-section-title">Certifications</p>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">LinkedIn Learning</p>
              <p className="resume-entry-role">Practical GitHub Copilot</p>
            </div>
            <span className="resume-entry-dates">Sep 2025</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">LinkedIn Learning</p>
              <p className="resume-entry-role">Amplify Your Critical Thinking with Generative AI</p>
            </div>
            <span className="resume-entry-dates">Sep 2025</span>
          </div>

        </div>
      </div>
    </>
  );
}
