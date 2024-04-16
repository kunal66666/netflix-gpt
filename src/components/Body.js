import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../utils/userSlice'
const Body = () => {
    const dispatch=useDispatch();
   
    const appRouter=createBrowserRouter([
       {
        path:'/',
        element:<Login/>,
       },
       {
        path:'/browse',
        element:<Browse/>,
       }        
    ]);
    // i want to set data in store one ce so i use here in root level
    // so on chnageing of auth it get set or rmeovre
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, we can get uid email displayanme also naviagte use
          const {uid,email,displayName,photoURL} = user;
               dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            
               // ...
        } else {
          // User is signed out
            dispatch(removeuser());
          
         
          }
      });
    },[])

  return (
    <div>
  <RouterProvider  router={appRouter} />
    </div>
  )
}

export default Body