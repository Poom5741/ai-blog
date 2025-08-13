import React from 'react';
import FuturisticButton from '../components/FuturisticButton';

const AboutPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>About This Blog</h1>
      <p style={{ marginTop: '16px' }}>
        This is a demo blog showcasing navigation using a futuristic button.
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px' }}>
        <FuturisticButton href="/">Home</FuturisticButton>
        <FuturisticButton href="/contact">Contact</FuturisticButton>
      </div>
    </div>
  );
};

export default AboutPage;
