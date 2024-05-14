import { UnitItem } from '../../components';
import classes from './Catalog.module.scss';
import { FC } from 'react';
import { useNavigation, useLoaderData } from 'react-router-dom';

const Catalog: FC= () => {
  const { state } = useNavigation();
  const unitsArray =  useLoaderData();
  return (
    <>
      {state === "loading" ? "I AM LOADING, PLEASE PATIENCE" : null}
      <h3>Catalog page</h3>
      <div className={classes.catalogWrapper}>
        {unitsArray && unitsArray.map((unit) => (
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
    </>
  );
}
  export default Catalog;