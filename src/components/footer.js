import React from "react";
import Ressources from "./footer/ressources.js";
import QuickLink from "./footer/quickLinnk.js";
import Contact from "./footer/contact.js";
import logo from "../assets/isepToken.png";
import "../style/footer.css";

function Footer() {
    return (
        <div>
            <div className="headerContainer">
                <div className="headerContainer">
                    <img
                        src={logo}
                        width="75"
                        height="72"
                        alt="Logo"
                        className="logo_image"
                    />
                    <p className="isepbee">IsepBee</p>
                </div>
                <div className="linkContainer">
                    <QuickLink />
                    <Ressources />
                    <Contact />
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <p className="copyright">©2022 ISEPBee. All rights reserved</p>
        </div>

    );
}
export default Footer;