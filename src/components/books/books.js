import React from 'react';
import booksList from './bookList';
import Book from './book';

const Books = () => (
  <ul>
    {
    booksList.map((book) => (
      <Book key={book.id} book={book} />
    ))
  }
  </ul>
);

export default Books;
