import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const IconsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  & > a {
    margin: 0 1rem;
    color: #00bfff;  /* Unified blue color */
    font-size: 2rem;
    transition: color 0.3s;

    &:hover {
      color: #00ffff;  /* Lighter blue on hover */
    }
  }
`;

const SocialIcons = () => {
  return (
    <IconsContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <a href="https://github.com/itzabdurrehman01" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/muhammad-abdurrehman/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="mailto:abdurrehmanrajpoot001@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope />
      </a>
      <a href="tel:+923034529162" target="_blank" rel="noopener noreferrer">
        <FaPhone />
      </a>
    </IconsContainer>
  );
};

export default SocialIcons;
