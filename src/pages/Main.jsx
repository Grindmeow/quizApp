import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'
const Main = () => {

  const inputRef = useRef(null)
  return (
    <div className='container text-light'>

      {/* TITLE */}
      <h1 className='title'>Quiz App</h1>

      {/* LIST */}
      <ol style={{
        listStyleType: ""
      }}>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points is  awarded for the correct answer.</li>
        <li>Each questions has three options. You can choose only one options.</li>
        <li>You can review and change answers before the quiz finish.</li>

        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      {/* USERNAME */}
      <form id="form">
        <input ref={inputRef} type="text" className='userid' placeholder='Username' />
      </form>

      {/* START QUIZ */}
      <div className='start'>
        <Link className='btn' to={'quiz'}>Start Quiz</Link>
      </div>
    </div>
  )
}

export default Main
