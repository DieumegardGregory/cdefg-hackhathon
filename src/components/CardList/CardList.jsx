import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
import "../Weather.css";
import "./CardList.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function CardList() {
  // const slideRef = useRef();
  // const style = {
  //   textAlign: "center",
  //   background: "teal",
  //   padding: "200px 0",
  //   fontSize: "30px",
  // };
  // const properties = {
  //   autoplay: false,
  //   arrows: false,
  //   infinite: true,
  // };

  // // The "goBack()" method shows the previous slide while "goNext()" shows the next slide. The "goTo(index)" method goes to a particular index. It takes an integer as the parameter.
  // const back = () => {
  //   slideRef.current.goBack();
  // };
  // const next = () => {
  //   slideRef.current.goNext();
  // };
  // const goto = ({ target }) => {
  //   slideRef.current.goTo(parseInt(target.value, 10));
  // };

  const API_KEY = "AIzaSyD_uh3m3hom9GvzZ84yUSFhXX2GLR-07uw";
  const [mood, setMood] = useState("");
  const [playMode, setPlayMode] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [rain, setRain] = useState("Card sad");

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=rating&q=${mood}%20songs&key=${API_KEY}`
      )
      .then((data) => {
        console.log(data.data.items);
        setPlaylists(data.data.items);
      })
      .catch((err) => console.error(err.message));
  }, [mood]);

  const handleSad = () => {
    setMood("sad+");
    setRain("Card sad weather rain");
    setPlayMode(!playMode);
  };
  const handleHappy = () => {
    setMood("goodmood+");
    setPlayMode(!playMode);
  };
  const handleAngry = () => {
    setMood("rage+");
    setPlayMode(!playMode);
  };
  const handleSport = () => {
    setMood("training+workout+");
    setPlayMode(!playMode);
  };
  const handleEpic = () => {
    setMood("epic+");
    setPlayMode(!playMode);
  };
  const handleChildish = () => {
    setMood("childrensong+");
    setPlayMode(!playMode);
  };
  const handleRomantic = () => {
    setMood("love+");
    setPlayMode(!playMode);
  };
  const handleCalm = () => {
    setMood("zen+");
    setPlayMode(!playMode);
  };
  const handleComic = () => {
    setMood("songs+funny+");
    setPlayMode(!playMode);
  };
  const handleHot = () => {
    setMood("seduction+");
    setPlayMode(!playMode);
  };
  const handleStop = () => {
    setPlayMode(!playMode);
    setMood("");
  };

  return (
    <div className="CardList">
      <div className={rain}>
        <div className="headerCard">
          <p>
            <img src="assets/mood-sad-01.png" alt="sad" />
          </p>
          <p>Sad</p>
        </div>
        <div className="thumbnail">
          {playMode ? (
            <img
              className="stop"
              src="assets/stop.png"
              alt="stop-btn"
              onClick={handleStop}
            />
          ) : (
            <img
              className="play"
              src="assets/play.png"
              alt="play-btn"
              onClick={handleSad}
            />
          )}
          <img
            className="mood-thumbnail"
            src="https://i.ytimg.com/vi/nQDJfnrGq5A/mqdefault.jpg"
            alt="sad-thumbnail"
          />
        </div>
      </div>
      <div className="Card happy">
        <div className="headerCard">
          <p>
            <img src="assets/mood-happy-01.png" alt="happy" />
          </p>
          <p>Happy</p>
        </div>
        <div className="thumbnail">
          {playMode ? (
            <img
              className="stop"
              src="assets/stop.png"
              alt="stop-btn"
              onClick={handleStop}
            />
          ) : (
            <img
              className="play"
              src="assets/play.png"
              alt="play-btn"
              onClick={handleHappy}
            />
          )}
          <img
            className="mood-thumbnail"
            src="https://i.ytimg.com/vi/MWKki0K5yCM/mqdefault.jpg"
            alt="happy thumbnail"
          />
        </div>
      </div>
      <div className="Card angry">
        <div className="headerCard">
          <p>
            <img src="assets/mood-angry-01.png" alt="angry" />
          </p>
          <p>Angry</p>
        </div>
        <div className="thumbnail">
          {playMode ? (
            <img
              className="stop"
              src="assets/stop.png"
              alt="stop-btn"
              onClick={handleStop}
            />
          ) : (
            <img
              className="play"
              src="assets/play.png"
              alt="play-btn"
              onClick={handleAngry}
            />
          )}
          <img
            className="mood-thumbnail"
            src="https://i.ytimg.com/vi/7PSS1i-mgFI/mqdefault.jpg"
            alt="angry thumbnail"
          />
        </div>
      </div>
      <div className="Card sporty">
        <div className="headerCard">
          <p>
            <img src="assets/mood-sport-01.png" alt="sporty" />
          </p>
          <p>Sporty</p>
        </div>
        <div className="thumbnail">
          {playMode ? (
            <img
              className="stop"
              src="assets/stop.png"
              alt="stop-btn"
              onClick={handleStop}
            />
          ) : (
            <img
              className="play"
              src="assets/play.png"
              alt="play-btn"
              onClick={handleSport}
            />
          )}
          <img
            className="mood-thumbnail"
            src="https://i.ytimg.com/vi/04LoyBnywRY/mqdefault.jpg"
            alt="sport thumbnail"
          />
        </div>
      </div>
      <div className="Card epic">
        <div className="headerCard">
          <p>
            <img src="assets/mood-epic-01.png" alt="epic" />
          </p>
          <p>Epic</p>
        </div>
        <div className="thumbnail">
          {playMode ? (
            <img
              className="stop"
              src="assets/stop.png"
              alt="stop-btn"
              onClick={handleStop}
            />
          ) : (
            <img
              className="play"
              src="assets/play.png"
              alt="play-btn"
              onClick={handleEpic}
            />
          )}
          <img
            className="mood-thumbnail"
            src="https://i.ytimg.com/vi/LqOfPkHGq9U/mqdefault.jpg"
            alt="epic thumbnail"
          />
        </div>
      </div>
      <div className="Card chlid">
        <div className="headerCard">
          <p>
            <img src="assets/mood-chlid-01.png" alt="childish" />
          </p>
          <p>Childish</p>
        </div>
        <div className="thumbnail">
          {playMode ? (
            <img
              className="stop"
              src="assets/stop.png"
              alt="stop-btn"
              onClick={handleStop}
            />
          ) : (
            <img
              className="play"
              src="assets/play.png"
              alt="play-btn"
              onClick={handleChildish}
            />
          )}
          <img
            className="mood-thumbnail"
            src="https://i.ytimg.com/vi/KFpNvN3nQDw/mqdefault.jpg"
            alt="childish thumbnail"
          />
        </div>
      </div>
      <div className="Card calm">
        <div className="headerCard">
          <p>
            <img src="assets/mood-calm-01.png" alt="calm" />
          </p>
          <p>Calm</p>
        </div>
        <div className="thumbnail">
          {playMode ? (
            <img
              className="stop"
              src="assets/stop.png"
              alt="stop-btn"
              onClick={handleStop}
            />
          ) : (
            <img
              className="play"
              src="assets/play.png"
              alt="play-btn"
              onClick={handleCalm}
            />
          )}
          <img
            className="mood-thumbnail"
            src="https://i.ytimg.com/vi/44uRirC7vLw/mqdefault.jpg"
            alt="calm thumbnail"
          />
        </div>
      </div>
      <div className="Card romance">
        <div className="headerCard">
          <p>
            <img src="assets/mood-romance-01.png" alt="romance" />
          </p>
          <p>Romantic</p>
        </div>
        <div className="thumbnail">
          {playMode ? (
            <img
              className="stop"
              src="assets/stop.png"
              alt="stop-btn"
              onClick={handleStop}
            />
          ) : (
            <img
              className="play"
              src="assets/play.png"
              alt="play-btn"
              onClick={handleRomantic}
            />
          )}
          <img
            className="mood-thumbnail"
            src="https://i.ytimg.com/vi/W18nAXue7hM/mqdefault.jpg"
            alt="romantic thumbnail"
          />
        </div>
      </div>
      <div className="Card comedy">
        <div className="headerCard">
          <p>
            <img src="assets/mood-comedy-01.png" alt="comedy" />
          </p>
          <p>Comic</p>
        </div>
        <div className="thumbnail">
          {playMode ? (
            <img
              className="stop"
              src="assets/stop.png"
              alt="stop-btn"
              onClick={handleStop}
            />
          ) : (
            <img
              className="play"
              src="assets/play.png"
              alt="play-btn"
              onClick={handleComic}
            />
          )}
          <img
            className="mood-thumbnail"
            src="https://i.ytimg.com/vi/pOmu0LtcI6Y/mqdefault.jpg"
            alt="comedy thumbnail"
          />
        </div>
      </div>
      <div className="Card hot">
        <div className="headerCard">
          <p>
            <img src="assets/mood-hot-01.png" alt="hot" />
          </p>
          <p>Hot</p>
        </div>
        <div className="thumbnail">
          {playMode ? (
            <img
              className="stop"
              src="assets/stop.png"
              alt="stop-btn"
              onClick={handleStop}
            />
          ) : (
            <img
              className="play"
              src="assets/play.png"
              alt="play-btn"
              onClick={handleHot}
            />
          )}
          <img
            className="mood-thumbnail"
            src="https://i.ytimg.com/vi/OjholJBpYic/mqdefault.jpg"
            alt="hot thumbnail"
          />
        </div>
      </div>

      {mood !== "" ? (
        <div className="hidden-player">
          <ReactPlayer
            playing={true}
            url={
              playlists[0].id.videoId
                ? `https://www.youtube.com/watch?v=${playlists[0].id.videoId}`
                : "https://www.youtube.com/watch?v=Jl8fV1jUQPs"
            }
          />{" "}
        </div>
      ) : null}
    </div>
  );
}
