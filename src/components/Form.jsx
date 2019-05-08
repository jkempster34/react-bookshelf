import React from "react";

class Form extends React.Component {
  state = {
    userInput: ""
  };
  render() {
    return (
      <form onSubmit={this.returnBook}>
        <input type="text" onChange={this.storeInput} />
        <button>Search</button>
      </form>
    );
  }

  returnBook = event => {
    event.preventDefault();
    this.props.changeSearchTerm(this.state.userInput);
  };

  storeInput = event => {
    this.setState({ userInput: event.target.value });
  };
}

export default Form;
