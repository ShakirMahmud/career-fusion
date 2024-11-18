import {
  createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,

    children: [
      {
        path: '/',
        element: <Services />,
        loader: () => fetch('../serviceData.json'),
      }
    ]
  },
  {
    path: '/service/:serviceName',
    element: <PrivateRoute>
      <ServiceDetails></ServiceDetails>
    </PrivateRoute>,
    loader: () => fetch('../serviceData.json'),
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login', 
        element: <Login />
      },
      {
        path: '/auth/signUp',
        element: <SignUp />
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);