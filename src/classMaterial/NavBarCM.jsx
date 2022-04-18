import React from 'react'
import {NavLink } from 'react-router-dom'

function NavBarCM() {
  return (
        // prettier-ignore
        <nav className="sidenav CMNav">
        <ul>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/App">
        Home
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/tempCM">
        Links to relevant material
        </NavLink>
        </li>
        </ul>
        </nav>
        );
}

export default NavBarCM