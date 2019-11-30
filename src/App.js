import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Jaime", age: 27 }
    ]
  }

  render() {
    return (
      <div className="App">
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> Hobbies: Videogames </Person>
      </div>
    );
  }
}

export default App;
