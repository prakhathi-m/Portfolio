import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaFileArrowDown } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import profilePic from '../assets/profile_pic.jpg';
import resumePdf from '../assets/Prakhathi Resume.pdf';

const Sidebar = () => {
  const titles = [
    'Senior Software Engineer',
    'Application Developer',
    'Frontend Specialist',
    'Accessibility Advocate'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullWord = titles[currentWordIndex];
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause at the end of word
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting characters
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(500); // Pause before next word
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <aside className="sidebar glass-panel">
      <div className="profile-avatar-container">
        <div className="profile-avatar-glow"></div>
        <img 
          className="profile-avatar" 
          src={profilePic} 
          alt="Prakhathi Murugesan" 
        />
      </div>

      <div className="profile-info">
        <h1>Prakhathi Murugesan</h1>
        <span className="typing-title">{currentText || '\u200B'}</span>
        
        <p className="profile-bio" style={{ textAlign: 'center', marginBottom: '30px' }}>
          Senior Software Engineer specializing in building beautiful, accessible, and high-performance web applications.
        </p>
      </div>

      <div style={{ width: '100%' }}>
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/prakhathimurugesan/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn"
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="https://github.com/prakhathi-m" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn"
            title="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="mailto:prakhath@buffalo.edu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn"
            title="Email"
          >
            <MdMail size={22} />
          </a>
        </div>

        <a 
          href={resumePdf} 
          download="Prakhathi-Resume.pdf" 
          className="resume-btn"
        >
          <FaFileArrowDown size={18} />
          <span>Download Resume</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
