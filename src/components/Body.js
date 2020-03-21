import React from "react";
import Square from "./Square";
import Circle from "./Circle";
function Body(props) {
  return (
    <div>
      <div className='container mx-auto'>
        <div className=' grid grid-rows-1 grid-flow-row gap-2'>
          <div className=' row-span-5 '>
            <h1 className='text-xl font-bold'>
              MOST IMPORTANT TASK OF THE DAY
            </h1>
            <div className='flex flex-row '>
              {props.children}
              <Square />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Circle />
              <Square />
            </div>
          </div>
          <div className=' row-span-5 '>
            <h1 className='text-xl font-bold'>SECONDARY TASKS OF IMPORTANCE</h1>
            {props.children}
            <br></br>
            {props.children}
          </div>
          <div className=' row-span-5 '>
            <h1 className='text-xl font-bold'>ADDTIONAL TASKS</h1>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
