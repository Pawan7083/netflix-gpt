import MovieCard from "./MovieCard";

const MovieList = (props) =>{
    const {title,movies}=props;
    // console.log(title,movies);
    if(!movies){
        console.log("No movies is present in movies list");
        return;
    }
    
    
    return (
        <div className="mx-4 p-2 ">
            <div>
                <h1 className="font-bold text-2xl m-2 text-white">{title}</h1>
            </div>
            <div className="flex overflow-x-scroll scrollbar-hide bg-gray-900">
                <div className="flex ">
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