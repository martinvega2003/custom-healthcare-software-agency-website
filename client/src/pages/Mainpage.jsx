import React from 'react'
import heroImg from '../images/hero.webp'

// Section Imports
import Home from './section/Home'
import Techstack from '../components/Techstack'
import About from './section/About'
import Process from './section/Process'

const Mainpage = () => {
  return (
    <main>
      <Home image={heroImg} />
      <Techstack />
      <About />
      <Process />
    </main>
  )
}

export default Mainpage