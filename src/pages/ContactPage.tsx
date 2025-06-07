import React, { useState, useEffect } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';

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
    document.title = 'Contact Us - AITISERVE DJAYA NARAYA';
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
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="min-h-[60px] md:min-h-[100px] bg-black" />

      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          title="Contact Us"
          subtitle="Get in touch with us"
          titleClassName="text-white"
          subtitleClassName="text-gray-300"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-2xl md:text-3xl tracking-tight leading-snug font-semibold text-gray-800 mb-6">Get in Touch</h3>
            <div className="space-y-6 gap-4 flex flex-col">
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-10 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600 text-sm">Jl. Asia Afrika No. 8, Bandung, Indonesia</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-10 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600 text-sm">info@aitiserve.co.id</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-10 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600 text-sm">+62 812-3456-7890</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mt-8 h-64 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7526172751036!2d107.610008!3d-6.918055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64ef9f1222b%3A0xa92c09e2df64cb2a!2sAsia%20Afrika%2C%20Bandung!5e0!3m2!1sen!2sid!4v1717143200000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                className="rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-2xl md:text-3xl tracking-tight leading-snug font-semibold text-gray-800 mb-6">Send Message</h3>
            {isSuccess && (
              <div className="bg-green-50 text-green-800 p-4 rounded-xl mb-6">
                Success message
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full py-2.5 px-4 bg-gray-50 placeholder:text-gray-400 hover:border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus-visible:outline-none border border-gray-200 rounded-lg outline-none transition-all ${errors.name ? 'border-red-600' : ''}`}
                    placeholder="Name"
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
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">Email is required</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full py-2.5 px-4 bg-gray-50 placeholder:text-gray-400 hover:border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus-visible:outline-none border border-gray-200 rounded-lg outline-none transition-all"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-800 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full py-2.5 px-4 bg-gray-50 placeholder:text-gray-400 hover:border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus-visible:outline-none border border-gray-200 rounded-lg outline-none transition-all"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full py-2.5 px-4 bg-gray-50 placeholder:text-gray-400 hover:border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus-visible:outline-none border border-gray-200 rounded-lg outline-none transition-all ${errors.message ? 'border-red-600' : ''}`}
                  placeholder="Message"
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
                    Send
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
