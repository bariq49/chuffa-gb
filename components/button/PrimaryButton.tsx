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
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  isLoading = false,
  loaderColor = 'text-white',
  icon = null,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        px-4 py-4 bg-primary rounded-lg
        relative transition-all duration-200 text-white  cursor-pointer text-md font-medium
        ${disabled || isLoading ? 'opacity-80 cursor-not-allowed' : 'hover:bg-primary-dark'}
        ${className}
      `}
    >
      <span className={`inline-flex items-center justify-center ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {icon && <span className="mr-2">{icon}</span>}
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