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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
    children:[
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
