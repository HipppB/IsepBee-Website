import Piechart from "./graph/piechart.js";
import Estimation from "./wallets/estimation.js";
import Statistique from "./wallets/statistique.js";
import Graphique from "./graph/graphique.js";
import "../style/wallet.css";
const wallet = () => {
  return (
    <div className="walletcontainer">
      <p className="walletBig">Our Wallet</p>
      <div className="wallet">
        <Estimation />
        <Piechart />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Statistique />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Graphique />
      </div>
    </div>
  );
};

export default wallet;
