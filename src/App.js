import logo from "./assets/isepToken.png";
import "./App.css";
import HeaderTest from "./components/header.js";
import Title from "./components/title.js";
import Roadmap from "./components/roadmap.js";

function App() {
  return (
    <div className="App">
      <HeaderTest />
      <Title/>
      <Roadmap/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Prochainement...
        
        </p>

      </header>
      
    </div>
  );
}

export default App;
