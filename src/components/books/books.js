import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import { getBooksAction } from '../../redux/books/books';

const Books = () => {
  const booksList = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('running effect');
    dispatch(getBooksAction());
  }, []);
  console.log(booksList);
  return (
    <ul>
      {
        booksList.map((book) => <Book key={book.id} book={book} />)
      }
    </ul>

  );
};

export default Books;
