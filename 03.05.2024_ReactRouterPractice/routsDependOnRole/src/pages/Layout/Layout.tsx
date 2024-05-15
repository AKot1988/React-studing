import { Header, Footer } from "../../components";
import { Link, Outlet } from "react-router-dom";
import classes from './Layout.module.scss';
import {useState} from 'react';
import { Navigation } from "../../components";

const Layout = () => {
  let [role, setRole] = useState('guest')
  console.log(role)
  return (
    <div>
      <Header title='Хедер в лейауті'/>
      <div className={classes.roleButtonContainer}>
        <button onClick={()=> setRole("admin")} className={classes.roleButton}>Admin</button>
        <button onClick={()=> setRole("user")} className={classes.roleButton}>User</button>
        <button onClick={()=> setRole("guest")} className={classes.roleButton}>Guest</button>
      </div>
      <Navigation role= {role}/>
      <Outlet />
      <Footer title='Футер в лейауті'/>
    </div>
  );
};

export default Layout;