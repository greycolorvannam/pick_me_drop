import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaxiBooking from './booking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaxiBooking />
    </>
  )
}

export default App
