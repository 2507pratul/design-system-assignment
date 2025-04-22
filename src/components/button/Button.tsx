import React from 'react';
import { ButtonProps } from './Button.types';


const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  children,
}) => {
  const baseStyle = 'px-4 py-2 rounded text-white';
  const variants: Record<string, string> = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-gray-500 hover:bg-gray-600',
    danger: 'bg-red-500 hover:bg-red-600',
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
