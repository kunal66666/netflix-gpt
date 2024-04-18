import { useEffect } from "react";
import {  addPopularMovies} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const usePopularMovies=()=>{
 // fetch data from api and update store
 const dispatch=useDispatch();
 // MAKE API CALL
  const getPopularmovies=async()=>{
   const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS
 );
 const json =await data.json();
//  console.log(json);
 dispatch(addPopularMovies(json.results));
 // /dispatching action to store

 };

useEffect(()=>{
 getPopularmovies();
},[])

};

export default usePopularMovies;