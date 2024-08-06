import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Featured from './Featured/Featured'
import Video from './Video/Video'
import Deal from './Deal/Deal'
import Properties from './Properties/Properties'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Featured/>
      <Video />
      <Deal/>
      <Properties/>
    </div>
  )
}

export default App