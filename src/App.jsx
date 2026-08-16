import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsEducation from './components/SkillsEducation';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // trigger when section occupies main center viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <React.Fragment>
      {/* Background Ambient Glowing Blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="app-container">
        <Sidebar />
        
        <main className="main-content">
          <About />
          <Experience />
          <Projects />
          <SkillsEducation />
        </main>
      </div>

      {/* Floating Glass Navigation Pill */}
      <div className="nav-pill-container">
        <nav className="nav-pill">
          <button 
            className={`nav-pill-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button 
            className={`nav-pill-item ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => handleNavClick('experience')}
          >
            Experience
          </button>
          <button 
            className={`nav-pill-item ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavClick('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-pill-item ${activeSection === 'skills-education' ? 'active' : ''}`}
            onClick={() => handleNavClick('skills-education')}
          >
            Skills & Edu
          </button>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default App;
