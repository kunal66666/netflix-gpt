import { useEffect } from "react";
import {  addupComingMovies} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useUpcomingMovies=()=>{
 // fetch data from api and update store
 const dispatch=useDispatch();
 // MAKE API CALL
  const getUpcomingmovies=async()=>{
   const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS
 );
 const json =await data.json();
//  console.log(json);
 dispatch(addupComingMovies(json.results));
 // /dispatching action to store

 };

useEffect(()=>{
 getUpcomingmovies();
},[])

};

export default useUpcomingMovies;