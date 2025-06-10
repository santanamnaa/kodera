import React from 'react';

const techs = [
  {
    title: 'Arsitektur Sistem & Pengembangan Solusi',
    desc: 'Rancangan sistem Telco & IT, OSS/BSS, AI RAG, pengembangan full-stack (Java, Kotlin, Python, Go, Node.js), serta frontend modern (React Native, Flutter).',
  },
  {
    title: 'Basis Data & Infrastruktur',
    desc: 'Database relasional & graph (Oracle, PostgreSQL, Neo4j), cloud & vector database (Supabase, Pinecone), server & storage (Linux, NGINX, MiniO), serta GeoServer untuk spasial.',
  },
  {
    title: 'DevOps & Keamanan Sistem',
    desc: 'Manajemen server Linux, scripting, Docker, Kafka, CI/CD (GitLab, Jenkins), Agile, serta keamanan (OWASP, SSL/TLS, SSH, SFTP).',
  },
  {
    title: 'Desain & Antarmuka Pengguna',
    desc: 'UI/UX dengan Figma, pengembangan aplikasi mobile AI lintas platform (Flutter, React Native).',
  },
];

const CoreTechSection: React.FC = () => (
  <section className="bg-black text-white py-20 px-6 md:px-10">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-light tracking-tight text-center mb-12">Teknologi & Kompetensi Inti</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techs.map((t) => (
          <div key={t.title} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300">
            <h4 className="text-lg font-light text-teal-400 mb-2">{t.title}</h4>
            <p className="text-gray-300 text-sm font-light leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreTechSection; 