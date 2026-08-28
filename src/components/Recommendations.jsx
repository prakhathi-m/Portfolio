import React, { useState } from 'react';
import { FiMessageSquare, FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Recommendations = () => {
  const recommendations = [
    {
      quote: "Prakhathi is intelligent, hardworking, creative, an independent learner and a team player. She has a fantastic ability to understand a problem and find her way to the answer. She is great at asking questions and knowing when and how to request help or research her problems. She is also a wealth of information and is wonderful at instructing and passing her knowledge with a sense of humility and her bottom line desire to make the project better. Any company would be lucky to have her.",
      author: "Yash Kochar",
      role: "Co-Founder & CTO, Incentiv (formerly Twine)",
      date: "September 2021",
      profileUrl: "https://www.linkedin.com/in/prakhathimurugesan/"
    },
    {
      quote: "Prakhathi worked on a team to help create a phone application for my business from scratch! They did very well and Prakhathi was very active in her roles. In addition to the quality of the phone application, her professionalism and team work during meetings was very helpful as she was able to maintain an even temper while in the heat of debate about how to accomplish goals that I had set. She was able to understand clearly what I was looking for, communicate it to other team members effectively, and ask for more information when she did not fully understand. I recommend Prakhathi for both her team and technical skills.",
      author: "Kevin J. Carpenter, MBA",
      role: "Business Owner & Educator",
      date: "November 2020",
      profileUrl: "https://www.linkedin.com/in/prakhathimurugesan/"
    },
    {
      quote: "It was a pleasure to work with Prakhathi for more than a year in the same Project at Tavant. She was an excellent mentor to me. I had lots and lots to learn from her both technically and how she was as a complete Professional. She was my go-to person whenever I had any technical issues. In short, she was a splendid problem solver. She is a master in Web development, who can play around with HTML, CSS, Javascript, and React all the time. I was amazed by her dedication and commitment to the work. I would say she was a terrific team player who collaborates with people in different teams to ensure the deliverables meet the deadline. I have seen her giving solutions to big problems in minutes. Prakhathi is a person who can take leadership over the activities that she is involved in. It was a delightful experience working with her :-)\n\nWishing a very very all the best for her future !!",
      author: "Archana Venkatesan",
      role: "Senior UI Engineer, Tavant",
      date: "October 2019",
      profileUrl: "https://www.linkedin.com/in/prakhathimurugesan/"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeSlide = (newIndex) => {
    if (newIndex === currentSlide) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setIsFading(false);
    }, 150); // Match transition fade timing
  };

  const handlePrev = () => {
    const newIndex = (currentSlide - 1 + recommendations.length) % recommendations.length;
    changeSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentSlide + 1) % recommendations.length;
    changeSlide(newIndex);
  };

  // Magnetic hover effect handler
  const handleMagneticMove = (e) => {
    const button = e.currentTarget;
    const box = button.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    const inner = button.querySelector('.magnetic-inner');
    if (inner) {
      inner.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    }
  };

  const handleMagneticLeave = (e) => {
    const button = e.currentTarget;
    const inner = button.querySelector('.magnetic-inner');
    if (inner) {
      inner.style.transform = 'translate(0, 0)';
    }
  };

  const currentRec = recommendations[currentSlide];

  return (
    <section id="recommendations" className="editorial-section reveal-element">
      <div className="editorial-section-header">
        <h2 className="editorial-section-title section-header-title">
          <FiMessageSquare className="section-header-icon" size={24} />
          <span>Recommendations</span>
        </h2>
        <span className="editorial-section-number">05 // ENDORSEMENTS</span>
      </div>

      <div className="recommendations-carousel">
        <div 
          className="carousel-slide" 
          style={{ opacity: isFading ? 0 : 1, transition: 'opacity 0.15s ease-in-out' }}
        >
          <div className="carousel-quote-container">
            <p style={{ fontStyle: 'italic', fontSize: '1.02rem', color: 'var(--text-primary)', marginBottom: '24px', lineHeight: '1.7' }}>
              “{currentRec.quote}”
            </p>
          </div>
          
          <cite style={{ display: 'block', fontStyle: 'normal', borderTop: 'var(--border-thin)', paddingTop: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <span style={{ fontWeight: 800, color: 'var(--color-sage)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>
                  {currentRec.author}
                </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {' '}— {currentRec.role} ({currentRec.date})
                </span>
              </div>
              
              <a 
                href={currentRec.profileUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-card-link"
                style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}
              >
                <FiArrowUpRight size={12} />
                <span>Verify on LinkedIn</span>
              </a>
            </div>
          </cite>
        </div>

        <div className="carousel-controls">
          <button 
            className="carousel-nav-btn" 
            onClick={handlePrev}
            aria-label="Previous recommendation"
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
          >
            <span className="magnetic-inner">
              <FiChevronLeft size={20} />
            </span>
          </button>

          <div className="carousel-indicators">
            {recommendations.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => changeSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          <button 
            className="carousel-nav-btn" 
            onClick={handleNext}
            aria-label="Next recommendation"
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
          >
            <span className="magnetic-inner">
              <FiChevronRight size={20} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
