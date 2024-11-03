import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../../Layout/Mainlayout";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import ErrorPage from "../Pages/ErrorPage";


  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home/>,
          },
        {
            path: "/coffees",
            element: <Coffees></Coffees>,
          },
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
          },
      ]
    },
  ]);

  export default Routes;
