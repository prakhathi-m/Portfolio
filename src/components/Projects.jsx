import React from 'react';
import { FiFolder, FiArrowUpRight, FiGithub } from 'react-icons/fi';
import stearnsImg from '../assets/stearns_1.png';
import twineImg from '../assets/twine.png';
import twitterImg from '../assets/twitter.jpeg';
import emAppImg from '../assets/em_app.png';

const Projects = () => {
  const projects = [
    {
      title: 'Refactoring Legacy Mortgage Portals to Optimize Client Page Loads',
      bottleneck: 'Monolithic, un-optimized legacy codebases caused high page load latency, negatively impacting mobile client conversion rates.',
      solution: 'Re-bundled asset delivery with Webpack and re-implemented layouts using LESS and Bootstrap, reducing initial page load times by 40%.',
      impact: 'Reduced initial page load times by 40% and improved responsive screen layout alignment across modern devices.',
      tech: ['jQuery', 'HTML5', 'LESS', 'Bootstrap', 'Webpack'],
      image: stearnsImg,
      liveUrl: 'https://stearns.com/',
      githubUrl: ''
    },
    {
      title: 'Replacing Redux with Native React Hooks to Kill Third-Party Overhead',
      bottleneck: 'Heavy boilerplate and redundant state sync updates from Redux caused sluggish render cycles on complex SVG charts.',
      solution: 'Migrated dashboard state to native React hooks (useContext/useReducer) and optimized D3.js renders, boosting UI speed by 10%.',
      impact: 'Boosted dashboard data rendering speeds by 10% and eliminated complex, legacy state synchronization overhead.',
      tech: ['ReactJS', 'Redux', 'Django', 'PostgreSQL', 'AWS', 'D3.js'],
      image: twineImg,
      liveUrl: 'https://cpohq.com/',
      githubUrl: ''
    },
    {
      title: 'Scaling Multilingual Search Pipelines to Query Twitter Streams in Real-Time',
      bottleneck: 'Relational database search queries crashed under concurrent multi-language string parsing of high-volume Twitter data.',
      solution: 'Built an Apache Solr search index with Python Flask, implementing custom sorting algorithms that dropped lookup latency below 15ms.',
      impact: 'Reduced search latency below 15ms and mapped query frequency trends dynamically using Google Charts.',
      tech: ['ReactJS', 'Flask', 'Apache Solr', 'AWS EC2', 'Google Charts'],
      image: twitterImg,
      liveUrl: 'https://drive.google.com/file/d/1ke3FsmDYe9VojB6Y6ErGQ144q8WqZ9rz/view?usp=sharing',
      githubUrl: 'https://github.com/prakhathi-m/IR-Tweet-Search'
    },
    {
      title: 'Architecting a React Native Booking Engine to Eliminate Race Conditions',
      bottleneck: 'Concurrent requests on performer booking calendars caused double-booking race conditions during high-traffic events.',
      solution: 'Implemented database-level locking triggers on a Node.js REST API, eliminating overlapping slots on the React Native client.',
      impact: 'Eliminated concurrent booking overlaps while streamlining real-time performer-client chat updates.',
      tech: ['React Native', 'Node.js', 'AWS', 'MSSQL'],
      image: emAppImg,
      liveUrl: '',
      githubUrl: ''
    },
    {
      title: 'Distributing Text Classification Across Apache Spark Clusters',
      bottleneck: 'Training machine learning models on massive raw text corpuses exceeded local memory limits and local CPU capability.',
      solution: 'Implemented a PySpark distributed multi-label classification pipeline utilizing TF-IDF vectors and Word2Vec models.',
      impact: 'Accelerated data preparation and achieved a highly optimized model F1-score across large datasets.',
      tech: ['PySpark', 'Apache Spark', 'Machine Learning', 'TF-IDF', 'Word2Vec'],
      image: null,
      liveUrl: '',
      githubUrl: 'https://github.com/prakhathi-m/Pyspark'
    },
    {
      title: 'Optimizing Parallelized Trigram Searches in Hadoop MapReduce',
      bottleneck: 'Scanning terabyte-scale text corpuses for inverted indices and trigrams took hours on single-machine processors.',
      solution: 'Designed Python MapReduce workflows and K-Nearest Neighbors algorithms, enabling distributed Parallel trigram counts in Hadoop.',
      impact: 'Enabled efficient distributed inverted indexing and keyword classification inside Hadoop clusters.',
      tech: ['Python', 'Hadoop', 'MapReduce', 'KNN'],
      image: null,
      liveUrl: '',
      githubUrl: 'https://github.com/prakhathi-m/Hadoop'
    },
    {
      title: 'Training Q-Learning Agents in OpenAI Gym Environments',
      bottleneck: 'Delayed agent pathing convergence in custom grid-worlds under basic randomized explore rules.',
      solution: 'Programmed a reinforcement learning agent using Q-learning algorithms to dynamically update rewards in local Q-tables.',
      impact: 'Achieved optimal pathfinding convergence and mapped reward curves cleanly in python environments.',
      tech: ['Python', 'OpenAI Gym', 'Q-Learning', 'Reinforcement Learning'],
      image: null,
      liveUrl: '',
      githubUrl: 'https://github.com/prakhathi-m/Machine-Learning'
    }
  ];

  // Dynamic 3D physical card tilt effect (cursor-responsive)
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    // Max 3.5 degrees rotation for subtle, grounded print feel
    const rotateX = -(y / (box.height / 2)) * 3.5;
    const rotateY = (x / (box.width / 2)) * 3.5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <section id="projects" className="editorial-section reveal-element">
      <div className="editorial-section-header">
        <h2 className="editorial-section-title section-header-title">
          <FiFolder className="section-header-icon" size={24} />
          <span>Featured Projects</span>
        </h2>
        <span className="editorial-section-number">04 // PORTFOLIO</span>
      </div>
      
      <div className="projects-editorial-grid">
        {projects.map((project, index) => {
          const delayClass = `reveal-element delay-${(index % 5) + 1}`;
          return (
            <div 
              key={index} 
              className={`project-editorial-card ${delayClass}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {project.image && (
                <div className="project-card-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-card-image" 
                  />
                </div>
              )}
              
              <div style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 className="project-card-title" style={{ marginTop: project.image ? '0' : '8px', lineHeight: '1.4' }}>
                    {project.title}
                  </h4>
                  
                  <ul className="editorial-points" style={{ gap: '10px', marginBottom: '16px', marginTop: '12px' }}>
                    <li style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{project.bottleneck}</li>
                    <li style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{project.solution}</li>
                    <li style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{project.impact}</li>
                  </ul>
                </div>
                
                <div>
                  <div className="skill-pills-container" style={{ marginBottom: '12px' }}>
                    {project.tech.map((t, tIndex) => (
                      <span key={tIndex} className="flat-skill-tag">{t}</span>
                    ))}
                  </div>
                  
                  <div className="project-card-links">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-card-link"
                      >
                        <FiArrowUpRight size={14} />
                        <span>Live Link</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-card-link"
                      >
                        <FiGithub size={13} />
                        <span>Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
