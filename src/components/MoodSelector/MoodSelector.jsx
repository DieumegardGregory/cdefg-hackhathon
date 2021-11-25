import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const MoodSelector = () => {
  const API_KEY = 'AIzaSyAdhtMCgWuFdPEnJUb2oqPrCG7NcAm8kM4';
  // const [mood, setMood] = useState('');
  const [playlists, setPlaylists] = useState([]);

 useEffect(() => {
 axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=happy%20playlists&key=${API_KEY}`)
.then((data) => {
  console.log(data.data.items);
  setPlaylists(data.data.items)}
  )
.catch((err)=> console.error(err.message))
  }, []);
  

  return (
    <>
    <h2>List of songs for your mood</h2>
    <div className="playlist-area">
    
    {playlists.map((playlist) => 
    // <ReactPlayer key={playlist.id} url={`https://www.youtube.com/watch?v=${playlist.id.videoId}`} />)}
    <img key={playlist.id} src={playlist.snippet.thumbnails.default.url} alt="playlist-thumbnail" />
    )}  
    </div>
    </>
  );
};


export default MoodSelector;