import Piechart from "./graph/piechart.js";
import Estimation from "./wallets/estimation.js";
import Statistique from "./wallets/statistique.js";
import Graphique from "./graph/graphique.js";
import Token from "./wallets/token.js";
import Ibepcoin from "./wallets/ibepcoin.js";

import "../style/wallet.css";
const wallet = () => {
  return (
    <div className="walletcontainer">
      <p className="walletBig">Our Wallet</p>
      <div className="wallet">
        <Estimation />

        <Piechart />
      </div>
      <div
        style={{
          // display: "flex",
          // flexDirection: "row",
          marginTop: "175px",
        }}
      >
        <Graphique />
        <Statistique />
      </div>
      <div className="wallet">
        <div
          style={{
            // display: "flex",
            // flexDirection: "row",
            marginTop: "175px",
          }}
        >
          <Token />
          <Ibepcoin />
        </div>
      </div>
    </div>
  );
};

export default wallet;
