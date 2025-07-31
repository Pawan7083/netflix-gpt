import { useEffect } from "react";
import { useSelector } from "react-redux";
import useTitleMovies from "../hooks/useTitleMovies";

const VideoBackground = ()=>{
    const movie_id= useTitleMovies();
    console.log(movie_id);
    return(
        <div className="w-screen h-screen">
            <iframe src={"https://www.youtube.com/embed/ZF6t-XGdkRQ?si="+movie_id+"&autoplay=1&mute=1&playsinline=1"} allow="autoplay; encrypted-media; "  allowFullScreen className="w-screen h-screen" ></iframe>
        </div>
    )

}
export default VideoBackground;