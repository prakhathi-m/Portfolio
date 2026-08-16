import React from 'react';

const About = () => {
  return (
    <section id="about" className="content-section glass-panel">
      <h2 className="section-title">About Me</h2>
      
      <p className="about-text" style={{ marginBottom: '24px' }}>
        I am a <strong>Senior Front-End Software Developer</strong> with 6+ years of experience building accessible, scalable, and user-centric web applications. I specialize in developing design systems, component libraries, and optimizing web performance.
      </p>

      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
        Key Professional Highlights
      </h3>
      <ul className="experience-bullets" style={{ marginBottom: '16px' }}>
        <li>
          <strong>Design Systems & Accessibility Expert</strong>: Proven track record implementing WCAG 2.1 A/AA standards, Storybook component libraries, and style-dictionary design tokens (for dark/light theme systems) serving thousands of users.
        </li>
        <li>
          <strong>AI & Automation Innovator</strong>: Specialized in leveraging AI tools (like Claude) to build design-to-code pipelines, reducing component development cycles by 35% while maintaining system consistency.
        </li>
        <li>
          <strong>Senior Experience at ADP</strong>: Currently leading comprehensive frontend migrations, modernizing legacy modules to monorepo architectures, and architecting progressive embeddable form systems for enterprise clients.
        </li>
        <li>
          <strong>Full-Stack Versatility</strong>: Strong foundation in distributed systems, machine learning, and data engineering, with hands-on experience building REST APIs (Django, Node.js) and big data pipelines (PySpark, Hadoop MapReduce).
        </li>
        <li>
          <strong>Academic Excellence</strong>: Master of Science in Computer Science from the University at Buffalo (GPA 3.78) and Bachelor of Technology in Information Technology (GPA 3.7).
        </li>
      </ul>
    </section>
  );
};

export default About;
