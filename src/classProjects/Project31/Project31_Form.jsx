import React from 'react'

import NavBarCP from '../NavBarCP';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function myForm() {
  return (
    <div className="app-container">
      <NavBarCP />
        <div className="content">
          <h1>Form</h1>
          <InputText placeholder='First Name'/>
          <br />
          <br />
          <InputText placeholder='Last Name'/>
          <br />
          <br />
          <Button label="Button" className="p-button-raised p-button-secondary" />
      </div>
    </div>
    );
}

export default myForm