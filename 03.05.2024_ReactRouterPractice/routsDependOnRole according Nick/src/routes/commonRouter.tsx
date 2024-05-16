import { Home, Products, Product, Not_Found, LogIn, Register } from "../pages/common";
import { COMMON_ROUTES } from "./routesNames";

const commonRouter = [
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
        path: COMMON_ROUTES.NOT_FOUND,
        element: <Not_Found/>
      },
    ]

export default commonRouter;