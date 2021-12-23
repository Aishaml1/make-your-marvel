import React from 'react'
import { useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { addCharacter } from '../../services/characterService'
import { getAllComics } from '../../services/comicsService'
import ComicCard from "../Comics/ComicCard"
import '../../styles/detailsPage.css'

const CharacterCard = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [comics, setComics] = useState([]);

  const [hero, setHero] = useState(location.state)
  console.log("this is hero", hero)


  const addToTeam = async(e) => {
    e.preventDefault()
    try {
      const team = await addCharacter(hero)
      console.log("this is team", team)
      navigate('/profile')
    } catch (error) {
      throw error
    }
  }

    useEffect(() => {
    const fetchAllComics = async () => {
      const comicsData = await getAllComics(hero.id);
      setComics(comicsData);
      console.log("api data", comicsData);
    };
    fetchAllComics();
  }, []);


  return (
    <div>
      <div className='detailCard'>
      <h1 className='name' >{hero.name}</h1>
      <img  className='detailImg' src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="" width="300px" height="300px" />
      <h4 className='details' >Description: {hero.description}</h4>
      <button className='add'  type='submit' onClick={(e) => addToTeam(e, hero) }>Add to Team</button>
      <button className='cancel'  onClick={() => navigate(-1)}>Cancel</button>
      </div>
      <div>
      {comics?.map((comic)=>(
        <ComicCard   
        comic={comic}
        key={comic.id}
        />
      ))}
</div>
    </div>
  )
}

export default CharacterCard 