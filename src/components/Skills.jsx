
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaLinux,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiIntellijidea,
  SiRedis,
  SiJsonwebtokens,
  SiGithubactions,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "Java",
      icon: <FaJava />,
      category: "Backend",
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot />,
      category: "Backend",
    },
    {
      name: "Spring Security",
      icon: <SiSpringboot />,
      category: "Backend",
    },
    {
      name: "REST API",
      icon: <FaDatabase />,
      category: "Backend",
    },
    {
      name: "JWT",
      icon: <SiJsonwebtokens />,
      category: "Backend",
    },
    {
      name: "React",
      icon: <FaReact />,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      category: "Frontend",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      category: "Frontend",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      category: "Database",
    },
    {
      name: "Redis",
      icon: <SiRedis />,
      category: "Database",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      category: "Tools",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      category: "Tools",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      category: "Tools",
    },
   {
     name: "Maven",
     icon: <FaJava />,
     category: "Tools",
    },
    {
      name: "IntelliJ IDEA",
      icon: <SiIntellijidea />,
      category: "Tools",
    },
    {
      name: "Docker",
      icon: <FaDocker />,
      category: "Cloud & DevOps",
    },
    {
      name: "AWS",
      icon: <FaAws />,
      category: "Cloud & DevOps",
    },
    {
      name: "GitHub Actions",
      icon: <SiGithubactions />,
      category: "Cloud & DevOps",
    },
    {
      name: "Linux",
      icon: <FaLinux />,
      category: "Cloud & DevOps",
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-label">02 — Skills</p>

          <h2>
            My <span>toolkit.</span>
          </h2>

          <p className="skills-intro">
            Technologies and tools I use to build, test and deploy
            modern applications.
          </p>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div
              className="skill-card"
              key={skill.name}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>

              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span>{skill.category}</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
