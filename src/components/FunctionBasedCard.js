import React from 'react'

export default function FunctionBasedCard({name, location}) {
  return (
    <div>
        <p>Function based component.</p>
      <h2>{name}</h2>
      <h4>Location : {location}</h4>
    </div>
  )
}
