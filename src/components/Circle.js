import React, { useState } from "react";
import Modal from "./Modal";

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
    <div className='flex flex-row'>
      <button
        id=''
        name='circle'
        className='circledot'
        onClick={openModalHandler}
      ></button>

      {isShowing ? (
        <Modal className='modal' show={isShowing} close={closeModalHandler}>
          Testing for now
        </Modal>
      ) : null}
    </div>
  );
}

export default Circle;
