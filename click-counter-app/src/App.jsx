import { useState } from 'react'
import IncreaseButton from './IncreaseButton'
import DecreaseButton from './DecreaseButton'
import './App.css'

function App() {
  const AppName = "Click Counter";
  let threshold = "";
  const [count, setCount] = useState(0)


  const increaseCount = () => {
    setCount((count) => count + 1);
    
    if( count === 0 || count > 20 ) {
      threshold.textContent = "You've reached the limit"
    }
  }

  const decreaseCount = () => {
    setCount((count) => count - 1)

  }

  return (
    <>
      <h1>{AppName}</h1>
      <h2>{count}</h2>
      <div className="card">
        <IncreaseButton count={count} increaseCount={increaseCount} />
        <DecreaseButton count={count} decreaseCount={decreaseCount} />
      </div>
      <p>{threshold}</p>
    
    </>
  )
}

export default App
