import React from "react";

class ResizableTextarea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      rows: 2,
      minRows: 2,
      maxRows: 5
    };
  }

  handleChange = event => {
    const textareaLineHeight = 24;
    const { minRows, maxRows } = this.state;

    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    this.setState({
      value: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows
    });
  };

  render() {
    return (
      <textarea
        rows={this.state.rows}
        value={this.state.value}
        cols='40'
        placeholder={"Enter your text here..."}
        className='border-solid border border-orange-500 outline-none resize-none '
        onChange={this.handleChange}
      />
    );
  }
}

export default ResizableTextarea;
