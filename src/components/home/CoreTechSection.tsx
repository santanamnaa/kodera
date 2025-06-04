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
  <section className="bg-gray-100 py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Teknologi & Kompetensi Inti</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techs.map((t) => (
          <div key={t.title} className="bg-gray-50 rounded-lg shadow p-6">
            <h4 className="font-bold text-primary mb-2">{t.title}</h4>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreTechSection; 