import React from 'react'

const Book = ({ id, name }) => {

 const clickHandler = () => alert(name);

 return (
  <div>
   {id}-{name}
   <button onClick={clickHandler}>Name</button>
  </div>
 );
}

export default Book 
