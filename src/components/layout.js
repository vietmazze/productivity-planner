import React from "react";

const Layout = props => {
  return (
    <div className="container mx-auto h-screen">
      <div className=" grid grid-rows-1 grid-flow-row gap-3 relative">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
