import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Skill from "../Skills/Skill";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },{
          path:'/skill',
          element:<Skill></Skill>
        }
      ]
    },
  ]);