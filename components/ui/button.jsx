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
  const baseClasses = "inline-block font-medium transition-all duration-300 border-2 rounded-full relative";
  
  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base", 
    lg: "px-12 py-4 text-lg",
    xl: "px-16 py-5 text-xl"
  };

  const variantClasses = {
    style5: "btn-style5"
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