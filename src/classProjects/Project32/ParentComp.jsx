import React from 'react'

import ChildComp from './ChildComp';
import NavBarCP from '../NavBarCP';

function ParentComp() {
    let heading = 'From the parent'

    const func1 = () => {
        return 4 * 4;
    };

    return (
        <div className="app-container">
        <NavBarCP />
        <div className="content">
        <h1>Parent</h1>
        <ChildComp varHeading ={heading} func1 = {func1}/>
        </div>
        ;
        </div>
        );
}

export default ParentComp