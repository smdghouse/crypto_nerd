import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import Saved from './pages/Saved';
import Trending from './pages/Trending';
import Crypto from './pages/Crypto';
import {createBrowserRouter,RouterProvider,} from "react-router-dom"
import Componentdetails from './components/Componentdetails';


const router = createBrowserRouter(
  [
    {
      path:"/",
     element:<App/>,
     children:[
      {
        path:"/trending",
        element:<Trending/>,
        children:[
          {
            path: ":coinid",
            element:<Componentdetails/>
          }
        ]
        
      },
      {
        path:"/saved",
        element:<Saved/>,
        children:[
          {
            path: ":coinid",
            element:<Componentdetails/>
          }
        ]
      },
      {
        path:"/",
        element:<Crypto/>,
        children:[
          {
            path: ":coinid",
            element:<Componentdetails/>
          }
        ]
      }
     ]
  }]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


