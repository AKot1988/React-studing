import { useState } from 'react'
import './App.css'
import Carousel from './components/Carousel/Carousel'

const itemsData = [
  {
    title: 'First Item',
    imgURL: 'https://c4.wallpaperflare.com/wallpaper/978/125/169/james-webb-space-telescope-carina-nebula-space-telescope-stars-hd-wallpaper-preview.jpg',
    text: 'This is the first item'
  },
  {
    title: 'Second Item',
    imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuiWHu-a54Pgb8N37MCxDns4TqQLJEocZpCkQRgmUOMw&s',
    text: 'This is the second item'
  },
  {
    title: 'Third Item',
    imgURL: 'https://images5.alphacoders.com/132/1328110.png',
    text: 'This is the third item'
  }
]

function App() {
  return (
    <>
      <Carousel items={itemsData}></Carousel>
    </>
  )
}

export default App
