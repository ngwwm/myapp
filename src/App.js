import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  });


  console.log(personsState);

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DONT'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({    
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]    
    })
  };
 
  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]    
    })    
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
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;
  
  if (personsState.showPersons) {
    persons = (
    <div>
      {personsState.persons.map((person, index) => {
        return <Person name={person.name} age={person.age} click={() => deletePersonHandler(index)} />
      })}
  </div>)
  }

  return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style}
          onClick={togglePersonHandler}>Toggle Name</button>          
        <button style={style}
          onClick={deletePersonHandler}>Delete Name</button>          
        {persons}
        
         <UserInput userName={usernameState.username} />
         <UserOutput userName={usernameState.username} />
      </div>
    );

}
export default App;
