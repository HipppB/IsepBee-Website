import logo from "../assets/isepToken.png";
import "../style/header.css";

function header() {
  return (
    <div className="navContainer">
      <nav
        className="navbar is-link"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a href="" className="logo">
            <figure class="image is-16x16">
              <img
                src={logo}
                width="75"
                height="72"
                alt="Logo"
                classNameName="logo_image"
              />
            </figure>
          </a>
        </div>

        <label className="nav-toggle" for="nav-toggle-state">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <input type="checkbox" id="nav-toggle-state" />

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a href="#about" className="navbar-item">
              About
            </a>
            <a href="#ourgoal" className="navbar-item">
              Our goal
            </a>
            <a href="#whitepaper" className="navbar-item">
              Whitepaper
            </a>
            <a href="#roadmap" className="navbar-item">
              Roadmap
            </a>
            <a href="#contact" className="navbar-item">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default header;

/*
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a href="" classNameName="logo">
        <img
          src={logo}
          width="75"
          height="72"
          alt="Logo"
          classNameName="logo_image"
        />
      </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
        <a href="#about" className="navbar-item">About</a>
        <a href="#ourgoal" className="navbar-item">Our goal</a>
        <a href="#whitepaper" className="navbar-item">Whitepaper</a>
        <a href="#roadmap" className="navbar-item">Roadmap</a>
        <a href="#contact" className="navbar-item">Contact</a>
    </div>
  </div>
</nav>
*/
