import React from 'react'
import heroImg from '../images/hero.webp'

// Section Imports
import Home from './section/Home'
import Techstack from '../components/Techstack'

const Mainpage = () => {
  return (
    <main>
      <Home image={heroImg} />
      <Techstack />
    </main>
  )
}

export default Mainpage