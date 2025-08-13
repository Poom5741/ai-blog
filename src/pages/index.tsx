import React from 'react';
import FuturisticButton from '../components/FuturisticButton';

const HomePage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Welcome to the AI Blog</h1>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px' }}>
        <FuturisticButton href="/about">Go to About</FuturisticButton>
        <FuturisticButton href="/contact">Contact Us</FuturisticButton>
      </div>
    </div>
  );
};

export default HomePage;
