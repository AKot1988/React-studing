import { createBrowserRouter } from "react-router-dom";
import { Layout, Home, Catalog, Cart} from "../pages";
import { fetchData } from "../components";
import ROUTES_NAMES from "./routesNames";


const router = createBrowserRouter([
  {
    path: ROUTES_NAMES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: ROUTES_NAMES.CATALOG,
        element: <Catalog />,
        loader: () => fetchData()
      },
      { path: '/cart', element: <Cart /> },
    ],
    errorElement: <h3>404 Not Found Нема блять такого шляху</h3>
  }
])

export default router;