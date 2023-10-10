import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import DynamicCard from "../components/dynamiccard/DynamicCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader:()=>fetch('/data.json')
      },
      {
        path: "/services/:id",
        element: <DynamicCard/>,
        
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);

export default router
