import React from 'react';
import './HomePage.css';

export default function HomePage() {
  return (
    <main className="home-container">
      {/* Left card: shop frames */}
      <button className="card" onClick={() => window.location.href = '/shop'}>
        <img src="/images/glasses.jpg" alt="Shop Frames" />
        <span className="caption">Find your Frames</span>
      </button>

      {/* Right card: book exam */}
      <button className="card" onClick={() => window.location.href = '/contact'}>
        <img src="/images/autorefractor.jpg" alt="Book Eye Exam" />
        <span className="caption">See Clearly – Book an Eye Exam</span>
      </button>
    </main>
  );
}
