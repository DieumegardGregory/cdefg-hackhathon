import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeaderHome from "./components/HeaderHome";

function App() {
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
              <Header />
            </div>
          }
        />
        <Route
          path="/party"
          element={
            <div>
              <Header />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Header />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
