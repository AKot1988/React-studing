import Button from'../Button/Button'

import { FC, useState } from 'react'
import { QuizzProps } from '../../types'
import classes from './Quizz.module.scss'

// const Quizz: FC<QuizzProps> = ({question}) => {
//   const [currentQuestionIndex, setCurrentQuestion] = useState(0)
//   const nextQuestion = () => {setCurrentQuestion((prev)=> prev + 1)
//     return (
//       <div className={classes.quizz}>
//         <div className={classes.question}>{question[currentQuestionIndex]}</div>
//       </div>
//     )
//   }
//   const finishedQuizz = () => {return (<p>quizz is finished</p>)}
//   return(
//     currentQuestionIndex < question.length && <Button onClick={nextQuestion} text="Next question" /> ||
//     currentQuestionIndex === question.length && <Button onClick={finishedQuizz} text={'Finish'}></Button>
//   )
// }

// export default Quizz

// import Button from'../Button/Button'

// import { FC, useState } from 'react'
// import { QuizzProps } from '../../types'
// import classes from './Quizz.module.scss'

// const Quizz: FC<QuizzProps> = ({question}) => {
//   const [currentQuestionIndex, setCurrentQuestion] = useState(0)
//   const nextQuestion = () => {setCurrentQuestion((prev)=> prev + 1)
//   }
//   const finishedQuizz = () => {return (alert('Quizz is finished'))}
//   return(
//     currentQuestionIndex < question.length && (
//       <div className={classes.quizz}>
//         <div className={classes.question}>{question[currentQuestionIndex]}</div>
//         <Button onClick={nextQuestion} text="Next question" />
//       </div>
//     ) || (currentQuestionIndex === question.length) && <Button onClick={finishedQuizz} text={'Finish'}></Button>
    
//   )
// }

// export default Quizz



const Quizz: FC<QuizzProps> = ({question}) => {
  const [currentQuestionIndex, setCurrentQuestion] = useState(0);
  const [quizzFinished, setQuizzFinished] = useState(false);

  const nextQuestion = () => setCurrentQuestion(prev => prev + 1);

  const finishQuizz = () => {
    setQuizzFinished(true);
  };

  return (
    <>
      {!quizzFinished && currentQuestionIndex < question.length && (
        <div className={classes.quizz}>
          <div className={classes.question}>{question[currentQuestionIndex]}</div>
          <Button onClick={nextQuestion} text="Next question" />
        </div>
      )}
      {quizzFinished && <div>Ви пройшли опитування</div>}
      {!quizzFinished && currentQuestionIndex === question.length && (
        <Button onClick={finishQuizz} text={'Finish'} />
      )}
    </>
  );
}

export default Quizz;