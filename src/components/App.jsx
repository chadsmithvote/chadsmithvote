import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import ContactForm from './ContactForm/ContactForm';
import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData, ContactFormData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [form, setForm] = useState("xjvlgvzqz");

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setForm({ ...FormData });

  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, ContactForm }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ContactForm />
      <Footer />
  
    </PortfolioProvider>
  );
}

export default App;
