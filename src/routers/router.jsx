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
import MyProfile from "../pages/MyProfile";
import CareerPathAssessment from "../pages/CareerPathAssessment";
import ForgetPassword from "../pages/ForgetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,

    children: [
      {
        path: '/',
        element: <Services />,
        loader: () => fetch('../serviceData.json'),
      },

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
      {
        path: '/auth/forgetPassword',
        element: <ForgetPassword />
       
      },
      {
        path: '/auth/myProfile',
        element: <PrivateRoute>
          <MyProfile />
        </PrivateRoute>
      },
    ]
  },

  {
    path: '/careerPathAssessment',
    element: <PrivateRoute>
      <CareerPathAssessment />
    </PrivateRoute>,
    loader: () => fetch('../serviceData.json'),

  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);