import { Cart } from "../pages/user";
import { USER_ROUTES } from "./routesNames";

const userRouter = [
  {
    path: USER_ROUTES.CART,
    element: <Cart/>
  }
]

export default userRouter;