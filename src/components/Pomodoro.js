import React, { useState } from "react";
import Timer from "./Timer";
function Pomodoro() {
  const [timerMinute, setTimerMinute] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  return (
    <div>
      <h2> Pomodoro Clock</h2>
      <Timer timerMinute={timerMinute}></Timer>
    </div>
  );
}

export default Pomodoro;
