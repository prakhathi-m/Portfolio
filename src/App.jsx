import React, { useState, useEffect } from 'react';
import { FiMail } from 'react-icons/fi';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Recommendations from './components/Recommendations';
import Skills from './components/Skills';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    // 1. Scroll tracking CSS variable (highly performant parallax)
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial value setup
    handleScroll();

    // 2. Section scroll-spy intersection observer
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
      window.removeEventListener('scroll', handleScroll);
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

  const getLocalDateString = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <div className="editorial-wrapper">
      {/* Editorial Print Masthead */}
      <header className="masthead reveal-element">
        <div className="masthead-top">
          <a href="#about" className="masthead-logo" onClick={() => handleNavClick('about')}>
            <h1>Prakhathi Murugesan</h1>
          </a>
          <div className="masthead-meta">
            <div>Senior Front-End Developer</div>
            <div>{getLocalDateString()}</div>
          </div>
        </div>
      </header>

      {/* Editorial Grid Structure */}
      <div className="editorial-grid reveal-element delay-1">
        <Sidebar />
        
        <main className="editorial-content">
          <About />
          <Experience />
          <Education />
          <Projects />
          <Recommendations />
          <Skills />
        </main>
      </div>

      {/* Floating Flat Index Navigation Pill */}
      <div className="flat-nav-container reveal-element delay-2">
        <nav className="flat-nav">
          <button 
            className={`flat-nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button 
            className={`flat-nav-item ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => handleNavClick('experience')}
          >
            Experience
          </button>
          <button 
            className={`flat-nav-item ${activeSection === 'education' ? 'active' : ''}`}
            onClick={() => handleNavClick('education')}
          >
            Education
          </button>
          <button 
            className={`flat-nav-item ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavClick('projects')}
          >
            Projects
          </button>
          <button 
            className={`flat-nav-item ${activeSection === 'recommendations' ? 'active' : ''}`}
            onClick={() => handleNavClick('recommendations')}
          >
            Recs
          </button>
          <button 
            className={`flat-nav-item ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => handleNavClick('skills')}
          >
            Skills
          </button>
        </nav>
      </div>

      {/* Floating Contact Us Action */}
      <button 
        className="contact-float-btn reveal-element delay-3" 
        onClick={() => setIsContactOpen(true)}
        aria-label="Open contact form"
      >
        <FiMail size={20} />
      </button>

      {/* Tactile Contact Modal Overlay */}
      {isContactOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsContactOpen(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="contact-modal-close-btn" 
              onClick={() => setIsContactOpen(false)}
            >
              ×
            </button>
            <h3>
              <FiMail size={22} className="section-header-icon" />
              <span>Contact Us</span>
            </h3>
            
            <form 
              action="https://formspree.io/f/mprakhathi" 
              method="POST" 
              className="contact-form"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Your Name" 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="_replyto" 
                  required 
                  placeholder="your.email@example.com" 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  placeholder="Your message details..."
                ></textarea>
              </div>
              
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_subject" value="New Portfolio Contact Submission!" />
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <button 
                type="submit" 
                className="editorial-btn" 
                style={{ marginTop: '10px' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
