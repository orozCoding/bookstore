import { getBooks, postBook, deleteBook } from '../../api/api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const handleData = (data) => {
  const books = [];
  const entries = Object.entries(data);

  entries.forEach((book) => {
    const id = book[0];
    const { title, category } = book[1][0];
    const newBook = {
      id,
      title,
      category,
    };
    books.push(newBook);
  });
  return books;
};

const loadBooks = () => async (dispatch) => {
  const books = await getBooks();

  dispatch({
    type: GET_BOOKS,
    playload: handleData(books),
  });
};

const addBook = (book) => async (dispatch) => {
  const { id, title, category } = book;
  dispatch({
    type: ADD_BOOK,
    playload: { id, title, category },
  });
  await postBook(book);
};

const removeBook = (id) => async (dispatch) => {
  dispatch({
    type: REMOVE_BOOK,
    playload: { id },
  });
  await deleteBook(id);
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.playload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.playload.id);
    case GET_BOOKS:
      return action.playload;
    default:
      return state;
  }
};

export {
  addBook, removeBook, reducer, loadBooks,
};
