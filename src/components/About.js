import React, {useEffect, useState} from 'react'
import FunctionBasedCard from "./FunctionBasedCard"
import ClassBasedCard from "./ClassBasedCard"

// Video paused at Vid 9 - 1:07 hours remaining 
export default function About() {

  const [i, setI] = useState(1);
  const [j, setJ] = useState(1) 

  useEffect( () => {
    console.log("Use Effect called! " + i);
  })

  

  return (
    <div>
      <h1>About Us</h1>
      <p>This is about us page</p>

      <button onClick={() => {
        let temp = i + 1;
        setI(temp)
      }}>Increse I</button>

<button onClick={() => {
        let temp2 = j + 1;
        setJ(temp2)
      }}>Increse J</button>
      
      {/* This is a function based component with props  */}
      {/* <FunctionBasedCard name={"Ruchik Joshi"} location={"Berlin"} /> */}

      
      {/* This is a class based component with props  */}
      <ClassBasedCard  name={"Joshi Ruchik"} login={"Bhuj"} />
    </div>
  )
}
