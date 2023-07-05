import React from 'react'
import './featureSection.css'
import { Feature } from '../../components/Components'

function FeaturesSection() {
  return (
    <div className='features flex'>
      <div>
        <h2>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
        <p>Request Early Access to Get Started</p>
      </div>
      <div>
        <Feature heading='Improving end distrusts instantly ' para='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.' />
        <Feature heading='Become the tended active' para='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.' />
        <Feature heading='Message or am nothing' para='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.' />
        <Feature heading='Request Early Access to Get Started' para='The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.' />
      </div>
    </div>
  )
}

export default FeaturesSection
