import React from 'react'

import NavBarCM from './NavBarCM'

function Temp_CM() {
  return (
  <div className="app-container">
  <NavBarCM />
  <div className="content">
  <h1>Well Done!</h1>
  <h3>We created our first React Componant!</h3>

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

  </div>
  ;
  </div>
  );
  
  
}

export default Temp_CM