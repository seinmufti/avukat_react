import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <AboutUs />
    <Services />
    <Contact />
    <Footer />
    </>
  )
}

export default App
