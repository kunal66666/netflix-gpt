import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useNowPlayingMovies=()=>{
 // fetch data from api and update store
 const dispatch=useDispatch();
 // MAKE API CALL
  const getnowplayingmovies=async()=>{
   const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS
 );
 const json =await data.json();
//  console.log(json);
 dispatch(addNowPlayingMovies(json.results));
 // /dispatching action to store

 };

useEffect(()=>{
 getnowplayingmovies();
},[])

};

export default useNowPlayingMovies;