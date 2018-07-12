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

  switchNameHandler = (newName) => {
   // console.log('switched')
   this.setState({
     persons: [
       {name: newName, age: 27},
       {name: 'Leta', age: 27},
       {name: 'Brad', age: 28}
     ]
   })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Rog', age: 27},
        {name: event.target.value, age: 27},
        {name: 'Brad', age: 28}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <button style={style} onClick={() => this.switchNameHandler('ROGER')}>Switch Name</button>
        <Person
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age} />
        <Person
         name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, 'Rog')} 
         changed={this.nameChangeHandler}>Hellooo</Person>
        <Person
         name={this.state.persons[2].name}
         age={this.state.persons[2].age} />
      </div>

    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Fixed'))
  }
}

export default App;
