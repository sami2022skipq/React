const MoviesList =({item})=>{
    return (
        <li className="movie" key = {item.id}>
            <img src={item.poster} alt ={item.title} />
            <h4>{item.title} by {item.director} was released on {item.year}</h4>
            <h4>Rated :{item.rating}</h4> 
        </li>
    )
}
export default MoviesList