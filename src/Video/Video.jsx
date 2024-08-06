import React from 'react'
import './Video.css'
import video from './video.png'
import bg from './for_bg.jpeg'
const Video = () => {
  return (
    <div>
        <img className='video_bg'  src={bg} alt="" />
    <div className="open">
      <h6 className='vieww'>| Video View</h6>
      <h6 className='video_section_ban'>Get Closer View & <br /> Different Feeling </h6>
      <img className='video'  src={video} alt="" />
    </div>

    <div className="three_cards">
        <div className="card1 cc">
            <h1>34</h1>
            <h6>Buildings <br />Finished Now </h6>
            <span className='qizil1'></span>
        </div>
        <div className="card2 cc">
            <h1>12</h1>
            <h6>Years <br />  Experience </h6>
            <span className='qizil2'></span>

        </div>
        <div className="card3 cc">
            <h1>24</h1>
            <h6>Awards <br />  Won 2023 </h6>
            <span className='qizil3'></span>

        </div>
    </div>


    </div>
  )
}

export default Video
