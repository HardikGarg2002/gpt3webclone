import React from 'react'
import brand1 from '../../assets/brandImg/brand1.png'
import brand2 from '../../assets/brandImg/brand2.png'
import brand3 from '../../assets/brandImg/brand3.png'
import brand4 from '../../assets/brandImg/brand4.png'
import brand5 from '../../assets/brandImg/brand5.png'
import './brand.css'
export default function Brand() {
  return (
    <div className='flex brand'>
      <img src={brand1} />
      <img src={brand2} />
      <img src={brand3} />
      <img src={brand4} />
      <img src={brand5} />
    </div>
  )
}
