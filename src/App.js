import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import Body from "./components/Body";
import Pomodoro from "./components/Pomodoro";
function App() {
  const [isShowing, setisShowing] = useState(false);

  const ModalHandler = () => {
    setisShowing(!isShowing);
    console.log("test");
  };
  useEffect(() => {
    if (isShowing === true) {
      document.getElementById("body").style.backgroundColor = "#3B1F19";
    }
    if (isShowing === false) {
      document.getElementById("body").style.backgroundColor = "white";
    }
  }, [isShowing]);

  return (
    <div className="App" id="body">
      <Layout>
        <Navbar />

        <Quote />

        <Body ModalHandler={ModalHandler} isShowing={isShowing} />
        {isShowing ? <Pomodoro ModalHandler={ModalHandler}></Pomodoro> : null}
      </Layout>
    </div>
  );
}

export default App;
