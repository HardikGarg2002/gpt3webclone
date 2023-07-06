import React from 'react'
import './footer.css'
import gpt3 from '../../assets/GPT3.png'
function Footer() {
  return (
    <div className='footer'>
      <h1 className='gradient-text'>Do you want to step in to the future before others</h1>
      <div className='button center'><p>Request Early Access</p></div>
      <div className='footerBottom flex'>
        <div>
          <img src={gpt3} />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div>
          <ul>
            <li>Links</li>
            <li>Overons</li>
            <li>Social media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Company</li>
            <li>Terms Conditions</li>
            <li>Privacy Policy</li>
            <li>contact</li>
            
          </ul>
        </div>

        <div>
          <ul>
            <li>Get in Touch</li>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>adsdvgag</li>
            <li>lorem5@mjkfbgk</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
