import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="d-flex">
    <p className="navBarLogo">Bookstore</p>
    <nav className="navBar">
      <ul>
        <li key={1}>
          <NavLink to="/" className={(navData) => (navData.isActive ? 'activeLink' : 'none')}>Books</NavLink>
        </li>
        <li key={2}>
          <NavLink to="/Categories" className={(navData) => (navData.isActive ? 'activeLink' : 'none')}>Categories</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
