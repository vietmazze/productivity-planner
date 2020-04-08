import React from "react";

// Need to work on implement onClick event to save data
// Enter should get us out of the input?
function Square({ inputName }) {
  return (
    <div className="flex flex-col px-12 " id="nonclock">
      <input
        type="text"
        id=""
        name="target"
        className="squarebox text-xs text-center "
        tabIndex="0"
      />
      <label className="font-semibold text-xs text-center">{inputName}</label>
    </div>
  );
}

export default Square;
