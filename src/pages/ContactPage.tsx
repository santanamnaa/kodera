import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader title={t('contact.title')} subtitle={t('contact.subtitle')} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">{t('contactPage.getInTouchTitle')}</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-10 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">{t('contact.address')}</h4>
                  <p className="text-neutral">Jl. Asia Afrika No. 8, Bandung, Indonesia</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-10 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">{t('contact.email_label')}</h4>
                  <p className="text-neutral">info@aitiserve.co.id</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-10 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">{t('contact.phone_label')}</h4>
                  <p className="text-neutral">+62 812-3456-7890</p>
                </div>
              </div>
            </div>
            <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7526172751036!2d107.610008!3d-6.918055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64ef9f1222b%3A0xa92c09e2df64cb2a!2sAsia%20Afrika%2C%20Bandung!5e0!3m2!1sen!2sid!4v1717143200000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">{t('contactPage.sendMessageTitle')}</h3>
            {isSuccess && (
              <div className="bg-success bg-opacity-10 text-success p-4 rounded-lg mb-6">
                {t('contactPage.successMessage')}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-1">
                    {t('contact.name')} <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all ${errors.name ? 'border-error' : 'border-gray-300'}`}
                    placeholder={t('contact.name')}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error">{t('contactPage.validation.nameRequired')}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">
                    {t('contact.email')} <span className="text-error">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all ${errors.email ? 'border-error' : 'border-gray-300'}`}
                    placeholder={t('contact.email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error">{t(errors.email === 'Email is required' ? 'contactPage.validation.emailRequired' : 'contactPage.validation.emailInvalid')}</p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-1">
                    {t('contact.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    placeholder={t('contact.phone')}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-1">
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    placeholder={t('contact.subject')}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">
                  {t('contact.message')} <span className="text-error">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all ${errors.message ? 'border-error' : 'border-gray-300'}`}
                  placeholder={t('contact.message')}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-error">{t('contactPage.validation.messageRequired')}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary px-8 py-3 flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    {t('contactPage.sendingButtonText')}
                  </>
                ) : (
                  <>
                    {t('contact.send')}
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
