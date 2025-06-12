import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import FaqSection from '../components/home/FaqSection';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.title = 'Hubungi Kami - Kodera';
  }, []);

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const mailtoLink = `mailto:santanamnaa.dev@gmail.com?subject=${encodeURIComponent(formData.subject || 'Pesan dari Website Kodera')}&body=${encodeURIComponent(
        `Nama: ${formData.name}\nEmail: ${formData.email}\nTelepon: ${formData.phone}\n\nPesan:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    }
  };

const contactFaqs = [
  {
    question: 'Bagaimana cara menghubungi tim Kodera?',
    answer: 'Anda dapat menghubungi kami melalui formulir kontak di halaman ini atau melalui email resmi yang tersedia.'
  },
  {
    question: 'Kapan saya akan menerima balasan?',
    answer: 'Kami berusaha merespons setiap pesan dalam waktu 1–2 hari kerja.'
  },
  {
    question: 'Apakah Kodera memiliki kantor fisik?',
    answer: 'Saat ini Kodera beroperasi secara remote. Pertemuan tatap muka dapat dijadwalkan dengan kesepakatan terlebih dahulu.'
  },
  {
    question: 'Apakah saya bisa berkonsultasi sebelum memulai proyek?',
    answer: 'Tentu. Kami menyediakan sesi konsultasi awal secara gratis untuk memahami kebutuhan Anda sebelum proyek dimulai.'
  },
];

  return (
    <>
      <section className="py-12 md:py-16 bg-black">
        <div className="min-h-[60px] md:min-h-[100px] bg-black" />

        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            title="Hubungi Kami"
            subtitle="Kami siap mendampingi Anda membangun website yang profesional"
            titleClassName="text-white"
            subtitleClassName="text-gray-300"
          />
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-2xl md:text-3xl tracking-tight leading-snug font-semibold text-gray-800 mb-6">Send Message</h3>
                {isSuccess && (
                  <div className="bg-green-50 text-green-800 p-4 rounded-xl mb-6">
                    Pesan Anda berhasil dikirim. Kami akan segera menghubungi Anda.
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                        Nama <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full py-2.5 px-4 bg-gray-50 placeholder:text-gray-400 hover:border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus-visible:outline-none border border-gray-200 rounded-lg outline-none transition-all ${errors.name ? 'border-red-600' : ''}`}
                        placeholder="Nama lengkap"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">Name is required</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full py-2.5 px-4 bg-gray-50 placeholder:text-gray-400 hover:border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus-visible:outline-none border border-gray-200 rounded-lg outline-none transition-all ${errors.email ? 'border-red-600' : ''}`}
                        placeholder="Alamat email"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">Email is required</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">
                        Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full py-2.5 px-4 bg-gray-50 placeholder:text-gray-400 hover:border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus-visible:outline-none border border-gray-200 rounded-lg outline-none transition-all"
                        placeholder="Nomor telepon"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-800 mb-1">
                        Subjek
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full py-2.5 px-4 bg-gray-50 placeholder:text-gray-400 hover:border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus-visible:outline-none border border-gray-200 rounded-lg outline-none transition-all"
                        placeholder="Subjek pesan"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                      Pesan <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full py-2.5 px-4 bg-gray-50 placeholder:text-gray-400 hover:border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus-visible:outline-none border border-gray-200 rounded-lg outline-none transition-all ${errors.message ? 'border-red-600' : ''}`}
                      placeholder="Tulis pesan Anda di sini"
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">Message is required</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label="Send message"
                    className="inline-flex items-center bg-primary text-white font-medium px-6 py-3 rounded-lg hover:opacity-80 transition duration-300 ease-in-out shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FaqSection faqs={contactFaqs} title="TANYA JAWAB KONTAK" subtitle="Pertanyaan umum terkait komunikasi dengan tim Kodera" />
    </>
  );
};

export default ContactPage;
