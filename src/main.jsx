import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.jsx'
import './index.css'
import Layout from './layout.jsx'
 
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Bodyy from './pages/Bodyy.jsx'
import Sidebar from './component/Sidebar.jsx'


 

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:"/Home",
        element:<Home />
      },
     
      {
        path:"about",
        element:<About />
      },
     
       
      {
        path:"Bodyy",
        element:<Bodyy />
      },
      {
        path:"Sidebar",
        element:<Sidebar />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
