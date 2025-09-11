import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function AnimatedButton({ 
  onClick, 
  children, 
  variant = 'primary',
  className = ''
}: AnimatedButtonProps) {
  const baseClasses = "flex items-center justify-center gap-3 py-4 px-6 rounded-xl transition-colors";
  const variantClasses = variant === 'primary' 
    ? "bg-primary text-white hover:bg-primary-dark border-4 border-primary-dark"
    : "bg-slate-800 text-white hover:bg-slate-700";

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 500,
        damping: 25
      }}
    >
      {children}
    </motion.button>
  );
}