import React from "react";
import NewsText from "./newsletter/newsText.js";
import Button from "./button/button.js";
import InputNews from "./newsletter/newsInput.js";
import "../style/newsletter.css";

let props = {
  text: "Confirm",
  backgroundColor: "white",
  w: "7vw",
  h: "3vw",
  fontSize: "18px",
  radius: "32px",
  color: "#0D0D2B",
  fontWeight: "bold",
};

function Newletter() {
  return (
    <div className="newsLetterContainer" id="contact">
      <div className="NewsDivContainer">
        <div className="NewsComponentsContainer ">
          <NewsText />
          <InputNews />
          <Button {...props} />
        </div>
      </div>
    </div>
  );
}

export default Newletter;
