import React, { useState} from 'react'

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function Project37LoadScreen(props) {
 const [inputWordle, setInputWordle] = useState('')

  return (
    <div>
            
        <label htmlFor="task">Enter your 5-letter word for someone else to guess.</label>
        <br />
        <br />
                    <InputText
                    required
                    id="wordle"
                    value={inputWordle}
                    maxLength='5'
                    onChange={(e) => setInputWordle(e.target.value.toUpperCase())}
                />
                    <Button id='taskSubmit' 
                    label="Enter your word" 
                    className="p-button-raised p-button-help" 
                    disabled={inputWordle.length < 5}
                    onClick={() => props.updateWordle(inputWordle)}
                    />
            


        </div>

  )
}

export default Project37LoadScreen