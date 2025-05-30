import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
}

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: t('testimonials.item.1.name'),
      position: t('testimonials.item.1.position'),
      company: t('testimonials.item.1.company'),
      image: '/images/imagehere.png',
      content: t('testimonials.item.1.content'),
    },
    {
      id: 2,
      name: t('testimonials.item.2.name'),
      position: t('testimonials.item.2.position'),
      company: t('testimonials.item.2.company'),
      image: '/images/imagehere.png',
      content: t('testimonials.item.2.content'),
    },
    {
      id: 3,
      name: t('testimonials.item.3.name'),
      position: t('testimonials.item.3.position'),
      company: t('testimonials.item.3.company'),
      image: '/images/imagehere.png',
      content: t('testimonials.item.3.content'),
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title={t('testimonials.title')} 
          subtitle={t('testimonials.subtitle')} 
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-primary hover:text-secondary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-primary hover:text-secondary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Slider */}
          <div ref={sliderRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <Quote className="w-10 h-10 text-secondary opacity-20 mb-4" />
                    <p className="text-neutral-dark mb-6">{testimonial.content}</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-primary">{testimonial.name}</h4>
                        <p className="text-neutral text-sm">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-secondary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
