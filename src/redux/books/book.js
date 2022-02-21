import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, title, author } = props;
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
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
