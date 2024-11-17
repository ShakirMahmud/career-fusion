import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
    },
  ]);