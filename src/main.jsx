import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AllSpot from "./Components/Navbar/Pages/AllSpot";
import AddSpot from "./Components/Navbar/Pages/AddSpot";
import MyList from "./Components/Navbar/Pages/MyList";
import Login from "./AuthProvider/Login";
import Home from "./Components/Navbar/Pages/Home";
import Error from "./Components/Navbar/Pages/Error";
import Authentication from "./AuthProvider/Authentication";
import SignUp from "./AuthProvider/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/touristSpot"),
      },
      {
        path: "/allspot",
        element: <AllSpot></AllSpot>,
        loader: () => fetch("http://localhost:5000/touristSpot"),
      },
      {
        path: "/addspot",
        element: <AddSpot></AddSpot>,
      },
      {
        path: "/mylist",
        element: <MyList></MyList>,
        loader: () => fetch("http://localhost:5000/touristSpot"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authentication>
      <RouterProvider router={router} />
    </Authentication>
  </React.StrictMode>
);
