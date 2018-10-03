import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Rohit", age: 26 },
      { name: "Mohit", age: 20 },
      { name: "Khusi", age: 18 }
    ],
    otherState: "some other state"
  };

  //es6 assigning function as a value
  switchNameHandler = newName => {
    console.log("Was clicked!");
    //DON'T DO this.state.persons[0].name = "Avengers";
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: "Mohit", age: 20 },
        { name: "Khusi", age: 18 }
      ]
    });
  };
  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Rohit", age: 26 },
        { name: event.target.value, age: 20 },
        { name: "Khusi", age: 18 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <button style={style} onClick={() => this.switchNameHandler("Nikku")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangeHandler}
        />
        <Person
          click={this.switchNameHandler.bind(this, "Nik")}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.nameChangeHandler}
        />
      </div>
    );
  }
}

export default App;
