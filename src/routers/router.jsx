import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children:[
            {
                path: '/auth/login',
                element: <Login/>
            },
            {
                path: '/auth/signUp',
                element: <SignUp/>
            },
        ]
    },
    {
        path: "*",
        element: <h3>404 Not Found</h3>
    }
  ]);