import React from "react";

class Form extends React.Component {
  state = {
    userInput: ""
  };
  render() {
    return (
      <form onSubmit={this.returnEmoji}>
        <input type="text" onChange={this.storeInput} />
        <button>Search</button>
      </form>
    );
  }
}

export default Form;
