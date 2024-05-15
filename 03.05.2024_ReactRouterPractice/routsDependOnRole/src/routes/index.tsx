import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import commonRouter from './commonRouter';
import userRouter from './userRouter';
import adminRouter from './adminRouter';


const MyAppRouter = () => (<RouterProvider router={adminRouter}/>);

export default MyAppRouter;
