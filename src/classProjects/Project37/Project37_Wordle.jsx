import React, { useState } from 'react'
import NavBarCP from '../NavBarCP';

import Project37_GameScreen from './Project37_GameScreen';
import Project37_LoadScreen from './Project37_LoadScreen';
import './Project37_style.css'


function Project37_Wordle() {
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
        <Project37_LoadScreen updateWordle={updateWordle}/> : 
        <Project37_GameScreen wordle={wordle} updateWordle={updateWordle} />}
            


        </div>
        </div>
  )
}

export default Project37_Wordle