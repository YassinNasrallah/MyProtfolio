import React from 'react'
import projectimage from '../../assest/projectimage.png'
import projectsetting from '../../assest/projectsetting.png'
const Projectimage = () => {
  return (
    <div className='left-side'>
      <img src={projectimage} alt="" />
      <img src={projectsetting} />
    </div>
  )
}

export default Projectimage
