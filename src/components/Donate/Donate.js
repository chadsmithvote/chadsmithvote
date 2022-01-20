import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Donate = () => {
  const { donate } = useContext(PortfolioContext);
  const { cta, btn, url } = donate;


    return (
    <section id="donate">
      <Container>
        <Title title="Donate"/>

        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="donate-wrapper">
            <p className="donate-wrapper__text">
              {cta || "Help me make our schools safe & equitable for all students!"}
            </p>
            <div className="donate-text">
            <p>Checks can be mailed to the candidate's campaign committee:<br>
           </br><b>Friends of Chad Smith at PO Box 735 Dunedin, FL  34697. </b><br>
           </br> Contributions cannot exceed $1,000 per election for individuals and businesses.</p>
           </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--donate"
              href={url ? `${url}` : 'https://secure.actblue.com/donate/votechadsmith?refcode=vsc&amount=15.00'}
            >
              {btn || "Donate"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Donate;
