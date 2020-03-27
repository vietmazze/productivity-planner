import React, { useState } from "react";
import Modal from "./Modal";
import Pomodoro from "./Pomodoro";
// Enable Pomodoro modal when user click on the circle
// Change the color of circle once Pomodoro comples
// Update the Actual square count when user complete each circle
//
function Circle() {
  const [isShowing, setisShowing] = useState(false);

  const openModalHandler = () => {
    setisShowing(true);
  };

  const closeModalHandler = () => {
    setisShowing(false);
  };

  return (
    <div className="flex flex-row px-2">
      <button
        id=""
        name="circle"
        className="circledot"
        onClick={openModalHandler}
      ></button>

      {isShowing ? <Pomodoro close={closeModalHandler}></Pomodoro> : null}
    </div>
  );
}

export default Circle;
