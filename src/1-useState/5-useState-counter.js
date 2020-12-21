import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 5000);
  };

  return (
    <>
      <section>
        <h3>counter</h3>
        <h1>{value}</h1>
        <button className='btn mr-2' onClick={() => setValue(value + 1)}>
          increase
        </button>
        <button className='btn mr-2' onClick={complexIncrease}>
          increase later
        </button>
        <button className='btn mr-2' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className='btn mr-2' onClick={reset}>
          reset
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
