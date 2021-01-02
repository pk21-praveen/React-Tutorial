import React from 'react';
import UseStateBasics from './useState-basics';
import UseStateArray from './useState-array';
import UseStateObject from './useState-object';
import UseStateCounter from './useState-counter';

const UseStateApp = () => {
 return (
  <div>
   <h2 className="ml-5 mt-3">UseState Basics</h2>
   <div className='container mt-3'>
    <section className='border border-primary my-2 p-2'>
     <h6><u>UseState Basics</u></h6>
     <UseStateBasics />
    </section>
    <section className='border border-primary my-2 p-2'>
     <h6><u>UseState Array</u></h6>
     <UseStateArray />
    </section>
    <section className='border border-primary my-2 p-2'>
     <h6><u>UseState Object</u></h6>
     <UseStateObject />
    </section> <section className='border border-primary my-2 p-2'>
     <h6><u>UseState Counter</u></h6>
     <UseStateCounter />
    </section>
   </div>
  </div>
 );
};

export default UseStateApp;
