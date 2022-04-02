import React from 'react'

import NavBarCM from './NavBarCM'

function Temp_CM() {
  return (
  <div className="app-container">
  <NavBarCM />
  <div className="content">
  <h1>React Introduction</h1>
  <h3>'Well Done! <br />
  We created our first React Componant!'</h3>

  <p>A small site used to practice a demonstrate skills learned at Purple Beard under the
    Front End Development course. 
    <br />
    <br />
    The class projects pages feature small tasks which increased in difficulty throughout the course. Some built as homework outside of class lessons and some built in code-along sessions with a tutor. 
    </p>

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