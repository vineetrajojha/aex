import React, { useEffect, useState } from 'react';
import './hero.css';

const TARGET_DATE = new Date('2025-09-20T23:59:59');

const getTimeLeft = () => {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();
  const positiveDiff = Math.max(diff, 0);
  const day = Math.floor(positiveDiff / (1000 * 60 * 60 * 24));
  const hour = Math.floor((positiveDiff / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((positiveDiff / (1000 * 60)) % 60);
  const second = Math.floor((positiveDiff / 1000) % 60);
  return { day, hour, minute, second };
};

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Countdown to the National Skillathon Challenge Grand Finale!</h1>
        <div className="hero-timer">
          <div className="timer-segment">
            <span className="timer-value">{String(timeLeft.day).padStart(2, '0')}</span>
            <span className="timer-label">Days</span>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-segment">
            <span className="timer-value">{String(timeLeft.hour).padStart(2, '0')}</span>
            <span className="timer-label">Hours</span>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-segment">
            <span className="timer-value">{String(timeLeft.minute).padStart(2, '0')}</span>
            <span className="timer-label">Minutes</span>
          </div>
          <div className="timer-separator">:</div>
          <div className="timer-segment">
            <span className="timer-value">{String(timeLeft.second).padStart(2, '0')}</span>
            <span className="timer-label">Seconds</span>
          </div>
        </div>
        <p>Early bird registrations are open, Register Now!</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="hero-btn hero-btn--blue">Participate in Skillathon</button>
          <button className="hero-btn hero-btn--white">Attend the Session</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={require('../assets/hero.png')} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero; 