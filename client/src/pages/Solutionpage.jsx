import React, { useState } from 'react'
import Home from './section/Home'
import Techstack from '../components/Techstack'
import Offer from './section/Offer'
import Process from './section/Process'
import Contact from './section/Contact'
import AppointmentBookingForm from '../components/AppointmentBookingForm'
import Button from '../components/Button'
import AppBookingImage from '../images/appointment-booking-image-4.webp'
import FAQsImage from '../images/solution-page-faqs-image.webp'
import { FaExclamation, FaCalendar, FaMinus, FaPlus } from 'react-icons/fa'

const SolutionPage = ({solution}) => {
  const [openQuestion, setOpenQuestion] = useState(null);
  
  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <section>
      <div id='home' className="w-full">
        <Home image={solution.image} heading={solution.heading} subheading={solution.subheading} />
      </div>

      <div className="w-full">
        <Techstack />
      </div>

      {/* Content and Appointment Booking Button */}
      <div className='relative w-full h-fit flex justify-start items-stretch'>

        {/* Content */}
        <div className="w-full xl:w-4/5 h-fit flex flex-col justify-start items-center">

          {/* Description Section */}
          <div id='about' className="relative bg-white text-gray-800 text-left py-20 px-4 sm:px-16 border-b-2 border-blue-500">
            <div className="absolute inset-0 opacity-40">
              <div className="relative left-8 top-13 w-20 h-12 bg-blue-500" />
            </div>
            <h4 className="text-xl lg:text-2xl xl:text-3xl text-blue-500 mb-6">
              A Brief Overview of Our Solution
            </h4>
            <p className="text-md lg:text-lg xl:text-xl">
                {solution.extendedDescription}
            </p>
          </div>

          {/* Features Section */}
          <div id='about' className="relative bg-white text-gray-800 text-left py-20 px-4 sm:px-16">
            <div className="absolute inset-0 opacity-40">
              <div className="relative left-8 top-13 w-28 h-12 bg-blue-500" />
            </div>
            <h4 className="text-xl lg:text-2xl xl:text-3xl text-blue-500 mb-6">
              How Does It Works?
            </h4>
            <p className="text-md lg:text-lg xl:text-xl">
                {solution.systemFunctionality}
            </p>

            <div className="mt-6 sm:mt-16 flex items-start gap-1 px-6 py-4 bg-blue-400 text-white rounded-md">
              <FaExclamation className='mt-0.5' /> 
              <p className="text-sm italic text-left">
                {solution.expectedTimeline}
              </p>
            </div>
          </div>

          <div id='services' className="w-full">
              <Offer />
          </div>
          <div className="w-full">
              <Process />
          </div>
          <div className="w-full">
              <AppointmentBookingForm />
          </div>

          {/* FAQs Section */}
          <div className="w-full bg-gray-800 text-white py-16 px-8">
            <div className="w-full flex flex-col lg:flex-row-reverse justify-between items-center lg:items-start">
              <div className="w-full lg:w-1/2 lg:ml-20">
                <h3 className="text-3xl mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {solution.faqs.map((faq, index) => {
                    const isOpen = openQuestion === index;
                    return (
                      <div
                        key={index}
                        onClick={() => toggleQuestion(index)}
                        className={`mb-4 cursor-pointer border-white rounded-lg border-2 transition-all duration-300 ease-in-out ${
                          isOpen ? 'bg-blue-500 text-white' : ''
                        } p-4 rounded-lg hover:bg-blue-500 hover:text-white`}
                      >
                        <div
                          className="flex justify-between items-center cursor-pointer"
                        >
                          <h4 className="text-lg font-medium text-white">{faq.question}</h4>
                          {isOpen ? (
                            <FaMinus className="text-white" />
                          ) : (
                            <FaPlus className="text-white" />
                          )}
                        </div>
                        <div
                          className={`overflow-hidden transition-all ${
                            isOpen ? "max-h-screen mt-4 border-t-2 border-white pt-2" : "max-h-0"
                          }`}
                        >
                          <p className="text-sm text-gray-200">{faq.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full lg:w-1/2 mt-8 lg:mt-0 rounded-3xl overflow-hidden">
                <img src={FAQsImage ? FAQsImage : "https://via.placeholder.com/500x400"} alt="Service" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
            
          <div id='contact' className='w-full'>
              <Contact />
          </div>
        </div>

        {/* Appointment Booking Button */}
        <div className="relative w-1/5 bg-white text-center p-2 hidden xl:flex justify-center items-start">
          <div className="sticky top-28 p-3 flex flex-col justify-start items-center gap-2 border border-blue-500 rounded-lg">
            <img src={AppBookingImage ? AppBookingImage : ''} alt="Appointment Booking Image" className='rounded-lg' />
            <Button variant='outline' icon={<FaCalendar />} className='w-full text-sm flex items-center gap-2'>
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionPage;
