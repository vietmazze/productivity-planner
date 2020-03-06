import React from "react";
import "./App.css";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className='App'>
      <h1>Welcome sir low IQ - Jurko</h1>
      <p> Quick montage of what this website is about.</p>

      <ReactPlayer
        className='react-player'
        url='https://www.youtube.com/watch?v=VhAHnsFugSs'
        playing
      />
    </div>
  );
}

export default App;
