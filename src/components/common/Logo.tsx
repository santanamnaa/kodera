import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <span className="ml-2 text-xl font-bold">
      <img src="/images/branding/logo_white.svg" alt="KODERA" className="inline-block w-40 h-50"  />
      </span>
    </div>
  );
};

export default Logo;
