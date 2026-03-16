'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';
import { testimonialsData } from '../data/testimonials';

export default function Testimonials() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsToShow = 3;
  const totalItems = testimonialsData.length;
  const maxIndex = Math.max(0, totalItems - itemsToShow);

  // Auto-slide functionality - moves one testimonial at a time
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex((prev) => {
          const next = prev + 1;
          return next > maxIndex ? 0 : next;
        });
        setTimeout(() => setIsAnimating(false), 600);
      }
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(timer);
  }, [isAnimating, maxIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      const next = prev + 1;
      return next > maxIndex ? 0 : next;
    });
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      const next = prev - 1;
      return next < 0 ? maxIndex : next;
    });
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <section id="testimonials" className="min-h-screen bg-[#0a0a0a] text-white px-16 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="text-sm font-medium tracking-[0.3em] mb-4 text-gray-400">
            {getTranslation(language, 'testimonials.sectionTitle')}
          </p>
          <h2 className="text-7xl font-bold leading-tight">
            {getTranslation(language, 'testimonials.heading')}
          </h2>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            {getTranslation(language, 'testimonials.subheading')}
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Previous testimonials"
          >
            <svg
              className="w-6 h-6 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            aria-label="Next testimonials"
          >
            <svg
              className="w-6 h-6 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Slider with One-by-One Animation */}
          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-600 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * (calc((100% - 4rem) / 3) + 2rem)))`,
              }}
            >
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group shrink-0"
                  style={{
                    width: 'calc((100% - 4rem) / 3)',
                  }}
                >
                  {/* Stars Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-base leading-relaxed text-gray-300 mb-8 group-hover:text-white transition-colors duration-300 min-h-30">
                    "{language === 'en' ? testimonial.testimonial : testimonial.testimonialBn}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-14 h-14 rounded-full bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        {language === 'en' ? testimonial.name : testimonial.nameBn}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {language === 'en' ? testimonial.position : testimonial.positionBn}
                      </p>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <svg
                      className="w-12 h-12"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 bg-white'
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-white text-black rounded-full text-base font-medium hover:bg-gray-200 transition inline-flex items-center gap-3 group">
            {getTranslation(language, 'testimonials.cta')}
            <span className="w-2 h-2 bg-black rounded-full group-hover:translate-x-1 transition-transform"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
