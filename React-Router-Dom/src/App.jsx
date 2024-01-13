import { useState } from 'react'
BrowserRouter
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Router, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    </BrowserRouter>
    </>
  )
}

export default App
