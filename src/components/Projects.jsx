
import { Link } from "react-router-dom";
import { useRef } from "react";

function Projects() {
  const projectsContainerRef = useRef(null);

  const projects = [
    {
      number: "01",
      title: "WoofCart",
      type: "Full Stack E-Commerce",
      description:
        "A full-stack e-commerce platform for pet products with seller management, REST APIs and a React frontend.",
      technologies: ["Java", "Spring Boot", "React", "MySQL"],
      github: "https://github.com/153426759486/WoofCart",
      caseStudy: "/projects/woofcart",
    },

    {
      number: "02",
      title: "Smart Contact Manager",
      type: "Full Stack Web Application",
      description:
        "A contact management application with authentication, contact management and a clean web interface.",
      technologies: ["Java", "Spring Boot", "React", "MySQL"],
      github:
        "https://github.com/153426759486/Smart-Contact-Manager",
      caseStudy: "/projects/smart-contact-manager",
    },

    {
      number: "03",
      title: "Distributed Inventory System",
      type: "Distributed System",
      description:
        "A distributed inventory management system designed around independent backend services and REST communication.",
      technologies: ["Java", "Spring Boot", "Microservices", "MySQL"],
      github:
        "https://github.com/YOUR_USERNAME/Distributed-Inventory",
      caseStudy: "/projects/distributed-inventory",
    },

    {
      number: "04",
      title: "Blog Application",
      type: "React Application",
      description:
        "A modern React blog application for creating, viewing and managing blog content.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      github:
        "https://github.com/YOUR_USERNAME/Blog-Application",
      caseStudy: "/projects/blog-application",
    },
  ];

  const scrollProjects = (direction) => {
    if (!projectsContainerRef.current) return;

    const scrollAmount = 380;

    projectsContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="section projects-section">

      <div className="projects-container">

        {/* Heading */}

        <div className="projects-heading-row">

          <div>
            <p className="section-label">
              03 — Projects
            </p>

            <h2>
              Things I've <span>built.</span>
            </h2>
          </div>


          {/* Slider Controls */}

          <div className="project-controls">

            <button
              onClick={() => scrollProjects("left")}
              aria-label="Previous projects"
            >
              ←
            </button>

            <button
              onClick={() => scrollProjects("right")}
              aria-label="Next projects"
            >
              →
            </button>

          </div>

        </div>


        {/* Projects Slider */}

        <div
          className="projects-slider"
          ref={projectsContainerRef}
        >

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              {/* Card Top */}

              <div className="project-card-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-type">
                  {project.type}
                </span>

              </div>


              {/* Card Content */}

              <div className="project-card-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

              </div>


              {/* Technologies */}

              <div className="project-technologies">

                {project.technologies.map((technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                ))}

              </div>


              {/* Footer */}

              <div className="project-card-footer">

                <div className="project-card-links">

                  {/* GitHub */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>


                  {/* Case Study */}

                  <Link to={project.caseStudy}>
                    Case Study ↗
                  </Link>

                </div>


               

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
