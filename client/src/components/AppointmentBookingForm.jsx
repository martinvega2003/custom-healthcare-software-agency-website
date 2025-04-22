import React, { useState, useContext } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import { ThemeModeContext } from "../context/ThemeModeContext";

const AppointmentBookingForm = () => {
  const { darkMode } = useContext(ThemeModeContext);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(""); // Added state for selected hour
  const [clientData, setClientData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const hours = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM",
    "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM",
  ];

  const handleBooking = () => {
    alert(clientData.name + " - " + clientData.email + " - " + clientData.phone + " - " + clientData.service + " - " + selectedDate + " - " + selectedHour)
  }

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
  };

  const handleInputChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4 border-b border-gray-300 dark:border-gray-600 pb-2 transition-colors duration-300">
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
        <FaArrowLeft className="text-gray-600 dark:text-gray-300 hover:scale-115 transition duration-300 cursor-pointer" />
      </button>
      <div className="text-black dark:text-white transition-colors duration-300">{format(currentMonth, "MMMM yyyy")}</div>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
        <FaArrowRight className="text-gray-600 dark:text-gray-300 hover:scale-115 transition duration-300 cursor-pointer" />
      </button>
    </div>
  );

  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    const startDate = startOfWeek(startOfMonth(currentMonth));

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center text-gray-600 dark:text-gray-300 transition-colors duration-300">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        days.push(
          <div
            key={day}
            className={`p-2 h-16 flex justify-center items-center text-center rounded-md ${
              !isSameMonth(day, monthStart)
                ? "text-gray-300 dark:text-gray-600 cursor-default"
                : isSameDay(day, selectedDate)
                ? "bg-blue-400 dark:bg-blue-800 text-white cursor-pointer"
                : "text-black dark:text-white hover:bg-blue-100 dark:hover:bg-blue-400 cursor-pointer"
            } transition-colors duration-300`}
            onClick={() => handleDateClick(cloneDay)}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div className="grid grid-cols-7" key={day}>{days}</div>);
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="bg-white dark:bg-gray-900 flex flex-col items-center p-6 py-20 transition-colors duration-300">
      {/* Headline Section */}
      <div className="w-full max-w-6xl mb-8">
        <h1 className="text-2xl font-bold mb-2 text-blue-500 dark:text-blue-600 transition-colors duration-300">Book Your Appointment</h1>
        <p className="text-gray-600 dark:text-gray-300 w-full md:w-3/5 transition-colors duration-300">
          If you would like to discuss the service in more detail, please book a <strong>Free</strong> video call with us. We will get back to you as soon as possible. <br className="hidden lg:block" />
          Fill in the form below and select a date and time that works for you.
        </p>
      </div>

      {/* Booking Card */}
      <div className="w-full max-w-6xl bg-white dark:bg-black border border-gray-300 dark:border-gray-800 flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden transition-colors duration-300">
        {/* Client Info Section */}
        <div className="flex flex-col flex-1 p-6">
          <h2 className="text-lg dark:text-white font-semibold mb-4 transition-colors duration-300">Your Information</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={clientData.name}
            onChange={handleInputChange}
            className="text-black dark:text-gray-300 placeholder:text-gray-500 dark:placeholder:text-gray-600 mb-4 p-2 border border-gray-300 dark:border-gray-600 rounded transition-colors duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={clientData.email}
            onChange={handleInputChange}
            className="text-black dark:text-gray-300 placeholder:text-gray-500 dark:placeholder:text-gray-600 mb-4 p-2 border border-gray-300 dark:border-gray-600 rounded transition-colors duration-300"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={clientData.phone}
            onChange={handleInputChange}
            className="text-black dark:text-gray-300 placeholder:text-gray-500 dark:placeholder:text-gray-600 mb-4 p-2 border border-gray-300 dark:border-gray-600 rounded transition-colors duration-300"
          />

          <Button className="mt-4 hidden md:block" variant={darkMode ? "dark" : "success"} onClick={handleBooking}>
            Book a Call
          </Button>
        </div>

        {/* Calendar Section */}
        <div className="flex flex-col flex-1 p-6 border-b border-t md:border-b-0 md:border-t-0 md:border-r md:border-l border-gray-300">
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>

        {/* Hours Section */}
        <div className="relative flex flex-col flex-1 overflow-y-auto md:pb-2 lg:overflow-y-scroll max-h-[450px]">
          <h2 className="text-lg font-semibold sticky top-0 p-6 text-center z-10 bg-blue-600 dark:bg-blue-900 text-white transition-colors duration-300">
            Available Hours
          </h2>
          {hours.map((hour, index) => (
            <div
              key={index}
              className={`text-black dark:text-white p-6 mx-4 rounded-md ${
                selectedHour === hour ? "bg-blue-400 dark:bg-blue-800 text-white" : "hover:bg-gray-200 dark:hover:bg-blue-300"
              } ${index === 0 ? "mt-2" : ""} transition-colors duration-300 cursor-pointer`}
              onClick={() => handleHourClick(hour)}
            >
              {hour}
            </div>
          ))}
          <div className="sticky z-10 bottom-0 bg-white dark:bg-black w-full p-4 flex md:hidden justify-center items-center border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
            <Button className="mt-4 w-full" variant={darkMode ? "dark" : "success"} onClick={handleBooking}>
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBookingForm;