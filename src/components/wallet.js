import Estimation from "./wallets/estimation.js";
import Statistique from "./wallets/statistique.js";
import Token from "./wallets/token.js";
import Ibepcoin from "./wallets/ibepcoin.js";
import Pierechart from "./graph/pierecharts.js";
import Regraphique from "./graph/regraphique.js";
import "../style/wallet.css";
const Wallet = () => {
  return (
    <div className="walletcontainer">
      <p className="walletPrincipalTitle">Our Wallet</p>
      <div className="walletEstimation">
        <Estimation />

        <Pierechart />
      </div>
      <div
        className="walletStatistique"
        style={{
          marginTop: "10%",
        }}
      >
        <Regraphique />
        <Statistique />
      </div>
      <div
        className="walletToken"
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

export default Wallet;
