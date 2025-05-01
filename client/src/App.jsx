import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeModeProvider } from './context/ThemeModeContext'
import { solutionsData as solutions } from './data/solutionsData'
import Navbar from './components/Navbar'
import Mainpage from './pages/Mainpage'
import Footer from './components/Footer'
import SolutionPage from './pages/SolutionPage'
import BookingPage from './pages/Bookingpage'
import ScrollToTop from './components/ScrollToTop'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  return (
    <BrowserRouter>
      <ThemeModeProvider>
        <ToastContainer position="top-right" autoClose={3000} />
        <ScrollToTop />
        <Navbar />
          <Routes>
            <Route path='/' element={<Mainpage />} />
            <Route path='/booking' element={<BookingPage />} />
            {solutions.map((solution) => (
              <Route key={solution.id} path={solution.path} element={<SolutionPage solution={solution} />} />
            ))}
          </Routes>
        <Footer />
      </ThemeModeProvider>
    </BrowserRouter>
  )
}

export default App