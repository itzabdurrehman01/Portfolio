import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled(motion.div)`
  padding: 4rem;
  text-align: center;
  background: linear-gradient(to bottom, #222, #1a1a1a);
  color: #fff;
  min-height: 100vh;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Input = styled(motion.input)`
  padding: 0.8rem;
  width: 100%;
  max-width: 400px;
  background-color: #1a1a1a;
  color: #fff;
  border: 1px solid #00bfff;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    border-color: #00ffff;
    outline: none;
  }
`;

const Textarea = styled(motion.textarea)`
  padding: 0.8rem;
  width: 100%;
  max-width: 400px;
  background-color: #1a1a1a;
  color: #fff;
  border: 1px solid #00bfff;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;

  &:focus {
    border-color: #00ffff;
    outline: none;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  background-color: #00bfff;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00ffff;
  }
`;

const Contact = () => {
  return (
    <ContactContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 style={{ color: '#00bfff' }}>Contact Me!</h1>
      <ContactForm
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Input
          type="text"
          placeholder="Your Name"
          required
          whileFocus={{ scale: 1.05 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />
        <Input
          type="email"
          placeholder="Your Email"
          required
          whileFocus={{ scale: 1.05 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />
        <Textarea
          rows="5"
          placeholder="Your Message"
          required
          whileFocus={{ scale: 1.05 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />
        <SubmitButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
        >
          Send Message
        </SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
