function WoofCartCaseStudy() {
  return (
    <div className="case-study">

      {/* =====================================
          HERO
      ====================================== */}
      <section className="case-hero">
        <div className="case-container">

          <p className="section-label">
            PROJECT 01 — CASE STUDY
          </p>

          <h1>
            Woof<span>Cart.</span>
          </h1>

          <p className="case-subtitle">
            Full Stack E-Commerce Platform
          </p>

          <p className="case-intro">
            A full-stack e-commerce platform for pet products,
            built with Java, Spring Boot, React and MySQL.
          </p>

          <div className="case-links">

            <a
              href="https://github.com/YOUR_USERNAME/WoofCart"
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
            Building a real-world
            <span> e-commerce system.</span>
          </h2>

          <p>
            WoofCart is a full-stack e-commerce application designed
            for purchasing pet products such as dog food, medicines,
            toys and other pet accessories.
          </p>

          <p>
            The application follows a client-server architecture where
            the React frontend communicates with a Spring Boot backend
            through REST APIs.
          </p>

        </div>
      </section>


      {/* =====================================
          PROJECT SCREENSHOTS
      ====================================== */}
      <section className="case-section screenshot-section">

        <div className="case-container">

          <p className="section-label">
            02 — Project Showcase
          </p>

          <h2>
            See WoofCart
            <span> in action.</span>
          </h2>

          <p className="case-description">
            A look at the interfaces and features I built as part
            of the WoofCart application.
          </p>


          <div className="screenshot-gallery">

            {/* Screenshot 1 */}
            <div className="screenshot-card screenshot-large">

              <div className="screenshot-image">
                <img
                  src="/images/woofcart/home.png"
                  alt="WoofCart home page"
                />
              </div>

              <div className="screenshot-info">
                <span>01</span>

                <div>
                  <h3>Home & Product Experience</h3>

                  <p>
                    React-based interface for browsing pet products
                    and interacting with the e-commerce platform.
                  </p>
                </div>
              </div>

            </div>


            {/* Screenshot 2 */}
            <div className="screenshot-card">

              <div className="screenshot-image">
                <img
                  src="/images/woofcart/products.png"
                  alt="WoofCart product listing"
                />
              </div>

              <div className="screenshot-info">
                <span>02</span>

                <div>
                  <h3>Product Listing</h3>

                  <p>
                    Products are retrieved from the Spring Boot
                    REST APIs and displayed through React.
                  </p>
                </div>
              </div>

            </div>


            {/* Screenshot 3 */}
            <div className="screenshot-card">

              <div className="screenshot-image">
                <img
                  src="/images/woofcart/seller-dashboard.png"
                  alt="WoofCart seller dashboard"
                />
              </div>

              <div className="screenshot-info">
                <span>03</span>

                <div>
                  <h3>Seller Dashboard</h3>

                  <p>
                    Dedicated seller functionality for managing
                    products and shop information.
                  </p>
                </div>
              </div>

            </div>


            {/* Screenshot 4 */}
            <div className="screenshot-card screenshot-large">

              <div className="screenshot-image">
                <img
                  src="/images/woofcart/add-product.png"
                  alt="WoofCart add product page"
                />
              </div>

              <div className="screenshot-info">
                <span>04</span>

                <div>
                  <h3>Add Product</h3>

                  <p>
                    Sellers can add products with details such as
                    name, price, stock, category and product image.
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
            The goal was to build a dedicated platform where customers
            could browse pet products while sellers could manage their
            products through a backend system.
          </p>

          <p>
            The project also provided an opportunity to work with
            authentication, database relationships, pagination,
            image uploads and scalable API design.
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
            A modular
            <span> full-stack architecture.</span>
          </h2>

          <div className="case-grid">

            <div className="case-card">

              <span>01</span>

              <h3>Frontend</h3>

              <p>
                React-based interface for browsing products,
                managing seller operations and interacting with
                backend APIs.
              </p>

            </div>


            <div className="case-card">

              <span>02</span>

              <h3>Backend</h3>

              <p>
                Spring Boot REST APIs with service, repository,
                DTO and exception-handling layers.
              </p>

            </div>


            <div className="case-card">

              <span>03</span>

              <h3>Database</h3>

              <p>
                MySQL database with JPA and Hibernate for
                persistent product and seller data.
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

              <h3>Product Management</h3>

              <p>
                Sellers can create, update and manage products.
              </p>
            </div>


            <div className="feature">
              <span>02</span>

              <h3>REST APIs</h3>

              <p>
                Backend functionality exposed through RESTful APIs.
              </p>
            </div>


            <div className="feature">
              <span>03</span>

              <h3>Authentication</h3>

              <p>
                Spring Security and JWT-based authentication
                architecture.
              </p>
            </div>


            <div className="feature">
              <span>04</span>

              <h3>Pagination</h3>

              <p>
                Product APIs use pagination to avoid loading large
                datasets at once.
              </p>
            </div>


            <div className="feature">
              <span>05</span>

              <h3>Image Upload</h3>

              <p>
                Product images can be uploaded and served through
                the backend.
              </p>
            </div>


            <div className="feature">
              <span>06</span>

              <h3>Seller Module</h3>

              <p>
                Dedicated seller functionality for managing products
                and shop information.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          TECHNOLOGY
      ====================================== */}
      <section className="case-section">

        <div className="case-container">

          <p className="section-label">
            06 — Technology
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
            <span>MySQL</span>
            <span>Hibernate</span>
            <span>JPA</span>
            <span>JWT</span>
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
      <section className="case-section dark-section">

        <div className="case-container">

          <p className="section-label">
            07 — Challenges
          </p>

          <h2>
            Problems that helped me
            <span> learn.</span>
          </h2>


          <div className="challenge-box">

            <h3>
              Handling large datasets
            </h3>

            <p>
              Loading a large number of products at once can cause
              slow API responses and excessive memory usage.
            </p>

            <p>
              I implemented Spring Data JPA pagination using
              <strong> Page, Pageable and PageRequest</strong>
              to retrieve data in smaller chunks.
            </p>

          </div>


          <div className="challenge-box">

            <h3>
              Database performance
            </h3>

            <p>
              Searching large datasets can become expensive without
              appropriate database indexes.
            </p>

            <p>
              I explored indexing and composite indexing to improve
              query performance.
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
            PROJECT 01
          </p>

          <h2>
            Woof<span>Cart.</span>
          </h2>

          <p>
            A project that helped me strengthen my understanding of
            Java, Spring Boot, React, databases and backend architecture.
          </p>

          <div className="case-links">

            <a
              href="https://github.com/YOUR_USERNAME/WoofCart"
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

export default WoofCartCaseStudy;