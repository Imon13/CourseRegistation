import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='text-6xl'>Course Registration</h2>
      <Home></Home>
    </>
  )
}

export default App