 import React from "react";

class Filter extends React.Component {

  render() {
    const { handleInput } = this.props;
    return (
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">mode_edit</i>
            <textarea id="icon_prefix2" className="materialize-textarea" onChange={handleInput}></textarea>
            <label for="icon_prefix2">Escribe aquí:</label>
          </div>
        </div>
      </form>
    
    );
  }
}

export default Filter;