import React, {useState} from 'react'
import NavBarCP from '../NavBarCP';

function Project35FormAndEvents() {

 const [backColour, setBackColour] = useState('Aquamarine')

  const updateColour = () => {
 let tempColour = backColour === 'Aquamarine' ? 'deeppink' : 'Aquamarine';
    setBackColour(tempColour);
  }

  const updateColour2 = (param) => {
    setBackColour(param);
  }

  return (
    <div className="app-container">
        <NavBarCP />
        <div className="content" >
        <div style={{ height: '80vh', backgroundColor: backColour }}>

        <h1>Events</h1>
        <p>
          Practice with events. Mouse enter on the image to change the colour, click the button to change the colour again. 
        </p>
<a href="https://reactjs.org/docs/events.html" target="blank">React Events Link</a>
<br />
<br />
<img
src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZmV0dGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
alt="wall"
width={'450px'}
onMouseEnter={updateColour}
/>
<br />
<br />
<button
onClick={() => {updateColour2('Chartreuse');
}}
>Click for party colour!!</button>

          </div>
        </div>
      </div>
  )
}

export default Project35FormAndEvents