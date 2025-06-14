import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-full text-lg font-bold transition-colors';
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 shadow-lg',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10 transition-all hover:scale-105 shadow-lg',
  };
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}