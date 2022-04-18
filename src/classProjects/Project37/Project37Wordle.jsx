import React, { useState } from 'react'
import NavBarCP from '../NavBarCP';

import Project37GameScreen from './Project37GameScreen';
import Project37LoadScreen from './Project37LoadScreen';
import './Project37_style.css'


function Project37Wordle() {
    //Toggle between loadscreen and gamescreen
    const [loadScreen, setLoadScreen] = useState(true)

    //Wordle Word
    const [wordle, setWordle] = useState('')

    const updateWordle = (w) =>{
            setWordle (w)
            setLoadScreen (!loadScreen)
    }


  return (
    <div className="app-container">
    <NavBarCP />
    <div className="content" >
        <h1>Wordle</h1>
        {loadScreen ? 
        <Project37LoadScreen updateWordle={updateWordle}/> : 
        <Project37GameScreen wordle={wordle} updateWordle={updateWordle} />}
            


        </div>
        </div>
  )
}

export default Project37Wordle