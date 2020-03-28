import React from "react";
import Square from "./Square";
import Circle from "./Circle";
import Input from "./Input";
function Body({ ModalHandler, isShowing }) {
  return (
    <div>
      <div className=" row-span-5 ">
        <h1 className="text-xl font-bold">MOST IMPORTANT TASK OF THE DAY</h1>
        <div className="flex flex-row relative">
          <Input />

          <Square />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Square />
        </div>
      </div>
      <div className=" row-span-5 ">
        <h1 className="text-xl font-bold">SECONDARY TASKS OF IMPORTANCE</h1>
        <div className="flex flex-row relative">
          <Input />

          <Square />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Square />
        </div>

        <br></br>
        <div className="flex flex-row relative">
          <Input />

          <Square />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Square />
        </div>
      </div>
      <div className=" row-span-5 ">
        <h1 className="text-xl font-bold">ADDTIONAL TASKS</h1>
        <div className="flex flex-row relative">
          <Input />

          <Square />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Circle ModalHandler={ModalHandler} isShowing={isShowing} />
          <Square />
        </div>
      </div>
    </div>
  );
}

export default Body;
