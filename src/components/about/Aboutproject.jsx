import React from 'react'
import Json from '../../assest/json.png'
import projectimage from '../../assest/projectimage.png'
import playerscript from '../../assest/playerscript.png'
import tilemap from '../../assest/tilemap.png'
import enemy from '../../assest/enemy.png'

const Aboutproject = () => {

return ( <section className='About-project'> <span className='project-tag'>Game Development</span>

```
  <h1>Building a 2D Pixel RPG in Godot</h1>

  <img src={projectimage} alt="2D pixel RPG project" />

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
        keeping dialogue separate from the game logic. When the player
        enters an NPC's Detection Area (Area2D) and presses ui_accept,
        the dialogue manager loads the corresponding JSON file and
        displays each line in sequence. This approach makes the system
        easy to maintain, reuse, and expand by adding new dialogue
        without modifying the game code.
      </p>

      <img src={Json} alt="JSON dialogue system" />
    </div>

    <div className='highlight'>
      <h3>NPC Interaction</h3>

      <p>
        I created an interaction system that allows players to communicate
        with NPCs and trigger events throughout the game world. This system
        connects the player's actions with the environment and helps create
        a more interactive gameplay experience.
      </p>
    </div>

    <div className='highlight'>
      <h3>Enemy AI</h3>

      <p>
        The enemy AI uses a player_chase variable to control its behavior.
        When the player enters the enemy's Area2D detection range,
        player_chase becomes true, causing the enemy to chase the player.
        Once the player is close enough, the enemy switches from chasing
        to attacking.
      </p>

      <p>
        To prevent the player from taking damage every frame, a cooldown
        timer was implemented. This ensures that the enemy attacks at
        fixed intervals instead of continuously, creating more balanced
        and realistic combat.
      </p>

      <img src={enemy} alt="Enemy AI script" />
    </div>

    <div className='highlight'>
      <h3>Player Controller</h3>

      <p>
        The player controller is divided into separate functions to improve
        code organization and readability. player_movement handles movement
        based on user input, while player_idle plays the idle animation
        when no movement keys are pressed.
      </p>

      <p>
        The attack function manages the player's attack animations and
        combat actions, while deal_with_damage detects when the player is
        hit, reduces health, and updates the player's state accordingly.
        This modular structure makes the controller easier to maintain
        and extend.
      </p>

      <img src={playerscript} alt="Player controller script" />
    </div>

    <div className='highlight'>
      <h3>Building a Cozy 2D World</h3>

      <p>
        For the level design, I created a cozy 2D environment inspired by
        games such as Stardew Valley. My goal was to create a structured
        and immersive environment using multiple TileMap layers.
      </p>

      <p>
        The level is organized with a main TileMap layer for the ground
        and environment, along with separate layers for the background,
        objects, doors, and other environmental elements. I also added
        basic lighting to improve the atmosphere and give the world more
        depth.
      </p>

      <img src={tilemap} alt="TileMap level design" />
    </div>

    <div className='highlight'>
      <h3>Learning Journey</h3>

      <p>
        Through this project, I improved my understanding of game
        development logic, including player movement, combat, enemy AI,
        and level design.
      </p>

      <p>
        I learned how to connect the player with NPCs through interaction
        systems, organize dialogue using JSON files, structure levels with
        TileMap layers, and solve gameplay logic problems such as attack
        timing and cooldown mechanics. These experiences strengthened my
        problem-solving skills and helped me write cleaner and more
        organized game code.
      </p>
    </div>

  </div>

</section>


)
}

export default Aboutproject
