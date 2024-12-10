import { useState } from 'react'
import './App.css'
import Person from './components/Person'
import PersonsGroup from './components/PersonsGroup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonsGroup/>
    </>
  )
}

export default App
