import { createBrowserRouter } from "react-router-dom";
import { Layout, Home, Catalog, Cart, CatalogItemPage} from "../pages";
import { fetchData } from "../components";
import ROUTES_NAMES from "./routesNames";
import { fetchItemByID } from "../components/Helper/Helper";


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
        loader: () => fetchData('/unitsItems.json'),
      },
      {
        path: `${ROUTES_NAMES.CATALOG}/:id`,
        element: <CatalogItemPage/>,
        loader: () => fetchData('/unitsItems.json'),
      },
      {
        path: '/cart',
        element: <Cart />
      },
    ],
    errorElement: <h3>Нема, блять, такого шляху</h3>
  }
])

export default router;