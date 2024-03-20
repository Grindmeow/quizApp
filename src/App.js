import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import './styles/App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/result' element={<Result />} />
      </Routes>

    </div>
  )
}

export default App
