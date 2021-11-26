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
                <img src={equalizer} alt="Equalizer" id="equalizerAccueil" />
                <img
                  src={equalizerMobile}
                  alt="Equalizer"
                  id="equalizerMobileAccueil"
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
              <div className="equalizer2">
                <img src={equalizer} alt="Equalizer" id="equalizerCard" />
                <img
                  src={equalizerMobile}
                  alt="Equalizer"
                  id="equalizerMobileCard"
                />
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
              <div className="equalizer3">
                <img src={equalizer} alt="Equalizer" id="equalizerParty" />
                <img
                  src={equalizerMobile}
                  alt="Equalizer"
                  id="equalizerMobileParty"
                />
              </div>
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Header title={contactTitle} />
              <Formulaire />
              <div className="equalizer4">
                <img src={equalizer} alt="Equalizer" id="equalizerForm" />
                <img
                  src={equalizerMobile}
                  alt="Equalizer"
                  id="equalizerMobileForm"
                />
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
