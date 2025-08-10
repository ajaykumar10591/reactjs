import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to="/course">COURSES</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">My Places</NavLink>
      </li>
      <li>
        <NavLink to="/places/newplace">ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authentication</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;