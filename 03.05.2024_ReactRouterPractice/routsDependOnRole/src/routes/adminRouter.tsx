import { createBrowserRouter } from "react-router-dom";
import { Home, Products, Product, Not_Found, LogIn } from "../pages/common";
import { Sessions, Users } from "../pages/admin";
import Layout from "../pages/Layout/Layout";
import { COMMON_ROUTES, ADMIN_ROUTES } from "./routesNames";

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
        path: COMMON_ROUTES.LOGIN,
        element: <LogIn/>
      },
      {
        path: `${COMMON_ROUTES.PRODUCTS}/:id`,
        element: <Product/>
      },
      {
        path: ADMIN_ROUTES.USERS,
        element: <Users/>
      },
      {
        path: ADMIN_ROUTES.SESSIONS,
        element: <Sessions/>
      }
    ],
    errorElement: <Not_Found/>
  }
])

export default commonRouter;