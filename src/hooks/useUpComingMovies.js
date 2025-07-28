import { useDispatch } from "react-redux";
import { API_SECREATE_KEY, UPCOMING_MOVIES } from "../utils/constraint";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpComingMovies = () =>{
    const dispatch= useDispatch();

    const getUpComingMovies = async()=>{
        const data=  await fetch(UPCOMING_MOVIES,API_SECREATE_KEY);
        const jsonData= await data.json();
        dispatch(addUpComingMovies({upComingMovies:jsonData?.results}));
    }

    useEffect(()=>{
        getUpComingMovies();
    },[])
}
export default useUpComingMovies;