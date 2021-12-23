import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ poke, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {poke.map((item) => (
        <CharacterItem key={item.id} item={item}></CharacterItem>
      ))}
    </section>
  )
}

export default CharacterGrid