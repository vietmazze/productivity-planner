import React from "react";

const Layout = () => {
  return (
    <div className='container mx-auto'>
      <div className=' grid grid-rows-1 grid-flow-row gap-2'>
        <div className='h-32 row-span-2 bg-gray-500'>1</div>
        <div className='h-64 row-span-5 bg-red-400'>2</div>
        <div className='h-48 row-span-5 bg-green-400'>3</div>
      </div>
    </div>
  );
};

export default Layout;
