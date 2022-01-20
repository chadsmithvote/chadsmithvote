import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Donate from './Donate/Donate';
import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData, donateData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [donate, setDonate] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setDonate({ ...donateData });

  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, donate }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Donate />
      <Footer />
  
    </PortfolioProvider>
  );
}

export default App;
