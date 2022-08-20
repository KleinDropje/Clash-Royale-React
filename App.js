import "./App.css";
import Nav from "./Components/Nav";
import Searchbar from "./Components/searchbar";
import "./resources/Supercell-magic-webfont.ttf";
import Leaderboard from "./Components/leaderboard";
import React from "react";
import Profile from "./Components/profile";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate("/contacts");
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="App">
      <Nav />
      <div className="MainApp">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/"
            element={
              <>
                <Searchbar />
                <Leaderboard />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
