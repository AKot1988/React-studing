import { FC, useState, useEffect } from 'react'
import classes from './Timer.module.scss'

export enum TIMER_DIRECTION {
  UP = 'up',
  DOWN = 'down',
}

type TimerProps = {
  startValue: number,
  step: number,
  direction: TIMER_DIRECTION,
  endValue: number,
}

const Timer: FC<TimerProps> = ({startValue, step, direction, endValue}) => {
  const [timerValue, setTimerValue] = useState<number>(startValue)
  const [intervalID, setIntervalID] = useState<number | undefined>(undefined)

  useEffect(()=> {
    const interval = setInterval(() => {
      if(direction === TIMER_DIRECTION.UP) {
        setTimerValue((prev)=> prev + step)
      } else if (direction === TIMER_DIRECTION.DOWN) {
        setTimerValue((prev)=> prev - step)
      }
    }, 1000)
    
    setIntervalID(interval)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if(timerValue === endValue) {
      clearInterval(intervalID)
    }
  },[timerValue])

  return(
    <div className={classes.timer}>
      <div className={classes.timerValue}>{timerValue}</div>
    </div>
  )
}

export default Timer