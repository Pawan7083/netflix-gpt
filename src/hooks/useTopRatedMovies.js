import { useDispatch } from "react-redux";
import { API_SECREATE_KEY, TOPRATED_MOVIES } from "../utils/constraint";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () =>{
    const dispatch= useDispatch();

    const getTopRatedMovies = async()=>{
        const data=  await fetch(TOPRATED_MOVIES,API_SECREATE_KEY);
        const jsonData= await data.json();
        dispatch(addTopRatedMovies({topRatedMovies:jsonData?.results}));
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[])

}

export default useTopRatedMovies;