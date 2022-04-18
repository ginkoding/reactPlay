import React, { useState } from 'react'
import nextId from 'react-id-generator';

import Project37GuessedRow from './Project37GuessedRow';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function Project37GameScreen(props) {
    //inputted word---------------------------------------------------
const [guessWordle, setGuessWordle] = useState('')


    // number of guesses-----------------------------------------------
    const [guesses, setGuesses] = useState(1)

    // wordle guess history--------------------------------------------
    const [guessHistory, setGuessHistory] = useState([])


    //check guess against wordle=======================================
    const checkWordle = () => {
        if (guessWordle === props.wordle) {
                alert(`Congratulations! You got ${guessWordle} on try number ${guesses}!`)
                props.updateWordle('')
        } else {
            updateGuesses() 
        }
    }


    //Guess is incorrect-----------------------------------------------------
const updateGuesses = () => {
    const tempChecks = []
    for (let i = 0; i < 5; i++) {
        if (props.wordle[i] === guessWordle[i]) {
            tempChecks.push(true)
            //correct letter in correct location
        } else if (props.wordle.includes(guessWordle[i])){
            tempChecks.push('exists')
            //correct letter in wrong location
        } else {
            tempChecks.push(false)
        //letter does not exist
        }
    }

    setGuessHistory(
        [
            ...guessHistory,
            {
                    key: guesses,
                    guess: guessWordle,
                    checks: tempChecks,
            }
        ]
    )

    setGuesses(guesses + 1)
    setGuessWordle('')
}

  return (
    <div id='gameScreen'>
        <div id='guessInput'>
        <label html='wordleGuess'> Enter Wordle guess number {guesses}</label>
        <br />
        <br />
        <InputText
        required
        id='wordleGuess'
        maxLength='5'
        value={guessWordle}
        onChange={(e) => setGuessWordle(e.target.value.toUpperCase())}
        />
        <Button
        label='Make a guess'
        id='wordleGuessSubmit'
        className='p-button-warning'
        disabled={guessWordle.length < 5}
        onClick={checkWordle}
        />
        {
            guessHistory.length ?
            guessHistory.map((gh) => (
                // eslint-disable-next-line 
            <Project37_GuessedRow guessedWordle={gh} key={nextId()}/> 
            ))
            :
            <div></div>
        }



    </div>
    </div>
  )
}

export default Project37GameScreen