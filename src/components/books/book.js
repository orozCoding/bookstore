import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const { id, title, category } = book;
  const dispatch = useDispatch();

  const removeBookFromStore = (e) => {
    const { id } = e.target;
    dispatch(removeBook(id));
  };

  return (
    <li key={id} className="bookLi d-flex">
      <div className="bookInfoContainer d-flex col">
        <div className="bookCoreInfo d-flex col">
          <div><p>{category}</p></div>
          <div><p>{title}</p></div>
          <div><p>Author</p></div>
        </div>
        <div className="bookInfoActions d-flex">
          <div>Comments</div>
          <button type="button" name="removeBookButton" id={id} onClick={removeBookFromStore}>Remove</button>
          <div>Edit</div>
        </div>
      </div>
      <div className="bookProgressContainer d-flex">
        <div className="bookStats d-flex">
          <div className="bookStatsCircle">Circle</div>
          <div className="bookStatsMetricsContainer d-flex col">
            <div className="bookStatsMetricsNumber">64%</div>
            <div className="bookStatsMetricsStatus">Completed</div>
          </div>
        </div>
        <div className="bookChapterContainer d-flex col">
          <div><p>CURRENT CHAPTER</p></div>
          <div><p>Chapter 17</p></div>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
