
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import Header from "./Header";
import SecondaryComponent from "./SecondaryComponent";


const Browser =()=>{
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();    

    return (
        <div>
            <Header/>
            <SecondaryComponent/>
        </div>
    )
}

export default Browser;