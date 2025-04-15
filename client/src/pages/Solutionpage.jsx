import React, { useState } from 'react'
import Home from './section/Home'
import Process from './section/Process'
import Contact from './section/Contact'
//import FAQsImg from "../images/braces-2.jpg"
import AppointmentBookingForm from '../components/AppointmentBookingForm'

const SolutionPage = ({solution}) => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const handleFAQClick = (index) => {
    setOpenFAQ(prevIndex => (prevIndex === index ? null : index))
  }

  return (
    <section className='w-full h-fit flex flex-col justify-start items-center'>
      <div className="w-full">
        <Home image={solution.image} heading={solution.heading} subheading={solution.subheading} />
      </div>

      <div id='about' className="w-full h-fit py-20 px-4 sm:px-16 flex justify-center items-center bg-gray-100 text-gray-800">
        <p className="text-xl text-justify md:text-center">
            {solution.extendedDescription}
        </p>
      </div>

      {/* FAQs Section */}
      <div className="w-full bg-blue-700 text-white py-16 px-8">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="w-full lg:w-1/2 lg:mr-20">
            <h3 className="text-3xl mb-6">Frequently Asked Questions</h3>
              {solution.faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="mb-4 cursor-pointer" 
                  onClick={() => handleFAQClick(index)}
                >
                  <div className="flex justify-between items-center py-4 border-b border-white">
                    <span className="text-xl">{faq.question}</span>
                    <span className="text-2xl">{openFAQ === index ? '-' : '+'}</span>
                  </div>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96' : 'max-h-0'}`}
                    style={{maxHeight: openFAQ === index ? '400px' : '0'}}
                  >
                    <p className="text-gray-300 mt-2">{faq.answer}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 rounded-3xl overflow-hidden">
            <img src={"https://via.placeholder.com/500x400"} alt="Service" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
        
      <div className="w-full">
          <AppointmentBookingForm />
      </div>
      <div className="w-full">
          <Process />
      </div>
      <div className='w-full'>
          <Contact />
      </div>
    </section>
  )
}

export default SolutionPage;