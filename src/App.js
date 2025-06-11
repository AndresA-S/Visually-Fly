import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import your page components
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ShopPage from './ShopPage';
import ContactPage from './ContactPage';

function App() {
  return (
    // Wrap the whole app in a router
    <BrowserRouter>
      {/* Top banner with logo/name */}
      <header style={{ background: 'var(--light-blue)', padding: '1rem', textAlign: 'center' }}>
        <h1 style={{ margin: 0 }}>🕊️ Visually Fly</h1>
      </header>

      {/* Nav bar underneath */}
      <nav style={{ background: 'var(--dark-blue)', padding: '0.5rem', textAlign: 'center' }}>
        {/* Links use React Router's Link component */}
        <Link to="/" style={linkStyle}>HOME</Link>
        <Link to="/about" style={linkStyle}>ABOUT</Link>
        <Link to="/shop" style={linkStyle}>SHOP</Link>
        <Link to="/contact" style={linkStyle}>CONTACT</Link>
        {/* External portfolio link opens in a new tab */}
        <a href="https://your-portfolio.example.com" target="_blank" rel="noopener noreferrer"
           style={linkStyle}>
          PORTFOLIO
        </a>
      </nav>

      {/* Define which component shows on each route */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Shared styling for nav links
const linkStyle = {
  color: 'white', 
  margin: '0 1rem',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default App;
