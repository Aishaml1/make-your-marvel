import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'



const ComicCard = ({ comic }) => {
    console.log(comic, 'this is comic')

    const location = useLocation()
    const navigate = useNavigate()
    const [addComic, setaddComic] = useState(location.state)
    console.log(addComic, 'this here')

    const add = async (e) => {
        // e.preventDefault()
        try {
            const addingComic = await (addComic)
            console.log('is this adding one comic ?', addingComic)
            navigate('/')
        } catch (error) {
            throw error
        }
    }

    return (
        <div>
            <h2> {comic.title}</h2>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt='comics' ></img>
            <button type='submit' onClick={() => add(addComic) }>Add</button>
        </div>

    )
}

export default ComicCard
