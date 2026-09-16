function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="section-label">05 — Contact</p>

          <h2>
            Let's work
            <span> together.</span>
          </h2>

          <p>
            Have a project, opportunity or just want to connect?
            Feel free to send me a message.
          </p>

          <div className="contact-links">
            <a href="mailto:your-email@gmail.com">
              your-email@gmail.com ↗
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="6"
              placeholder="Tell me about your project..."
            />
          </div>

          <button type="submit" className="contact-submit">
            Send Message ↗
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;