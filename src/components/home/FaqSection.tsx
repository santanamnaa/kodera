import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({
  faqs,
  title = 'FAQ',
  subtitle = 'Commonly asked questions',
}) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="uppercase text-white text-sm font-light block mb-2">{title}</span>
          <h2 className="text-3xl md:text-5xl font-light text-white">{subtitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/20 pb-8">
              <div
                className="flex items-start justify-between cursor-pointer"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <h3 className="text-lg md:text-xl font-light text-white mb-2">
                  {faq.question}
                </h3>
                <motion.button
                  aria-label={open === idx ? 'Close' : 'Open'}
                  className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white focus:outline-none"
                  animate={{ rotate: open === idx ? 45 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className="text-2xl select-none">+</span>
                </motion.button>
              </div>
              <AnimatePresence initial={false}>
                {open === idx && faq.answer && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-2">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 