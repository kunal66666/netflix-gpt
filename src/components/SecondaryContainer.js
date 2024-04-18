import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer=()=>{
 
    const movies=useSelector(store=>store.movies);
 
 return(
 movies.nowPlayingMovies && ( 
 <div className=" bg-black">
 <div className=" -mt-52 pl-12 pt-32 relative z-20">
 <MoviesList  title={"Now Playing"} movies={movies.nowPlayingMovies}/>
 
 <MoviesList  title={"Popular"} movies={movies.popularMovies}/>
 
 <MoviesList  title={"UpComing"} movies={movies.upcomingMovies}/>
 
 <MoviesList  title={"TopRated"} movies={movies.RatedMovies}/>
 </div>
 {/* SecondaryContainer
      have movie list of 
      movieslist- popular  each will have mutltiple movie card
      muiltple *n
      movies lisyt now playoing
      mocvielist - trending
      movielist - horror
 
  */}

 </div>   
 ))}

export default SecondaryContainer;

