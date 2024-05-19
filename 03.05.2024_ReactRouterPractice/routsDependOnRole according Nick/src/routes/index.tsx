import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { ROLES } from '../types';
import Layout from '../pages/Layout/Layout';
import { Not_Found } from '../pages/common/';
import commonRouter from './commonRouter';
import userRouter from './userRouter';
import adminRouter from './adminRouter';


const getRoluterByRole = (role: ROLES) => {
  switch (role) {
    case ROLES.ADMIN:
      return [...adminRouter, ...commonRouter];
    case ROLES.USER:
      return [...userRouter, ...commonRouter];
    case ROLES.GUEST:
      return commonRouter;
    default:
      return [];
  }
}


const MyAppRouter = () => {

  // const role = ROLES.GUEST;
  const [role, setRole] = useState(ROLES.GUEST);
  const router= createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement: <Not_Found/>,
      children: getRoluterByRole(role),
    },
  ])
  return (<RouterProvider router={router} />)
}

export default MyAppRouter;
