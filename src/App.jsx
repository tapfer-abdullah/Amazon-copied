import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './conponents/header/Header'
import Shop from './conponents/Shop/Shop'

function App() {

  return (
    <div className="App">
      <Header/>
      <Shop></Shop>
    </div>
  )
}

export default App
