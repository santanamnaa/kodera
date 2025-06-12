import React from 'react';

const DirectorGreetingSection: React.FC = () => (
  <section className="bg-white py-16 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-light mb-4">Sambutan Direktur</h2>
      <p className="mb-6 italic font-light">Assalamu'alaikum warahmatullahi wabarakatuh,</p>
      <p className="mb-6 font-light">
        Puji syukur ke hadirat Tuhan Yang Maha Esa, atas rahmat dan karunia-Nya, kami diberi kesempatan untuk memperkenalkan <span className="font-normal">KODERA</span> melalui Company Profile ini.<br /><br />
        KODERA hadir sebagai agensi pengembangan website yang berkomitmen menjembatani kebutuhan digital klien dengan solusi yang berkualitas dan profesional. Kami percaya bahwa pengelolaan proyek yang terstruktur, komunikasi yang terbuka, serta dedikasi pada kualitas merupakan fondasi dalam setiap layanan yang kami berikan.<br /><br />
        Kami tidak hanya menyediakan jasa pembuatan website, namun juga menjadi mitra strategis bagi klien dalam mewujudkan kehadiran digital yang kuat, relevan, dan berkelanjutan. Dengan dukungan tim yang kompeten dan berpengalaman, kami senantiasa berupaya memberikan hasil yang sesuai harapan dan kebutuhan unik setiap klien.<br /><br />
        Terima kasih atas kepercayaan dan dukungan yang diberikan. Kami berharap kehadiran <span className="font-normal">KODERA</span> dapat memberikan kontribusi positif dalam pertumbuhan ekosistem digital, baik secara lokal maupun global.
      </p>
      <div className="mt-8 font-normal">ACHMAD FAIZAL<br />Direktur Utama<br />KODERA</div>
    </div>
  </section>
);

export default DirectorGreetingSection; 