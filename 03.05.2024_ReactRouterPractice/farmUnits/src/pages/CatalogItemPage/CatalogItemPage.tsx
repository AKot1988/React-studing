import classes from './CatalogItemPage.module.scss';
import { FC, useState, useEffect } from 'react';

import { UnitItem, UnitItemProps, fetchData } from '../../components';
import { useLoaderData, useParams } from 'react-router-dom';

const CatalogItemPage: FC= () => {
  const fetchResult: unknown | UnitItemProps[] | any = useLoaderData();
  const { id } = useParams();
  console.log(fetchResult);
  console.log(id);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (fetchResult && id) {
      const foundProduct = fetchResult.find((item: UnitItemProps) => +item.id === +id);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [fetchResult, id]); // Викликаємо useEffect при зміні fetchResult або id

  console.log(product);
  if (!product) return null;
  return (
    <>
      <div className={classes.catalogItemWrapper}>
        <h3>{product.title}</h3>
        <UnitItem
          id={product.id}
          title={product.title}
          appointment={product.appointment}
          imageSRC={product.imageSRC}
          cost={product.cost}
          quantity={product.quantity}
          type={product.type}
        />
      </div>
    </>
  );
}

export default CatalogItemPage;