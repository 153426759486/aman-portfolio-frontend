import Background from "./Background";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

       <p className="hero-intro">
  Hello, I'm
</p>

<h1 className="hero-name">
  <TypeAnimation
    sequence={[
      "Aman Gaur",
      2000,
      "",
      800,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    cursor={true}
    className="typing-name"
  />
</h1>
        <h2>
          Java Developer <span>•</span> Spring Boot <span>•</span> React
        </h2>

        <p className="hero-description">
          I build scalable backend applications and modern web experiences
          using Java, Spring Boot and React. I enjoy solving problems,
          designing APIs and turning ideas into real-world applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="/../Resume/AMAN_GAUR_Resume.pdf"
            className="secondary-btn"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>

        <div className="hero-socials">

          <a
            href="https://github.com/153426759486"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aman-gaur-2747251a1/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:gauraman411@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      <div className="hero-visual">
        <Background />
      </div>

    </section>
  );
}

export default Hero;