import { useEffect } from "react";
import { useSelector } from "react-redux";
import { API_SECREATE_KEY } from "../utils/constraint";

const useTitleMovies = async()=>{
    const titleMovie= useSelector((store)=>store.movies.titleMovies);
    if(!titleMovie)return;
    // console.log(titleMovie);
    const movie_id=titleMovie?.nowPlayingMovies?.id;

    
    const data= await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos",API_SECREATE_KEY);
    const jsonData= await data.json();
    
    const titleMovies=jsonData?.results;
    const movie= titleMovies.filter((movies)=>(movies?.type==="Trailer"));
    console.log(movie);
    if(movie)return movie[0].id;
    

}
export default useTitleMovies;