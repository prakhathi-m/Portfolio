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
      bottleneck: 'Monolithic, un-optimized mortgage portal loading slowly on mobile devices, costing client conversions.',
      solution: 'Re-bundled build structures with Webpack, customized white-label styles using LESS and Bootstrap, and removed rendering locks.',
      impact: 'Reduced initial page load times by 40% and improved responsive screen layout alignment across modern devices.',
      tech: ['jQuery', 'HTML5', 'LESS', 'Bootstrap', 'Webpack'],
      image: stearnsImg,
      liveUrl: 'https://stearns.com/',
      githubUrl: ''
    },
    {
      title: 'Replacing Redux with Native React Hooks to Kill Third-Party Overhead',
      bottleneck: 'Bloated Redux boilerplate causing heavy browser store updates and sluggish rendering on large-scale talent charts.',
      solution: 'Reimplemented state management using native React hooks (useContext, useReducer) and optimized SVG renderings with D3.js.',
      impact: 'Boosted dashboard data rendering speeds by 10% and eliminated complex, legacy state synchronization overhead.',
      tech: ['ReactJS', 'Redux', 'Django', 'PostgreSQL', 'AWS', 'D3.js'],
      image: twineImg,
      liveUrl: 'https://cpohq.com/',
      githubUrl: ''
    },
    {
      title: 'Scaling Multilingual Search Pipelines to Query Twitter Streams in Real-Time',
      bottleneck: 'Standard SQL search queries falling over under high-concurrency multilingual text lookups on raw Twitter datasets.',
      solution: 'Designed a Python Flask backend serving a Lucene-based Apache Solr index with custom query weighting and sorting rules.',
      impact: 'Reduced search latency below 15ms and mapped query frequency trends dynamically using Google Charts.',
      tech: ['ReactJS', 'Flask', 'Apache Solr', 'AWS EC2', 'Google Charts'],
      image: twitterImg,
      liveUrl: 'https://drive.google.com/file/d/1ke3FsmDYe9VojB6Y6ErGQ144q8WqZ9rz/view?usp=sharing',
      githubUrl: 'https://github.com/prakhathi-m/IR-Tweet-Search'
    },
    {
      title: 'Architecting a React Native Booking Engine to Eliminate Race Conditions',
      bottleneck: 'Concurrency race conditions in mobile performer booking forms leading to double-booked calendar slots.',
      solution: 'Built a transactional REST API on Node.js linked to MSSQL database locks, rendering states dynamically on React Native.',
      impact: 'Eliminated concurrent booking overlaps while streamlining real-time performer-client chat updates.',
      tech: ['React Native', 'Node.js', 'AWS', 'MSSQL'],
      image: emAppImg,
      liveUrl: '',
      githubUrl: ''
    },
    {
      title: 'Distributing Text Classification Across Apache Spark Clusters',
      bottleneck: 'High training times when parsing massive raw movie plot datasets on a single machine\'s local CPU.',
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
            <div key={index} className={`project-editorial-card ${delayClass}`}>
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
