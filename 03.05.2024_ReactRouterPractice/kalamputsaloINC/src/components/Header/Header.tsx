import {FC} from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES_NAMES } from '../../routes/routesNames'

import classes from './Header.module.scss';

type HeaderProps = {
  title: string
  className?: string | undefined

}

const Header: FC<HeaderProps> = ({title, className = 'header'}) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.headerTitle}>{title}</h1>
      <NavLink to={ROUTES_NAMES.HOME}> HOME </NavLink>
      <NavLink to={ROUTES_NAMES.ABOUT}> ABOUT </NavLink>
      <NavLink to={ROUTES_NAMES.TEAM}> TEAM </NavLink>
    </header>
  )
}

export default Header