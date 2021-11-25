import React from "react";
import "./CardList/CardList.css";

export default function PartyList() {
  return (
    <div className="card-party-list">
      <div className="Card happy">
        <div className="headerCard">
          <p>
            <img src="assets/party-hallloween-01.png" alt="halloween" />
          </p>
          <p>Halloween</p>
        </div>
        <div className="video">
          <video>insert youtube video</video>
        </div>
      </div>
      <div className="Card angry">
        <div className="headerCard">
          <p>
            <img src="assets/party-christmas-01.png" alt="angrychristmas" />
          </p>
          <p>Christmas</p>
        </div>
        <div className="video">
          <video>insert youtube video</video>
        </div>
      </div>
      <div className="Card sporty">
        <div className="headerCard">
          <p>
            <img src="assets/party-birthday-01.png" alt="birthday" />
          </p>
          <p>Birthday</p>
        </div>
        <div className="video">
          <video>insert youtube video</video>
        </div>
      </div>
      <div className="Card calm">
        <div className="headerCard">
          <p>
            <img src="assets/party-wedding-01.png" alt="wedding" />
          </p>
          <p>Wedding</p>
        </div>
        <div className="video">
          <video>insert youtube video</video>
        </div>
      </div>
      <div className="Card romance">
        <div className="headerCard">
          <p>
            <img src="assets/party-retro-01.png" alt="retro" />
          </p>
          <p>Retro</p>
        </div>
        <div className="video">
          <video>insert youtube video</video>
        </div>
      </div>
      <div className="Card comedy">
        <div className="headerCard">
          <p>
            <img src="assets/party-blind-01.png" alt="blind-test" />
          </p>
          <p>Blind-test</p>
        </div>
        <div className="video">
          <video>insert youtube video</video>
        </div>
      </div>
    </div>
  );
}
