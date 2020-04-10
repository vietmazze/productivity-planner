import React, { useState, useEffect, useRef } from "react";

import { useInterval } from "../hooks/useInterval";

import Timer from "./Timer";
import PomodoroControl from "./PomodoroControl";

import alarm from "../sounds/alarm.mp3";

const Pomodoro = ({
  ModalHandler,
  circle,
  setCircle,
  isShowing,
  setisShowing,
  actual,
  setActual,
}) => {
  const [breakVal, setBreakVal] = useState(5);
  const [sessionVal, setSessionVal] = useState(25);
  const [mode, setMode] = useState("session");
  const [time, setTime] = useState(sessionVal * 60 * 1000);
  const [active, setActive] = useState(false);
  const beep = useRef();

  // This useInterval allows us to update the second value every sec
  useInterval(() => setTime(time - 1000), active ? 1000 : null);

  // Calling the
  useEffect(() => {
    setTime(sessionVal * 60 * 1000);
  }, [sessionVal]);

  // Reset value when time changes between session and break
  useEffect(() => {
    if (time === 0 && mode === "session") {
      beep.current.play();
      setMode("break");
      setTime(breakVal * 60 * 1000);
    } else if (time === 0 && mode === "break") {
      setCircle(true);
      beep.current.play();
      setMode("session");
      setTime(sessionVal * 60 * 1000);
      setisShowing(!isShowing);
      // setActual(active == null ? 0 : active + 1);
    }
  }, [
    time,
    breakVal,
    sessionVal,
    mode,
    circle,
    isShowing,
    setisShowing,
    setCircle,
  ]);

  const handleReset = () => {
    //beep.current.pause()
    //beep.current.currentTime = 0
    setActive(false);
    setMode("session");
    setBreakVal(5);
    setSessionVal(25);
    setTime(25 * 60 * 1000);
  };

  // useEffect(() => {
  //   setisShowing(isShowing);
  // }, [isShowing]);

  return (
    <div className="container mx-auto">
      <div className="time-wrapper" id="clock">
        <button onClick={ModalHandler} className="closeButton">
          X
        </button>
        <Timer
          currentMode={[mode, setMode]}
          currentTime={[time, setTime]}
        ></Timer>
        <PomodoroControl
          activeStatus={[active, setActive]}
          handleReset={handleReset}
        />
        <h4 className="text-center text-4xl uppercase text-red-600  ">
          {" "}
          Pomodoro Clock
        </h4>
        <audio id="beep" src={alarm} ref={beep} />
      </div>
    </div>
  );
};

export default Pomodoro;
