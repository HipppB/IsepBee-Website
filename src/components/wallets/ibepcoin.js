import React from "react";
import logo from "../../assets/isepToken.png";
import Tokenvalue from "./ibepcoincomp/tokenvalue";
import Totalsupply from "./ibepcoincomp/totalsupply";
import Walletvalue from "./ibepcoincomp/walletvalue";

const ibepcoin = () => {
  return (
    <div className="ibepback">
      <h1 className="ibepcoin">
        <img
          src={logo}
          width="48"
          height="48"
          alt="Logo"
          className="logo_image2"
        />
        IbepCoin
      </h1>
      <div className="sousibep">
        <Tokenvalue />
        <Totalsupply />
        <Walletvalue />
      </div>
    </div>
  );
};

export default ibepcoin;
