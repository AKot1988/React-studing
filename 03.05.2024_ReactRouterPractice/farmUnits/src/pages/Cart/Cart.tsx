
import { FC, useEffect, useState } from 'react';
import { getDataToCart, UnitItem } from '../../components';

const Cart: FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    getDataToCart().then((items) => {
      setCartItems(items);
    });
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((unit) => (
        <UnitItem
          key={unit.id}
          id={unit.id}
          title={unit.title}
          appointment={unit.appointment}
          imageSRC={unit.imageSRC}
          cost={unit.cost}
          quantity={unit.quantity}
          type={unit.type}
        />
      ))}
    </div>
  );
};

export default Cart;