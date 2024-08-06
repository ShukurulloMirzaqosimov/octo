import React from 'react'
import './Hero.css'
import bg from './villa_bg.avif'

const Hero = () => {
  return (
    <div>
      <img className='bg'  src={bg} alt="" />
      <div className="content">
        <button className='locate'>Toronto, <span className='location_of_villa'>Canada</span></button>
        <h1 className='main'>HURRY! <br /> GET THE BEST <br /> VILLA FOR YOU</h1>
      </div>
      <div className="finally">
      <div className="dotted1"></div>
      <div className="dotted2"></div>
      <div className="dotted3"></div>
      </div>
    </div>
  )
}

export default Hero
