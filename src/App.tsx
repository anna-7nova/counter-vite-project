import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './assets/components/Counter'

function App() {
  const minValue = 0;
  const maxValue = 5;

  const [count, setCount] = useState<number>(minValue)
  const isDisabledReset = count === minValue

  function counterFunc(count: number) {
    setCount(count + 1);
  }

  function resetFunc() {
    setCount(minValue)
  }

  return (
    <>
      <Counter
        count={count}
        maxValue={maxValue}
        counterFunc={counterFunc}
        resetFunc={resetFunc}
        isDisabled={count === maxValue}
        isDisabledReset={isDisabledReset} />
    </>
  )
}

export default App
