import React, { useState, useEffect } from "react";

// Enable Pomodoro modal when user click on the circle
// Change the color of circle once Pomodoro comples
// Update the Actual square count when user complete each circle
//
const Circle = ({ ModalHandler, circle, setCircle }) => {
  const [items, setItems] = useState([
    { id: 1, active: true },
    { id: 2, active: true },
    { id: 3, active: true },
    { id: 4, active: true },
    { id: 5, active: true },
  ]);

  const OnSubmit = (e) => {
    e.preventDefault();
    //setInactiveCircle(e.target.id);
    ModalHandler();
    setItems(
      items.map((item) => ({
        ...item,
        active: e.target.id == item.id ? false : true,
      }))
    );
  };

  // useEffect(() => {
  //   setInactiveCircle(inactiveCircle);
  // }, [inactiveCircle]);

  // useEffect(() => {
  //   if (circle) {
  //     setItems(
  //       items.map((item) => ({
  //         ...item,
  //         active: e.target.id == item.id ? false : true,
  //       }))
  //     );
  //   }
  // }, [circle]);

  return (
    <div className=" " id="nonclock">
      {items.map((circle) => {
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
