import Piechart from "./graph/piechart.js";
import Estimation from "./wallets/estimation.js";
import "../style/wallet.css";
const wallet = () => {
  return (
    <div className="wallet">
      <Estimation />
      <Piechart />
    </div>
  );
};

export default wallet;
