import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon = null,
  type = 'button'
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-wide rounded-full transition-all duration-300 transform active:scale-95 focus:outline-none cursor-pointer';
  
  const variants = {
    primary: 'bg-[#173F2A] text-white hover:bg-[#0B2E20] shadow-md hover:shadow-xl hover:-translate-y-0.5',
    secondary: 'bg-[#5E8C61] text-white hover:bg-[#173F2A] shadow-md hover:shadow-lg',
    outline: 'border-2 border-[#173F2A] text-[#173F2A] hover:bg-[#173F2A] hover:text-white',
    outlineWhite: 'border-2 border-white/80 text-white hover:bg-white hover:text-[#173F2A]',
    glass: 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block group">
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block group">
      {content}
    </button>
  );
};
