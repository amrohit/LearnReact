import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Rohit", age: 26 },
      { name: "Mohit", age: 20 },
      { name: "Khusi", age: 18 }
    ],
    otherState: "some other state",
    showPersons: true
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
  togglePersonHandler = () => {
    const doesVisible = this.state.showPersons;
    this.setState({
      showPersons: !doesVisible
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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
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

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
