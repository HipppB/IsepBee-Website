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
