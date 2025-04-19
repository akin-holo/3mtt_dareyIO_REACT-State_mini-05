import { useState } from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import './App.css'

function App() {
  const AppName = "Click Counter";
  const [count, setCount] = useState(0)
  const [thresholdMsg, setThresholdMsg] = useState("")


  const increaseCount = () => {
    setCount((prevCount) => {
       let newCount = prevCount + 1;

       if (newCount > 20) {
        setThresholdMsg("You've reached the limit");
        newCount = prevCount + 0;
       } else {
        setThresholdMsg("");
       }
       return newCount;
      });
  }

  const decreaseCount = () => {
    setCount((prevCount) => {
      let newCount = prevCount - 1;

      if (newCount === 0) {
        setThresholdMsg("You've reached the limit");
        newCount = prevCount;
      } else if (newCount > 0 || newCount <= 20) {
        setThresholdMsg("");
      }
      return newCount;
  })
}

  return (
    <>
      <h1>{AppName}</h1>
      <h2>{count}</h2>
      <div className="card">
        <Increment count={count} increaseCount={increaseCount} />
        <Decrement count={count} decreaseCount={decreaseCount} />
      </div>
      <p>{thresholdMsg}</p>
    </>
  )
}

export default App
