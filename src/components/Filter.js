  
import React from "react";
class Filter extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    console.log("te lo pilla");
  }
  render() {
    const { handleInput } = this.props;
    return (
      <div>
        Escribe su nombre aquí:
        <input type="text" onChange={handleInput} />
      </div>
    );
  }
}

export default Filter;