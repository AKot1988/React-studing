import { FC } from 'react';

import classes from './Header.module.scss';

type HeaderProps = {
  title: string
}

const Header: FC<HeaderProps> = ({title}) => {
  return (
    <header className={classes.header}>
      <h2 className={classes.headerTitle}>{title}</h2>
    </header>
  )
}

export default Header