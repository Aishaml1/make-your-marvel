const ComicCard = ({comic}) => {
console.log(comic,'this is comic')

return(
<div> 
    <h1>Comics: </h1>
    <h2> {comic.title}</h2>
    <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt = 'comics' ></img>
    <button >+</button>
</div>
)
}

export default ComicCard
