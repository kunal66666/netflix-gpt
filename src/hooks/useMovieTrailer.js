import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer=(movieId)=>{
    // console.log(id);

    const dispatch= useDispatch()
    //  fetch trailewr video && updating the store with trailor video
    const getmoviesvideos=async()=>{
         const data =await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos',API_OPTIONS);
          const json=await data.json();
          const filterdata=json.results.filter(video=>video?.type==='Trailer');
  
         const trailer=filterdata.length ? filterdata[0] : json.results[0];
            //  console.log(trailer);  
             dispatch(addTrailerVideo(trailer));        
     }
 
     useEffect(()=>{
   getmoviesvideos(); 
     },[]);
}

export default useMovieTrailer;