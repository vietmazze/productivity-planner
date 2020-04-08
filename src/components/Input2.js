import React, { useState, useEffect, useRef } from "react";

// Need to fix the events change with useEffect to change the sizing
// Need to switch to better DND
const Input = ({ id, taskValue }) => {
  const [value, setValue] = useState(localStorage.getItem(`${id}`));
  const [rows, setRows] = useState(2);
  const [minRows, setMinRows] = useState(2);
  const [maxRows, setMaxRows] = useState(2);

  const handleChange = (event) => {
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

    currentRows < maxRows ? setRows(currentRows) : setRows(maxRows);
  };

  const handleKeyPress = (e) => {
    if (e.charCode == 13) {
      e.currentTarget.blur();
    }
  };
  useEffect(() => {
    setMinRows(minRows);
    setMaxRows(maxRows);
    setRows(rows);
    setValue(value);
    localStorage.setItem(`${id}`, value);
  }, [minRows, maxRows, rows, value]);

  return (
    <div tabIndex="0">
      <form>
        <textarea
          onKeyPress={handleKeyPress}
          name=""
          id={id}
          cols="40"
          rows={rows}
          value={value}
          className="border-solid border border-orange-500 outline-none resize-none"
          placeholder="Create your session"
          onChange={handleChange}
        ></textarea>
      </form>
    </div>
  );
};

export default Input;
