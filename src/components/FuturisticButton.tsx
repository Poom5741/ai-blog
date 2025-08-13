import React from 'react';

interface FuturisticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Accessible label for screen readers.
   */
  ariaLabel: string;
  /**
   * Button type attribute to define its behavior in forms.
   * Defaults to "button" to prevent unintended form submissions.
   */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * A visually striking button with glowing borders and subtle animations.
 */
const Button: React.FC<FuturisticButtonProps> = ({
  ariaLabel,
  children,
  type = 'button',
  ...props
}) => (
  <button
    aria-label={ariaLabel}
    type={type}
    className="futuristic-button"
    {...props}
  >
    {children}
    <style jsx>{`
      .futuristic-button {
        position: relative;
        padding: 0.75rem 1.5rem;
        color: #ffffff;
        background: transparent;
        border: 2px solid #00ffff;
        border-radius: 8px;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        transition: box-shadow 0.3s ease, transform 0.3s ease;
      }

      .futuristic-button:hover,
      .futuristic-button:focus {
        box-shadow: 0 0 8px #00ffff, 0 0 16px #00ffff;
        transform: translateY(-2px);
        outline: none;
      }

      .futuristic-button:focus-visible {
        outline: 2px solid #ffffff;
        outline-offset: 4px;
      }
    `}</style>
  </button>
);

export default Button;
