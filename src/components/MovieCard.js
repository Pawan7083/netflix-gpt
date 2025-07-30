import { POSTER_PATH_URL } from "../utils/constraint";

const MovieCard = (props) =>{
    const {poster_path}=props;
    // console.log(poster_path);

    return (
        <div className="w-40 h-48 mr-4"> 
            <img src={POSTER_PATH_URL+poster_path} className="w-40 h-48 mr-4" ></img>
        </div>
    )
}
export default MovieCard;