// import React from 'react'
import React, { useState } from 'react';

import NavBarCP from '../NavBarCP';

function Project33_State() {

    const [colourState, setColourState] = useState('tomato');

    const updateColour = () => {
        setColourState(() => (colourState === 'tomato' ? 'green' : 'tomato'))
    }


    return (
        <div className="app-container">
        <NavBarCP />
            <div className="content">
                <h1>Project 33</h1>
        <div style={{
            backgroundColor: colourState, 
            height: '50vh', 
            width: '50vw',
        }}
        onClick={updateColour}
        ></div>
    </div>
    </div>
    )
    
    }

export default Project33_State