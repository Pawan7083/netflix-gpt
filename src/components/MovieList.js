import MovieCard from "./MovieCard";

const MovieList = (props) =>{
    const {title,movies}=props;
    // console.log(title,movies);
    if(!movies)return;
    return (
        <div className="mx-2 p-4">
            <div>
                <h1 className="font-bold text-2xl m-2 text-white">{title}</h1>
            </div>
            <div className="flex overflow-x-scroll scrollbar-hide">
                <div className="flex">
                    {   
                        movies.map(movie=>(
                            <MovieCard key={movie?.id} poster_path={movie?.poster_path}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

export default MovieList;