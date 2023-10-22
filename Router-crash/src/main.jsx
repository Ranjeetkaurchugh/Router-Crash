import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact-us/Contact.jsx'
import Users from './Components/Users/Users.jsx'
import Gitub, { githubInfoLoader } from './Components/Gitub/Gitub.jsx'

//const router = createBrowserRouter([{
  //path: '/',
  //element: <Layout/>,
  //children: [
    //{
      //path:"",
      //element:<Home/>

    //},
   //{ path: "about",
    //element: <About/>
  //},
  //{
    //path: "contact",
    //element: <Contact/>

  //},
  //{
    //path: "users/:usersid",
    //element: <Users/>

  //},


 // ]

//}

//])
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />}/>
    <Route path='about'element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='user/:usersid' element={<Users/>}/>    
    <Route loader={githubInfoLoader} path='Gitub' element={<Gitub/>}/> 
      </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
