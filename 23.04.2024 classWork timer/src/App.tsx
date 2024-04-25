import { useState } from 'react'
import './App.css'
import Carousel from './components/Carousel/Carousel'

function App() {


  return (
    <>
      <Timer startValue={0} step={2} direction={TIMER_DIRECTION.UP} endValue={10}/>
    </>
  )
}

export default App
