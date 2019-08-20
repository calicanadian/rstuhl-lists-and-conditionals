import React from 'react';

const validation = (props) => {
  return (
    <div>
      <input style={props.style} type='text' onChange={props.change} />
      <pre><p>{props.output}&nbsp;&nbsp;&nbsp;{props.count}</p></pre>
    </div>
  )
}

export default validation;
