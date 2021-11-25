import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeaderHome from "./components/HeaderHome";

function App() {
  const moodTitle = "What's your mood ?";
  const partyTitle = "Choose your event";
  const contactTitle = "Contact us";
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeaderHome />
            </div>
          }
        />
        <Route
          path="/mood"
          element={
            <div>
              <Header title={moodTitle} />
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
