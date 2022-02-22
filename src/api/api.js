const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/u3O07q7IoKorYetrv7Bf/books';

const fetchBooks = () => {
  const books = fetch(api)
    .then((response) => response.json())
    .then((data) => data);
  return books;
};

const postBook = async (book) => {
  const { id, title, category } = book;
  await fetch(api, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
      title,
      category,
    }),
  });
};

const deleteBook = async (id) => {
  await fetch(`${api}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
};

const getBooks = async () => fetchBooks();

export { getBooks, postBook, deleteBook };
