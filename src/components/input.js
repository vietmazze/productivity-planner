import React, { useState, useEffect } from "react";

const Input = () => {
  const [value, setValue] = useState("");
  const [rows, setRows] = useState(5);
  const [minRows, setMinRows] = useState(5);
  const [maxRows, setMaxRows] = useState(10);

  const handleChange = event => {
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
    if (currentRows < maxRows) {
      setRows(currentRows);
    } else {
      setRows(maxRows);
    }
  };

  // useEffect(() => {
  //   console.log(rows);
  //   // eslint-disable-next-line
  // }, [rows]);

  return (
    <div className=''>
      <textarea
        name=''
        id='textInput'
        cols='30'
        rows={rows}
        value={value}
        className='textarea'
        placeholder='Create your session'
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Input;
