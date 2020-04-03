import React from "react";
import moment from "moment";

const Timer = ({ currentMode, currentTime }) => {
  const [mode] = currentMode;
  const [time] = currentTime;

  return (
    <div id="clock">
      <h2 className="text-xl">{mode === "session" ? "Session" : "Break"}</h2>
      <h3>{moment(time).format("mm:ss")}</h3>
    </div>
  );
};

export default Timer;
