import React, { useEffect } from 'react'
import Questions from '../components/Questions'
import { useSelector } from 'react-redux'

const Quiz = () => {
  //redux store
  const state = useSelector(state => state)

  useEffect(() => console.log('Slice', state))


  // Prev and Next button onClick
  const onNext = () => {
    console.log('on next click')
  }

  const onPrev = () => {
    console.log('On Prev Click')
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* dislay questions */}
      <Questions />

      {/* buttons */}
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Quiz
