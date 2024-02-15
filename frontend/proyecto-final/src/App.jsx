import { useState } from 'react'
import './App.css'
import Inicio from './components/inicio/Inicio.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Inicio />
    </>
  )
}

export default App
