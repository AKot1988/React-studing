import { UnitItem } from '../../components';
import { UnitItemProps } from '../../components/UnitItem/UnitItem';
import classes from './Catalog.module.scss';
import { FC, useEffect, useState} from 'react';
import { useNavigation, useLoaderData } from 'react-router-dom';

const data=[
  {
    "id": 1,
    "title": "Трактор John Deere 6120M",
    "appointment": "Призначений для різноманітних сільськогосподарських робіт",
    "imageSRC": "https://example.com/tractor.jpg",
    "cost": 1500000,
    "quantity": 5
  },
  {
    "id": 2,
    "title": "Комбайн Claas Lexion 770",
    "appointment": "Призначений для жнив",
    "imageSRC": "https://example.com/combine.jpg",
    "cost": 3000000,
    "quantity": 3
  },
  {
    "id": 3,
    "title": "Плуг Lemken Opal 90",
    "appointment": "Призначений для обробки ґрунту",
    "imageSRC": "https://example.com/plough.jpg",
    "cost": 150000,
    "quantity": 10
  },
  {
    "id": 4,
    "title": "Сівалка Vaderstad Rapid 300C",
    "appointment": "Призначена для посіву зернових культур",
    "imageSRC": "https://example.com/seeder.jpg",
    "cost": 500000,
    "quantity": 7
  },
  {
    "id": 5,
    "title": "Косарка Fendt Slicer 3670",
    "appointment": "Призначена для косіння трави",
    "imageSRC": "https://example.com/mower.jpg",
    "cost": 200000,
    "quantity": 8
  },
  {
    "id": 6,
    "title": "Граблі Pöttinger HIT 6.80",
    "appointment": "Призначені для збору сіна",
    "imageSRC": "https://example.com/rake.jpg",
    "cost": 80000,
    "quantity": 12
  },
  {
    "id": 7,
    "title": "Трактор New Holland T7.210",
    "appointment": "Призначений для сільськогосподарських робіт",
    "imageSRC": "https://example.com/tractor2.jpg",
    "cost": 1800000,
    "quantity": 6
  },
  {
    "id": 8,
    "title": "Комбайн John Deere S790",
    "appointment": "Призначений для збирання врожаю",
    "imageSRC": "https://example.com/combine2.jpg",
    "cost": 3500000,
    "quantity": 4
  },
  {
    "id": 9,
    "title": "Плуг Kuhn Vari-Master 123",
    "appointment": "Призначений для обробки ґрунту",
    "imageSRC": "https://example.com/plough2.jpg",
    "cost": 170000,
    "quantity": 9
  },
  {
    "id": 10,
    "title": "Сівалка Horsch Maestro 24.75",
    "appointment": "Призначена для посіву насіння",
    "imageSRC": "https://example.com/seeder2.jpg",
    "cost": 600000,
    "quantity": 5
  },
  {
    "id": 11,
    "title": "Плуг Lemken Vari-Diamant 11/1800",
    "appointment": "Призначений для обробки ґрунту",
    "imageSRC": "https://example.com/plough3.jpg",
    "cost": 190000,
    "quantity": 8
  },
  {
    "id": 12,
    "title": "Комбайн Case IH Axial-Flow 9250",
    "appointment": "Призначений для збирання врожаю",
    "imageSRC": "https://example.com/combine3.jpg",
    "cost": 3200000,
    "quantity": 3
  },
  {
    "id": 13,
    "title": "Трактор Massey Ferguson 7719 S",
    "appointment": "Призначений для різних сільськогосподарських робіт",
    "imageSRC": "https://example.com/tractor3.jpg",
    "cost": 1650000,
    "quantity": 7
  },
  {
    "id": 14,
    "title": "Сівалка Vaderstad Rapid A 600S",
    "appointment": "Призначена для посіву насіння",
    "imageSRC": "https://example.com/seeder3.jpg",
    "cost": 550000,
    "quantity": 6
  },
  {
    "id": 15,
    "title": "Косарка Krone Big M 450",
    "appointment": "Призначена для косіння трави",
    "imageSRC": "https://example.com/mower2.jpg",
    "cost": 2200000,
    "quantity": 2
  }
]

const Catalog: FC= () => {
  const { state } = useNavigation();
  const { data: unitsArray } =  useLoaderData();
  console.log(unitsArray);
  return (
    <>
      {state === "loading" ? "I AM LOADING, PLEASE PATIENCE" : null}
      <h3>Catalog page</h3>
      <div className={classes.catalogWrapper}>
        {data && data.map((unit) => (
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