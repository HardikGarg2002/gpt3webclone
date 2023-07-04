import React from 'react'
import { Navbar } from '../../components/Components'
import ai from '../../assets/ai.png'
import './header.css'

function Header() {
  return (
    <div>
      <div className='inline-block'></div>
      <img src={ai}/>
    </div>
  )
}

export default Header
