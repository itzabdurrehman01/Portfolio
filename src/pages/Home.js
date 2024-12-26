import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SocialIcons from '../components/SocialIcons';
import profileImage from '../assets/profile.jpg';

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  background: #2a2a2a; /* Match the dark background color */
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const CircleWrapper = styled(motion.div)`
  position: relative;
  width: 320px;  /* Increased width for a bigger circle */
  height: 320px; /* Increased height for a bigger circle */
  background-color: #1a1a1a; /* Match the circle background color */
  border-radius: 50%; /* Make the container circular */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 191, 255, 0.8); /* Updated glow effect color */
`;

const CircleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%; /* Make the image itself circular */
`;

const NameTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin: 0;
  color: #00ffff;
`;

const NameTitle2 = styled(motion.h4)`
  font-size: 1.5rem;
  color: white;
`;

const IntroButton = styled(motion.a)`
  padding: 1rem 3rem; 
  width: 20%;
  background-color: #00bfff;
  color: #000; 
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2rem; 
  transition: background-color 0.3s;

  &:hover {
    background-color: #00ffff;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <TextContainer>
      <NameTitle2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Hello, It's Me
        </NameTitle2>
        <NameTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          MUHAMMAD ABDUR REHMAN
        </NameTitle>
        <NameTitle2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          And I'm a Full Stack Developer
        </NameTitle2>
        <SocialIconsContainer>
          <SocialIcons />
        </SocialIconsContainer>
        <IntroButton
          href="/resume.pdf" // Path to your resume in the public/assets folder
          download // This attribute prompts the download action
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Download CV
        </IntroButton>
      </TextContainer>
      <ProfileImageContainer
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <CircleWrapper>
          <CircleImage src={profileImage} alt="Profile" />
        </CircleWrapper>
      </ProfileImageContainer>
    </HomeContainer>
  );
};

export default Home;
