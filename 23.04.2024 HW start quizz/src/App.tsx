import { useState, useEffect } from 'react'
import './App.css'
import Quizz from './components/Quizz/Quizz'
import Button from './components/Button/Button'

const reactQuestions = [
  "Що таке React.js і для чого він використовується?",
  "Яка різниця між класовими та функціональними компонентами в React?",
  "Що таке віртуальний DOM (Virtual DOM) в React і як він працює?",
  "Які основні принципи життєвого циклу компонентів React?",
  "Як можна передавати дані вниз (props) і вгору (callbacks) між компонентами в React?"
];

function App() {
  const [doesQuizzStarted, setQuizzStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestion] = useState(0)

  return (
    <>
      {!doesQuizzStarted && <button onClick={()=>setQuizzStarted(!doesQuizzStarted)}>Start quizz</button>}
      {(reactQuestions.length - 1) && doesQuizzStarted && <Quizz question = {reactQuestions}></Quizz>}
      {currentQuestionIndex === (reactQuestions.length - 1) && <Button onClick={() => setQuizzStarted(false)} text={"Finish quizz"} />}
    </>
  )
}

export default App
