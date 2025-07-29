import { POSTER_PATH_URL } from "../utils/constraint";

const MovieCard = (props) =>{
    const {poster_path}=props;

    return (
        <div className="w-48 h-56"> 
            <img src={POSTER_PATH_URL+poster_path}></img>
        </div>
    )
}
export default MovieCard;