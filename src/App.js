import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/books/books';
import Categories from './components/categories';
import Form from './components/books/form';
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
