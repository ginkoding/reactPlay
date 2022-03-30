import React from 'react'

import ChildComp from './ChildComp';
import NavBarCP from '../NavBarCP';

function ParentComp() {
    let heading = 'Text sent from the parent. Below is a mathmathical function sent from the parent too!'

    const func1 = () => {
        return 4 * 4;
    };

    return (
        <div className="app-container">
        <NavBarCP />
        <div className="content">
        <h1>Parent</h1>
        <p>
            Practice in passing information in one direction - parent to child.
        </p>
        <br />
        <ChildComp varHeading ={heading} func1 = {func1}/>
        </div>
        ;
        </div>
        );
}

export default ParentComp