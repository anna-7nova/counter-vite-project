import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './assets/components/Counter'

function App() {
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(5)
  const [count, setCount] = useState<number>(minValue)
  const isDisabledReset = count === minValue

  function counterFunc(count: number) {
    setCount(count + 1);
  }

  function resetFunc() {
    setCount(minValue)
  }

  function updateSetValue(newMaxValue: number, newMinValue: number) {
    setMaxValue(newMaxValue)
    setMinValue(newMinValue)
    setCount(newMinValue)
  }

  return (
    <>
      <Counter
        count={count}
        maxValue={maxValue}
        minValue={minValue}
        counterFunc={counterFunc}
        resetFunc={resetFunc}
        updateSetValue={updateSetValue}
        isDisabled={count === maxValue}
        isDisabledReset={isDisabledReset} />
    </>
  )
}

export default App
