import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Page Not Found - AITI Solutions';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
        <h1 className="text-7xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-6">Page Not Found</h2>
        <p className="text-sm text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-primary text-white font-medium px-6 py-3 rounded-lg hover:opacity-80 transition"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;