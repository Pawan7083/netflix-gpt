import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryComponent = () =>{

    const movies=useSelector((store)=>store.movies)
    // console.log(movies)
    // movies?.nowPlayingMovies.map((m)=>console.log("Hii"));
    // console.log();
    // const now1 = movies1.nowPlayingMovies;
    console.log(movies?.topRatedMovies?.topRatedMovies);
    
    
    return (
        <div className="">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies?.nowPlayingMovies}></MovieList>
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies?.topRatedMovies}></MovieList>
        <MovieList title={"Popular"} movies={movies?.popularMovies?.topRatedMovies}></MovieList>
        <MovieList title={"Upcoming"} movies={movies?.upComingMovies?.topRatedMovies}></MovieList>
        </div>
    )

}

export default SecondaryComponent;