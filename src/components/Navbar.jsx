function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        AG<span>.</span>
      </a>

      <div className="nav-links">
        <a href="/#about">About</a>
        <a href="/#skills">Skills</a>
        <a href="/#projects">Projects</a>
        <a href="/#resume">Resume</a>
        <a href="/#contact">Contact</a>
      </div>

      <a href="/#contact" className="nav-contact">
        Let's Talk
      </a>
    </nav>
  );
}

export default Navbar;