import { configureStore } from "@reduxjs/toolkit";
import userSlices from './userSlice'
import moviesreducer from './moviesSlice';
const appStore=configureStore(
    {
        reducer:{
            user:userSlices,
            movies:moviesreducer,
        },
    }

)

export default appStore;