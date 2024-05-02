import { useState} from 'react'
import './App.css'
import { Button, Router } from './components/'
import { Home, Quizz } from './pages/'

const routes = [
  {path: '/', component: Home},
  {path: '/quizz', component: Quizz}
]



function App() {


  return (
    <>
      <Router routes = {[
          {path: '/', component: Home},
          {path: '/quizz', component: Quizz}
        ]}>
      </Router>
  
  
    </>
  )
}

export default App
