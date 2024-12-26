import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';  // Adjust the path as needed
import '../styles/app.css';  // Ensure to import the CSS

const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column; /* Stack children vertically */
  padding: 4rem;
  min-height: 100vh;
  background: #2a2a2a; /* Match the dark background color */
`;

const TopSection = styled.div`
  display: flex;
  align-items: center; /* Align items vertically center */
  gap: 2rem; /* Space between image and text */
  margin-bottom: 2rem; /* Space below the top section */
`;

const ProfileImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const CircleWrapper = styled(motion.div)`
  position: relative;
  width: 320px;  /* Same as in Home component */
  height: 320px; /* Same as in Home component */
  background-color: #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 191, 255, 0.8); /* Updated glow effect color */
  
  &:hover {
    transform: rotate(10deg); /* Rotate image on hover */
    transition: transform 0.5s ease;
  }
`;

const CircleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%; /* Make the image itself circular */
`;

const TextContainer = styled(motion.div)`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Aboutdata = styled.div`
  margin-bottom: 2rem; /* Space between image and text */
  width: 70%;
  text-align: justify; /* Align text to the left */
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Create a 2x2 grid */
  gap: 1.5rem; /* Space between grid items */
`;

const FlexBox = styled(motion.div)`
  padding: 2rem; /* Increased padding for larger boxes */
  background: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 191, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start of the container */
  gap: 0.5rem; /* Space between content in each flex-box */
  transition: transform 0.3s;
  min-height: 200px; /* Ensure a minimum height for each box */
  min-width: 200px; /* Ensure a minimum width for each box */
  
  &:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
  }
`;

// Styled motion.h2 for white text
const WhiteMotionH2 = styled(motion.h2)`
  color: #ffffff; /* White color for the text */
`;

const SkillItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  gap: 1rem; /* Space between skill name and progress bar */
`;

const SkillName = styled.div`
  width: 150px; /* Adjust as needed */
  color: #ffffff; /* Match text color with your theme */
`;

const SkillBarContainer = styled.div`
  width: 100%;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  margin: 0.5rem 0;
`;

const SkillBar = styled(motion.div)`
  height: 1.5rem;
  background: #00bfff; /* Accent color for the progress bar */
  width: ${props => props.percentage || '0%'};
  transition: width 0.5s ease-in-out;
  text-align: center;
  line-height: 1.5rem;
  color: #ffffff;
  font-weight: bold;
  border-radius: 8px;
`;

