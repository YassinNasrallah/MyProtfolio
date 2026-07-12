import React from 'react'
import {Link} from  'react-router-dom'

const Rightside = () => {
  return (
    <div className="right-side">
  <h2>Project Highlights</h2>

  <ul>
    <li> Solo Indie Game Development</li>
    <li> Built with Godot Engine</li>
    <li> Gameplay programmed using GDScript</li>
    <li> Published on itch.io</li>
  </ul>

  <Link to="project-highlights">
      learn more
   </Link>
</div>
  )
}

export default Rightside
