import React from 'react';

const nameValidator = (props) => {
    
    return props.isValid ? null : <p className="name-validator">{props.message}</p>
}

export default nameValidator;
