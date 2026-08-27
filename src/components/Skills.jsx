import React from 'react';
import { FiCpu } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Expertise',
      skills: 'React, TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS / SASS, LESS, Redux, Redux-Saga'
    },
    {
      title: 'Design Systems & Accessibility',
      skills: 'Storybook, Style-Dictionary, Design Tokens, WCAG 2.1 A/AA Standards, ARIA Roles, Semantic HTML, Screen Reader Optimization, Keyboard Navigation, Color Contrast Optimization'
    },
    {
      title: 'AI & Automation Tools',
      skills: 'Claude AI, AI-assisted design-to-code pipelines, Automated component generation'
    },
    {
      title: 'UI Frameworks & Visualizations',
      skills: 'Material-UI, Bootstrap, React-Native, jQuery, D3.js, Recharts, Google Charts, Dark / Light Theme implementation'
    },
    {
      title: 'Architecture & Web Performance',
      skills: 'Component Libraries, Reusable UI Frameworks, Build Optimization (Webpack / Vite), Code Splitting, Performance Profiling'
    },
    {
      title: 'Testing, Quality & Backend',
      skills: 'Jest, Enzyme, Jasmine, Test-Driven Development (TDD), Unit Testing, Node.js, Django, REST APIs, PostgreSQL, MySQL, MSSQL'
    },
    {
      title: 'Tools & Workflows',
      skills: 'Git, GitHub, SVN, Jira, Trello, Figma, Agile (Scrum / SDLC)'
    }
  ];

  return (
    <section id="skills" className="editorial-section reveal-element">
      <div className="editorial-section-header">
        <h2 className="editorial-section-title section-header-title">
          <FiCpu className="section-header-icon" size={24} />
          <span>Technical Skills</span>
        </h2>
        <span className="editorial-section-number">06 // SKILLS INDEX</span>
      </div>
      
      <div className="skills-index-table">
        {skillCategories.map((category, index) => {
          const delayClass = `reveal-element delay-${(index % 5) + 1}`;
          return (
            <div key={index} className={`skills-index-row ${delayClass}`}>
              <div className="skills-index-category">
                {category.title}
              </div>
              <div className="skills-index-list">
                {category.skills}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
