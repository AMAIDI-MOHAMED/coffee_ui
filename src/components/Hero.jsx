import React, { useEffect, useState } from 'react';
import './Hero.css';

const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1920&q=80',
    title: 'Welcome to Coffee Bliss',
    subtitle: 'Experience the finest coffee blends crafted just for you.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1920&q=80',
    title: 'Freshly Brewed Perfection',
    subtitle: 'Savor every sip with our freshly brewed coffee.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1920&q=80',
    title: 'Your Daily Coffee Fix',
    subtitle: 'Start your day right with our premium coffee blends.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1920&q=80',
    title: 'Relax & Recharge',
    subtitle: 'Enjoy a cozy atmosphere and great coffee with friends.',
  },
  {
    bg: 'https://images.unsplash.com/photo-1526570207772-588405f3d4ec?auto=format&fit=crop&w=1920&q=80',
    title: 'Crafted with Passion',
    subtitle: 'Baristas who care, coffee that delights.',
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const { bg, title, subtitle } = slides[currentIndex];

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bg})` }}
      id="hero"
    >
      <div className={`hero-content ${fade ? 'slide-in' : ''}`}>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-buttons">
          <button className="hero-button">Shop Now</button>
          <a href="#contact" className="hero-button contact">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
