import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left label */}
          <div className="lg:col-span-3 flex items-start mb-4 lg:mb-0">
            <span className="text-gray-400 text-lg md:text-xl font-medium mt-2 block">Our Company</span>
          </div>

          {/* Main content */}
          <div className="lg:col-span-9 mx-auto max-w-3xl text-left">
            <div className="lg:col-span-9">
              <h1 className="text-2xl md:text-4xl font leading-tight mb-6 md:mb-8">
                <span className="text-gray-400 font">AITISERVE</span>{' '}adalah perusahaan teknologi yang mengintegrasikan kecerdasan buatan (AI) dan teknologi informasi (TI) untuk membentuk masa depan digital yang lebih cerdas, adaptif, dan berkelanjutan. Kami hadir sebagai mitra transformasi digital yang berfokus pada inovasi, efisiensi, dan dampak nyata bagi klien dan masyarakat.
              </h1>
              <a
                href="#more-about-us"
                className="inline-flex items-center text-base font-medium mb-8 md:mb-12 border-b border-black pb-1 hover:opacity-80 transition"
              >
                Selengkapnya <span className="ml-2">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="w-full flex justify-center mt-10 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-10xl"
          >
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden mx-auto group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <img
                  src="/images/teamwork-1.png"
                  alt="Smart Agriculture"
                  className="w-full h-72 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-2xl overflow-hidden mx-auto group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <img
                  src="/images/teamwork-2.png"
                  alt="Drive Testing"
                  className="w-full h-72 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
