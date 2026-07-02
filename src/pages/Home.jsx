import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Herocontent from '../components/Hero/Herocontent'
import Aboutcontent from '../components/about/Aboutcontent'


const Home = () => {
  return (
    <div className='main-container'>
        <Navigation />
        <Herocontent />
        <Aboutcontent />
    </div>
  )
}

export default Home
