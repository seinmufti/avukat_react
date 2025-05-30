import { useState } from 'react';
import { LangContext } from './LangContext';

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [lang, setLang] = useState('en');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <>
        <Navbar />
        <Hero />
        <AboutUs />
        <Services />
        <Contact />
        <Footer />
      </>
    </LangContext.Provider>
  )
}

export default App
