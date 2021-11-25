import { Routes, Route } from "react-router-dom";
import "./App.css";

import equalizer from "./assets/background-01.png";

import CardList from "./components/CardList/CardList";
import Header from "./components/Header";
import HeaderHome from "./components/HeaderHome";
import MoodSelector from "./components/MoodSelector/MoodSelector";
import "./App.css";


function App() {
  const moodTitle = "What's your mood ?";
  const partyTitle = "Choose your event !";
  const contactTitle = "Contact us";
  return (
    <div className="App">

     

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeaderHome />
     <div className="relative">
        <img src={equalizer} alt="Equalizer" id="equa" />
      </div>
            </div>
          }
        />
        <Route
          path="/mood"
          element={
            <div>
              <Header title={moodTitle} />
              <CardList />
            </div>
          }
        />
        <Route
          path="/party"
          element={
            <div>
              <Header title={partyTitle} />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Header title={contactTitle} />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
