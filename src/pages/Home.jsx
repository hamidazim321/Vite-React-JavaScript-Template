import React from 'react'
import Intro from '../components/Intro'
import { Link } from 'react-router-dom'
export default function home() {
  return (
    <div className='mt-16 flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-center font-mono'>Home</h1>
      <Intro />
      <Link to="count">
        Counter App
      </Link>
    </div>
  )
}
