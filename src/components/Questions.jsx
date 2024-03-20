import React, { useState } from 'react'

const Questions = () => {

  const [checked, setChecked] = useState(undefined)

  const onSelect = () => {
    setChecked(true)
    console.log('radio button change')
  }

  return (
    <div className='questions'>

      {/* Question heading */}
      <h2 className='text-light'>Simple Question 1</h2>

      {/* list */}
      <ul>
        <li>
          <input type="radio"
            value={false}
            name='options'
            id='q1-option'
            onChange={onselect} />

          <label className='text-primary' htmlFor="q1-option">option</label>
          <div className='check checked'></div>
        </li>
      </ul>

    </div>
  )
}

export default Questions
