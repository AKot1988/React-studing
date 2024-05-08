import React, { FC, useState } from 'react';
import { Button } from '../index';
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

const UnitItem: FC<UnitItemProps> = ({ id, title, appointment, imageSRC, cost, quantity, type = 'general' }) => {
  const [typeItem, setType] = useState<string>(type);
  const [idItem, setIdItem] = useState<number>(id);

  let content;

  if (typeItem === 'general') {
  content = (
      <div className={classes.unitItem}>
        <h5 className={classes.unitItemTitle}>{title}</h5>
        <p className={classes.unitItemDescription}>{appointment}</p>
        <img className={classes.unitItemImage} src={imageSRC} alt={title}/>
        <p className={classes.unitItemCost}>{cost}</p>
        <p className={classes.unitItemQuantity}>{quantity}</p>
        <Button buttonClases={classes.unitItemButton} onClick={() => {setType('cart'); addToCartLS(id)}}>Add to cart</Button>
      </div>
    );
  } else if (typeItem === 'cart'){
    content = (
      <div className={classes.unitItem}>
        <h5 className={classes.unitItemTitle}>{title}</h5>
        <p className={classes.unitItemDescription}>{appointment}</p>
        <img className={classes.unitItemImage} src={imageSRC} alt={title}/>
        <p className={classes.unitItemCost}>{cost}</p>
        <p className={classes.unitItemQuantity}>{quantity}</p>
        <Button buttonClases={classes.unitItemButtonSelected} onClick={() => removeFromCartLS(id)}>remove</Button>
      </div>
    );
  }

  return content;
}

export default UnitItem;

const addToCartLS = (id: number) => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
}

const removeFromCartLS = (id: number) => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const newCart = cart.filter((item: number) => item !== id);
  localStorage.setItem('cart', JSON.stringify(newCart));
}