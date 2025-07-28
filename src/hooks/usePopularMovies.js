import { useDispatch } from "react-redux";
import { API_SECREATE_KEY, POPULAR_MOVIES } from "../utils/constraint";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = ()=>{
    const dispatch=useDispatch();

    const getPopularMovies = async() =>{
        const data = await fetch(POPULAR_MOVIES,API_SECREATE_KEY);
        const jsonData=await data.json();
        dispatch(addPopularMovies({popularMovies:jsonData?.results}))

    }

    useEffect(()=>{
        getPopularMovies();
    },[])
}
export default usePopularMovies;