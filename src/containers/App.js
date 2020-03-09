import React, { useState } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
/*
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Validation from '../components/Validation/Validation';
*/
import Cockpit from '../components/Cockpit/Cockpit';

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

/*
  const [ usernameState, setUsernameState ] = useState({
      username: 'Max'    
  });

  const userNameChangedHandler = (event) => {
    setUsernameState({username: event.target.value});
  }
*/
  let persons = null;
  
  if (personsState.showPersons) {
    persons = <Persons persons={personsState.persons} 
      clicked={deletePersonHandler}
      changed={nameChangedHandler} />    
  }

  /* now, we only have functions here to manage the states. */

  return (
      <div className="App">
      <Cockpit 
        showPersons={personsState.showPersons} 
        persons={personsState.persons}
        clicked={togglePersonHandler}
        deleted={deletePersonHandler} />

        {persons}
{/*
        <UserInput userName={usernameState.username} changed={(event) => userNameChangedHandler(event)}/>
        <Validation inputLength={usernameState.username.length} />
*/}
      </div>
    );
}

export default App;