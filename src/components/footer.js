import React from "react";
import Ressources from "./footer/ressources.js";
import QuickLink from "./footer/quickLinnk.js";
import Contact from "./footer/contact.js";
import logo from "../assets/isepToken.png";
import "../style/footer.css";

function Footer() {
    return (
        <div>
            <div className="headerContainerFooter">
                <div className="imgContainerFooter">
                    <img
                        src={logo}
                        width="75"
                        height="72"
                        alt="Logo"
                        className="logo_image3"
                    />
                    </div>
                    <div>
                    <p className="isepbee">IsepBee</p>
                    
                </div>
                <div className="linkContainerFooter">
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