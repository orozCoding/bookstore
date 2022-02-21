import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  const { id, title, author } = book;
  return (
    <li key={id}>
      <div><p>{title}</p></div>
      <div><p>{author}</p></div>
      <button type="button">Remove</button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.bool.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
