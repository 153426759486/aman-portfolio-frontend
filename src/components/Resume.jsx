function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <div className="resume-container">

        {/* Heading */}
        <div className="resume-heading">
          <p className="section-label">
            04 — Resume
          </p>

          <h2>
            A little more
            <span> about me.</span>
          </h2>

          <p className="resume-intro">
            Software Engineer focused on backend and full-stack
            development with Java, Spring Boot, SQL, Redis and React.
          </p>
        </div>


        {/* Resume Content */}
        <div className="resume-layout">

          {/* Left */}
          <div className="resume-profile">

            <div className="resume-name">
              <span>AMAN</span>
              <strong>GAUR</strong>
            </div>

            <p className="resume-role">
              Software Engineer
              <br />
              Backend / Full Stack
            </p>

            <p className="resume-location">
              Bangalore, India
            </p>

            <div className="resume-contact">

              <a href="mailto:gauraman411@gmail.com">
                gauraman411@gmail.com
              </a>

              <a href="tel:6394598034">
                +91 6394598034
              </a>

            </div>

            <div className="resume-actions">

              <a
                href="/resume/Aman_Gaur_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                View Resume ↗
              </a>

              <a
                href="/resume/Aman_Gaur_Resume.pdf"
                download="Aman_Gaur_Resume.pdf"
                className="secondary-btn"
              >
                Download PDF ↓
              </a>

            </div>

          </div>


          {/* Right */}
          <div className="resume-details">

            {/* Summary */}
            <div className="resume-block">

              <div className="resume-block-number">
                01
              </div>

              <div>
                <h3>
                  Professional Summary
                </h3>

                <p>
                  Software Engineer with hands-on experience building
                  backend and full-stack applications using Java,
                  Spring Boot, SQL, Redis and React.js.
                </p>

                <p>
                  Strong foundation in Data Structures & Algorithms,
                  OOP, LLD, concurrency, database design and scalable
                  system architecture.
                </p>

                <p>
                  Experienced in developing REST APIs, optimizing
                  application performance, implementing caching and
                  rate limiting, and deploying applications on
                  AWS/Linux environments.
                </p>
              </div>

            </div>


            {/* Projects */}
            <div className="resume-block">

              <div className="resume-block-number">
                02
              </div>

              <div>
                <h3>
                  Key Projects
                </h3>

                <div className="resume-project">

                  <h4>
                    Distributed Inventory & Order System
                  </h4>

                  <ul>
                    <li>
                      Built a high-throughput order processing system
                      supporting concurrent requests.
                    </li>

                    <li>
                      Improved API response time by up to 90% using
                      Redis caching.
                    </li>

                    <li>
                      Developed pagination and filtering APIs for
                      handling large datasets.
                    </li>

                    <li>
                      Implemented Redis-based distributed rate
                      limiting using the Token Bucket algorithm.
                    </li>

                    <li>
                      Maintained transactional consistency using
                      database transactions and optimistic locking.
                    </li>
                  </ul>

                </div>


                <div className="resume-project">

                  <h4>
                    E-Commerce Platform — Full Stack
                  </h4>

                  <ul>
                    <li>
                      Developed secure REST APIs using Java and
                      Spring Boot for product and order management.
                    </li>

                    <li>
                      Implemented JWT-based authentication and
                      Role-Based Access Control.
                    </li>

                    <li>
                      Built product search, filtering and pagination.
                    </li>

                    <li>
                      Improved database performance by 30% through
                      indexing and query optimization.
                    </li>

                    <li>
                      Developed the frontend using React and Redux.
                    </li>

                    <li>
                      Deployed the application on AWS EC2 in a
                      Linux environment.
                    </li>
                  </ul>

                </div>

              </div>

            </div>


            {/* Skills */}
            <div className="resume-block">

              <div className="resume-block-number">
                03
              </div>

              <div>

                <h3>
                  Technical Skills
                </h3>

                <div className="resume-skill-group">

                  <span>Languages</span>

                  <p>
                    Java · SQL
                  </p>

                </div>

                <div className="resume-skill-group">

                  <span>Backend</span>

                  <p>
                    Spring Boot · Spring Data JPA · Spring Security
                    · Spring AOP · REST APIs
                  </p>

                </div>

                <div className="resume-skill-group">

                  <span>Frontend</span>

                  <p>
                    React JS · Redux
                  </p>

                </div>

                <div className="resume-skill-group">

                  <span>Databases</span>

                  <p>
                    PostgreSQL · MySQL · Redis
                  </p>

                </div>

                <div className="resume-skill-group">

                  <span>Core Concepts</span>

                  <p>
                    DSA · OOP · LLD · Concurrency · DB Design ·
                    Transaction Management · Scalable Architecture
                  </p>

                </div>

                <div className="resume-skill-group">

                  <span>Cloud & DevOps</span>

                  <p>
                    AWS EC2 · Linux · CI/CD Basics
                  </p>

                </div>

                <div className="resume-skill-group">

                  <span>Tools</span>

                  <p>
                    Git · Maven · Postman
                  </p>

                </div>

              </div>

            </div>


            {/* Education */}
            <div className="resume-block">

              <div className="resume-block-number">
                04
              </div>

              <div>

                <h3>
                  Education
                </h3>

                <div className="resume-education">

                  <h4>
                    Master of Computer Applications
                  </h4>

                  <p>
                    Greater Noida Institute of Technology
                  </p>

                  <span>
                    2022 — 2025
                  </span>

                </div>


                <div className="resume-education">

                  <h4>
                    Bachelor of Computer Applications
                  </h4>

                  <p>
                    Galgotias University
                  </p>

                  <span>
                    2019 — 2022
                  </span>

                </div>

              </div>

            </div>


            {/* Certifications */}
            <div className="resume-block">

              <div className="resume-block-number">
                05
              </div>

              <div>

                <h3>
                  Certifications
                </h3>

                <div className="resume-certification">

                  <h4>
                    Java Full Stack Development Program
                  </h4>

                  <p>
                    QSpiders
                  </p>

                  <span>
                    Jan 2025 — Jul 2025
                  </span>

                </div>


                <div className="resume-certification">

                  <h4>
                    Java with Project Development
                  </h4>

                  <p>
                    Sofcon Training
                  </p>

                  <span>
                    Aug 2023 — Oct 2023
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;