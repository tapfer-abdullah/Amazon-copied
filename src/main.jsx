import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import Home from './conponents/Home/Home';
import Shop from './conponents/Shop/Shop';
import Order from './conponents/Order/Order';
import OrderReview from './conponents/OrderReview/OrderReview';
import ManageInventory from './conponents/ManageInventory/ManageInventory';
import Login from './conponents/Login/Login';
import LoadCardData from './Loaders/CardProductsLoader';
import ProceedToCheckout from './conponents/Proceed-Checkout/ProceedToCheckout';
import SingUp from './conponents/SingUp/SingUp';
import AuthProviders, { AuthContext } from './Providers/AuthProviders';
import PrivateRoute from './conponents/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "shop",
        element: <Shop></Shop>
      },
      {
        path: "Order",
        element: <Order></Order>,
        // loader: () => fetch("products.json") ,
        loader: LoadCardData,
      },
      {
        path: "/Order-Review",
        element: <PrivateRoute><OrderReview></OrderReview></PrivateRoute>
      },
      {
        path: "/Manage-Inventory",
        element: <PrivateRoute><ManageInventory></ManageInventory></PrivateRoute>
      },
      {
        path: "Proceed-Checkout",
        element: <ProceedToCheckout></ProceedToCheckout>
      },
      {
        path: "/Login",
        element: <Login></Login>
      },
      {
        path: "/Singup",
        element: <SingUp></SingUp>
      }
    ] 
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
