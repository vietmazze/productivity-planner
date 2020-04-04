import React, { useState, useEffect } from "react";

// Enable Pomodoro modal when user click on the circle
// Change the color of circle once Pomodoro comples
// Update the Actual square count when user complete each circle
//
const Circle = ({ ModalHandler, circle }) => {
  const [inactiveCircle, setInactiveCircle] = useState();
  const circleIds = [
    { id: 1, active: true },
    { id: 2, active: true },
    { id: 3, active: true },
    { id: 4, active: true },
    { id: 5, active: true }
  ];

  const OnSubmit = e => {
    e.preventDefault();
    setInactiveCircle(e.target.id);
    ModalHandler();

    // circleIds[e.target.id - 1].active = false;
    // if (!circleIds[e.target.id - 1].active) {
    //   e.target.className = "circledot-close";
    // }
  };

  // useEffect(() => {
  //   setInactiveCircle(inactiveCircle);
  // }, [OnSubmit, inactiveCircle]);

  return (
    <div className=" " id="nonclock">
      {circleIds.map(circle => {
        return (
          <button
            id={`${circle.id}`}
            className={circle.active ? "circledot" : "circledot-close"}
            onClick={OnSubmit}
          ></button>
        );
      })}
    </div>
  );
};

export default Circle;
