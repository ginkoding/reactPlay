import React from 'react'
import {NavLink } from 'react-router-dom'

function NavBarCP() {
  return (
        // prettier-ignore
        <nav className="sidenav CPNav">
        <ul>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/App">
        Home
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/Project31/Project31Form">
        Project 31 - Prime React
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/project32/ParentComp">
        Project 32 - Parent/Child
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/Project33/Project33State">
        Project 33 - State
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/Project34/Project34UseEffect">
        Project 34A - Use Effect
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/Project35/Project35FormAndEvents">
        Project 35A - Events
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/Project35/Project35JustForms">
        Project 35B - Forms
        </NavLink>
        </li>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/Project36/Project36ToDoApp">
        Project 36 - To-Do App
        </NavLink>
        </li> 
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/classProjects/Project37/Project37Wordle">
        Project 37 - Wordle
        </NavLink>
        </li> 
        </ul>
        </nav>
        );
}

export default NavBarCP