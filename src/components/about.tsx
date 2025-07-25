import React from 'react';
import './about.css';

const aboutCards = [
  {
    emoji: '🏆',
    title: 'Career Certificate & Trophies',
    desc: 'Get recognized with a certificate and winner trophies.'
  },
  {
    emoji: '💰',
    title: 'Top 3 Teams: 50K Rewards',
    desc: 'Exciting rewards worth 50,000 for the top 3 teams.'
  },
  {
    emoji: '🌟',
    title: 'Showcase Talent',
    desc: 'Present your skills in front of top companies.'
  },
  {
    emoji: '📄',
    title: 'Resume-worthy Project',
    desc: 'Work on real projects to boost your resume.'
  },
  {
    emoji: '🇮🇳',
    title: 'National Challenge',
    desc: 'Top 1 team per college goes to Nationals (1 Lakh prize)!'
  }
];

const About: React.FC = () => {
  return (
    <section className="about-section">
      <h2>About the National Skillathon Challenge</h2>
      <p className="about-desc">
        Unlock your potential and compete with the best minds across the country! The National Skillathon Challenge is your gateway to recognition, rewards, and real-world experience.
      </p>
      <div className="about-cards">
        {aboutCards.map((card, idx) => (
          <div className="about-card" key={idx}>
            <div className="about-card-emoji">{card.emoji}</div>
            <div className="about-card-title">{card.title}</div>
            <div className="about-card-desc">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About; 