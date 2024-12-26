import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import SocialIcons from './SocialIcons'; // Ensure the path is correct

const FooterContainer = styled.footer`
  background-color: #1c1e22; /* Dark background similar to Header */
  color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #00bfff; /* Line above the footer with accent color */
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
  }
`;

const ContactSection = styled.div`
  margin-bottom: 1rem;
  h1 {
    color: #00bfff; /* Accent color */
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const ContactDetails = styled.div`
  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #c4c4c4;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: #00bfff; /* Accent color */
      font-size: 1.2rem;
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 2rem;
  p {
    font-size: 0.8rem;
    color: #c4c4c4;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <ContactSection>
          <h1>Contact Me</h1>
          <ContactDetails>
            <p><strong>Address:</strong> Islamabad, Pakistan</p>
            <p><strong>Contact me directly:</strong></p>
            <p>
              <FaPhone /> +92 303 4529162
            </p>
            <p>
              <FaEnvelope /> abdurrehmanrajpoot001@gmail.com
            </p>
          </ContactDetails>
        </ContactSection>

        <div className="social-section">
          <SocialIcons />
        </div>
      </FooterContent>

      <FooterBottom>
        <p>© 2024 MUHAMMAD ABDUR REHMAN. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
