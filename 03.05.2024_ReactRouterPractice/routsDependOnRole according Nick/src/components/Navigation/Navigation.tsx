import { FC } from 'react';
import { Link } from "react-router-dom";
import { adminLinks, userLinks, guestLinks } from "./helper";
import classes from './Navigation.module.scss';
import { useContext } from 'react';
import { RoleContext } from '../../pages/Layout/Layout';

const Navigation: FC= () => {
  const getRoleContext = useContext(RoleContext);
  const renderLinks = (links: any) => links.map(link => (
    <Link key={link.to} to={link.to} className= {classes.Links} >{link.label}</Link>
  ));
  return (
    <>
      <div className={classes.LinksContainer}>
        {getRoleContext === 'admin' && renderLinks(adminLinks)}
        {getRoleContext === 'user' && renderLinks(userLinks)}
        {getRoleContext === 'guest' && renderLinks(guestLinks)}
      </div>
    </>
  )
}

export default Navigation