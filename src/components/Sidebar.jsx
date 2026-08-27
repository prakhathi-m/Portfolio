import React, { useState, useEffect } from 'react';
import { FiDownload, FiLinkedin, FiGithub, FiMail, FiCheckSquare } from 'react-icons/fi';
import profilePic from '../assets/profile_pic.jpg';
import resumePdf from '../assets/Prakhathi Resume.pdf';

const Sidebar = () => {
  const titles = [
    'Frontend Architecture',
    'Design Systems',
    'WCAG Web Accessibility',
    'Responsive Applications'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullWord = titles[currentWordIndex];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <aside className="editorial-sidebar">
      <div className="avatar-frame">
        <img 
          className="avatar-image" 
          src={profilePic} 
          alt="Prakhathi Murugesan" 
        />
      </div>

      <div className="sidebar-details">
        <div className="sidebar-title">
          <FiCheckSquare className="section-header-icon" size={18} style={{ marginTop: '3px' }} />
          <div>
            Expertise in <br />
            <span className="typing-title" style={{ color: 'var(--color-terracotta)', borderRightColor: 'var(--color-terracotta)' }}>
              {currentText || '\u200B'}
            </span>
          </div>
        </div>
        
        <p className="sidebar-bio">
          Senior Software Engineer specialized in stripping out unneeded dependencies, optimizing front-end state, and building robust interfaces for autonomous agentic workflows.
          {/* Senior Front-End Software Developer with 6+ years of experience building accessible, scalable, and user-centric web applications. Expert in React, TypeScript, and modern design systems. */}
        </p>

        <a 
          href={resumePdf} 
          download="Prakhathi-Resume.pdf" 
          className="editorial-btn"
          style={{ marginBottom: '20px' }}
        >
          <FiDownload size={14} />
          <span>Download Resume</span>
        </a>

        <div className="editorial-socials">
          <a 
            href="https://www.linkedin.com/in/prakhathimurugesan/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <FiLinkedin size={13} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/prakhathi-m" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <FiGithub size={13} />
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:prakhath@buffalo.edu" 
            className="social-link"
          >
            <FiMail size={13} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
