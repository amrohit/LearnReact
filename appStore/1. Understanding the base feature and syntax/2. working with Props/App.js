import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <Person name="Rohit" age="26" />
        <Person name="Mohit" age="20">
          My Hobbies: Racing
        </Person>
      </div>
    );
    // return React.createElement("div", null, "h1", "Hi, I'm a React App!");
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Does this work now?")
    // );
  }
}

export default App;
