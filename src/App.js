import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar.js';
import Books from './redux/books/books';
import Categories from './redux/categories/categories';
import Form from './components/form';

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
