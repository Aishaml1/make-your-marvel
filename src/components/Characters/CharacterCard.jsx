import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const CharacterCard = ({ character }) => {
  const location = useLocation()
  const [hero, setHero] = useState(location.state)

  return (
    <div>
      <h1>{hero.name}</h1>
      <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="" />
    </div>
  )
}

export default CharacterCard 