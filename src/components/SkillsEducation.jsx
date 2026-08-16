import React from 'react';
import ubLogo from '../assets/ub.jpg';
import citLogo from '../assets/cit.png';

const SkillsEducation = () => {
  const skillCategories = [
    {
      title: 'Frontend Expertise',
      skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS / SASS', 'LESS', 'Redux', 'Redux-Saga']
    },
    {
      title: 'Design Systems & Accessibility (a11y)',
      skills: ['Storybook', 'Style-Dictionary', 'Design Tokens', 'WCAG 2.1 A/AA Standards', 'ARIA Roles', 'Semantic HTML', 'Screen Reader Optimization', 'Keyboard Navigation', 'Color Contrast Optimization']
    },
    {
      title: 'AI & Automation Tools',
      skills: ['Claude AI', 'AI-assisted design-to-code pipelines', 'Automated component generation']
    },
    {
      title: 'UI Frameworks, Visualization & Theming',
      skills: ['Material-UI', 'Bootstrap', 'React-Native', 'jQuery', 'D3.js', 'Recharts', 'Google Charts', 'Dark / Light Theme implementation']
    },
    {
      title: 'Architecture & Web Performance',
      skills: ['Component Libraries', 'Reusable UI Frameworks', 'Build Optimization (Webpack/Vite)', 'Code Splitting', 'Performance Profiling']
    },
    {
      title: 'Testing, Quality & Backend',
      skills: ['Jest', 'Enzyme', 'Jasmine', 'Test-Driven Development (TDD)', 'Unit Testing', 'Node.js', 'Django', 'REST APIs', 'PostgreSQL', 'MySQL', 'MSSQL']
    },
    {
      title: 'Tools & Workflows',
      skills: ['Git', 'GitHub', 'SVN', 'Jira', 'Trello', 'Figma', 'Agile (Scrum / SDLC)']
    }
  ];

  const education = [
    {
      degree: 'Master of Science',
      major: 'Computer Science',
      school: 'University at Buffalo',
      gpa: 'GPA: 3.78 / 4.0',
      duration: 'Aug 2019 - Feb 2021',
      logo: ubLogo,
      schoolUrl: 'http://www.buffalo.edu/',
      logoClass: 'buffalo',
      courses: [
        'Introduction to Machine Learning',
        'Information Retrieval',
        'Algorithms Analysis & Design',
        'Data-Intensive Computing',
        'Data Models & Query Languages',
        'Distributed Systems'
      ]
    },
    {
      degree: 'Bachelor of Technology',
      major: 'Information Technology',
      school: 'Coimbatore Institute of Technology',
      gpa: 'GPA: 3.7 / 4.0',
      duration: 'July 2012 - May 2016',
      logo: citLogo,
      schoolUrl: 'https://www.cit.edu.in/',
      logoClass: 'cit',
      courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Object-Oriented Programming',
        'Operating Systems',
        'Web Technologies',
        'Software Engineering',
        'Data Warehousing & Mining'
      ]
    }
  ];

  return (
    <section id="skills-education" className="content-section glass-panel">
      <h2 className="section-title">Skills & Education</h2>
      
      <h3 className="section-title" style={{ fontSize: '1.4rem', margin: '20px 0 16px' }}>Technical Skills</h3>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skills-category glass-panel">
            <h4>{category.title}</h4>
            <div className="skills-list">
              {category.skills.map((skill, sIndex) => (
                <span key={sIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="section-title" style={{ fontSize: '1.4rem', margin: '30px 0 20px' }}>Education</h3>
      <div className="education-cards">
        {education.map((edu, index) => (
          <div key={index} className="education-card glass-panel">
            <div>
              <div className="education-header-info">
                <a 
                  href={edu.schoolUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`education-logo-container ${edu.logoClass}`}
                >
                  <img src={edu.logo} alt={`${edu.school} logo`} className="education-logo" />
                </a>
                <div>
                  <h4 style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{edu.degree}</h4>
                  <div style={{ color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '0.95rem' }}>{edu.major}</div>
                  <div className="education-school">{edu.school}</div>
                </div>
              </div>
              
              <div className="education-meta">
                <span>{edu.duration}</span>
                <span>{edu.gpa}</span>
              </div>
            </div>
            
            <div className="education-coursework">
              <h5>Key Coursework</h5>
              <ul className="education-coursework-list">
                {edu.courses.map((course, cIndex) => (
                  <li key={cIndex} style={{ marginBottom: '2px' }}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsEducation;
