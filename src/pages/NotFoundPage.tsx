import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Page Not Found - Boomerang IT Solutions';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg"> {/* Added padding, background, rounded corners, and shadow */}
        <h1 className="text-9xl font-bold text-secondary">404</h1>
        <h2 className="text-3xl font-semibold text-primary mt-4 mb-6">Page Not Found</h2>
        <p className="text-neutral mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="btn btn-primary transition duration-300 ease-in-out hover:bg-primary-darker hover:shadow-md" // Added transition and hover effects
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;