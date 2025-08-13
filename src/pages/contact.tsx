import React from 'react';
import FuturisticButton from '../components/FuturisticButton';

const ContactPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Contact</h1>
      <p style={{ marginTop: '16px' }}>
        You can reach us by clicking the buttons below.
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px' }}>
        <FuturisticButton href="/">Home</FuturisticButton>
        <FuturisticButton href="/about">About</FuturisticButton>
      </div>
    </div>
  );
};

export default ContactPage;
