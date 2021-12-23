import React from 'react'

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.sprites.other.dream_world.front_default} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Hp:</strong> {item.stats[0].base_stat}
            </li>
            <li>
              <strong>Experience:</strong> {item.base_experience}
            </li>
            <li>
              <strong>attack:</strong> {item.stats[1].base_stat}
            </li>
            <li>
              <strong>Special:</strong> {item.stats[2].base_stat}
            </li>
            <li>
              <strong>Defence:</strong> {item.stats[3].base_stat}
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default CharacterItem
