import React from 'react'
import heroImg from '../images/hero.webp'

// Section Imports
import Home from './section/Home'
import Techstack from '../components/Techstack'
import About from './section/About'

const Mainpage = () => {
  return (
    <main>
      <Home image={heroImg} />
      <Techstack />
      <About />
    </main>
  )
}

export default Mainpage