import React from 'react'
import heroImg from '../images/hero.webp'

// Section Imports
import Home from './section/Home'
import Techstack from '../components/Techstack'
import About from './section/About'
import Process from './section/Process'
import Solutions from './section/Solutions'
import Contact from './section/Contact'
import FAQs from './section/FAQs'
import AppointmentBookingForm from '../components/AppointmentBookingForm'

const Mainpage = () => {
  return (
    <main>
      <Home image={heroImg} />
      <Techstack />
      <About />
      <Process />
      <Solutions />
      <Contact />
      <AppointmentBookingForm />
      <FAQs />
    </main>
  )
}

export default Mainpage