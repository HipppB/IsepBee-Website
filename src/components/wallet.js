import Estimation from "./wallets/estimation.js";
import Statistique from "./wallets/statistique.js";
import Token from "./wallets/token.js";
import Ibepcoin from "./wallets/ibepcoin.js";
import Pierechart from "./graph/pierecharts.js";
import Regraphique from "./graph/regraphique.js";

import "../style/wallet.css";
const wallet = () => {
  return (
    <div className="walletcontainer">
      <p className="walletBig">Our Wallet</p>
      <div className="wallet1">
        <Estimation />

        <Pierechart />
      </div>
      <div
        className="wallet2"
        style={{
          marginTop: "10%",
        }}
      >
        <Regraphique />
        <Statistique />
      </div>
      <div
        className="wallet3"
        style={{
          marginTop: "10%",
        }}
      >
        <Token />
        <Ibepcoin />
      </div>
    </div>
  );
};

export default wallet;
