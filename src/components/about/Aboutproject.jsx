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
            The dialogue system uses JSON files to store NPC conversations,
             keeping dialogue separate from the game logic.
              When the player enters an NPC's Detection Area (Area2D)
               and presses ui_accept, the dialogue manager loads the corresponding
                JSON file and displays each line in sequence. This approach makes
                 the system easy to maintain, reuse, and expand by adding new dialogue
                  without modifying the game code.
          </p>

          <img src={Json} alt="" />
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
            The enemy AI uses a player_chase variable to control its behavior.
             When the player enters the enemy's Area2D detection range,
              player_chase becomes true, causing the enemy to chase the player.
               Once the player is close enough, the enemy switches from chasing to attacking.
                To prevent the player from taking damage every frame,
                 a cooldown timer was implemented, ensuring the enemy attacks
                  at fixed intervals instead of continuously. 
                  This creates more balanced and realistic combat.
          </p>
          <img src={enemy} alt="" />
        </div>

        

        <div className='highlight'>
          <h3>Player Controller</h3>
          <p>
           The player controller is divided into separate functions to improve code
            organization and readability. player_movement handles movement 
            based on user input, while player_idle plays the idle animation
             when no movement keys are pressed. The attack function manages
              the player's attack animations and combat
               actions, and deal_with_damage detects when the player is hit,
                reduces health, and updates the player's state accordingly.
                 This modular structure makes the controller easier to maintain and extend.
          </p>

          <img src={playerscript} alt="" />
        </div>

        <div className='highlight'>
          <h3>Learning Journey</h3>
          <p>
            Through this project, I improved my understanding of game development logic,
             including player movement, combat, and enemy AI.
              I learned how to connect the player with NPCs through
               interaction systems, organize dialogue using JSON files
               , and solve gameplay logic problems such as attack timing 
               and cooldown mechanics. These experiences strengthened my
                problem-solving skills and helped me write cleaner, more organized game code.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Aboutproject