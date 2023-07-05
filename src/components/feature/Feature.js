import React from 'react'
import './feature.css'
export default function Feature(props) {
  return (
    <div className={`feature flex ${props.direction}`} >
      <div>
        <div className='smallLine'></div>
        <h3>{props.heading}</h3>
      </div>
      
      <p>{props.para}</p>
    </div>
  )
}
