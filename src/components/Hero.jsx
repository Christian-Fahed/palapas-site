import React, { useEffect, useState } from 'react';
import "./Hero.css";


const heroImages = [
  process.env.PUBLIC_URL + '/images/building/beach-night.jpeg',
  process.env.PUBLIC_URL + '/images/building/beach-sunset.jpeg',
  process.env.PUBLIC_URL + '/images/building/beach-sunset2.jpeg',
  process.env.PUBLIC_URL + '/images/building/beach-sunset3.jpeg',
  process.env.PUBLIC_URL + '/images/building/beach-sunset4.jpeg',
  process.env.PUBLIC_URL + '/images/building/building.jpeg',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((idx) => (idx + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="hero"
      id="hero"
      style={{ backgroundImage: `url('${heroImages[currentIndex]}')` }}
    >
      <div className="content container">
        <h1>
          Welcome to Palapas <span role="img" aria-label="wave">🌊</span>
        </h1>
        <p>Discover stunning gyms, serene beaches, and majestic seas</p>
      </div>
    </section>
  );
}
