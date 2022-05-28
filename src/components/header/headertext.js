import React, { useState, useEffect } from "react";
import "../../style/Headertext.css";

function Headertext() {
  const [isActive, setisActive] = useState(false);
  return (
    <div>
      <nav>
        <div class="main-navlinks">
          <button
            class={`hamburger ${isActive ? "open" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={`${isActive ? "true" :"false"}`}
            id="button1"
            onClick={() => {
              setisActive(!isActive);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div class={`navlinks-container ${isActive ? "open" : ""}`}>
            <a href="#" aria-current="page">
              Home
            </a>
            <a href="#">Services</a>
            <a href="#">Pricing</a>
            <a href="#">Community</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Headertext;
