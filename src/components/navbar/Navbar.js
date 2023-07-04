import React from 'react'
import GPT3 from '../../assets/GPT3.png'
import './navbar.css'
export default function Navbar() {


  return (
    
    <div className='flex navbar '>
      <ul className='flex'>
        <li> <img src={GPT3} /> </li>
        <li>Home</li>
        <li>What is GPT?</li>
        <li>Open Ai</li>
        <li>Case Studies</li>
        <li>Library</li>
      </ul>
      <div className='flex navbarButtons' >
        <button>SignIn</button>
        <button>SignUp</button>
      </div>
    </div>
    
      
  )
}
