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

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Rohit", age: 26 },
        { name: event.target.value, age: 20 },
        { name: "Khusi", age: 18 }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    //we have not assign array to persons, acc to DS, it just pointing for new version of array(arrays and objects of reference type )
    const persons = this.state.persons.slice();
    //or
    const newPerson = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({
      persons: persons //or newPerson
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
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
