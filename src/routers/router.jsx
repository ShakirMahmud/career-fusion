import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";

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
                element: <h3>Login Form</h3>
            }
        ]
    }
  ]);