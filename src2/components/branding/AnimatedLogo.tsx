import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  className?: string;
}

export default function AnimatedLogo({ className = "h-20 w-auto" }: AnimatedLogoProps) {
  return (
    <motion.img 
      src="https://ik.imagekit.io/ogvml4np4/Pinnacle%20logo%20Final.pdf%20copy.jpg?updatedAt=1739762730518"
      alt="Pinnacle Insurance Advisors"
      className={`${className} transition-transform duration-300 hover:scale-105 hover:brightness-110`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    />
  );
}