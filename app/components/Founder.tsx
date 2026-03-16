'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';
import Image from 'next/image';

export default function Founder() {
  const { language } = useLanguage();

  return (
    <section id="founder" className="bg-[#0a0a0a] text-white px-4 sm:px-8 md:px-16 py-16 md:py-24 relative overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gray-800/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-10 md:mb-16 text-center">
          <p className="text-xs sm:text-sm font-medium tracking-[0.3em] mb-4 text-gray-400">
            {getTranslation(language, 'founder.sectionTitle')}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {getTranslation(language, 'founder.heading')}
          </h2>
        </div>

        {/* Founder Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start lg:items-center">
          {/* Left Side - Image */}
          <div className="relative group">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-linear-to-br from-gray-700 via-gray-800 to-gray-900 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-all duration-500 bg-linear-to-br from-gray-800 to-gray-900">
                <Image
                  src="/founder-tashdid.jpg"
                  alt="Tashdid - Founder of WebKart"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
                  <p className="text-sm font-medium">Founder & CEO</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-white/10 rounded-3xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-white/10 rounded-3xl -z-10"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Name & Title */}
            <div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4">
                {getTranslation(language, 'founder.name')}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light tracking-wide">
                {getTranslation(language, 'founder.role')}
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                {getTranslation(language, 'founder.bio1')}
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-300">
                {getTranslation(language, 'founder.bio2')}
              </p>
            </div>

            {/* Education & Expertise */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🎓</span>
                  <h4 className="font-semibold text-lg">{getTranslation(language, 'founder.educationTitle')}</h4>
                </div>
                <p className="text-gray-400 text-sm">{getTranslation(language, 'founder.education')}</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">💻</span>
                  <h4 className="font-semibold text-lg">{getTranslation(language, 'founder.passionTitle')}</h4>
                </div>
                <p className="text-gray-400 text-sm">{getTranslation(language, 'founder.passion')}</p>
              </div>
            </div>

            {/* Social Links / CTA */}
            <div className="flex flex-wrap gap-3 md:gap-4 pt-4 md:pt-6">
              <button className="px-6 sm:px-8 py-3 md:py-4 bg-white text-black rounded-full text-sm md:text-base font-medium hover:bg-gray-200 transition flex items-center gap-3 group">
                {getTranslation(language, 'founder.connectCta')}
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button className="px-6 sm:px-8 py-3 md:py-4 border border-white/20 rounded-full text-sm md:text-base font-medium hover:bg-white/5 transition flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </button>
            </div>

            {/* Quote */}
            <div className="border-l-4 border-white/20 pl-6 py-4 mt-8">
              <p className="text-base md:text-xl italic text-gray-300">
                "{getTranslation(language, 'founder.quote')}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

