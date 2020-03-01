import React from 'react';

const userOutput = (props) => {
    return (
      <div>
          <p>Username: {props.userName}, Length: {props.length}</p>
          <p>Paragraph 2</p>
      </div>  
    );
}

export default userOutput;