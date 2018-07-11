import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Roger', age: 27},
      {name: 'Leta', age: 27},
      {name: 'Brad', age: 28}
    ]
  }

  switchNameHandler = () => {
   // console.log('switched')
   this.setState({
     persons: [
       {name: 'Rogerrr', age: 27},
       {name: 'Leta', age: 27},
       {name: 'Brad', age: 28}
     ]
   })
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >Hellooo</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>

    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Fixed'))
  }
}

export default App;
