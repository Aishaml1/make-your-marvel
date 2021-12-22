import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { addAComic } from '../../services/comicsService'


const ComicCard = ({ comic }) => {
    console.log(comic, 'this is comic')

    const location = useLocation()
    const navigate = useNavigate()
    const [com, setCom] = useState(location.state)

    const addComic = async (e) => {
        e.preventDefault()
        try {
            const addingComic = await addAComic(comic)
            console.log(addingComic, 'adding one comic')
            navigate('/profile')
        } catch (error) {
            throw error
        }
    }

    return (
        <div>
            <h2> {comic.title}</h2>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt='comics' ></img>
            <button type='submit' onClick={(e) => addComic(e, com)}>Add</button>
        </div>

    )
}

export default ComicCard
