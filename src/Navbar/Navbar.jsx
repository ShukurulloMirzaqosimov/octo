import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className="first_row">
        <div className="basa">
            <p><MdEmail className='icon'/> info@company.com</p>
            <p><FaMap className='icon'/> Sunny Isles Beach, FL 33160 </p>
        </div>

        <div className="icons">
            <CiFacebook className='socials'/>
            <CiTwitter className='socials'/>
            <FaLinkedin className='socials'/>
            <RiInstagramLine className='socials'/>
        </div>
      </div>



    <div className="second_row">
        <h1>VILLA</h1>

        <ul>
            <li>Home</li>
            <li>Properties</li>
            <li>Property Details</li>
            <li>Contact Us</li>
            <button>Schedule a visit</button>
            <FaCalendar  className='calendar'/>
        </ul>
    </div>

    </div>
  )
}

export default Navbar
