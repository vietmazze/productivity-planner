import React from "react";

// Need to work on implement onClick event to save data
// Enter should get us out of the input?
function Square() {
  return (
    <div className='flex flex-col px-12 '>
      <input
        type='text'
        id=''
        name='target'
        className='squarebox text-xs text-center '
        onKeyDown={console.log("test")}
        tabIndex='0'
      />
      <label className='font-semibold text-xs'>Target</label>
    </div>
  );
}

export default Square;
