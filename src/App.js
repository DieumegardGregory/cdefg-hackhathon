<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeaderHome from "./components/HeaderHome";
=======
import { Routes, Route } from 'react-router-dom';
import MoodSelector from './components/MoodSelector/MoodSelector';
import './App.css';
>>>>>>> feature/moodselector

function App() {
  const moodTitle = "What's your mood ?";
  const partyTitle = "Choose your event";
  const contactTitle = "Contact us";
  return (
    <div className="App">
<<<<<<< HEAD
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
=======
     <MoodSelector />
>>>>>>> feature/moodselector
    </div>
  );
}

export default App;
