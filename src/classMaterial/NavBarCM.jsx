import React from 'react'
import {NavLink } from 'react-router-dom'

function NavBarCM() {
  return (
        // prettier-ignore
        <nav className="sidenav CMNav">
        <ul>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">
        Home
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classMaterial/tempCM">
        Temp Comp
        </NavLink>
        </li>
        </ul>
        </nav>
        );
}

export default NavBarCM