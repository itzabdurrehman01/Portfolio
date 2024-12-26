import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBug, FaLaptopCode, FaServer, FaLink } from 'react-icons/fa'; // Importing icons

// Styled components
const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background-color: #1c1e22;
  color: #fff;
`;

const Header = styled.h1`
  color: #00bfff;
  font-size: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: #2a2d34;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 191, 255, 0.8); /* Added glowing effect */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Scale on hover */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 191, 255, 1); /* Enhanced glowing effect on hover */
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #00bfff;
`;

const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: #c4c4c4;
`;

// Framer Motion Variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 }, // Initial state
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      ease: 'easeOut',
    }
  },
  hover: { 
    scale: 1.05, 
    transition: { 
      duration: 0.3 
    } 
  }
};

const Services = () => {
  return (
    <ServicesSection>
      <Header>My Services</Header>
      <Title>What I Do</Title>
      <ServicesContainer>
        <ServiceCard 
          variants={cardVariants} 
          initial="hidden" 
          animate="visible" 
          whileHover="hover"
        >
          <Icon><FaBug /></Icon> {/* React icon for Software Testing */}
          <ServiceTitle>Software Testing</ServiceTitle>
          <ServiceDescription>
          Ensuring high-quality software through comprehensive testing strategies. Identifying bugs, verifying functionality, and validating performance to meet user expectations and industry standards.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard 
          variants={cardVariants} 
          initial="hidden" 
          animate="visible" 
          whileHover="hover"
        >
          <Icon><FaLaptopCode /></Icon> {/* React icon for Frontend Development */}
          <ServiceTitle>Frontend Development</ServiceTitle>
          <ServiceDescription>
          Creating engaging user interfaces and experiences using modern frontend technologies. Designing responsive layouts, optimizing performance, and ensuring accessibility across various devices and browsers.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard 
          variants={cardVariants} 
          initial="hidden" 
          animate="visible" 
          whileHover="hover"
        >
          <Icon><FaServer /></Icon> {/* React icon for Backend Development */}
          <ServiceTitle>Backend Development</ServiceTitle>
          <ServiceDescription>
          Building robust server-side applications and APIs to support dynamic functionalities. Implementing secure data handling, optimizing performance, and integrating with databases and third-party services.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard 
          variants={cardVariants} 
          initial="hidden" 
          animate="visible" 
          whileHover="hover"
        >
          <Icon><FaLink /></Icon> {/* React icon for Full Stack Development */}
          <ServiceTitle>Full Stack Development</ServiceTitle>
          <ServiceDescription>
          Combining frontend and backend expertise to develop complete web applications. Managing end-to-end development, ensuring seamless integration, and delivering functional and user-centric solutions.
          </ServiceDescription>
        </ServiceCard>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
