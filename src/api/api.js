const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/u3O07q7IoKorYetrv7Bf/books';

const fetchBooks = (api) => {
  const movie = fetch(api)
    .then((response) => response.json())
    .then((data) => data);
  return movie;
};

const getBooks = async () => fetchBooks(api);

export default getBooks;
