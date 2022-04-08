import logo from "./assets/isepToken.png";
import "./App.css";
import HeaderTest from "./components/header.js";
import Title from "./components/title.js";
import Roadmap from "./components/roadmap.js";
import Footer from "./components/footer.js";
import NewsLetter from "./components/newsletter.js";
import Performance from "./components/performance.js";
import Wallet from "./components/wallet.js";
import Chart from "./components/graph/chart.js";

function App() {
  return (
    <div className="App">
      <HeaderTest />
      <Title />
      <Roadmap />
      <Performance />
      <Wallet />
      <div
        style={{
          marginLeft: "25%",
          marginRight: "25%",
          width: "50%",
          alignItems: "center",
          backgroundColor: "#2b076e",
        }}
      ></div>
      <NewsLetter />
      <Footer />
      <br />
    </div>
  );
}

export default App;
