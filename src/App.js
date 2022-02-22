import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/categories';
import NavBar from './components/naviBar';
import BookContainer from './components/books/bookContainer';

function App() {
  return (
    <Router>
      <NavBar />
      <div id="main" className="main d-flex col">
        <Routes>
          <Route
            path="/"
            element={(
              <BookContainer />
            )}
          />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
