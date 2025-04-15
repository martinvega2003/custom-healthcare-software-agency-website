import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeModeProvider } from './context/ThemeModeContext'
import { solutionsData as solutions } from './data/solutionsData'
import Navbar from './components/Navbar'
import Mainpage from './pages/Mainpage'
import Footer from './components/Footer'
import SolutionPage from './pages/SolutionPage'

const App = () => {

  return (
    <BrowserRouter>
      <ThemeModeProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<Mainpage />} />
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