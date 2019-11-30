import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Jaime", age: 27 }
    ]
  }

  switchNameHandler = () => {
    this.setState(
      {
        persons: [
          { name: "Max", age: 30 }
        ]
      }
    );
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: event.target.value, age: 30 }
        ]
      }
    );
  }

  render() {
    return (
      <div className="App">
        <button onClick={ this.switchNameHandler }>Switch Name</button>
        <Person
          changed={ this.nameChangedHandler }
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}> Hobbies: Videogames </Person>
      </div>
    );
  }
}

export default App;
