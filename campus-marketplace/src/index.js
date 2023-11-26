
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
import LikedProducts from './components/LikedProducts';
import ProductDetail from './components/ProductDetail';
import RegistrationPage from './components/RegistrationPage';
import MyProducts from './components/MyProducts';
import MyProfile from './components/MyProfile';
import Admin from './components/Admin';

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
  {
    path: "/likedproducts",
    element: (<LikedProducts/>),
  },
  {
    path: "/product/:productId",
    element: (<ProductDetail/>),
  },
  {
    path: "/registration",
    element: (<RegistrationPage/>),
  },
  {
    path: "/myproducts",
    element: (<MyProducts/>),
  },
  {
    path: "/myprofile",
    element: (<MyProfile/>),
  },
  {
    path: "/admin",
    element: (<Admin/>),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
