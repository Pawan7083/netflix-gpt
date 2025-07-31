import { useDispatch, useSelector } from "react-redux";
import { soundMuteUnMute } from "../utils/soundSlice";
import { useState } from "react";

const VideoTitle = ()=>{
    // const mute=useSelector((store)=>store.sound);
    // const dispatch=useDispatch();
    // const [muteState,setMuteState]=useState(mute);

    // const muteUnmuteButton=()=>{
    //     dispatch(soundMuteUnMute());
    //     setMuteState(!muteState);
    //     console.log(mute);
    // }

    const titleMovie= useSelector((store)=>store.movies.titleMovies);
    console.log(titleMovie)
    if(!titleMovie) return;


    return (
        <div className="absolute bg-gradient-to-r from-black w-screen h-screen "> 
        {/* <div><button onClick={muteUnmuteButton} className="mr-4 my-20 p-2 bg-amber-500">{muteState ? "🔊 Mute ":"🔇unmute"}</button></div> */}
        <div className=" w-1/2 mt-[20%] text-white ml-[10%]">
            <h1 className="font-bold text-4xl">{titleMovie?.nowPlayingMovies?.original_title}</h1>
            <h2 className="my-2">{titleMovie?.nowPlayingMovies?.overview}</h2>
            <div>
                <button className=" my-2 py-2 px-4 bg-gray-500 rounded-lg cursor-pointer">▶️ Play</button>
                <button className="mx-2 my-2 py-2 px-4 bg-gray-500 rounded-lg cursor-pointer">ℹ️ More Info</button>

            </div>
        </div>
        </div>
    )
}
export default VideoTitle;