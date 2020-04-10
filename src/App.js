import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import Body from "./components/Body";
import Pomodoro from "./components/Pomodoro";
const App = () => {
  const [isShowing, setisShowing] = useState(false);
  const [circle, setCircle] = useState(false);
  const [actual, setActual] = useState();

  const ModalHandler = () => {
    setisShowing(!isShowing);
  };
  useEffect(() => {
    if (isShowing === true) {
      document.getElementById("nonclock").style = "opacity:0.2";

      document.getElementById("clock").style =
        "border-color: red;background-color:#4CAF50;";
    }
    if (isShowing === false) {
      document.getElementById("nonclock").style =
        "backgroundColor:white; opacity:1";
    }
  }, [isShowing]);

  useEffect(() => {
    var lastClear = localStorage.getItem("lastClear");
    var time_now = new Date().getHours();
    console.log(time_now);
    if (time_now - lastClear > 8) {
      localStorage.clear();

      localStorage.setItem("lastClear", time_now);
    }
  });

  return (
    <div className="App">
      <div>
        <Layout>
          <Navbar />

          <Quote />

          <Body
            ModalHandler={ModalHandler}
            isShowing={isShowing}
            circle={circle}
            setCircle={setCircle}
            actual={actual}
          />
          {isShowing ? (
            <Pomodoro
              ModalHandler={ModalHandler}
              circle={circle}
              setCircle={setCircle}
              isShowing={isShowing}
              setisShowing={setisShowing}
              actual={actual}
              setActual={setActual}
            >
              {" "}
            </Pomodoro>
          ) : null}
        </Layout>
      </div>
    </div>
  );
};

export default App;
