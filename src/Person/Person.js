import React from 'react';

import './Person.css';
import Validation from '../Validation/Validation';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>Hi, I'm {props.name}! I am {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />      <Validation inputLength={props.name.length} />
    </div>
  );
}

export default person;
