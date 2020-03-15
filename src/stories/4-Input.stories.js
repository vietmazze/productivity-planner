import React from "react";

import Input from "../components/Input";
import Board from "../components/Board";
import Card from "../components/Card";

export default {
  title: "Board",
  component: Board
};

export const version1 = () => (
  <div className='wrapper'>
    <Board id='board-1' className='droppable'>
      <Card id='card-1' className='draggable' draggable='true'>
        <Input className='m-2 p-2'></Input>
      </Card>
    </Board>
    <Board id='board-2' className='droppable'>
      <Card id='card-2' className='draggable' draggable='true'>
        <Input className='m-2 p-2'></Input>
      </Card>
    </Board>
  </div>
);
