import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const submiteBookToStore = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const title = e.target.title.value;
    const category = e.target.category.value;
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
    <div className="formContainer d-flex col start">
      <div className="formTitle  mon bold">ADD NEW BOOK</div>
      <form id="newBookForm" className="d-flex" onSubmit={submiteBookToStore}>
        <input type="text" placeholder="Title" name="title" className="mon" required />
        <select type="text" placeholder="Category" name="category" id="category" className="mon" required>
          <option value="" selected disabled hidden>Choose Category</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
          <option value="Economy">Economy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Documentary">Documentary</option>
        </select>
        <button type="submit" className="click">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
