import React from 'react'

function ChildComp(props) {
  console.log(props);
  return (
    <div>
      {props.varHeading}
      <br />
      {props.func1()}
    
    </div>
  )
}

export default ChildComp