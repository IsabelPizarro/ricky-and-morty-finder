  
import React from "react";
class Filter extends React.Component {
  constructor() {
    super();
  }
 
  render() {
    const { handleInput } = this.props;
    return (
      <div>
        Find:
        <input type="text" onChange={handleInput} />
      </div>
    );
  }
}

export default Filter;