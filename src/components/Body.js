import React from "react";
import Square from "./Square";
import Circle from "./Circle";
import Input from "./Input";
const Body = ({ ModalHandler, isShowing, circle }) => {
  const taskNames = [
    { id: 1, task: "MOST IMPORTANT TASK OF THE DAY" },
    {
      id: 2,
      task: "SECONDARY TASK OF IMPORTANT"
    },
    {
      id: 3,
      task: " TERTIARY TASK OF IMPORTANT"
    },
    { id: 4, task: "ADDTIONAL TASKS" }
  ];
  return (
    <div id="nonclock">
      {taskNames.map(child => {
        {
          return (
            <div id={`${child.id}`} className=" row-span-5 ">
              <h1 className="text-xl font-bold">{child.task}</h1>
              <div className="flex flex-row relative">
                <Input />

                <div className="floatObject flex flex-row">
                  <Square inputName={`Target`}></Square>
                  <Circle
                    ModalHandler={ModalHandler}
                    isShowing={isShowing}
                    circle={circle}
                  />
                  <Square inputName={`Actual`} />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Body;
