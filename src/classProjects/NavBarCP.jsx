import React from 'react'
import {NavLink } from 'react-router-dom'

function NavBarCP() {
  return (
        // prettier-ignore
        <nav className="sidenav CPNav">
        <ul>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">
        Home
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/Project31/Project31_Form">
        Project 31 Practice
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/project31/MyForm">
        Project 31 - Form
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/project32/ParentComp">
        Project 32 - Parent/Child
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/Project33/Project33_State">
        Project 33 - State
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/Project34/Project34_useEffect">
        Project 34 - Use Effect
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/Project34/Project34_useEffectAPI">
        Project 34 - Use Effect with an API
        </NavLink>
        </li>
        </ul>
        </nav>
        );
}

export default NavBarCP