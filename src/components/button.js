import React from "react";

const Button = props => {
  return (
    <div className=''>
      <button type='submit'>{props.children} </button>
    </div>
  );
};

export default Button;
