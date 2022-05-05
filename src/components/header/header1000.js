import logo from "../../assets/isepToken.png";
import "../../style/header.css";

function Header1000() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: 10,
      }}
    >
      <div
        className="headerContainer"
        style={{
          maxWidth: 1000,
          width: "90%",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <a href="" style={{ justifyContent: "center" }}>
          <img
            src={logo}
            width="75"
            height="75"
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