const About = () => {
  return (
    <AboutContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <TopSection>
        <ProfileImageContainer
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <CircleWrapper>
            <CircleImage src={profileImage} alt="Profile" />
          </CircleWrapper>
        </ProfileImageContainer>
        <TextContainer
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Aboutdata>
            <motion.h1
              className="about-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              About Me
            </motion.h1>
            <WhiteMotionH2
              className="about-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Full Stack Developer!
            </WhiteMotionH2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Currently pursuing a Bachelor's degree in Computer Science, where I am building a strong foundation in programming and software development. Alongside my studies, I am exploring the world of web development with Django and the MERN stack. As a beginner, I am eager to apply my skills in creating web applications and continue learning and growing in this exciting field. I am passionate about leveraging my academic background and entry-level experience to contribute to innovative projects and advance my career in tech.
            </motion.p>
          </Aboutdata>
        </TextContainer>
      </TopSection>
      <AboutContent>
        <FlexBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Skills</h3>
          <SkillItemContainer>
            <SkillName>React.js</SkillName>
            <SkillBarContainer>
              <SkillBar
                percentage="90%"
                initial={{ width: '0%' }}
                animate={{ width: '90%' }}
                transition={{ duration: 1 }}
              >
                90%
              </SkillBar>
            </SkillBarContainer>
          </SkillItemContainer>
          <SkillItemContainer>
            <SkillName>JavaScript</SkillName>
            <SkillBarContainer>
              <SkillBar
                percentage="90%"
                initial={{ width: '0%' }}
                animate={{ width: '90%' }}
                transition={{ duration: 1 }}
              >
                90%
              </SkillBar>
            </SkillBarContainer>
          </SkillItemContainer>
          <SkillItemContainer>
            <SkillName>Django</SkillName>
            <SkillBarContainer>
              <SkillBar
                percentage="90%"
                initial={{ width: '0%' }}
                animate={{ width: '90%' }}
                transition={{ duration: 1 }}
              >
                90%
              </SkillBar>
            </SkillBarContainer>
          </SkillItemContainer>
          <SkillItemContainer>
            <SkillName>Python</SkillName>
            <SkillBarContainer>
              <SkillBar
                percentage="90%"
                initial={{ width: '0%' }}
                animate={{ width: '90%' }}
                transition={{ duration: 1 }}
              >
                90%
              </SkillBar>
            </SkillBarContainer>
          </SkillItemContainer>
          <SkillItemContainer>
            <SkillName>HTML</SkillName>
            <SkillBarContainer>
              <SkillBar
                percentage="100%"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1 }}
              >
                100%
              </SkillBar>
            </SkillBarContainer>
          </SkillItemContainer>
          <SkillItemContainer>
            <SkillName>CSS</SkillName>
            <SkillBarContainer>
              <SkillBar
                percentage="100%"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1 }}
              >
                100%
              </SkillBar>
            </SkillBarContainer>
          </SkillItemContainer>
          <SkillItemContainer>
            <SkillName>Node.js</SkillName>
            <SkillBarContainer>
              <SkillBar
                percentage="70%"
                initial={{ width: '0%' }}
                animate={{ width: '70%' }}
                transition={{ duration: 1 }}
              >
                70%
              </SkillBar>
            </SkillBarContainer>
          </SkillItemContainer>
          <SkillItemContainer>
            <SkillName>Express.js</SkillName>
            <SkillBarContainer>
              <SkillBar
                percentage="65%"
                initial={{ width: '0%' }}
                animate={{ width: '65%' }}
                transition={{ duration: 1 }}
              >
                65%
              </SkillBar>
            </SkillBarContainer>
          </SkillItemContainer>
        </FlexBox>
        <FlexBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Education</h3>
          <ol>
            <p>Air University</p>
            <ul>
              <p>Bachelor of Computer Science</p>
              <p>Aug 2023 - Jul 2027</p>
              <p>Islamabad, Punjab, Pakistan</p>
            </ul>
            <p>Punjab College</p>
            <ul>
              <p>Intermediate in Computer Science</p>
              <p>Aug 2021 - May 2023</p>
              <p>Gujranwala, Punjab, Pakistan</p>
            </ul>
          </ol>
        </FlexBox>
        <FlexBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Experience</h3>
          <ol>
            <p>1. TIERS Limited · Internship</p>
            <ul>
              <p>Web Development Intern</p>
              <p>Jun 2024 - Aug 2024 · 3 months</p>
              <p>Lahore, Punjab, Pakistan · Remote</p>
            </ul>
            <p>2. Freelancer</p>
            <ul>
              <p>Web Developer</p>
              <p>Jun 2023 - Present · 1 yr 4 mos</p>
              <p>Remote</p>
            </ul>
          </ol>
        </FlexBox>
        <FlexBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3>Honors and Awards</h3>
          <p>Top Performer at Django Internship</p>
          <p>Recognized as the Top Performer during my Django internship at Tiers Limited for exceptional contributions to web development projects, strong problem-solving skills, and dedication to delivering high-quality results.</p>
          <a
            href="https://www.linkedin.com/posts/tiers-limited_top-performers-activity-7233754199950323713-zPkS?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#00bfff', // Match your accent color
              textDecoration: 'underline',
              display: 'block',
              marginTop: '0.5rem',
            }}
          >
            View Post
          </a>
        </FlexBox>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
