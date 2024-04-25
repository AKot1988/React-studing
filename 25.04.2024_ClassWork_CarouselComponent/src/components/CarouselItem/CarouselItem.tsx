import {FC} from 'react';
import classes from './CarouselItem.module.scss'
import {CarouselItemProps} from '../types'

const CarouselItem: FC<CarouselItemProps> = ({title, imgURL, text}) => {
  return (
    <div className={classes.CarouselItem}>
      <h2 className={classes.CarouselItemTitle}>{title}</h2>
      <img className={classes.CarouselItemImage} src={imgURL} alt="carousel"/>
      <p className={classes.CarouselItemText}>{text}</p>
    </div>
  )
}
export default CarouselItem