import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

 const ShowGptSearch=useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return(
   <div>
     <Header/>
     { ShowGptSearch? <GptSearch/>:
      <>
     <MainContainer/>
     <SecondaryContainer/>
     </>
     }
   

     
      {/* /* main contianer 
      
          --video background
          --video tittle

         secondrycontainer
         --movieslist * n
         -- cards* n
       */}
      
     
    </div>
  )
}

export default Browse