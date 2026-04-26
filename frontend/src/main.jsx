import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css'

// Rotas
import Home from "./routes/Home.jsx";
import Login from "./routes/Auth/Login.jsx";
import Register from "./routes/Auth/Register.jsx";
import Profile from "./routes/User/Profile.jsx";
import MyPets from "./routes/Pet/MyPets.jsx";
import AddPet from "./routes/Pet/AddPet.jsx";
import EditPet from "./routes/Pet/EditPet.jsx";
import PetDetails from "./routes/Pet/PetDetails.jsx";
import MyAdoptions from "./routes/Pet/MyAdoptions.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "user/profile",
        element: <Profile />,
      },
      {
        path: "pet/mypets",
        element: <MyPets />,
      },
      {
        path: "pet/add",
        element: <AddPet />,
      },
      {
        path: "pet/edit/:id",
        element: <EditPet />,
      },
      {
        path: "pet/:id",
        element: <PetDetails />,
      },
      {
        path: "/pet/myadoptions",
        element: <MyAdoptions />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
