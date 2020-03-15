import React, { useState } from "react";

// Enable Pomodoro modal when user click on the circle
// Change the color of circle once Pomodoro comples
// Update the Actual square count when user complete each circle
//
function Circle() {
  const [style, setStyle] = useState("circledot");

  const onChangeCircle = () => {
    setStyle("circledot.active");
  };

  return (
    <div className='flex flex-row'>
      <button
        id=''
        name='circle'
        className={style}
        onClick={onChangeCircle}
      ></button>
    </div>
  );
}

export default Circle;
