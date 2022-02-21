import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../../redux/books/books';
const dispatch = useDispatch();

const submiteBookToStore = () => {
  const newBook = {
    
  }
}


const Form = () => (
  <form>
    <input type="text" placeholder="Title" name="title" />
    <input type="text" placeholder="Author" name="author" />
    <button type="submit">Add Book</button>
  </form>
);

export default Form;
