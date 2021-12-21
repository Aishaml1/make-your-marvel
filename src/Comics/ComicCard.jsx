import React, { useState, useEffect } from 'react'

const ComicCard = ({comic}) => {
console.log(comic,'this is comic')

return(
<div> 
    <h1> {comic.title}</h1>
    <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt = 'comics' ></img>
    <button>+</button>
</div>

)
}

export default ComicCard
