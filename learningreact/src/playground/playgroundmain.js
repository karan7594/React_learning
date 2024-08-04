import React from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { routeNames, routeTitles, routes } from './routes/routes'
import Root from './routes/root'
import Home from './routes/home'

export const PlaygroundMain = () => {
    const router=createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root routeNames={routeNames} routeTitles={routeTitles}/>}>
                <Route path='/' element={<Home/>} />
                {
                    routes.map(({path,Element},index)=>(
                        <Route key={index} path={`/${path}`} element={<Element/>}/>
                    ))
                }
            </Route>
        )

    )
  return (
    <div style={{width:"100%"}}>
      <RouterProvider router={router}/>
    </div>
  )
}

export default PlaygroundMain
