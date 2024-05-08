import { FC } from 'react';
import classes from './Home.module.scss';

const Home: FC = () => {
  return (
    <div>
      <h1 className={classes.reactangle}>Прямокутик, що симфолізує секцію лендінгу №2</h1>
      <h1 className={classes.reactangle}>Прямокутик, що симфолізує секцію лендінгу №3</h1>
      <h1 className={classes.reactangle}>Прямокутик, що симфолізує секцію лендінгу №1</h1>
    </div>
  )
}

export default Home;