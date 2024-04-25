import {FC, useState, useEffect} from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';
import classes from './Carousel.module.scss'

import {CarouselItemProps, CarouselProps} from '../types'




const Carousel: FC<CarouselProps> = ({items}) => {
  const [itemIndex, setItem] = useState(0)

  const handleNext = () => {setItem((prev)=> prev >= items.length-1 ? 0 : prev + 1)}
  const handlePrev = () => {setItem((prev)=> prev === 0 ? items.length-1 : prev - 1)}

  return (
    <>
      <div className={classes.Carousel}>
        <CarouselItem title={items[itemIndex].title} imgURL={items[itemIndex].imgURL} text={items[itemIndex].text}/>
        <div >
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  )
}

export default Carousel
