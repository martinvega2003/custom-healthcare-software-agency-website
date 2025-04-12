import React from 'react';
import SolutionCard from '../../components/SolutionCard';
import { motion } from 'framer-motion';
import { AiOutlineStar, AiOutlineHeart } from 'react-icons/ai';

//Solution Images:
import EducationPortalImage from '../../images/patient-education-portal.webp';
import AppointmentReminderImage from '../../images/appointment-reminder.webp';
import EmployeeSchedulingImage from '../../images/employee-scheduling.webp';
import TrainingTrackerImage from '../../images/internal-training-tracker.webp';
import FeedbackToolImage from '../../images/clinic-feedback.webp';
import InventoryTrackerImage from '../../images/inventory-tracker.webp';

const Solutions = () => {

  const solutions = [
    {
      id: 1,
      image: EducationPortalImage,
      title: "Patient Education Portal",
      description: "A web-based platform offering interactive articles, videos, and FAQs about procedures, treatments, and health tips. Enhances patient engagement and education without handling sensitive data.",
      path: "/services/patient-education-portal"
    },
    {
      id: 2,
      image: AppointmentReminderImage,
      title: "Appointment Reminder System",
      description: "A tool enabling clinic administrators to schedule and send appointment reminders via email or SMS. Reduces patient no-shows and improves clinic efficiency with minimal data handling.",
      path: "/services/appointment-reminder-system"
    },
    {
      id: 3,
      image: EmployeeSchedulingImage,
      title: "Employee Scheduling App",
      description: "An application for managing staff shifts, breaks, and rotations within a healthcare facility. Streamlines internal operations without involving patient data.",
      path: "/services/employee-scheduling-app"
    },
    {
      id: 4,
      image: TrainingTrackerImage,
      title: "Internal Training Tracker",
      description: "A dashboard for tracking staff training, certifications, and workshop participation. Supports compliance and professional development within the clinic.",
      path: "/services/internal-training-tracker"
    },
    {
      id: 5,
      image: FeedbackToolImage,
      title: "Clinic Feedback Collection Tool",
      description: "A system for collecting anonymous patient feedback post-appointments. Enhances clinic services through patient insights without requiring user accounts or sensitive data.",
      path: "/services/clinic-feedback-tool"
    },
    {
      id: 6,
      image: InventoryTrackerImage,
      title: "Inventory Tracker for Small Clinics",
      description: "A tool to monitor and manage clinic supplies, alerting staff when items are low. Improves operational efficiency without involving patient information.",
      path: "/services/inventory-tracker"
    }
  ];

  return (
    <section id="services" className="relative bg-gray-50 py-16">
      <div className="absolute z-0 inset-0 h-full opacity-50">
        <div className="h-1/2 bg-white" />
        <div className="h-1/2 bg-blue-300" />
      </div>
      {/* Decorative Icons */}
      <div className="absolute top-10 left-10 text-blue-100 text-6xl">
        <AiOutlineStar />
      </div>
      <div className="absolute bottom-10 right-10 text-pink-100 text-8xl">
        <AiOutlineHeart />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        {/* Heading and Description */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-blue-600 mb-4">
            Some Of The Solutions I Can Deliver
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Whether you're looking for CRMs, Appointment Booking Tools, or simple systems that can automate repetitive and time consuming tasks,
            <br />
            <br />
            <span className="font-semibold text-blue-600"> I can help you build the perfect solution for your clinic.</span>
            <br />
            <br />
            With a focus on user experience and functionality, I can create custom solutions that meet your specific needs. From patient education portals to employee scheduling apps,
            <br />
            <br />   
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;