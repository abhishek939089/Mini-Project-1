
import './index.css';
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import Signup from './components/Signup';
import AddProduct from './components/Addproduct';


const router = createBrowserRouter([
  {
    path: "/home",
    element: ( <Home/> ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "/login",
    element: (<Login/>),
  },
  {
    path: "/signup",
    element: (<Signup/>),
  },
  {
    path: "/addproduct",
    element: (<AddProduct/>),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
