import React, { useState, useEffect } from "react";

// Enable Pomodoro modal when user click on the circle
// Change the color of circle once Pomodoro comples
// Update the Actual square count when user complete each circle
//
const Circle = ({ ModalHandler, circle }) => {
  const [items, setItems] = useState([
    { id: 1, active: true },
    { id: 2, active: true },
    { id: 3, active: true },
    { id: 4, active: true },
    { id: 5, active: true },
  ]);
  const [currentId, setCurrentId] = useState();

  //onClick event to open the Modal Pomodoro
  const OnSubmit = (e) => {
    e.preventDefault();
    ModalHandler();
    setCurrentId(e.target.id);
  };

  // This is to change the className based on the active of each circle's id
  useEffect(() => {
    if (circle) {
      setItems(
        items.map((item) => ({
          ...item,
          active: currentId == item.id ? !item.active : item.active,
        }))
      );
    }
  }, [circle, currentId]);

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
