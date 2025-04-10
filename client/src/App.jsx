import React from 'react'
import { ThemeModeProvider } from './context/ThemeModeContext'
import Button from './components/Button'

const App = () => {

  return (
    <ThemeModeProvider>
      <div className='text-5xl text-amber-300 dark:text-amber-700 dark:bg-gray-800'>App</div>
      <Button className='m-2' onClick={() => console.log('Button clicked!')} variant='link'>Click Me</Button>
    </ThemeModeProvider>
  )
}

export default App