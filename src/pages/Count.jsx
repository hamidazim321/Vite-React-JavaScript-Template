import React from 'react'
import CounterApp from '../components/CounterApp'
import { Link } from 'react-router-dom'

export default function Count() {
  return (
    <div className='mt-16 flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-center font-mono'>Counter</h1>
      <CounterApp />
      <Link to="/">
        Back Home
      </Link>
    </div>
  )
}
