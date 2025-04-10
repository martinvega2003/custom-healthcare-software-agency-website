import React from 'react'
import heroImg from '../images/hero.webp'

// Section Imports
import Home from './section/Home'

const Mainpage = () => {
  return (
    <main>
      <Home image={heroImg} />
    </main>
  )
}

export default Mainpage