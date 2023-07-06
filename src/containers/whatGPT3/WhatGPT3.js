import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components/Components'
function WhatGPT3() {
  return (
    <div className='whatGPT3 flex'>
      <div>
        <Feature heading='What is GPT-3' para='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
      </div>
      <div className='middle'>
        <h2 className='gradient-text'>The possibilities are beyond your imagination</h2>
        <p className='gradient-text'>Explore The Library</p>
      </div>
      <div className='flex'>
        <Feature heading='Chatbots' para='We so opinion friends me message as delight. Whole front do of plate heard oh ought. ' direction='column'/>
        <Feature heading='Knowledgebase' para='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' direction='column'/>
        <Feature heading='Education' para='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' direction='column'/>
      </div>
    </div>
  )
}

export default WhatGPT3
