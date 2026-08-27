import React from 'react';
import { FiBookOpen } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science',
      major: 'Computer Science',
      school: 'University at Buffalo',
      gpa: 'GPA: 3.78 / 4.0',
      duration: 'Aug 2019 - Feb 2021',
      schoolUrl: 'http://www.buffalo.edu/',
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
      schoolUrl: 'https://www.cit.edu.in/',
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
    <section id="education" className="editorial-section reveal-element">
      <div className="editorial-section-header">
        <h2 className="editorial-section-title section-header-title">
          <FiBookOpen className="section-header-icon" size={24} />
          <span>Education</span>
        </h2>
        <span className="editorial-section-number">03 // ACADEMIC TIMELINE</span>
      </div>
      
      <div className="timeline-container">
        {education.map((edu, index) => {
          const delayClass = `reveal-element delay-${(index % 5) + 1}`;
          return (
            <div key={index} className={`timeline-node ${delayClass}`}>
              <div className="timeline-marker"></div>
              
              <div className="timeline-header">
                <div className="timeline-heading-block">
                  <h3>{edu.degree} in {edu.major}</h3>
                  <a 
                    href={edu.schoolUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="timeline-subheading"
                  >
                    {edu.school}
                  </a>
                </div>
                <div className="timeline-date">{edu.duration}</div>
              </div>
              
              <div className="timeline-meta-row">
                <span>Academic Standing: <strong className="timeline-meta-highlight">{edu.gpa}</strong></span>
              </div>
              
              <div style={{ marginTop: '12px' }}>
                <h5 style={{ color: 'var(--color-sage)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                  Key Coursework
                </h5>
                <ul className="editorial-points">
                  {edu.courses.map((course, cIndex) => (
                    <li key={cIndex} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
