import React from 'react'
import AppointmentBookingForm from '../components/AppointmentBookingForm'
import Techstack from '../components/Techstack'
import Process from './section/Process'
import Contact from './section/Contact'
import FAQs from './section/FAQs'

const BookingPage = () => {
  return (
    <div className='w-full'>
        <AppointmentBookingForm />
        <Techstack />
        <Process />
        <Contact />
        <FAQs />
    </div>
  )
}

export default BookingPage;