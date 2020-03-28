import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Pomodoro from "./Pomodoro";
// Enable Pomodoro modal when user click on the circle
// Change the color of circle once Pomodoro comples
// Update the Actual square count when user complete each circle
//
function Circle({ ModalHandler, isShowing }) {
  return (
    <div className=" px-5 ">
      <button
        id=""
        name="circle"
        className="circledot"
        onClick={ModalHandler}
      ></button>
    </div>
  );
}

export default Circle;
