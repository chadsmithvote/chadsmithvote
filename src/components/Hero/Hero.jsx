import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, cta2, cta3 } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Chad Smith'} </span>
            <br />
            {subtitle || "I'm running for Pinellas County School Board in District 2."}{' '}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Meet Chad'}
               </Link>
            </span>
          </p>
        </Fade>
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1500} distance="30px">
                <p className="hero-cta2">
            <span className="cta-btn cta-btn--hero2">
             <Link to="donate" smooth duration={1000}>
                {cta2 || 'Donate' }
                </Link>
            </span>
          </p>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1500} distance="30px">
                <p className="hero-cta3">
            <span className="cta-btn cta-btn--hero3">
             <Link to="contact" smooth duration={1000}>
                {cta3 || 'Sign Up' }
                </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};


export default Header;
