import React from 'react'
import {NavLink } from 'react-router-dom'

function NavBarHW() {
    return (
        // prettier-ignore
        <nav className="sidenav HWNav">
        <ul>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">
        Home
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/homeWork/tempHW">
        Temp Comp
        </NavLink>
        </li>
        </ul>
        </nav>
        );
}
export default NavBarHW