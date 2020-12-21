import React, { useState } from 'react';
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0]; 
  // const handler = useState()[1];
  // console.log(value, handler);

  const [text, setText] = useState('Correct Example');

  const handleClick = () => setText(text === 'Correct Example' ? 'hello world' : 'Correct Example');

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
