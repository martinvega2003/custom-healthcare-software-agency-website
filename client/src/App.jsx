import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeModeProvider } from './context/ThemeModeContext'
import Navbar from './components/Navbar'
import Mainpage from './pages/Mainpage'
import Footer from './components/Footer'

const App = () => {

  return (
    <BrowserRouter>
      <ThemeModeProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<Mainpage />} />
          </Routes>
        <Footer />
      </ThemeModeProvider>
    </BrowserRouter>
  )
}

export default App