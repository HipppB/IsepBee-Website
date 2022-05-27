import React, { useState, useEffect } from "react";
import logo from "../../assets/isepToken.png";
import "../../style/header.css";

const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
  hamburgerToggler.classList.toggle("open")

  const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ?  "false" : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

  navLinksContainer.classList.toggle("open")
}
// hamburgerToggler.classList.toggle("click", toggleNav);


function Header500() {
  // const [isOpen, setOpen] = useState(false);
  // function myFunction() {
  //   console.log(isOpen);
  //   setOpen(!isOpen);
  // }
  return (
    <div style={{ width: "100%", paddingTop: 10 }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <a href="" className="logo">
          <img
            src={logo}
            width=""
            height="72"
            alt="Logo"
            className="logo_image"
          />
        </a>

        <div class="main-navlinks">
        <button class="hamburger" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="navlinks-container">
          <a href="#about">About</a>
          <a href="#ourgoal">Our goal</a>
          <a href="#whitepaper">Whitepaper</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact</a>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Header500;
