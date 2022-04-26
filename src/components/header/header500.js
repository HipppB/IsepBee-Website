import logo from "../../assets/isepToken.png";
import "../../style/header.css";

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function header500() {
  return (
    <div class="dropdown">
      <div className="headerContainer">
        <a href="" className="logo">
          <img
            src={logo}
            width=""
            height="72"
            alt="Logo"
            className="logo_image"
          />
        </a>
      </div>
      <button onClick={myFunction} className="dropbtn">
        Dropdown
      </button>
      <div id="myDropdown" className="dropdown-content">
        <a href="#about">About</a>
        <a href="#ourgoal">Our goal</a>
        <a href="#whitepaper">Whitepaper</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default header500;
