import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { API_SECREATE_KEY, NOWPLAYING_MOVIES } from "../utils/constraint";

const useNowPlayingMovies = () =>{
    const dispatch=useDispatch();

    const getNowPlayingMovies= async() =>{
        const data=await fetch(NOWPLAYING_MOVIES, API_SECREATE_KEY);
        const json= await data.json();
        dispatch(addNowPlayingMovie({nowPlayingMovies:json?.results}));
        // console.log(json?.results);
        
    }
    
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}
export default useNowPlayingMovies;