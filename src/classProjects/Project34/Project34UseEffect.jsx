
import React, { useEffect, useState} from 'react';
import NavBarCP from '../NavBarCP';

function Project34UseEffect() {
const [button, setButton] = useState(true);





useEffect(() => {
    alert('Hello Everyone!');
});



const changeButton = () => {
    setButton(!button);
};



    return (
        <div className="app-container">
        <NavBarCP />
            <div className="content">
                <h1>Use Effect</h1>

                <p>
                    Practice using alerts and changing the state of the page. 
                </p>

<button onClick={changeButton}> Change State </button>

            </div>
            </div>
  )
}

export default Project34UseEffect