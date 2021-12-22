import { useState } from 'react'
import { useLocation} from 'react-router-dom'
import { addAComic } from '../../services/comicsService'


const ComicCard = ({ comic }) => {
    const location = useLocation()
    const [com, setCom] = useState(location.state)

    const addComic = async (e) => {
        e.preventDefault()
        try {
            const addingComic = await addAComic(comic)
            console.log(addingComic, 'adding one comic')
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
