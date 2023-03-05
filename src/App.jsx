import { useState } from 'react'
import HomeScreen from './components/HomeScreen/HomeScreen'
import Quiz from './components/Quiz/Quiz'
import './App.css'

function App() {

  const [isStarted, setIsStarted] = useState(false)

  console.log(isStarted)

  function handleClick() {
    console.log("click")
    setIsStarted(true)
  }

  return (
    <div className="App">
      {isStarted ? <Quiz /> : <HomeScreen handleClick={handleClick} />}
    </div>
  )
}

export default App
