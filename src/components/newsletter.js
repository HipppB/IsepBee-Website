import React from "react";
import NewsText from "./newsletter/newsText.js";
import Button from "./button/button.js";
import InputNews from "./newsletter/newsInput.js";
import "../style/newsletter.css";

let props = {
  text: "Confirm",
  backgroundColor: "white",
  w: "150px",
  h: "60px",
  radius: "32px",
  fontSize: "18px",
  color: "black",
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
