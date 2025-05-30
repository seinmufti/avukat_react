import { useState } from 'react';
import { LangContext } from './LangContext';

import { CssVarsProvider } from '@mui/joy/styles';
import createTheme from './theme';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('en');

  const theme = createTheme(lang);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <CssVarsProvider theme={theme}>
        <>
          <Navbar />
          <Hero />
          <AboutUs />
          <Services />
          <Contact />
          <Footer />
        </>
      </CssVarsProvider>
    </LangContext.Provider>
  );
}

export default App;
