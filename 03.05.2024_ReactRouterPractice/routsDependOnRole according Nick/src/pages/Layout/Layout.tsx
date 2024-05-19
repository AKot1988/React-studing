import { Header, Footer } from "../../components";
import { Outlet } from "react-router-dom";
import classes from './Layout.module.scss';
import {useState, createContext } from 'react';
import { Navigation } from "../../components";

export const RoleContext = createContext('guest')

const Layout = () => {
  let [role, setRole] = useState('guest')
  return (
  <RoleContext.Provider value={role}>
    <div>
      <Header title='Хедер в лейауті'/>
      <Navigation/>
      <div className={classes.roleButtonContainer}>
        <button onClick={()=> setRole("admin")} className={classes.roleButton}>Admin</button>
        <button onClick={()=> setRole("user")} className={classes.roleButton}>User</button>
        <button onClick={()=> setRole("guest")} className={classes.roleButton}>Guest</button>
      </div>
      <Outlet />
      <Footer title='Футер в лейауті'/>
    </div>
  </RoleContext.Provider>
  );
};

export default Layout;