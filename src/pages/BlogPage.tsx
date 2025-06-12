import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: '5 Hal yang Harus Dimiliki Website Bisnis Kecil',
    slug: 'fitur-website-bisnis-kecil',
    date: '2025-06-01',
    excerpt: 'Pelajari elemen penting yang harus dimiliki website UMKM agar terlihat profesional dan menarik calon pelanggan.',
    image: '/images/blog/fitur-website.png',
    link: '/blog/fitur-website-bisnis-kecil',
  },
  {
    id: 2,
    title: 'Desain Mobile-First: Kenapa Penting?',
    slug: 'desain-mobile-first',
    date: '2025-05-22',
    excerpt: 'Sebagian besar pengguna mengakses web lewat ponsel. Pastikan desain website Anda mobile-friendly!',
    image: '/images/blog/mobile-first.png',
    link: '/blog/desain-mobile-first',
  },
  {
    id: 3,
    title: 'Tips Menulis Konten Website yang Efektif',
    slug: 'tips-konten-website',
    date: '2025-05-15',
    excerpt: 'Konten yang jelas dan meyakinkan akan meningkatkan kepercayaan pengunjung. Berikut beberapa tips praktisnya.',
    image: '/images/blog/konten-efektif.png',
    link: '/blog/tips-konten-website',
  },
];

const BlogPage: React.FC = () => {
  return (
    <>
      <div className="min-h-[100px] bg-black" />
      {/* Hero Section */}
      <section className="bg-black py-16 md:py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="uppercase text-white/70 tracking-widest text-sm mb-4">Blog</div>
          <h1 className="text-3xl md:text-5xl font-light text-white mb-6">Insights & Articles</h1>
          <p className="text-base md:text-lg text-white/80 mb-2">
            Explore the latest trends, insights, and stories in technology, AI, and digital transformation.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-black min-h-screen py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white/5 border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden group"
              >
                <a
                  href={post.link}
                  tabIndex={0}
                  className="block group"
                  aria-label={post.title}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out z-0"
                    />
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent transition-all duration-500 ease-in-out z-10" aria-hidden="true" />
                  </div>
                </a>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs text-white/60 mb-2">{new Date(post.date).toLocaleDateString()}</span>
                  <a
                    href={post.link}
                    className="block text-2xl font-semibold text-white mb-2 border-b-2 border-transparent hover:border-hijau transition-all duration-200"
                    tabIndex={0}
                  >
                    {post.title}
                  </a>
                  <p className="text-base text-white/80 mb-6 flex-1">{post.excerpt}</p>
                  <a
                    href={post.link}
                    className="inline-block mt-auto text-hijau font-medium border-b border-hijau hover:text-hijau hover:border-hijau transition-colors duration-200 text-base"
                  >
                    Read more <span className="ml-1">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage; 