import React from 'react';
import adpLogo from '../assets/adp-logo.png';
import twineLogo from '../assets/twine_logo.png';
import tavantLogo from '../assets/tavant-logo.png';

const Experience = () => {
  const experiences = [
    {
      role: 'Sr. Application Developer',
      company: 'ADP Inc.',
      location: 'Toronto, Canada',
      duration: 'Mar 2024 - Present',
      logo: adpLogo,
      url: 'https://www.adp.com/',
      bullets: [
        'Executed the comprehensive migration and restructuring of the frontend application, successfully transitioning legacy components and architecture to a modernized mono repository structure.',
        'Developed and refactored complex interactive components including time tracking interfaces, infinite scroll timelines, and dynamic form controls, while establishing error boundaries and improving application stability and usability.',
        'Leveraged AI tools (Claude) to accelerate design-to-code workflows, reducing component development time by 35% while maintaining design system consistency.'
      ],
      tech: ['ReactJS', 'TypeScript', 'Monorepos', 'AI Coding (Claude)', 'State Refactoring']
    },
    {
      role: 'Sr. Application Developer',
      company: 'ADP Inc.',
      location: 'New Jersey, USA',
      duration: 'Sept 2022 - Mar 2024',
      logo: adpLogo,
      url: 'https://www.adp.com/',
      bullets: [
        'Architected and developed progressive, embeddable forms using React and TypeScript for enterprise clients, enabling seamless integration into third-party applications serving several end users.',
        'Supported dark/light theme mode of the application by creating design system using style-dictionary.',
        'Built a single-page application(SPA) to upload files which was a critical part of Ireland\'s launch of the application.',
        'Reviewed build tool choices and replaced heavier packages with lightweight, efficient ones that are 20x faster in compilation.'
      ],
      tech: ['ReactJS', 'TypeScript', 'Style-Dictionary', 'Design Tokens', 'Build Tool Optimizations', 'SPA']
    },
    {
      role: 'Application Developer',
      company: 'ADP Inc.',
      location: 'New Jersey, USA',
      duration: 'Mar 2021 - Aug 2022',
      logo: adpLogo,
      url: 'https://www.adp.com/',
      bullets: [
        'Enhanced accessibility of the application by providing screen reader support using semantic HTML, ARIA, SR labels and Keyboard navigation; building fluid layout to support dynamic font size and optimizing color contrast.',
        'Resolved crucial product bugs by effectively analyzing existing code and upgraded flawed features into user-friendly features.'
      ],
      tech: ['ReactJS', 'Redux', 'TypeScript', 'Storybook', 'WCAG 2.1 A/AA Accessibility', 'Semantic HTML', 'ARIA']
    },
    {
      role: 'Software Engineer Intern',
      company: 'Twine Labs',
      location: 'Remote, USA',
      duration: 'Jun 2020 - Dec 2020',
      logo: twineLogo,
      url: 'https://www.twinelabs.com/',
      bullets: [
        'Built a new Analytics dashboard and re-vamped the product\'s forum segment to boost user engagement by 30%.',
        'Developed interactive user-facing features with in-built carousel and animations by translating Figma wireframes.',
        'Enhanced the performance of the product by 10% by reimplementing redux-based functionalities into custom React hooks.',
        'Executed Django models to notify the team in Slack about prospects visiting the website and helped in reducing TAT (Turnaround Time).'
      ],
      tech: ['ReactJS', 'Redux', 'Django', 'PostgreSQL', 'AWS', 'D3.js', 'Slack API']
    },
    {
      role: 'Software Engineer',
      company: 'Tavant Technologies',
      location: 'Bengaluru, India',
      duration: 'Aug 2016 - Jul 2019',
      logo: tavantLogo,
      url: 'https://www.tavant.com/',
      bullets: [
        'Developed a web service that automated the client\'s monitoring system of their customers\' mortgages and repayments.',
        'Revamped and optimized the client\'s existing website into a cross-browser and responsive website to increase efficiency.',
        'Spearheaded an internal project that built an application to support HR activities and monitor employees\' performance.',
        'Incorporated module bundlers such as webpack into the build environment to reduce the page load time by 40%.',
        'Adopted Test-Driven Development (TDD) to deliver high-quality codes with 100% unit test coverage.',
        'Evaluated the user stories and allocated tasks to the team based on effort and time estimates following Agile methodology.',
        'Collaborated with other teams\' stakeholders to discuss the requirements, feasibility and to resolve operational challenges.'
      ],
      tech: ['ReactJS', 'Redux-Saga', 'Node.js', 'MySQL', 'jQuery', 'Webpack', 'LESS', 'Jasmine', 'Enzyme', 'TDD', 'Agile']
    }
  ];

  return (
    <section id="experience" className="content-section glass-panel">
      <h2 className="section-title">Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="experience-card glass-panel">
              <div className="experience-header">
                <div className="company-brand">
                  <div className="company-logo-container">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="company-logo" 
                    />
                  </div>
                  <div className="role-details">
                    <h3>{exp.role}</h3>
                    <a 
                      href={exp.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="company-name"
                    >
                      {exp.company}
                    </a>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}> • {exp.location}</span>
                  </div>
                </div>
                <div className="timeline-duration">{exp.duration}</div>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, bIndex) => (
                  <li key={bIndex}>{bullet}</li>
                ))}
              </ul>
              <div className="tech-stack-row">
                {exp.tech.map((t, tIndex) => (
                  <span key={tIndex} className="tech-tag-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
