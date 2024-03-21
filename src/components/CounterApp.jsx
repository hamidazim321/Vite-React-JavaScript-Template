import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterApp() {
  const { count } = useSelector(state => state.counter)
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-16">
      <p className='text-2xl font-mono'>Current Count: {count}</p>
      <button
        className='bg-blue-700 p-4 text-white rounded-lg'
        onClick={() => dispatch(increment())}
      >Increment
      </button>
      <button
        className='bg-green-700 p-4 text-white rounded-lg'
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}
