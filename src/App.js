import { Routes, Route } from "react-router-dom";
import "./App.css";
import equalizer from "./assets/background-01.png";

function App() {
  return (
    <div className="App">
      <footer className="footer">
        <img src={equalizer} alt="Equalizer" id="equa" />
      </footer>
    </div>
  );
}

export default App;
