import React from 'react';
import { useRouter } from 'next/router';

const VALID_ROUTES = ['/', '/about', '/contact'];

interface FuturisticButtonProps {
  href: string;
  children: React.ReactNode;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({ href, children }) => {
  const router = useRouter();

  const handleClick = () => {
    if (VALID_ROUTES.includes(href)) {
      router.push(href);
    } else {
      console.error(`Attempted navigation to unknown route: ${href}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        background: 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        boxShadow: '0 0 8px rgba(58,123,213,0.6)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 16px rgba(58,123,213,0.9)';
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 8px rgba(58,123,213,0.6)';
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
      }}
    >
      {children}
    </button>
  );
};

export default FuturisticButton;
