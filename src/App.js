import React from 'react';

import { NavLink } from 'react-router-dom';



function App() {
  return (
    <div className="content">
      <h1>HomePage</h1>
      <a href="https://www.reactrouter.com/" target="_blank">
        React Router V6 Docs
      </a>
      <br />
      <br />
      <a
        href="https://ultimatecourses.com/blog/active-navlink-inline-styles-with-react-router"
        target="_blank"
      >
        Docs on NavLinks
      </a>
      <br />
      <br />
      <a href="https://youtu.be/k2Zk5cbiZhg" target="_blank">
        YouTube Video of Router V6
      </a>
      <nav className="homePageNav">
      <ul>
<li>
  <NavLink
    className={({ isActive }) => (isActive ? 'activeLink' : '')}
    to="/classMaterial/tempCM"
  >
    Class Material
  </NavLink>
</li>
<li>
  <NavLink
    className={({ isActive }) => (isActive ? 'activeLink' : '')}
    to="/classProjects/Temp_CP"
  >
    Class Projects
  </NavLink>
</li>
<li>
  <NavLink
    className={({ isActive }) => (isActive ? 'activeLink' : '')}
    to="/homeWork/tempHW"
  >
    Homework
  </NavLink>
</li>
</ul>
      </nav>
    </div>
  );
}

export default App;
