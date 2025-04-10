import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeModeProvider } from './context/ThemeModeContext'
import Button from './components/Button'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <BrowserRouter>
      <ThemeModeProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<>
              <div className='text-5xl text-amber-300 dark:text-amber-700 dark:bg-gray-800'>App</div>
              <Button className='m-2' onClick={() => console.log('Button clicked!')} variant='link'>Click Me</Button>
            </>} />
          </Routes>
      </ThemeModeProvider>
    </BrowserRouter>
  )
}

export default App