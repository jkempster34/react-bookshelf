import React from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import axios from "axios";
import Booklist from "./components/Booklist.jsx";

class App extends React.Component {
  state = {
    books: [],
    searchTerm: ""
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Form changeSearchTerm={this.changeSearchTerm} />
        <Booklist books={this.state.books} />
      </div>
    );
  }
  componentDidUpdate() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state
      .searchTerm || "eggs"}`;
    axios.get(url).then(({ data: { items } }) => {
      this.setState({ books: items });
    });
  }

  changeSearchTerm = searchTerm => {
    this.setState(prevState => {
      return { searchTerm: searchTerm };
    });
  };
}

export default App;
