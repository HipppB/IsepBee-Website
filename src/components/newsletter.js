import React from "react";
import NewsText from "./newsletter/newsText.js";
import Button from "./button/button.js";
import InputNews from "./newsletter/newsInput.js";
import "../style/newsletter.css";

let props = {
    text: "Confirm",
    color: "white",
    w: "133px",
    h: "55px",
    radius:"32px",
}

function Newletter() {
    return (
        <div className="newsLetterContainer">
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