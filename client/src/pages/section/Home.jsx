import { motion } from 'framer-motion';
import Button from '../../components/Button';
import useRedirect from '../../components/useRedirect';

const Home = ({ heading, subheading, image }) => {
  const redirectTo = useRedirect()
  
  return (
    <section
      id="home"
      className="bg-white dark:bg-gray-900 relative bg-cover bg-center h-fit py-12 flex items-center overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {/* Circle */}
        <div className="absolute w-48 h-48 bg-blue-200 dark:bg-blue-900 rounded-full opacity-50 top-16 left-16 md:top-24 md:left-24 blur-xl transition-colors duration-300"></div>

        {/* Dots */}
        <div className="absolute w-24 h-24 bg-gradient-to-r from-blue-300 to-blue-400 dark:from-blue-700 dark:to-blue-900 opacity-60 rounded-full bottom-20 right-20 md:bottom-32 md:right-32 blur-md transition-colors duration-300"></div>

        {/* Minimalistic Rectangles */}
        <div className="absolute bg-blue-100 dark:bg-blue-900 w-40 h-1 top-12 right-24 opacity-30 rotate-12 transition-colors duration-300"></div>
        <div className="absolute bg-blue-100 dark:bg-blue-900 w-40 h-1 bottom-24 left-16 opacity-30 -rotate-12 transition-colors duration-300"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900 opacity-50 z-0 transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 relative z-10 px-6">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <motion.h1
            className="text-2xl lg:text-4xl xl:text-6xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {heading || 'Automate Your Processes And Solve Your Problems'}
          </motion.h1>
          <motion.p
            className="text-md lg:text-lg xl:text-xl text-gray-700 dark:text-gray-300 transition-colors duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {subheading || 
              <p>Get the tool you need built for <strong>free</strong>. Pay monthly
              when you use it and cancel any time, no strings attached.</p> 
            }
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Button isBookingButton={true} variant="primary">
              Book Appointment
            </Button>
          </motion.div>
          <motion.p
            className="text-blue-500 dark:text-blue-100 font-medium text-md transition-colors duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Email Now: placeholder@gmail.com
          </motion.p>
        </div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={image || 'https://via.placeholder.com/500x500'}
            alt="Dental Care"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;