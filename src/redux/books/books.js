import { getBooks } from '../../api/api';

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

export const getBooksAction = () => async (dispatch) => {
  const books = await getBooks();

  dispatch({
    type: GET_BOOKS,
    playload: handleData(books),
  });
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  playload: {
    title: book.title,
    category: book.category,
    id: book.id,
  },
});

export const removeBook = (playload) => ({
  type: REMOVE_BOOK,
  playload,
});

export const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.playload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.playload);
    case GET_BOOKS:
      return action.playload;
    default:
      return state;
  }
};
