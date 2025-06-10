import React from 'react';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'TDN dan ZTE Sepakati Rencana Implementasi Proyek XLSmart',
    date: '2025-05-22',
    readTime: '3 min. read',
    image: '/images/teamwork-1.png',
    link: '#',
  },
  {
    id: 2,
    title: 'AITISERVE dan Kencana Group Jajaki Kemitraan Smart City & Infrastruktur',
    date: '2025-05-21',
    readTime: '3 min. read',
    image: '/images/teamwork-2.png',
    link: '#',
  },
  {
    id: 3,
    title: 'AITISERVE Kunjungi Kemenlu Bahas Kolaborasi Digital',
    date: '2025-05-16',
    readTime: '3 min. read',
    image: '/images/teamwork-3.png',
    link: '#',
  },
  {
    id: 4,
    title: 'AITISERVE Adakan Pertemuan Strategis dengan Telkomsel, PSSI, KOMDIGI, dan Smartfren',
    date: '2025-05-09',
    readTime: '3 min. read',
    image: '/images/teamwork-1.png',
    link: '#',
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Judul Section */}
        <div className="text-center">
          <span className="uppercase text-black text-sm font-light block mb-2">
            BERITA
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-black">
            Wawasan & Kolaborasi Terbaru
          </h2>
        </div>

        {/* Container Kartu: scroll horizontal */}
        <div className="flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent pb-2">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="min-w-[80vw] max-w-xs sm:min-w-[300px] sm:max-w-[300px] bg-white rounded-xl shadow-sm overflow-hidden flex-shrink-0 border border-gray-200 flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Gambar */}
              <div className="relative w-full h-44">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center"
                />
                <a
                  href={post.link}
                  className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-1 hover:bg-opacity-100 transition"
                >
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </a>
              </div>

              {/* Konten Kartu */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 text-xs mb-2 space-x-3">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-sm font-light text-black leading-snug mb-4 flex-grow">
                  {post.title}
                </h3>
                <div className="mt-auto">
                  <a
                    href={post.link}
                    className="inline-flex items-center text-sm font-light text-black border-b border-black pb-0.5 hover:opacity-80 transition"
                  >
                    Selengkapnya&nbsp;
                    <span className="text-base font-normal">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Tombol "See More" */}
        <div className="flex justify-center mt-4">
          <a
            href="/blog"
            className="text-sm font-light text-black border-b border-black pb-0.5 hover:opacity-80 transition inline-flex items-center"
          >
            Lihat semua berita&nbsp;
            <span className="text-base font-normal">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
