import { useState } from 'react'
import { useLocation,useNavigate} from 'react-router-dom'
import { addAComic } from '../../services/comicsService'
import '../../styles/detailsPage.css'


const ComicCard = ({ comic }) => {
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
        
        <div className='comicsContainer'>
            <h2 className='comicsTitle' > {comic.title}</h2>
            <img className='comics'  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt='comics'></img>
            <button 
            className='addcomics'  
            type='submit' 
            onClick={(e) => addComic(e, com) }>Add</button>
        </div>

    )
}

export default ComicCard
