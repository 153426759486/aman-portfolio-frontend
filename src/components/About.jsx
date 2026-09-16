
function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-container">

        <div className="about-heading">
          <p className="section-label">01 — About Me</p>

          <h2>
            Building with <span>purpose.</span>
          </h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p>
              I'm Aman Gaur, a recent MCA graduate and Java developer
              focused on building backend applications with Java and
              Spring Boot.
            </p>

            <p>
              I also work with React to create modern frontend experiences
              and connect them with RESTful APIs. I enjoy understanding how
              systems work behind the scenes and solving problems that make
              applications faster, more reliable and scalable.
            </p>

            <p>
              I'm currently focused on strengthening my skills in backend
              development, databases, cloud deployment and system design.
            </p>
          </div>

          <div className="about-highlights">

            <div className="about-card">
              <span>01</span>
              <h3>Backend</h3>
              <p>
                Java, Spring Boot, REST APIs & MySQL
              </p>
            </div>

            <div className="about-card">
              <span>02</span>
              <h3>Frontend</h3>
              <p>
                React, JavaScript & modern UI development
              </p>
            </div>

            <div className="about-card">
              <span>03</span>
              <h3>Cloud</h3>
              <p>
                AWS, Elastic Beanstalk, RDS, S3 & CI/CD
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
