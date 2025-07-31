import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie, addTitleMovies } from "../utils/movieSlice";
import { API_SECREATE_KEY, NOWPLAYING_MOVIES } from "../utils/constraint";

const useNowPlayingMovies = () =>{
    const dispatch=useDispatch();

    const getNowPlayingMovies= async() =>{
        const data=await fetch(NOWPLAYING_MOVIES, API_SECREATE_KEY);
        const json= await data.json();
        dispatch(addNowPlayingMovie({nowPlayingMovies:json?.results}));
        dispatch(addTitleMovies({nowPlayingMovies:json?.results[0]}));
        // console.log(json?.results);
        
    }
    
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}
export default useNowPlayingMovies;