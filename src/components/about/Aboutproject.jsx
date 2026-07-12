import React from 'react'
import Json from '../../assest/json.png'
import projectimage from '../../assest/projectimage.png'
import playerscript from '../../assest/playerscript.png'
import tilemap from '../../assest/tilemap.png'
import enemy from '../../assest/enemy.png'
const Aboutproject = () => {


  return (
    <section className='About-project'>
      <span className='project-tag'>Game Development</span>

      <h1>Building a 2D Pixel RPG in Godot</h1>

      <img src={projectimage} alt="" />

      <p className='project-description'>
        This is my personal game development project where I design and
        build a 2D pixel-art RPG from scratch using the Godot Engine.
        The goal is to improve my programming skills while learning game
        architecture, gameplay systems, and software design.
      </p>

      <div className='project-highlights'>
        <div className='highlight'>
          <h3>Dialogue System</h3>
          <p>
            Built a reusable JSON-based dialogue system that allows NPCs
            to display conversations without hardcoding text into scripts.
          </p>

          <img src={Json} alt="" />
          <img src="" alt="" />
        </div>

        <div className='highlight'>
          <h3>NPC Interaction</h3>
          <p>
            Created an interaction system where players can communicate
            with NPCs and trigger events throughout the world.
          </p>
        </div>

        <div className='highlight'>
          <h3>Enemy AI</h3>
          <p>
            Implemented enemy detection, movement, and combat behavior
            using Godot's physics and Area2D nodes.
          </p>
          <img src={enemy} alt="" />
        </div>

        

        <div className='highlight'>
          <h3>Player Controller</h3>
          <p>
            Developed a smooth movement system with animations,
            collision handling, and responsive player controls.
          </p>

          <img src={playerscript} alt="" />
        </div>

        <div className='highlight'>
          <h3>Learning Journey</h3>
          <p>
            This project represents my transition from web development
            into game development, applying programming concepts to
            create a complete playable experience.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Aboutproject