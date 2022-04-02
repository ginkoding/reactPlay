import React from 'react'
import nextId from 'react-id-generator';



function Project37_GuessedRow(props) {

    const tempText = []

    props.guessedWordle.checks.map((l, i) => {
        let classAssign  
        if (l === 'exists' ){
            classAssign = 'existsLetter'
        } else if (l) {
            classAssign = 'trueLetter'
        } else {
            classAssign = 'falseLetter'
        }
        
        tempText.push(
            <span className={'letter ' + classAssign} key={nextId}>
                {props.guessedWordle.guess[i]}
            </span>
        )
    })

  return (


    <div className='guessRows' id={props.guessedWordle.key}> 
        {tempText}
    
    </div>


  )
}

export default Project37_GuessedRow