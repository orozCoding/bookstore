import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './redux/books/books';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="main d-flex col">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
