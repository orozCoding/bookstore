import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const submiteBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: e.target.title.value,
      author: e.target.author.value,
    };
    dispatch(addBook(newBook));
  };
  return (
    <form onSubmit={(e) => submiteBookToStore(e)}>
      <input type="text" placeholder="Title" name="title" />
      <input type="text" placeholder="Author" name="author" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Form;
