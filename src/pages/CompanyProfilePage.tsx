import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';

const CompanyProfilePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Company Profile
            </h1>
            <p className="text-xl text-gray-300">
              PT AITISERVE DJAYA NARAYA
            </p>
          </motion.div>
        </div>
      </section>

      {/* Document Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">Document Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-neutral mb-2">Version Number: V1.0</p>
                  <p className="text-neutral mb-2">Status: Release</p>
                  <p className="text-neutral mb-2">Author: AITISERVE DJAYA NARAYA</p>
                </div>
                <div>
                  <p className="text-neutral mb-2">Date Published: 1 Juni 2025</p>
                  <p className="text-neutral mb-2">File Name: Company Profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Informasi Hak Cipta"
              centered={false}
            />
            <div className="prose prose-lg">
              <p className="text-neutral mb-6">
                Hak Cipta Copyright © PT AITISERVE DJAYA NARAYA (AITISERVE) 2025. All Rights Reserved.
              </p>
              <h3 className="text-xl font-bold text-primary mb-4">Informasi Kerahasiaan</h3>
              <p className="text-neutral mb-6">
                Seluruh isi dokumen ini dilindungi oleh undang-undang hak cipta. Dilarang menyalin, menyebarkan, atau menggunakan sebagian atau seluruh isi dokumen ini tanpa izin tertulis dari PT AITISERVE DJAYA NARAYA.
              </p>
              <h3 className="text-xl font-bold text-primary mb-4">Kerahasiaan</h3>
              <p className="text-neutral">
                Dokumen ini bersifat rahasia dan hanya ditujukan untuk pihak yang berwenang. Informasi yang terkandung di dalamnya tidak boleh disalin, disebarluaskan, atau diungkapkan kepada pihak ketiga tanpa izin tertulis sebelumnya dari PT AITISERVE DJAYA NARAYA (AITISERVE), atau sesuai dengan ketentuan dalam perjanjian kerahasiaan (NDA) yang berlaku antara PT AITISERVE DJAYA NARAYA dan penerima informasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Daftar Isi"
              centered={false}
            />
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-secondary mr-4">i.</span>
                <span className="text-neutral">Document Information</span>
                <span className="border-b border-dotted border-gray-300 flex-1 mx-4"></span>
                <span className="text-neutral">2</span>
              </div>
              <div className="flex items-center">
                <span className="text-secondary mr-4">ii.</span>
                <span className="text-neutral">Distribution</span>
                <span className="border-b border-dotted border-gray-300 flex-1 mx-4"></span>
                <span className="text-neutral">2</span>
              </div>
              {/* Add more table of contents items */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyProfilePage;