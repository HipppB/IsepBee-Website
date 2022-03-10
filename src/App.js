import logo from "./assets/isepToken.png";
import "./App.css";
import HeaderTest from "./components/header.js";
import Title from "./components/title.js";
import Roadmap from "./components/roadmap.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <HeaderTest />
      <Title/>
      <Roadmap/>
      <Footer />
      <br/>
    </div>
  );
}

export default App;
