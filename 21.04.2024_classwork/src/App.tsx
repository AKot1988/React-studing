import { useState, ReactNode } from 'react'
import './App.css'
import ModalWindow from './components/ModalWindow/ModalWindow'
import classes from './components/ModalWindow/ModalWindov.module.scss'
{console.log(classes)}


const children = <p>pisun Gazirovanyi який чайлдом лдетить у модалку.</p>


function App() {
  // const [isModalOpened, setIsModalOpened] = useState(JSON.parse(localStorage.getItem('isModalOpened')))
  const [isModalOpened, setIsModalOpened] = useState(JSON.parse(localStorage.getItem('isModalOpened') || 'false'));
  function stateToStorage() {
    setIsModalOpened(!isModalOpened)
    localStorage.setItem('isModalOpened', JSON.stringify(!isModalOpened))
  }
  

  return (
    <>
      <h1>21.04.2024_classwork</h1>
      <button onClick={() => stateToStorage()}>Open modal window</button>
      {isModalOpened && <ModalWindow handleClose={() => stateToStorage()}>{children}</ModalWindow>} 
    </>
  )
}

export default App
