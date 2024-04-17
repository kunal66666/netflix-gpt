import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies= useSelector(store=> store.movies?.nowPlayingMovies)
    //  here we have 20 movies we need only one to display in main container
    if(!movies)return;
    const mainMovie=movies[0];
 
    const {original_title,overview,id }=mainMovie;
    // console.log(id);
    return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    
    </div>
  )
}

export default MainContainer