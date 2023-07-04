import React from 'react'
import ai from '../../assets/ai.png'
import './header.css'
import people from '../../assets/people.png'
function Header() {
  return (
    <div className='header flex'>
      <div >
        <h1>Let’s Build Something
        amazing with GPT-3
        OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <form>
          <input type='email' placeholder='Your Email Address'/>
          <div className='button buttonType-2 inline-block'>Get Started</div>
        </form>
        <img src={people}/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
      <img src={ai} alt='ganja ai'/>
    </div>
  )
}

export default Header
