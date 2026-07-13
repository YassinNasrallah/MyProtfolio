import React from 'react'
import Aboutme from '../components/about/Aboutme'
import Navigation from '../components/navigation/Navigation'
import '../style/About.css'
const About = () => {
  return (
    <div className='about-container'>
        <Navigation />
       <Aboutme />
    </div>
  )
}

export default About
