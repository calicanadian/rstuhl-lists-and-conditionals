import React from 'react';

const validation = (props) => {
  return (
    <div>
      <input style={props.style} type='text' onChange={props.change} />
      <p>{props.output}</p>
    </div>
  )
}

export default validation;
