import React, { useState } from "react";

function Timer(props) {
  const [isSession, setIsSession] = useState(true);
  const [timerSecond, setTimerSecond] = useState(0);

  return (
    <div>
      <h4 className='text-xl'>{isSession === true ? " Session" : "Break"}</h4>
      <span className=''>{props.timerMinute}</span>
      <span>:</span>
      <span className=''>
        {timerSecond === 0
          ? "00"
          : timerSecond < 10
          ? "0" + timerSecond
          : timerSecond}
      </span>
    </div>
  );
}

export default Timer;
