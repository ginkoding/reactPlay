import React, { useState } from 'react'
import NavBarCP from '../NavBarCP';


function Project35_JustForms() {
  const [state, setState] = useState({ name: '', email: '' });
  const [btnState, setBtnState] = useState(true);

  const handleChange = (e) => {
  let updatedValue = {};

  if (e.target.name === 'name') {
    updatedValue ={ name: e.target.value };
  }
  else {
    updatedValue = { email: e.target.value };
  }

  setState((s) => ({...s, ...updatedValue}));

  setBtnState(
    (b) => (b = state.name != '' && state.email != '' ? false : true)
  );
  }

  const createName = (e) => {
    e.preventDefault();
    alert(`Hello ${state.name} & your email is: ${state.email}`);
    setState((s) => (s = { name: '', email: '' }));
      setBtnState(true);
    }
  


  return (
    <div className="app-container">
      <NavBarCP />
        <div className="content" >

        <h1>Forms</h1>
        <p>
          More in-depth form practice. 
        </p>
          <form onSubmit={createName}>
            <label htmlFor="name">Name</label> <br />
            <input
            type="text"
            value={state.name}
            name="name"
            id="name"
            onChange={handleChange}
      />

      <br />

            <label htmlFor="email">Email Address</label> <br />
            <input
            type="email"
            value={state.email}
            name="email"
            id="email"
            onChange={handleChange}
          />

          <button type='submit' disabled={btnState}>
            Submit
          </button>
        </form>

        <h3>Your Name is: {state.name}</h3>

          </div>
      </div>
  );
  }


export default Project35_JustForms