import React from 'react'
import { books } from './books';
import Book from './Book';

const App = () => {
 return (
  <section >
   {books.map((book) => <Book key={book.id} {...book} />)}
  </section>
 );
}

export default App;
