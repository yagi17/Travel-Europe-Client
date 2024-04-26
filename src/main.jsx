import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AllSpot from "./Components/Navbar/Pages/AllSpot";
import AddSpot from "./Components/Navbar/Pages/AddSpot";
import MyList from "./Components/Navbar/Pages/MyList";
import Login from "./AuthProvider/Login";
import SignUp from "./AuthProvider/SignUp";
import Home from "./Components/Navbar/Pages/Home";
import Error from "./Components/Navbar/Pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/allspot",
        element: <AllSpot></AllSpot>
      },
      {
        path: "/addspot",
        element: <AddSpot></AddSpot>
      },
      {
        path: "/mylist",
        element: <MyList></MyList>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
