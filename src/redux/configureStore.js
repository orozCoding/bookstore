import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer as booksReducer } from './books/books';

const reducer = combineReducers({
  books: booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
