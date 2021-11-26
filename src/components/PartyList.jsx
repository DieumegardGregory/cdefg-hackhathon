import React, { useEffect, useState } from "react";
import axios from 'axios';
import ReactPlayer from "react-player";
import "./CardList/CardList.css";

export default function PartyList() {
  const API_KEY = 'AIzaSyD_uh3m3hom9GvzZ84yUSFhXX2GLR-07uw';
    const [mood, setMood] = useState('');
    const [playMode, setPlayMode] = useState(false);
    const [playlists, setPlaylists] = useState([]);
    const [snow, setSnow] = useState("Card angry");

    useEffect(() => {
      axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${mood}%20songs&key=${API_KEY}`)
     .then((data) => {
       console.log(data.data.items);
       setPlaylists(data.data.items)}
       )
     .catch((err)=> console.error(err.message))
       }, [mood]);

       const handleWedding = () => {
        setMood('wedding+');
        setPlayMode(!playMode);
      }
      const handleXmas = () => {
        setMood('christmas+');
        setSnow("Card angry weather snow");
        setPlayMode(!playMode);
      }
      const handleBirthday = () => {
        setMood('happybirthday+');
        setPlayMode(!playMode);
      }
      const handleHalloween = () => {
        setMood('Jack skellington+song+');
        setPlayMode(!playMode);
      }
      const handleRetro = () => {
        setMood('eighties+');
        setPlayMode(!playMode);
      }
      const handleBlindtest = () => {
        setMood('blindtest+');
        setPlayMode(!playMode);
      }
      const handleStop = () => {
        setPlayMode(!playMode);
        setMood('');
      }

  return (
    <div className="card-party-list">
      <div className="Card happy">
        <div className="headerCard">
          <p>
            <img src="assets/party-hallloween-01.png" alt="halloween" />
          </p>
          <p>Halloween</p>
        </div>
        <div className="thumbnail">
          {playMode ? <img className="stop" src="assets/stop.png" alt="stop-btn" onClick={handleStop}/> :
          <img className="play" src="assets/play.png" alt="play-btn" onClick={handleHalloween}/>}
          <img className="mood-thumbnail" src="https://i.ytimg.com/vi/oAz2HDn-12I/mqdefault.jpg" alt="halloween" />        </div>
      </div>
      <div className={snow}>

        <div className="headerCard">
          <p>
            <img src="assets/party-christmas-01.png" alt="angrychristmas" />
          </p>
          <p>Christmas</p>
        </div>
        <div className="thumbnail">
        {playMode ? <img className="stop" src="assets/stop.png" alt="stop-btn" onClick={handleStop}/> :
          <img className="play" src="assets/play.png" alt="play-btn" onClick={handleXmas}/>}
          <img className="mood-thumbnail" src="https://i.ytimg.com/vi/4nHX96aTxY0/mqdefault.jpg" alt="Christmas" />
        </div>
      </div>
      <div className="Card sporty">
        <div className="headerCard">
          <p>
            <img src="assets/party-birthday-01.png" alt="birthday" />
          </p>
          <p>Birthday</p>
        </div>
        <div className="thumbnail">
        {playMode ? <img className="stop" src="assets/stop.png" alt="stop-btn" onClick={handleStop}/> :
          <img className="play" src="assets/play.png" alt="play-btn" onClick={handleBirthday}/>}
          <img className="mood-thumbnail" src="https://i.ytimg.com/vi/O2aQhWwxuyY/mqdefault.jpg" alt="birthday" />
        </div>
      </div>
      <div className="Card calm">
        <div className="headerCard">
          <p>
            <img src="assets/party-wedding-01.png" alt="wedding" />
          </p>
          <p>Wedding</p>
        </div>
        <div className="thumbnail">
        {playMode ? <img className="stop" src="assets/stop.png" alt="stop-btn" onClick={handleStop}/> :
          <img className="play" src="assets/play.png" alt="play-btn" onClick={handleWedding}/>}
          <img className="mood-thumbnail" src="https://i.ytimg.com/vi/QKUaIsar8ds/mqdefault.jpg" alt="wedding" />
        </div>
      </div>
      <div className="Card romance">
        <div className="headerCard">
          <p>
            <img src="assets/party-retro-01.png" alt="retro" />
          </p>
          <p>Retro</p>
        </div>
        <div className="thumbnail">
        {playMode ? <img className="stop" src="assets/stop.png" alt="stop-btn" onClick={handleStop}/> :
          <img className="play" src="assets/play.png" alt="play-btn" onClick={handleRetro}/>}
          <img className="mood-thumbnail" src="https://i.ytimg.com/vi/2Wjta9wxID0/mqdefault.jpg" alt="eighties" />
        </div>
      </div>
      <div className="Card comedy">
        <div className="headerCard">
          <p>
            <img src="assets/party-blind-01.png" alt="blind-test" />
          </p>
          <p>Blind-test</p>
        </div>
        <div className="thumbnail">
        {playMode ? <img className="stop" src="assets/stop.png" alt="stop-btn" onClick={handleStop}/> :
          <img className="play" src="assets/play.png" alt="play-btn" onClick={handleBlindtest}/>}
          <img className="mood-thumbnail" src="https://i.ytimg.com/vi/291PIYVULPU/mqdefault.jpg" alt="blind-test" />
        </div>
      </div>
      {mood !== '' ? 
        <div className="hidden-player"> 
          <ReactPlayer playing={true} url={`https://www.youtube.com/watch?v=${playlists[0].id.videoId}`} 
            /> 
            </div> 
            : null}
    </div>
  );
}
