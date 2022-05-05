import React, { useState, useEffect } from "react";
import Popup from "../button/popup.js";

function Statistique() {
  const [isOpen, setOpen] = useState(false);
  function togglePopup() {
    setOpen(!isOpen);
    }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <p className="statsTitle">Detailed Statistics</p>
      <p className="statsetText">
        That’s our wallet. Nothing more, nothing less. <br /> It is an
        estimation because we may invest in DEFI, <br /> in this case it is just
        an estimation.
      </p>
      <div>
        <input
          type="button"
          value="See more"
          style={{
            backgroundColor: "#3671E9", 
            width: "150px ", 
            height: "60px", 
            fontSize: "18px", 
            borderRadius: "32px", 
            color: "white"
          }}
          onClick={togglePopup}
        />
        {isOpen && <Popup
        content={<><b>Design your Popup</b>
          <p style={{color:"black"}}>Our past performances don’t reflect our future performances.
          We never know how the market can go, investing may leads to loss of money</p>
          </>}
            handleClose={togglePopup}
          />}
      </div>
    </div>
  );
};

export default Statistique;
