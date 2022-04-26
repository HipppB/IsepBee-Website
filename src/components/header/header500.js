import React, { useState, useEffect } from "react";
import logo from "../../assets/isepToken.png";
import "../../style/header.css";

function Header500() {
  const [isOpen, setOpen] = useState(false);
  function myFunction() {
    console.log(isOpen);
    setOpen(!isOpen);
  }
  return (
    <div>
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
      <button onClick={() => myFunction()} className="dropbtn">
        Dropdown
      </button>
    </div>
    {isOpen && (
        <div className="dropdown-content">
          <a href="#about">About</a>
          <a href="#ourgoal">Our goal</a>
          <a href="#whitepaper">Whitepaper</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </div>
  );
}

export default Header500;
