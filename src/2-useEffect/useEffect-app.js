import React from 'react';
import UseEffectBasics from './useEffect-basics';
import UseEffectCleanup from './useEffect-cleanup';
import UseEffectFetchData from './useEffect-fetch-data';


const UseEffectApp = () => {
 return (
  <div>
   <h2 className="ml-5 mt-3">UseEffect Basics</h2>
   <div className='container mt-3'>
    <section className='border border-primary my-2 p-2'>
     <h6><u>UseEffect Basics</u></h6>
     <UseEffectBasics />
    </section>
    <section className='border border-primary my-2 p-2'>
     <h6><u>UseEffect Cleanup</u></h6>
     <UseEffectCleanup />
    </section>
    <section className='border border-primary my-2 p-2'>
     <h6><u>UseEffect FetchData</u></h6>
     <UseEffectFetchData />
    </section>
   </div>
  </div>
 );
};

export default UseEffectApp;
