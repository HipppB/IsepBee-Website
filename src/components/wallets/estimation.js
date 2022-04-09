import React from "react";
import Button from "../button/button.js";

let props = {
  text: "See more",
  backgroundColor: "#3671E9",
  w: "150px",
  h: "60px",
  radius: "32px",
  fontSize: "18px",
  color: "white",
  marginLeft: "200px",
};

const estimation = () => {
  return (
    <div>
      <p className="walletTitle">Wallet Estimation</p>
      <p className="walletText">
        That’s our wallet. Nothing more, nothing less. <br /> It is an
        estimation because we may invest in DEFI, <br /> in this case it is just
        an estimation.
      </p>
      <div>
        <Button {...props} />
      </div>
    </div>
  );
};

export default estimation;
