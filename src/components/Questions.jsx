import React, { useEffect, useState } from 'react'
import { data } from '../dummy/data'
import { useFetchQuestion } from '../hooks/fetchQuestions';
import { useSelector } from 'react-redux';

const Questions = () => {

  const [checked, setChecked] = useState(undefined)

  // const question = data[0];
  // console.log('question', question);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const { question } = useSelector(state => state)

  useEffect(() => console.log('qus', question))

  const onSelect = () => {
    setChecked(true)
    console.log('radio button change')
  }

  if (isLoading) return <h3 className='text-light'>isLoading</h3>
  if (serverError) return <h3 className='text-light'>{serverError || "Unknwn Error"}</h3>





  return (
    <div className='questions'>

      {/* Question heading */}
      <h2 className='text-light'>{question.question}</h2>

      {/* list */}
      <ul key={question.id}>
        {question.options.map((q, i) => (
          <li key={i}>
            <input type="radio"
              value={false}
              name='options'
              id={`q${i}-options`}
              onChange={onselect} />

            <label className='text-primary' htmlFor={`q${i}-options`}>{q}</label>
            <div className='check '></div>
          </li>
        ))}

      </ul>

    </div>
  )
}

export default Questions
