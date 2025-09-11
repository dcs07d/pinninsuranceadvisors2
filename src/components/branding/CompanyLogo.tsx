import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';

export default function CompanyLogo() {
  return (
    <Link to="/" className="flex items-center h-full" aria-label="Go to homepage">
      <AnimatedLogo className="h-full w-auto" />
    </Link>
  );
}