import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Skill from "../Skills/Skill";
import Experience from "../Experience/Experience";
import Project from "../Project/Project";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/skill',
          element:<Skill></Skill>
        },
        {
          path:'/experience',
          element:<Experience></Experience>
        },
        {
          path:'/project',
          element:<Project></Project>
        }
      ]
    },
  ]);