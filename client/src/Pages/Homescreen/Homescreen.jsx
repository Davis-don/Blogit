import React from 'react'
import Header from '../../Layout/Header/Header'
import './homescreen.css'
import Hero from '../../Components/LandingPageHero/Hero'

function Homescreen() {
  return (
    <div className='overall-homescreen-container'>
        <Header/>
        <Hero/>
        </div>
  )
}

export default Homescreen