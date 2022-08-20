import React, { useCallback} from "react";
import sidemenulogo from "../resources/sidemenulogo.png";
import "./Nav.css";
import { useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  BrowserRouter,
  Link,
} from "react-router-dom";

export default function Nav() {
  const [show, setShow] = useState(0);
  const [spin, setSpin] = useState(0);
  function banaan() {
    if (spin == "0") {
      setSpin(1);
    } else if (spin == "1") {
      setSpin(2);
      setTimeout(function() {
        setSpin(0);
      }, 1000);
    }
  }

  function hide() {
    if (show == "0") {
      setShow(1);
      console.log(show);
    } else if (show == "1") {
      setShow(2);
      setTimeout(function() {
        setShow(0);
      }, 1000);
    }
  }

  return (
    <div className="Nav">
      <div className="sidebarbackground" show={show}>
        <div className="linkwrapper" show={show}>
          <a href="#youtube.com" className="sidebtn">
            Top Players
          </a>
          <a href="#youtube.com" className="sidebtn">
            Top Clans
          </a>
          <a href="#youtube.com" className="sidebtn">
            Gold Pass
          </a>
        </div>
      </div>
      <div className="menu-left">
        <input
          type="image"
          className="SideMenuLogo"
          src={sidemenulogo}
          alt="Img not loading..."
          onClick={function(event) {
            banaan();
            hide();
          }}
          spin={spin}
        />
        <p>
          <Link className="SideMenuTitle" to="/">Clash Royale</Link>
        </p>
      </div>
      <div className="menu-right">
        <a href="#youtube.com" className="loginbutton">
          Log in
        </a>
        <a href="#youtube.com" className="registerbutton">
          Register
        </a>
      </div>
    </div>
  );
}
