import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(prevCount => prevCount + 1)
  }
  const decrease = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={increase}>
      increase 
    </button>
    <button onClick={decrease}>
      decrease
    </button>


    </>
  )
}

export default App
