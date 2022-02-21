import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';

const Books = () => {
  const booksList = useSelector((state) => state.books);

  return (

    <ul>
      {
    booksList.map((book) => (
      <Book key={book.id} book={book} />
    ))
  }
    </ul>
  );
};

export default Books;
