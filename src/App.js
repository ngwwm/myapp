import React, { useState } from 'react';
import Radium from 'radium';

import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { id: 'p1', name: 'Max', age: 28 },
      { id: 'p2', name: 'Manu', age: 29 },
      { id: 'p3', name: 'Stephanie', age: 26 }
    ],
    showPersons: true
  });

  console.log(personsState);
/*
  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DONT'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({    
      persons: [
        { id: 'p1', name: newName, age: 28 },
        { id: 'p2', name: 'Manu', age: 29 },
        { id: 'p3', name: 'Stephanie', age: 27 }
      ]    
    })
  };
 */
  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personsState.persons[personIndex]
    };

    // const person = Object.assign({}, personStat.persons[personIndex])

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;
    setPersonsState({
      persons: persons,
      showPersons: personsState.showPersons 
    });
    /*
    setPersonsState({
      persons: [
        { id: 'p1', name: 'Max', age: 28 },
        { id: 'p2', name: event.target.value, age: 29 },
        { id: 'p3', name: 'Stephanie', age: 26 }
      ]    
    })
    */
  }

  const togglePersonHandler = () => {

    setPersonsState({
      persons: personsState.persons,
      showPersons: !personsState.showPersons  
    })
  }

  const deletePersonHandler = (personIndex) => {
    //const persons = personsState.persons;
    //const persons = personsState.persons.slice();
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);

    setPersonsState({
      persons: persons,
      showPersons: personsState.showPersons  
    })
  }

  const [ usernameState, setUsernameState ] = useState({
      username: 'Max'    
  });

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
  };

  let persons = null;
  
  if (personsState.showPersons) {
    persons = (
    <div>
      {personsState.persons.map((person, index) => {
        return <Person
          click={() => deletePersonHandler(index)} 
          name={person.name} 
          age={person.age} 
          key={person.id} 
          changed={(event) => nameChangedHandler(event, person.id)} />
      })}
    </div>)

    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    };
  }

  let classes = [];

  if (personsState.persons.length <= 2)
    classes.push('red');

  if (personsState.persons.length <= 1)
    classes.push('bold');

  const userNameChangedHandler = (event) => {
    setUsernameState({username: event.target.value});
  }

  return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button key='b_toggle1' style={style} onClick={togglePersonHandler}>Toggle Name</button>          
        <button key='b_toggle2' style={style} onClick={deletePersonHandler}>Delete Name</button>          
        {persons}

        <UserInput userName={usernameState.username} changed={(event) => userNameChangedHandler(event)}/>
        <Validation inputLength={usernameState.username.length} />
      </div>
    );

}
export default Radium(App);
