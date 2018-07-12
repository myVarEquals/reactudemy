import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Roger', age: 27},
      {name: 'Leta', age: 27},
      {name: 'Brad', age: 28}
    ],
    showPersons: false,
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} />
          })}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle</button>
        {persons}    
        
        
      </div>

    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Fixed'))
  }
}

export default App;
