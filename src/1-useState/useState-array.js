import React from 'react';
import { data } from '../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const addItem = (id, name) => {
    let newPeople = people.concat({ id: id, name: name });
    setPeople(newPeople);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setPeople((prevPeople) => {
        return prevPeople.concat({ id: prevPeople.length + 1, name: "name" + (prevPeople.length + 1) });
      });
    }, 5000);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{id}</h4>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn mr-2' onClick={() => complexIncrease()}>complexIncrease</button>
      <button className='btn mr-2' onClick={() => addItem(people.length + 1, "name" + (people.length + 1))}>add</button>
      <button className='btn mr-2' onClick={() => setPeople([])}>clear items</button>
    </>
  );
};

export default UseStateArray;
