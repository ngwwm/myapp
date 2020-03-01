import React from 'react';

const Validation = (props) => {
    
    let message = "";

    if (props.inputLength < 5) {
        message = (
            <div>
                <p>Validation Message: Text is too short, Length: {props.inputLength}</p>
            </div>  
        )
    } else {
        message = (
            <div>
                <p>Validation Message: Text is long enough, Length: {props.inputLength}</p>
            </div>  
        )

    }
        
    return (
        <div>
            {message}
        </div>
    );
}

export default Validation;