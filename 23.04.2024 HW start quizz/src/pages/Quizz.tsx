import {Quizz} from '../components/'
import {useState} from 'react'

const reactQuestions = [
  "Що таке React.js і для чого він використовується?",
  "Яка різниця між класовими та функціональними компонентами в React?",
  "Що таке віртуальний DOM (Virtual DOM) в React і як він працює?",
  "Які основні принципи життєвого циклу компонентів React?",
  "Як можна передавати дані вниз (props) і вгору (callbacks) між компонентами в React?"
];


const QuizzPage = () => {
  const [doesQuizzStarted, setQuizzStarted] = useState(false)
  return (
    <>
      {!doesQuizzStarted && <button onClick={()=>setQuizzStarted(!doesQuizzStarted)}>Start quizz</button>}
      {doesQuizzStarted && <Quizz question = {reactQuestions}></Quizz>}
    </>
  )
}

export default QuizzPage