import { FC } from 'react';
import { Link } from "react-router-dom";
import { adminLinks, userLinks, guestLinks } from "./helper";
import classes from './Navigation.module.scss';


type NavigationProps = {
  role: string
}

const Navigation: FC<NavigationProps> = ({role}) => {
  const renderLinks = (links: any) => links.map(link => (
    <Link key={link.to} to={link.to} className= {classes.Links} >{link.label}</Link>
  ));
  return (
    <>
      <div className={classes.LinksContainer}>
        {role === 'admin' && renderLinks(adminLinks)}
        {role === 'user' && renderLinks(userLinks)}
        {role === 'guest' && renderLinks(guestLinks)}
      </div>
    </>
  )
}

export default Navigation