import React, { useState, useEffect } from "react";

// Need to fix the events change with useEffect to change the sizing
// Need to switch to better DND
const Input = () => {
  const [value, setValue] = useState("");
  const [rows, setRows] = useState(5);
  const [minRows, setMinRows] = useState(5);
  const [maxRows, setMaxRows] = useState(10);

  const handleChange = event => {
    event.preventDefault();
    const textareaLineHeight = 24;

    const previousRows = event.target.rows;
    setMinRows(event.target.rows); // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      setMaxRows(event.target.rows);
      event.target.scrollTop = event.target.scrollHeight;
    }

    setValue(event.target.value);
    setRows(currentRows);
  };

  // useEffect(() => {
  //   handleChange();
  // }, [rows]);

  return (
    <div className=''>
      <textarea
        name=''
        id=''
        rows={rows}
        value={value}
        className=''
        placeholder='Create your session'
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Input;
