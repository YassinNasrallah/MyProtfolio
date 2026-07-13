import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Herocontent from '../components/Hero/Herocontent'
import Aboutcontent from '../components/about/Aboutcontent'
import '../style/Main.css'
import Projectssection from '../section/Projectssection.jsx'

const Home = () => {
  return (
    <div className='main-container'>
        <Navigation />
        <Herocontent />
        <Aboutcontent />
        <Projectssection />

    </div>
  )
}

export default Home
