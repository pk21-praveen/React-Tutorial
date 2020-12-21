import React from 'react';
import ErrorExample from './1-useState/1-error-example';
import UseStateBasics from './1-useState/2-useState-basics';
import UseStateArray from './1-useState/3-useState-array';
import UseStateObject from './1-useState/4-useState-object';
import UseStateCounter from './1-useState/5-useState-counter';

function App() {
  return (
    <div>
      <h2 className="ml-5 mt-3">React Tutorial</h2>
      <div className='container mt-3'>
        <section className='border border-primary my-2 p-2'>
          <h6><u>Wrong UseState</u></h6>
          <ErrorExample />
        </section>
        <section className='border border-primary my-2 p-2'>
          <h6><u>Correct UseState</u></h6>
          <UseStateBasics />
        </section>
        <section className='border border-primary my-2 p-2'>
          <h6><u>UseState for Array</u></h6>
          <UseStateArray />
        </section>
        <section className='border border-primary my-2 p-2'>
          <h6><u>UseState for Object</u></h6>
          <UseStateObject />
        </section> <section className='border border-primary my-2 p-2'>
          <h6><u>UseState Counter</u></h6>
          <UseStateCounter />
        </section>
      </div>
    </div>
  );
}

export default App;

