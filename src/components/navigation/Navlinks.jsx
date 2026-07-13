import React from 'react'
import {Link} from 'react-router-dom';

const Navlinks = () => {
  return (
    <nav>
        <ul>
            <Link to='/'>Home</Link>
            <a href="https://github.com/YassinNasrallah" target="_blank">Github</a>
            <li className='list-item'>About</li>
            <li className='list-item'>Projects</li>
            
        </ul>
    </nav>
  )
}

export default Navlinks
