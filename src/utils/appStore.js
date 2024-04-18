import { configureStore } from "@reduxjs/toolkit";
import userSlices from './userSlice'
import moviesreducer from './moviesSlice';
import gptreducer from './gptSlice';
import configreducer from './configSlice'
const appStore=configureStore(
    {
        reducer:{
            user:userSlices,
            movies:moviesreducer,
            gpt:gptreducer,
            config:configreducer,
        },
    }

)

export default appStore;