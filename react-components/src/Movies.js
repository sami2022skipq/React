import { movies } from "./data/movies";
import MoviesList from "./MoviesList";
import './MovieCss.css'
function fetchMovieData(){
    return movies
}
export default function Movies(){
    const moviesData = fetchMovieData()

    return (
        <div className="movie-container">

            <ul className="movie-list">
                {
                    moviesData.map(item=>(
                        <MoviesList  key=  {item.id} item  = {item} />
                    ))

                }

            </ul>

        </div>
    )
}