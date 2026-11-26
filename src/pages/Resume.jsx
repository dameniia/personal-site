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
              <li>Automation and Quality Engineering leader with <strong>8+ years</strong> advancing test automation, CI/CD, and AI-driven quality, currently leading <strong>five functional QE teams</strong> and a three-person SDET automation team</li>
              <li>Cut production defects by <strong>50%</strong>, shrank regression cycles from <strong>5 days to 3 hours</strong>, and built AI workflows that let QEs create end-to-end tests <strong>2–3× faster</strong></li>
              <li>Launched proactive quality processes that uncovered <strong>multimillion-dollar issues</strong> and helped Product identify new areas of opportunity</li>
              <li>Moved to the engineering track in 2026 to drive shift-left practices, quality gates, and AI tooling that help teams ship faster with confidence</li>
              <li>Associate&apos;s Degree in Computer Science; Bachelor&apos;s in Economics &amp; Management</li>
            </ul>
          </div>

          {/* Skills */}
          <p className="resume-section-title">Skills</p>
          <div className="skills-grid">
            <p>
              <span>Languages &amp; frameworks: </span>Java, JavaScript, TypeScript,
              React, Node.js
            </p>
            <p>
              <span>AI tools: </span>Copilot, Claude Code, ChatGPT
            </p>
            <p>
              <span>Automation: </span>Playwright, Cypress, WebdriverIO (Selenium)
            </p>
            <p>
              <span>Analytics: </span>Adobe Analytics, Quantum Metric,
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
                <li>Drive <strong>AI adoption</strong> in quality (Copilot, Claude Code) by building instruction sets, skills, and agents that let the team create end-to-end tests <strong>2–3× faster</strong>, automating <strong>1,200+ test cases</strong> in 4 months</li>
                <li>Defined the automation strategy and &ldquo;hard and soft gate&rdquo; rollout plan governing quality criteria across the program</li>
                <li>Built and presented the proof of concept and cost-savings analysis for moving from <strong>Cypress to Playwright</strong>, using AI to accelerate delivery</li>
                <li>Achieved <strong>92.5%</strong> automation coverage of the regression suite and <strong>98.6%</strong> of the smoke suite</li>
                <li>Built and maintain PREPROD and PROD E2E tests in the <strong>GitLab CI/CD pipeline</strong>, preventing <strong>5+ Sev1/Sev2 issues</strong> this year</li>
                <li>Introduced <strong>visual regression and performance testing</strong> with Playwright, minimizing UI regressions in a front-end app serving multiple global markets</li>
                <li>Champion shift-left and automation-first practices, enabling developers to catch and fix defects before functional and UAT validation and shortening the development cycle by <strong>~30%</strong></li>
              </ul>
            </div>
            <span className="resume-entry-dates">May 2026 – present</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">Lululemon USA Inc. — Seattle, WA</p>
              <p className="resume-entry-role">Lead Quality Assurance Analyst</p>
              <ul>
                <li>Lead the team&apos;s transition from North America to global scope and define its strategy</li>
                <li>Lead <strong>5 functional QE teams</strong> and an automation team of 3 SDETs, coordinating automation, functional, and cross-team delivery</li>
                <li>Achieved one of the highest maturity scores among QE teams in the company</li>
                <li>Reduced the production defect rate by <strong>50%</strong> and keep it under <strong>5%</strong> of all reported defects by aligning teams with company quality best practices</li>
              </ul>
            </div>
            <span className="resume-entry-dates">Mar 2023 – present</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">Lululemon USA Inc. — Seattle, WA</p>
              <p className="resume-entry-role">Senior Quality Assurance Analyst, Automation Engineer</p>
              <ul>
                <li>Automated key tests with WebdriverIO, reducing manual regression run time from <strong>5 days to 3 hours</strong></li>
                <li>Built internal tools to manage and stabilize test data (e.g., inventory adjustments cut from <strong>20–40 minutes to 10 seconds</strong>)</li>
                <li>Implemented a daily guest-feedback review process, uncovering <strong>$30M+</strong> in production bugs and product opportunities</li>
                <li>Delivered a critical replacement of the web channel&apos;s backend system on a tight timeline by moving development to <strong>Test-Driven Development</strong></li>
              </ul>
            </div>
            <span className="resume-entry-dates">Apr 2021 – Apr 2023</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">Lululemon USA Inc. — Seattle, WA</p>
              <p className="resume-entry-role">Automation Engineer, QA Analyst</p>
              <ul>
                <li>Delivered major projects breaking down monolith applications into microservices</li>
                <li>Identified architectural flaws, saving the company <strong>$20M+ annually</strong></li>
                <li>Used Splunk, Adobe Analytics, Quantum Metric, and Sentry to analyze guest and business impact, reducing issue-prioritization time by <strong>50%</strong> for Product Managers and Business Analysts</li>
                <li>Introduced test automation and CI/CD testing to the team, building smoke and regression suites <strong>from the ground up</strong></li>
              </ul>
            </div>
            <span className="resume-entry-dates">Aug 2018 – Apr 2021</span>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">City College of San Francisco — San Francisco, CA</p>
              <p className="resume-entry-role">Professor&apos;s Assistant</p>
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
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">Tyumen State Oil and Gas University — Tyumen, Russia</p>
              <p className="resume-entry-role">
                Bachelor&apos;s in Management &amp; Economics — GPA 4.6 / 5
              </p>
            </div>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-main">
              <p className="resume-entry-company">High School No. 14 — Rudnyy, Kazakhstan</p>
              <p className="resume-entry-role">Secondary Education — GPA 4.9 / 5</p>
            </div>
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
