import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-gray-500 h-20 py-3  ">
      <div className="flex flex-col content-center">
        <h1 className="font-serif text-center text-gray-700 text-4xl">
          {" "}
          Productivity Planner{" "}
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
