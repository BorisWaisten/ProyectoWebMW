'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  href, 
  onClick, 
  className = "", 
  variant = "style5",
  size = "md",
  disabled = false 
}) {
  const baseClasses = "inline-block font-medium transition-all duration-300 rounded-full relative bg-white/8 backdrop-blur-[1.5px] border border-white/50 hover:bg-white/20 hover:border-white/80 shadow-sm";
  
  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base", 
    lg: "px-12 py-4 text-lg",
    xl: "px-16 py-5 text-xl"
  };

  const variantClasses = {
    style5: "text-gray-900"
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const buttonContent = (
    <motion.div
      className={buttonClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
} 