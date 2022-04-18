import React from 'react';

import { NavLink } from 'react-router-dom';



function App() {
  return (
    <div className="content">
      <h1>HomePage</h1>

      <nav className="homePageNav">
      <ul>
<li>
  <NavLink
    className={({ isActive }) => (isActive ? 'activeLink' : '')}
    to="/classMaterial/TempCM"
  >
    Introduction
  </NavLink>
</li>
<li>
  <NavLink
    className={({ isActive }) => (isActive ? 'activeLink' : '')}
    to="/classProjects/TempCP"
  >
    Class Projects
  </NavLink>
</li>
</ul>
      </nav>
    </div>
  );
}

export default App;
