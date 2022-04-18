// import React from 'react'
import React, { useState } from 'react';

import NavBarCP from '../NavBarCP';

function Project33State() {

    const [colourState, setColourState] = useState('deeppink');

    const updateColour = () => {
        setColourState(() => (colourState === 'deeppink' ? 'purple' : 'deeppink'))
    }


    return (
        <div className="app-container">
        <NavBarCP />
            <div className="content">
                <h1>Project 33</h1>
                <p>
                    Click the rectangle to see onClick updates. 
                </p>
        <div style={{
            backgroundColor: colourState, 
            height: '50vh', 
            width: '50vw',
            margin: 'auto',
            paddingTop: '70px',
            cursor: 'pointer',
        }}
        onClick={updateColour}
        >Click in here!</div>
    </div>
    </div>
    )
    
    }

export default Project33State