import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header id="header" className="d-flex mon">
    <div id="headerContainer" className="d-flex">
      <p className="headerLogo">Bookstore CMS</p>
      <nav id="navBar" className="navBar">
        <ul id="pagesList" className="d-flex">
          <li key={1}>
            <NavLink to="/" className={(navData) => (navData.isActive ? 'activeLink' : 'none')}>BOOKS</NavLink>
          </li>
          <li key={2}>
            <NavLink to="/Categories" className={(navData) => (navData.isActive ? 'activeLink' : 'none')}>CATEGORIES</NavLink>
          </li>
        </ul>
      </nav>
      <i className="bi bi-person-circle click userLogo" />
    </div>
  </header>
);

export default NavBar;
