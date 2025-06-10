import React from 'react';

const CloudSolutionsModernEnterprises: React.FC = () => (
  <article className="bg-white text-gray-900 py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-center">
      Cloud Solutions for Modern Enterprises
    </h1>
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-8 text-gray-600 text-sm">

      <span>4 min read</span>
      <span className="hidden md:inline">·</span>
      <span>May 10, 2024</span>
    </div>
    <img
      src="/images/blog/cloud.png"
      alt="Cloud Solutions for Modern Enterprises"
      className="w-full h-96 object-cover rounded-xl mb-10 mx-auto"
    />
    <p className="text-lg text-gray-800 mb-10 text-center">
      Learn how cloud-based solutions are enabling enterprises to scale and innovate faster than ever before.
    </p>
    <section className="mt-12 space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Cloud computing has become a cornerstone for modern enterprises, offering scalability, flexibility, and innovation. This article discusses how cloud solutions are transforming businesses and what the future may hold.
        </p>
      </div>
      {/* Add more detailed content here as needed */}
    </section>
  </article>
);

export default CloudSolutionsModernEnterprises; 