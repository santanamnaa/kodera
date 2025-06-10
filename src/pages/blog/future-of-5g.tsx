import React from 'react';

const FutureOf5G: React.FC = () => (
  <article className="bg-white text-gray-900 py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-center">
      The Future of 5G in Telecommunications
    </h1>
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-8 text-gray-600 text-sm">
      <span>4 min read</span>
      <span className="hidden md:inline">·</span>
      <span>June 1, 2024</span>
    </div>
    <img
      src="/images/blog/5g.png"
      alt="The Future of 5G in Telecommunications"
      className="w-full h-96 object-cover rounded-xl mb-10 mx-auto"
    />
    <p className="text-lg text-gray-800 mb-10 text-center">
      Explore how 5G technology is revolutionizing the telecom industry and what it means for businesses and consumers.
    </p>
    <section className="mt-12 space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          5G is the next generation of mobile networks, promising faster speeds, lower latency, and more reliable connections. This article explores the impact of 5G on telecommunications, its benefits, and what the future holds for this transformative technology.
        </p>
      </div>
      {/* Add more detailed content here as needed */}
    </section>
  </article>
);

export default FutureOf5G; 