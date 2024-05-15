import { createBrowserRouter } from "react-router-dom";
import { Home, Products, Product, Not_Found, LogIn, Register } from "../pages/common";
import { Cart } from "../pages/user";
import Layout from "../pages/Layout/Layout";
import { COMMON_ROUTES, USER_ROUTES } from "./routesNames";

const commonRouter = createBrowserRouter([
  {
    path: COMMON_ROUTES.HOME,
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: COMMON_ROUTES.PRODUCTS,
        element: <Products/>
      },
      {
        path: `${COMMON_ROUTES.PRODUCTS}/:id`,
        element: <Product/>
      },
      {
        path: COMMON_ROUTES.LOGIN,
        element: <LogIn/>
      },
      {
        path: COMMON_ROUTES.REGISTER,
        element: <Register/>
      },
      {
        path: USER_ROUTES.CART,
        element: <Cart/>
      }
    ],
    errorElement: <Not_Found/>
  }
])

export default commonRouter;