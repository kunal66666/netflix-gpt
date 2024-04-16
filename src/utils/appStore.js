import { configureStore } from "@reduxjs/toolkit";
import userSlices from './userSlice'
const appStore=configureStore(
    {
        reducer:{
            user:userSlices,
        },
    }

)

export default appStore;