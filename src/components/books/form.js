import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import { postBook } from '../../api/api';

const Form = () => {
  const dispatch = useDispatch();

  const submiteBookToStore = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const title = e.target.title.value;
    const category = e.target.category.value;
    postBook(id, title, category);
    const newBook = {
      id,
      title,
      category,
    };
    dispatch(addBook(newBook));
    e.target.title.value = '';
    e.target.category.value = '';
  };
  return (
    <form onSubmit={submiteBookToStore}>
      <input type="text" placeholder="Title" name="title" />
      <input type="text" placeholder="Category" name="category" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Form;
