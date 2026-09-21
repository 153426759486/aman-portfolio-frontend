
function SmartContactManagerCaseStudy() {
  return (
    <div className="case-study">

      {/* =====================================
          HERO
      ====================================== */}
      <section className="case-hero">
        <div className="case-container">

          <p className="section-label">
            PROJECT 02 — CASE STUDY
          </p>

          <h1>
            Smart Contact<span> Manager.</span>
          </h1>

          <p className="case-subtitle">
            Full Stack Contact Management Application
          </p>

          <p className="case-intro">
            A full-stack contact management application built with
            Java, Spring Boot, React and MySQL, focused on authentication,
            contact management and REST API development.
          </p>

          <div className="case-links">

            <a
              href="https://github.com/YOUR_USERNAME/Smart-Contact-Manager"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              GitHub ↗
            </a>

            <a
              href="/#projects"
              className="secondary-btn"
            >
              ← Back to Projects
            </a>

          </div>

        </div>
      </section>


      {/* =====================================
          OVERVIEW
      ====================================== */}
      <section className="case-section">
        <div className="case-container">

          <p className="section-label">
            01 — Overview
          </p>

          <h2>
            Building a simple
            <span> contact management system.</span>
          </h2>

          <p>
            Smart Contact Manager is a full-stack web application
            designed to help users securely manage their personal
            contacts through a web interface.
          </p>

          <p>
            The application uses React on the frontend and Spring Boot
            on the backend. The frontend communicates with REST APIs
            to create, retrieve, update and delete contact information.
          </p>

        </div>
      </section>


      {/* =====================================
          SCREENSHOTS
      ====================================== */}
      <section className="case-section screenshot-section">

        <div className="case-container">

          <p className="section-label">
            02 — Project Showcase
          </p>

          <h2>
            See the application
            <span> in action.</span>
          </h2>

          <p className="case-description">
            Screenshots of the user interface and contact management
            functionality.
          </p>

          <div className="screenshot-gallery">

            {/* Screenshot 1 */}

            <div className="screenshot-card screenshot-large">

              <div className="screenshot-image">
                <img
                  src="/images/SCM/Dashboard.png"
                  alt="Smart Contact Manager home page"
                />
              </div>

              <div className="screenshot-info">

                <span>01</span>

                <div>
                  <h3>
                    Application Dashboard
                  </h3>

                  <p>
                    A clean dashboard providing users with access
                    to their contact management features.
                  </p>
                </div>

              </div>

            </div>


            {/* Screenshot 2 */}

            <div className="screenshot-card">

              <div className="screenshot-image">
                <img
                  src="/images/SCM/login.png"
                  alt="Smart Contact Manager login page"
                />
              </div>

              <div className="screenshot-info">

                <span>02</span>

                <div>
                  <h3>
                    User Authentication
                  </h3>

                  <p>
                    Login functionality allows users to securely
                    access their contact information.
                  </p>
                </div>

              </div>

            </div>


            {/* Screenshot 3 */}

            <div className="screenshot-card">

              <div className="screenshot-image">
                <img
                  src="/images/SCM/Contacts.png"
                  alt="Smart Contact Manager contacts page"
                />
              </div>

              <div className="screenshot-info">

                <span>03</span>

                <div>
                  <h3>
                    Contact Management
                  </h3>

                  <p>
                    Users can view and manage their saved contacts
                    through the React interface.
                  </p>
                </div>

              </div>

            </div>


            {/* Screenshot 4 */}

            <div className="screenshot-card screenshot-large">

              <div className="screenshot-image">
                <img
                  src="/images/SCM/Add-Contact.png"
                  alt="Smart Contact Manager add contact page"
                />
              </div>

              <div className="screenshot-info">

                <span>04</span>

                <div>
                  <h3>
                    Add & Update Contacts
                  </h3>

                  <p>
                    Contact information can be created and updated
                    through the application.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          PROBLEM
      ====================================== */}
      <section className="case-section dark-section">

        <div className="case-container">

          <p className="section-label">
            03 — Problem
          </p>

          <h2>
            What was the
            <span> problem?</span>
          </h2>

          <p>
            Managing contact information manually can become difficult
            as the number of contacts grows. The goal was to create a
            simple web application where users could maintain their
            contacts in one place.
          </p>

          <p>
            The project also provided practical experience with
            authentication, CRUD operations, REST APIs, database
            relationships and frontend-backend communication.
          </p>

        </div>

      </section>


      {/* =====================================
          SOLUTION
      ====================================== */}
      <section className="case-section">

        <div className="case-container">

          <p className="section-label">
            04 — Solution
          </p>

          <h2>
            A clean
            <span> full-stack architecture.</span>
          </h2>

          <div className="case-grid">

            <div className="case-card">

              <span>01</span>

              <h3>
                React Frontend
              </h3>

              <p>
                A React-based interface provides users with a simple
                way to interact with their contacts and communicate
                with the backend APIs.
              </p>

            </div>


            <div className="case-card">

              <span>02</span>

              <h3>
                Spring Boot Backend
              </h3>

              <p>
                Spring Boot provides REST APIs and separates application
                logic using controller, service and repository layers.
              </p>

            </div>


            <div className="case-card">

              <span>03</span>

              <h3>
                MySQL Database
              </h3>

              <p>
                MySQL is used to persist users and their contact
                information with JPA and Hibernate.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          FEATURES
      ====================================== */}
      <section className="case-section dark-section">

        <div className="case-container">

          <p className="section-label">
            05 — Features
          </p>

          <h2>
            What I
            <span> built.</span>
          </h2>

          <div className="feature-grid">

            <div className="feature">

              <span>01</span>

              <h3>
                User Authentication
              </h3>

              <p>
                Users can authenticate before accessing their
                contact management functionality.
              </p>

            </div>


            <div className="feature">

              <span>02</span>

              <h3>
                Contact CRUD
              </h3>

              <p>
                Users can create, view, update and delete contacts.
              </p>

            </div>


            <div className="feature">

              <span>03</span>

              <h3>
                REST APIs
              </h3>

              <p>
                Spring Boot exposes backend functionality through
                RESTful API endpoints.
              </p>

            </div>


            <div className="feature">

              <span>04</span>

              <h3>
                Database Integration
              </h3>

              <p>
                Contact data is stored persistently using MySQL,
                JPA and Hibernate.
              </p>

            </div>


            <div className="feature">

              <span>05</span>

              <h3>
                React Integration
              </h3>

              <p>
                React communicates with the Spring Boot backend
                to display and modify contact data.
              </p>

            </div>


            <div className="feature">

              <span>06</span>

              <h3>
                Layered Architecture
              </h3>

              <p>
                Controller, service and repository layers keep
                backend responsibilities separated.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          API / ARCHITECTURE
      ====================================== */}
      <section className="case-section">

        <div className="case-container">

          <p className="section-label">
            06 — Architecture
          </p>

          <h2>
            From frontend
            <span> to database.</span>
          </h2>

          <div className="architecture-flow">

            <div className="architecture-item">
              <span>01</span>
              <h3>React</h3>
              <p>
                User interface and client-side interactions.
              </p>
            </div>

            <div className="architecture-arrow">
              →
            </div>

            <div className="architecture-item">
              <span>02</span>
              <h3>REST API</h3>
              <p>
                HTTP requests connect frontend and backend.
              </p>
            </div>

            <div className="architecture-arrow">
              →
            </div>

            <div className="architecture-item">
              <span>03</span>
              <h3>Spring Boot</h3>
              <p>
                Business logic and API processing.
              </p>
            </div>

            <div className="architecture-arrow">
              →
            </div>

            <div className="architecture-item">
              <span>04</span>
              <h3>MySQL</h3>
              <p>
                Persistent application data.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          TECHNOLOGY
      ====================================== */}
      <section className="case-section dark-section">

        <div className="case-container">

          <p className="section-label">
            07 — Technology
          </p>

          <h2>
            Built with my
            <span> core stack.</span>
          </h2>

          <div className="tech-list">

            <span>Java</span>
            <span>Spring Boot</span>
            <span>Spring Security</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>MySQL</span>
            <span>Hibernate</span>
            <span>JPA</span>
            <span>REST API</span>
            <span>Maven</span>
            <span>Git</span>
            <span>GitHub</span>

          </div>

        </div>

      </section>


      {/* =====================================
          CHALLENGES
      ====================================== */}
      <section className="case-section">

        <div className="case-container">

          <p className="section-label">
            08 — Challenges
          </p>

          <h2>
            What I learned
            <span> building it.</span>
          </h2>


          <div className="challenge-box">

            <h3>
              Connecting frontend and backend
            </h3>

            <p>
              One of the important parts of the project was connecting
              the React application with Spring Boot REST APIs and
              correctly handling requests and responses.
            </p>

          </div>


          <div className="challenge-box">

            <h3>
              Managing CRUD operations
            </h3>

            <p>
              Implementing create, read, update and delete operations
              helped strengthen my understanding of REST API design,
              HTTP methods and database operations.
            </p>

          </div>


          <div className="challenge-box">

            <h3>
              Authentication and security
            </h3>

            <p>
              Working with authentication helped me understand how
              protected resources and user access can be handled
              in a full-stack application.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          FINAL
      ====================================== */}
      <section className="case-end">

        <div className="case-container">

          <p className="section-label">
            PROJECT 02
          </p>

          <h2>
            Smart Contact
            <span> Manager.</span>
          </h2>

          <p>
            A project that strengthened my understanding of full-stack
            development, REST APIs, CRUD operations, authentication,
            React and Spring Boot.
          </p>

          <div className="case-links">

            <a
              href="https://github.com/YOUR_USERNAME/Smart-Contact-Manager"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              View GitHub ↗
            </a>

            <a
              href="/#projects"
              className="secondary-btn"
            >
              ← Back to Projects
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default SmartContactManagerCaseStudy;
