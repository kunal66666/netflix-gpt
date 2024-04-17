import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'

const Body = () => {
  
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
 

  return (
    <div>
  <RouterProvider  router={appRouter} />
    </div>
  )
}

export default Body