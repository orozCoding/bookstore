import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const { id, title, author } = book;
  const dispatch = useDispatch();

  const removeBookFromStore = (e) => {
    const { id } = e.target;
    dispatch(removeBook(id));
  };

  return (
    <li key={id}>
      <div><p>{title}</p></div>
      <div><p>{author}</p></div>
      <button type="button" name="removeBookButton" id={id} onClick={removeBookFromStore}>Remove</button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
