import {FC} from 'react';
// import { NavLink } from 'react-router-dom';
import { ROUTES_NAMES } from '../../routes';
import { CustomNavLink } from '../index';

import classes from './Header.module.scss';

type HeaderProps = {
  title: string
  className?: string | undefined

}

const Header: FC<HeaderProps> = ({title, className = 'header'}) => {
  return (
    <header className={classes.header}>
      <h2 className={classes.headerTitle}>{title}</h2>
      <CustomNavLink title='HOME' path={ROUTES_NAMES.HOME} className={classes.headerLink}/>
      <CustomNavLink title='CATALOG' path={ROUTES_NAMES.CATALOG} className={classes.headerLink}/>
      <CustomNavLink title='CART' path={ROUTES_NAMES.CART} className={classes.headerLink}/>
    </header>
  )
}

export default Header