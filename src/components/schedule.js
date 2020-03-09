import React, { useState } from "react";

const Schedule = () => {
  const [currentDate, setDate] = useState("test");
  var today = new Date(),
    date123 =
      today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
  return (
    <div>
      <h1 className='font-serif text-center text-gray-700 text-2xl'>
        {" "}
        Productivity Planner{" "}
      </h1>
      <p className='font-serif text-gray-700 pt-5 text-lg  text-center '>
        Date: {date123}{" "}
      </p>
    </div>
  );
};

export default Schedule;
