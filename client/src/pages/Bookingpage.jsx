import React from 'react'
import AppointmentBookingForm from '../components/AppointmentBookingForm'
import Techstack from '../components/Techstack'
import Offer from './section/Offer'
import Process from './section/Process'
import Contact from './section/Contact'
import FAQs from './section/FAQs'

const BookingPage = () => {
  return (
    <div id='home' className='w-full'>
        <AppointmentBookingForm />
        <Techstack />
        <div id='about' className="w-full">
          <Offer />
        </div>
        <Process />
        <Contact />
        <FAQs />
    </div>
  )
}

export default BookingPage;