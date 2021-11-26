import { Routes, Route } from "react-router-dom";
import "./App.css";

import equalizer from "./assets/background-01.png";
import Formulaire from "./components/Formulaire";
import equalizerMobile from "./assets/background-mobi-01.png";
import logoAccueil from "./assets/logo accueil-01.png";

import CardList from "./components/CardList/CardList";
import Header from "./components/Header";
import HeaderHome from "./components/HeaderHome";
import PartyList from "./components/PartyList";

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
              <div className="logo">
                <img src={logoAccueil} alt="logo accueil" id="logoAccueil" />
              </div>
              <div className="relative">
                <img src={equalizer} alt="Equalizer" id="equa" />
                <img
                  src={equalizerMobile}
                  alt="Equalizer"
                  id="equalizerMobile"
                />
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
              <div className="secondEqua">
                <img src={equalizer} alt="Equalizer" id="equaOpacity" />
              </div>
            </div>
          }
        />
        <Route
          path="/party"
          element={
            <div>
              <Header title={partyTitle} />
              <PartyList />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Header title={contactTitle} />
              <Formulaire/>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
