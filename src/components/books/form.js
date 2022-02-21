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
    e.target.title.value = '';
    e.target.author.value = '';
  };
  return (
    <form onSubmit={submiteBookToStore}>
      <input type="text" placeholder="Title" name="title" />
      <input type="text" placeholder="Author" name="author" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Form;
