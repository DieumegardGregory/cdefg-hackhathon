import { Routes, Route } from "react-router-dom";
import "./App.css";
import equalizer from "./assets/background-01.png";
import equalizerMobile from "./assets/background-mobi-01.png";

function App() {
  return (
    <div className="App">
      <div className="relative">
        <img src={equalizer} alt="Equalizer" id="equa" />
        <img src={equalizerMobile} alt="Equalizer" id="equalizerMobile" />
      </div>
    </div>
  );
}

export default App;
