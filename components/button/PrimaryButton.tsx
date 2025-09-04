import React from 'react';
import Loader from '../loaders/ButtonLoader';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  loaderColor?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  isLoading = false,
  loaderColor = 'text-white',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        px-4 py-2 bg-primary rounded-lg
        relative transition-all duration-200
        ${disabled || isLoading ? 'opacity-80 cursor-not-allowed' : 'hover:bg-primary-dark'}
        ${className}
      `}
    >
      <span className={`inline-flex items-center justify-center ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {label}
      </span>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </button>
  );
};

export default Button;