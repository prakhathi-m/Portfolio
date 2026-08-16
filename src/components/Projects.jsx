import React from 'react';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import stearnsImg from '../assets/stearns_1.png';
import twineImg from '../assets/twine.png';
import twitterImg from '../assets/twitter.jpeg';
import emAppImg from '../assets/em_app.png';

const Projects = () => {
  const visualProjects = [
    {
      title: 'Stearns Web Application',
      bullets: [
        'Revamped and optimized client-facing mortgage website for responsive desktop and mobile devices.',
        'Customized white-label themes for third-party mortgage vendors to align with corporate branding.',
        'Optimized build compilation and bundle sizes to reduce initial page load times by 40%.'
      ],
      tech: ['jQuery', 'HTML5', 'CSS3', 'LESS', 'Bootstrap', 'Webpack'],
      image: stearnsImg,
      liveUrl: 'https://stearns.com/',
      githubUrl: ''
    },
    {
      title: 'Twine People Analytics',
      bullets: [
        'Built interactive talent management features for the core startup analytics dashboard.',
        'Created visual employee growth and engagement charts using D3.js data visualizations.',
        'Reimplemented state management from Redux into custom React hooks, boosting speed by 10%.'
      ],
      tech: ['ReactJS', 'Redux', 'Django', 'PostgreSQL', 'AWS', 'D3.js'],
      image: twineImg,
      liveUrl: 'https://twine.com', // fallback clean URL
      githubUrl: ''
    },
    {
      title: 'Multi-lingual Search System',
      bullets: [
        'Built end-to-end multi-lingual Information Retrieval application analyzing global Twitter data.',
        'Indexed and parsed raw text using Apache Solr with custom sorting, query filters, and search weight rules.',
        'Integrated python Flask backend with Google Charts to dynamically graph query frequencies.'
      ],
      tech: ['ReactJS', 'Flask', 'Apache Solr', 'AWS EC2', 'Google Charts'],
      image: twitterImg,
      liveUrl: 'https://drive.google.com/file/d/1ke3FsmDYe9VojB6Y6ErGQ144q8WqZ9rz/view?usp=sharing',
      githubUrl: 'https://github.com/prakhathi-m/IR-Tweet-Search'
    },
    {
      title: 'Entertain Me Mobile App',
      bullets: [
        'Designed cross-platform mobile application interface using React Native.',
        'Built client search filters, performer negotiation chats, and automated booking systems.',
        'Developed RESTful server using Node.js linked to secure relational database tables.'
      ],
      tech: ['React Native', 'Node.js', 'AWS', 'MSSQL'],
      image: emAppImg,
      liveUrl: 'https://photos.app.goo.gl/9ytGdnizQU2DeLydA',
      githubUrl: ''
    }
  ];

  const academicProjects = [
    {
      title: 'Movie Genre Prediction Model',
      duration: 'May 2020',
      bullets: [
        'Implemented a multi-label classification movie genre prediction model using Apache Spark.',
        'Preprocessed raw plot text (removing stop words, generating tokens) to clean datasets.',
        'Utilized Logistic Regression, TF-IDF, and custom Word2Vec vectors to train and optimize the F1 model score.'
      ],
      tech: ['PySpark', 'Apache Spark', 'Machine Learning', 'TF-IDF', 'Word2Vec'],
      githubUrl: 'https://github.com/prakhathi-m/Pyspark'
    },
    {
      title: 'Big Data Processing with Hadoop',
      duration: 'Feb 2020 - Mar 2020',
      bullets: [
        'Designed custom MapReduce workflows in Python to perform parallelized counts across big data collections.',
        'Developed algorithms for inverted indexing, joining primary keys, and creating keyword tri-grams.',
        'Implemented K-Nearest Neighbors (KNN) algorithms inside Hadoop clusters to perform classification.'
      ],
      tech: ['Python', 'Hadoop', 'MapReduce', 'KNN'],
      githubUrl: 'https://github.com/prakhathi-m/Hadoop'
    },
    {
      title: 'Grid-World Reinforcement Learning',
      duration: 'Dec 2019',
      bullets: [
        'Created a reinforcement learning agent trained to navigate through a customized grid-world.',
        'Applied Q-Learning algorithms updating action-state rewards within a dynamic Q-table.',
        'Programmed the environment using OpenAI Gym, recording rewards, steps, and convergence curves.'
      ],
      tech: ['Python', 'OpenAI Gym', 'Q-Learning', 'Reinforcement Learning'],
      githubUrl: 'https://github.com/prakhathi-m/Machine-Learning'
    }
  ];

  return (
    <section id="projects" className="content-section glass-panel">
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-grid" style={{ marginBottom: '48px' }}>
        {visualProjects.map((project, index) => (
          <div key={index} className="project-card glass-panel">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image" 
              />
              <div className="project-image-overlay"></div>
            </div>
            
            <div className="project-card-body">
              <div className="project-card-info">
                <h4>{project.title}</h4>
                <ul className="experience-bullets" style={{ paddingLeft: 0, margin: '12px 0 16px' }}>
                  {project.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{bullet}</li>
                  ))}
                </ul>
                <div className="tech-stack-row" style={{ border: 'none', paddingTop: 0 }}>
                  {project.tech.map((t, tIndex) => (
                    <span key={tIndex} className="tech-tag-pill">{t}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn"
                  >
                    <FaArrowUpRightFromSquare size={13} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn"
                  >
                    <FaGithub size={14} />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Note-worthy Projects</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {academicProjects.map((project, index) => (
          <div key={index} className="experience-card glass-panel" style={{ padding: '20px' }}>
            <div className="experience-header" style={{ marginBottom: '10px' }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700 }}>
                  {project.title}
                </h4>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{project.duration}</span>
              </div>
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link-btn"
                >
                  <FaGithub size={14} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
            
            <ul className="experience-bullets" style={{ margin: '10px 0 14px' }}>
              {project.bullets.map((bullet, bIndex) => (
                <li key={bIndex} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{bullet}</li>
              ))}
            </ul>
            
            <div className="tech-stack-row">
              {project.tech.map((t, tIndex) => (
                <span key={tIndex} className="tech-tag-pill">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
