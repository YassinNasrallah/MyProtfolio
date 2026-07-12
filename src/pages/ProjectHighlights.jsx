import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Aboutproject from '../components/about/Aboutproject'
import '../style/projectssection.css'
const ProjectHighlights = () => {
  return (
    <div className='project-container'>
       <Navigation />
       <Aboutproject />
    </div>
  )
}

export default ProjectHighlights
