import React from 'react';
import { FiUser } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="editorial-section reveal-element">
      <div className="editorial-section-header">
        <h2 className="editorial-section-title section-header-title">
          <FiUser className="section-header-icon" size={24} />
          <span>About Me</span>
        </h2>
        <span className="editorial-section-number">01 // INTRODUCTION</span>
      </div>
      
      <p className="editorial-lead">
        I build high-performance frontend systems that scale. I focus on optimizing render cycles, eliminating bundle bloat, and building accessible UI architecture - prioritizing technical pragmatism and measurable outcomes over abstract frameworks.
      </p>

      <ul className="editorial-points">
        <li>
          <strong>Performance & Compilations</strong>: Replaced outdated build configurations, speeding up local dev compile times by 20x and reducing page load times by 40% on client-facing applications.
        </li>
        <li>
          <strong>Component Systems</strong>: Built monorepos and design token libraries that cut new component development cycles by 35% while ensuring cross-platform styling consistency.
        </li>
        <li>
          <strong>Core Accessibility (a11y)</strong>: Programmed fluid, keyboard-navigable web apps with screen reader support, adhering strictly to WCAG 2.1 A/AA guidelines.
        </li>
        <li>
          <strong>Full-Stack Orchestration</strong>: Designed database schemas, custom React state hooks, and big data MapReduce scripts to manage complex HR workflows.
        </li>
      </ul>
    </section>
  );
};

export default About;
