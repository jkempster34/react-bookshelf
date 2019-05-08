import React from "react";
import Header from "./components/Header.js";
import Form from "./components/Form.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
