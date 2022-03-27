import React, { useEffect, useState} from 'react';
import NavBarCP from '../NavBarCP';

function Project34_useEffect() {
const [button, setButton] = useState(true);






// let films, sourceUrl, videoGames;


// func1 = (e) => {
//    e.preventDefault()


// let getAllCharacters = 'https://api.disneyapi.dev'

// console.log (getAllCharacters)

// fetch(getAllCharacters)
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
//     films = data.name ;
//     sourceUrl = data.name ;
//     videoGames = data.name ;
// summary = `${films} has a video game called ${videoGames}`;
// document.querySelector('#response').innerHTML = summary;
   
// console.log (getAllCharacters)

// }







    return (
        <div className="app-container">
        <NavBarCP />
            <div className="content">

                <h1>Use Effect</h1>
                <input type="text" id="character" value="" placeholder="What Disney character do you want to know about?" />
                {/* <button onClick={func1}>Click Me</button> */}
                <p id="response"></p>

            </div>
            </div>
  )
    } 

export default Project34_useEffect