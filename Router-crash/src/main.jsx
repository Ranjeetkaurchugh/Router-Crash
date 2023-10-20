import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact-us/Contact.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children: [
    {
      path:"",
      element:<Home/>

    },
   { path: "about",
    element: <About/>
  },
  {
    path: "contact",
    element: <Contact/>

  }

  ]

}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
