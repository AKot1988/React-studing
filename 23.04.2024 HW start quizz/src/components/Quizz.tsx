import { FC } from 'react'
import classes from './Quizz.module.scss'

type QuizzProps = {
  question: string[]
}

const Quizz: FC<QuizzProps> = ({question}) => {
  return(
    <div className={classes.quizz}>
      <div className={classes.question}>{question}</div>
    </div>
  )
}