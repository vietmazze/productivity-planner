import React from "react";
import "./App.css";
import gaybear from "./img/gaybear.png";
import gayhand from "./img/gayhand.png";
import casanovaiq from "./img/casanovaiq.png";
import corona from "./img/corona.png";
import bitcoin from "./img/bitcoin.png";
function App() {
  return (
    <div className='App'>
      <h1>Welcome sir low IQ - Jurko</h1>
      <p> Quick montage of what this website is about.</p>
      <img src={gaybear} />
      <img src={gayhand} />
      <img src={casanovaiq} />
      <img src={corona} />
      <img src={bitcoin} />
    </div>
  );
}

export default App;
