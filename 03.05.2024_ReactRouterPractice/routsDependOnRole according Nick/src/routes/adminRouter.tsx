import { Sessions, Users } from "../pages/admin";
import { ADMIN_ROUTES } from "./routesNames";

const adminRouter = [
      {
        path: ADMIN_ROUTES.USERS,
        element: <Users/>
      },
      {
        path: ADMIN_ROUTES.SESSIONS,
        element: <Sessions/>
      }
]

export default adminRouter;