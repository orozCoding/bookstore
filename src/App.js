import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './redux/books/books';
import Categories from './redux/categories/categories';
import Form from './components/form';
// eslint-disable-next-line import/extensions
import NavBar from './components/navBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main d-flex col">
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Books />
                <Form />
              </>
            )}
          />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
