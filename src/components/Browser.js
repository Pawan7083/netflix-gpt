
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import Header from "./Header";


const Browser =()=>{
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();    

    return (
        <div>
            <Header/>
        </div>
    )
}

export default Browser;