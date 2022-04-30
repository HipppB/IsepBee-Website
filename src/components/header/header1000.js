import logo from "../../assets/isepToken.png";
import "../../style/header.css";

function Header1000() {
  return (
    <div>
      <div className="headerContainer">
        <a href="" className="logo" style={{ justifyContent: "center" }}>
          <img
            src={logo}
            width="75"
            height="72"
            alt="Logo"
           className="logo_image"
          />
        </a>
        <div className="linkContainer">
          <a href="#about">About</a>
          <a href="#ourgoal">Our goal</a>
          <a href="#whitepaper">Whitepaper</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header1000;
