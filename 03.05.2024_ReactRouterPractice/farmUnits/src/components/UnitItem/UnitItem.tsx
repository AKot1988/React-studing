import React, { FC, useState } from 'react';
import { Button, CustomNavLink } from '../index';
import classes from './UnitItem.module.scss';

export type UnitItemProps = {
  id: number,
  title: string,
  appointment: string,
  imageSRC: string,
  cost: string | number,
  quantity: string | number,
  type?: string
}


const addToCartLS = (id: number) => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
}

const removeFromCartLS = (id: number) => {
  const cart: number[] = JSON.parse(localStorage.getItem('cart') || '[]');

  const index = cart.indexOf(id);
  if (index !== -1) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

const UnitItem: FC<UnitItemProps> = ({ id, title, appointment, imageSRC, cost, quantity, type = 'general' }) => {
  const [typeItem, setType] = useState<string>(type);
  const [idItem, setIdItem] = useState<number>(id);
  
  return (
    <div className={classes.unitItem}>
      <h5 className={classes.unitItemTitle}>{title}</h5>
      <p className={classes.unitItemDescription}>{appointment}</p>
      <img className={classes.unitItemImage} src={imageSRC} alt={title}/>
      <p className={classes.unitItemCost}>{cost}</p>
      <p className={classes.unitItemQuantity}>{quantity}</p>
      <CustomNavLink title={'купити'} path={`/catalog/${idItem}`} className={classes.unitItemButton}/>
      {typeItem === 'general' ?
      <Button buttonClases={classes.unitItemButton} onClick={() => {setType('cart'); addToCartLS(id)}} text = {"у кошик"}/> :
      <Button buttonClases={classes.unitItemButtonSelected} onClick={ () => { setType('general'); removeFromCartLS(id)}} text = {"прибрати"}/>}
    </div>
  )
}

export default UnitItem;