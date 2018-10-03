import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [{ name: "Rohit", age: 26 }, { name: "Mohit", age: 20 }],
    otherState: "some other state"
  };

  //es6 assigning function as a value
  switchNameHandler = () => {
    console.log("Was clicked!");
    //DON'T DO this.state.persons[0].name = "Avengers";
    this.setState({
      persons: [{ name: "Rohit Sharma", age: 26 }, { name: "Mohit", age: 20 }]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          click={this.switchNameHandler}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;
