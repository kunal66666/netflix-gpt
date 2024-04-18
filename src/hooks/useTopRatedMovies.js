import { useEffect } from "react";
import {  addTopRatedMovies} from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useTopRatedMovies=()=>{
 // fetch data from api and update store
 const dispatch=useDispatch();
 // MAKE API CALL
  const getTopRatedrmovies=async()=>{
   const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS
 );
 const json =await data.json();
//  console.log(json);
 dispatch(addTopRatedMovies(json.results));
 // /dispatching action to store

 };

useEffect(()=>{
 getTopRatedrmovies();
},[])

};

export default useTopRatedMovies;