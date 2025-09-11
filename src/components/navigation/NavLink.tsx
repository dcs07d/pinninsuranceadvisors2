import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}

export default function NavLink({ href, children, icon }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === href;
  
  return (
    <Link
      to={href}
      className={`flex items-center gap-2 transition-colors ${
        isActive 
          ? 'text-primary font-medium'
          : 'text-gray-900 hover:text-primary'
      }`}
    >
      {icon}
      {children}
    </Link>
  );
}