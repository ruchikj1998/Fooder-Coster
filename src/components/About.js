import React from 'react'
import FunctionBasedCard from "./FunctionBasedCard"
import ClassBasedCard from "./ClassBasedCard"

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is about us page</p>

      <FunctionBasedCard name={"Ruchik Joshi"} location={"Berlin"} />

      

      <ClassBasedCard  name={"Joshi Ruchik"} location={"Bhuj"} />
    </div>
  )
}
