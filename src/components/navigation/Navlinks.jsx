import React from 'react'
import {Link} from 'react-router-dom';

const Navlinks = () => {
  return (
    <nav>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/bio'>About</Link>
            <a href="https://github.com/YassinNasrallah" target="_blank">Github</a>
            <li className='list-item'>Projects</li>
            
        </ul>
    </nav>
  )
}

export default Navlinks
