import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryComponent = () =>{

    const movies=useSelector((store)=>store.movies)
    // console.log(movies?.topRatedMovies?.topRatedMovies);
    
    
    return (
        <div className="bg-gray-900">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies?.nowPlayingMovies}></MovieList>
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies?.topRatedMovies}></MovieList>
        <MovieList title={"Popular"} movies={movies?.popularMovies?.popularMovies}></MovieList>
        <MovieList title={"Upcoming"} movies={movies?.upComingMovies?.upComingMovies}></MovieList>
        </div>
    )

}

export default SecondaryComponent;