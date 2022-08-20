import React, { Component, useCallback } from "react";
import "./searchbar.css";
import Profile from "./profile";
import {
  Routes,
  Route,
  useNavigate,
  BrowserRouter,
  Link,
} from "react-router-dom";

export default function Searchbar() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/profile", { replace: true }),
    [navigate]
  );
  return (
    <div className="searchbarcontainer">
      <div className="allcontainer">
        <div className="playercontainer">
          <p className="player">Search Players</p>
        </div>
        <input
          className="searchbar"
          onKeyPress={(e) => e.key === "Enter" && handleOnClick()}
          placeholder="Enter name or tag"
        ></input>
      </div>
    </div>
  );
}
