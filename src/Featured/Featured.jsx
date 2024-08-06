import React from 'react'
import './Featured.css'
import chair from './chair.png'
import category from './category.png'
const Featured = () => {
  return (
    <div className='container_featured'>
      <div className="left_side">
        <img className='chair_left'  src={chair} alt="" />
      </div>

    <div className="beetween">
      <h3 className='section_featured_h3'> | Featured </h3>
      <h1 className='section_featured_h1'>Best <br /> Appartment & <br /> Sea View</h1>

      <p className='section_featured_p' >Best useful links ?</p>
      <hr className='string' />

      <h4 className='section_featured_h4'>
        Get <span className='span1'>the best villa</span> website template in HTML CSS <br />  and Bootstrap for your business. TemplateMO <br /> provides you the <span className='span2'>best free CSS templates </span> in the world. <br />  Please tell your friends about it.
      </h4>

      <h5 className='section_featured_h5'>How does this work ?</h5> 

      <hr className='hrr2' />
      <h5 className='section_featured_h5'>Why is Villa agency the best ?</h5>
    </div>


      <div className="right_side">
        <img src={category} alt="" />
      </div>
    </div>
  )
}

export default Featured
