import { useState } from 'react'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Quizpage from './components/Quizzpage'
import Resultpage from './components/Resultpage'

function App() {
  const [count, setCount] = useState(0);
  const[score,setScore]=useState(0);
  
  const handleScore=(newScore)=>{
     setScore(newScore)
  }

  const handleCount=(newCount)=>{
    setCount(newCount)
  }

  return (
    <>
    <Routes>
   <Route path='/' element={<Homepage />}></Route>
   <Route path='/Quizzpage' element={<Quizpage scoreUpdate={handleScore} countUpdate={handleCount} />}></Route>
   <Route path='/Resultpage' element={<Resultpage score={score} count={count} />}></Route>

    </Routes>

    </>
  )
}

export default App