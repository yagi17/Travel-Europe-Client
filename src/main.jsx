import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AllSpot from "./Components/AllPages/AllSpots/AllSpot";
import AddSpot from "./Components/AllPages/AddSpot/AddSpot";
import MyList from "./Components/AllPages/MyList/MyList";
import Login from "./AuthProvider/Login";
// import Home from "./Components/Navbar/Pages/HomePage/Home";
import Error from "./Components/Shared/Error";
import Authentication from "./AuthProvider/Authentication";
import SignUp from "./AuthProvider/SignUp";
import Home from "./Components/AllPages/HomePage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/country"),
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
