import React from 'react'
import { useState, useEffect} from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { addCharacter } from '../../services/characterService'
import { getAllComics } from '../../services/comicsService'

const CharacterCard = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [hero, setHero] = useState(location.state)
  console.log("this is hero", hero)

  const addToTeam = async(e) => {
    // e.preventDefault()
    try {
      const team = await addCharacter(hero)
      console.log("this is team", team)
      navigate('/')
    } catch (error) {
      throw error
    }
  }

    useEffect(() => {
    const fetchAllComics = async () => {
      const comicsData = await getAllComics(hero.id);
      // console.log(chars.id, 'This is chars')
      // setAddComics(comicsData.data);
      console.log("api data", comicsData);
    };
    fetchAllComics();
  }, []);

  return (
    <div>
      <h1>{hero.name}</h1>
      <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="" width="300px" height="300px" />
      <h4>Description: {hero.description}</h4>
      <h4>Comics: </h4>
        <ul>{hero.comics.items.map((comic, idx) => (
          <li><Link to="/comics" key={idx}>{comic.name}</Link></li>
        ) )}
        </ul>
      <button type='submit' onClick={() => addToTeam(hero) }>Add to Team</button>
      <button onClick={() => navigate(-1)}>Cancel</button>
    </div>
    
  )
}

export default CharacterCard 