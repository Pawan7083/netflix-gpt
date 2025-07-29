import MovieCard from "./MovieCard";

const MovieList = (props) =>{
    const {title,movies}=props;
    console.log(title,movies);
    // console.log(movie);
    
    
    return (
        <div>
            <div>
                <h1>{title}</h1>
            </div>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {
                        
                    }
                </div>
            </div>
        </div>
    )

}

export default MovieList;