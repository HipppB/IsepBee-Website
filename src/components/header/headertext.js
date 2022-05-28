import React, { useState, useEffect } from "react";

function Headertext() {
  const [isActive, setisActive] = useState(true);
  return (
    <div>
      <nav>
        <span style={{ color: "white" }}>EverChat</span>

        <div class="main-navlinks">
          <button
            class="hamburger"
            aria-label="Toggle navigation"
            aria-expanded="false"
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
