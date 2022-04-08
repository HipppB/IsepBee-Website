import React from "react";
import logo from "../../assets/isepToken.png";

const ibepcoin = () => {
  return (
    <div className="ibepback">
      <img
        src={logo}
        width="48"
        height="48"
        alt="Logo"
        className="logo_image2"
      />
      <p className="ibepcoin">IbepCoin</p>
    </div>
  );
};

export default ibepcoin;
