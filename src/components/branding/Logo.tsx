import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-32 w-auto" }: LogoProps) {
  return (
    <img 
      src="https://ik.imagekit.io/ogvml4np4/Pinnacle%20logo%20Final.pdf%20copy.jpg?updatedAt=1739762730518"
      alt="Pinnacle Insurance Advisors"
      className={className}
    />
  );
}