'use client'
import { useState } from 'react'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleCounter = () => {
        setCounter(counter+1)
    }
  return (
    <>
        <h3>{counter}</h3>
        <button
            onClick={() => handleCounter()}
        >+1</button>
    </>
  )
}
