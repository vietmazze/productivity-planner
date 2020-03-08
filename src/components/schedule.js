import React, { useState } from "react";

const Schedule = () => {
  const [currentDate, setDate] = useState("test");
  var today = new Date(),
    date123 =
      today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
  return (
    <div>
      <p className='text-purple-600 pt-5 text-lg  text-center '>
        Date: {date123}{" "}
      </p>
    </div>
  );
};

export default Schedule;
