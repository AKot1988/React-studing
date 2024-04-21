import { FC, PropsWithChildren } from 'react'
import HeaderItem, { HeaderItemsProps } from '../HeaderItem/HeaderItem';
import Button from '../Button/Button'
import classes from './Header.module.scss'


type HeaderProps = {
  logoURL: string,
  userPhoto: string,
  menu: HeaderItemsProps[],
  searchPlaceholder: string
}

const Header: FC<HeaderProps> = ({logoURL, userPhoto, menu, searchPlaceholder}) => {
  return(
    <header className={classes.header}>
      <div className= {classes.headerMenuBar}>
        <img src={logoURL} alt='companyLogo' className={classes.headerLogo}></img>
        <ul className={classes.headerMenu}>
          {menu.map((headerItem) => 
            <HeaderItem key={`${headerItem.id}${headerItem.text}`} text={headerItem.text} id={headerItem.id} type={headerItem.type} className={headerItem.className}/>
          )}
        </ul>
      </div>
      <div className={classes.headerInputBar}>
        <input placeholder={searchPlaceholder} className={classes.headerInput}></input>
        <img src={userPhoto} alt='userPhoto' className={classes.headerUser}></img>
        <Button text="Create" className={classes.headerButton}/>
      </div>
    </header>
  )
}

export default Header