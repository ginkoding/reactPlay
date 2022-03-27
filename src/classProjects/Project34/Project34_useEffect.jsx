
import React, { useEffect, useState} from 'react';
import NavBarCP from '../NavBarCP';

function Project34_useEffect() {
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
<button onClick={changeButton}> Change State </button>

            </div>
            </div>
  )
}

export default Project34_useEffect