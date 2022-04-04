import Piechart from "./graph/piechart.js";
import Estimation from "./wallets/estimation.js";
import "../style/wallet.css";
const wallet = () => {
  return (
    <div className="walletcontainer">
      <p className="walletTitle">Our Wallet</p>
      <div className="wallet">
        <Estimation />
        <Piechart />
      </div>
    </div>
  );
};

export default wallet;
