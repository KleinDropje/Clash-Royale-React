import React from "react";
import clanIcon from "../resources/clanicon.png";
import exp from "../resources/exp.png";
import "./profile.css";
export default function Profile() {
  return (
    <div>
      <div className="topwrapper">
        <div className="left">
          <img className="clanIcon" src={clanIcon} alt="Img not loading..." />
          <div className="names">
            <p className="profileName">Unicorn_Milan</p>
            <p className="profileTag">#Y9JOULCU8</p>
          </div>
          <img className="level" src={exp} />
          <div className="right">
            <img
              className="trophy"
              src="https://cdn.statsroyale.com/images/trophy.png"
            />
            <p className="trophies">5019</p>
          </div>
        </div>
      </div>
      <div className="mainstats">
        <div className="container">
          <div className="Card">
            <div className="headwrapper">
              <div className="head">
                <img
                  className="Icon"
                  src="https://cdn.statsroyale.com/images/clan-wars.png"
                />
                <p className="CardTitle">Clan</p>
              </div>
            </div>
            <div className="content">
              <p className="descriptionTitle">Current trophies</p>
              <p className="descriptionCount">5019</p>
            </div>
            <div className="content">
              <p className="descriptionTitle">Highest trophies</p>
              <p className="descriptionCount">5019</p>
            </div>
          </div>
          <div className="Card">
            <div className="headwrapper">
              <div className="head">
                <img
                  className="Icon"
                  src="https://cdn.statsroyale.com/images/clan-wars.png"
                />
                <p className="CardTitle">Clan</p>
              </div>
            </div>
            <div className="content">
              <p className="descriptionTitle">Total donations</p>
              <p className="descriptionCount">5019</p>
            </div>
            <div className="content">
              <p className="descriptionTitle">Donations</p>
              <p className="descriptionCount">5019</p>
            </div>
          </div>
          <div className="Card">
            <div className="headwrapper">
              <div className="head">
                <img
                  className="Icon"
                  src="https://cdn.statsroyale.com/images/clan-wars.png"
                />
                <p className="CardTitle">Clan</p>
              </div>
            </div>
            <div className="content">
              <p className="descriptionTitle">War day wins</p>
              <p className="descriptionCount">5019</p>
            </div>
            <div className="content">
              <p className="descriptionTitle">Clan cards collected</p>
              <p className="descriptionCount">5019</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="Card">
            <div className="headwrapper">
              <div className="head">
                <img
                  className="Icon"
                  src="https://cdn.statsroyale.com/images/clan-wars.png"
                />
                <p className="CardTitle">Clan</p>
              </div>
            </div>
            <div className="content">
              <p className="descriptionTitle">Wins</p>
              <p className="descriptionCount">5019</p>
            </div>
            <div className="content">
              <p className="descriptionTitle">Losses</p>
              <p className="descriptionCount">5019</p>
            </div>
            <div className="content">
              <p className="descriptionTitle">Battles</p>
              <p className="descriptionCount">5019</p>
            </div>
          </div>
          <div className="Card">
            <div className="headwrapper">
              <div className="head">
                <img
                  className="Icon"
                  src="https://cdn.statsroyale.com/images/clan-wars.png"
                />
                <p className="CardTitle">Clan</p>
              </div>
            </div>
            <div className="content">
              <p className="descriptionTitle">Total donations</p>
              <p className="descriptionCount">5019</p>
            </div>
            <div className="content">
              <p className="descriptionTitle">Donations</p>
              <p className="descriptionCount">5019</p>
            </div>
          </div>
          <div className="Card">
            <div className="headwrapper">
              <div className="head">
                <img
                  className="Icon"
                  src="https://cdn.statsroyale.com/images/clan-wars.png"
                />
                <p className="CardTitle">Clan</p>
              </div>
            </div>
            <div className="content">
              <p className="descriptionTitle">War day wins</p>
              <p className="descriptionCount">5019</p>
            </div>
            <div className="content">
              <p className="descriptionTitle">Clan cards collected</p>
              <p className="descriptionCount">5019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
