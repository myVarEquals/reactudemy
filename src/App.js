import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium'

class App extends Component {

  state = {
    persons: [
      { id: 'aaa', name: 'Roger', age: 27},
      { id: 'bbb', name: 'Leta', age: 27},
      { id: 'ccc', name: 'Brad', age: 28}
    ],
    showPersons: false,
  }


  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

   person.name = event.target.value

   const persons = [...this.state.persons]
   persons[personIndex] = person

    this.setState({
      persons: persons
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)} />
                
          })}
        </div> 
      )

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }


    return (
      <StyleRoot>
      <div className="App">
        <h1>React App</h1>
        <p className={classes.join(' ')}>Toggle friends list below</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle</button>
        {persons}           
      </div>
      </StyleRoot>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Fixed'))
  }
}

export default Radium(App);
