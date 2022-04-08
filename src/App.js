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
      <div style={{ marginLeft: "800px", marginTop: "50px" }}>
        <Chart data={initialData}></Chart>{" "}
      </div>
      <NewsLetter />
      <Footer />
      <br />
    </div>
  );
}

const initialData = [
  { time: "2018-12-22", value: 32.51 },
  { time: "2018-12-23", value: 31.11 },
  { time: "2018-12-24", value: 27.02 },
  { time: "2018-12-25", value: 27.32 },
  { time: "2018-12-26", value: 25.17 },
  { time: "2018-12-27", value: 28.89 },
  { time: "2018-12-28", value: 25.46 },
  { time: "2018-12-29", value: 23.92 },
  { time: "2018-12-30", value: 22.68 },
  { time: "2018-12-31", value: 22.67 },
];

export default App;
