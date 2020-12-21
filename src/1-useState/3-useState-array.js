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

  const complexIncrease = (id, name) => {
    setTimeout(() => {
      setPeople((prevPeople) => {
        return prevPeople.concat({ id: id, name: name });
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
      <button onClick={() => complexIncrease(people.length + 1, "name" + (people.length + 1))}>complexIncrease</button>
      <button onClick={() => addItem(people.length + 1, "name" + (people.length + 1))}>add</button>

      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
