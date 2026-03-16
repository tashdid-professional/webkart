'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

interface PricingTier {
  id: string;
  title: string;
  titleBn: string;
  subtitle: string;
  subtitleBn: string;
  price: string;
  currency: string;
  billing: string;
  billingBn: string;
  features?: string[];
}

const pricingTiers: PricingTier[] = [
  {
    id: 'classic',
    title: 'Standard Commerce',
    titleBn: 'ই-কমার্স ক্লাসিক',
    subtitle: 'Classic theme designed for everyone',
    subtitleBn: 'ছোট ব্যবসার জন্য',
    price: '999',
    currency: 'bdt',
    billing: 'Billed monthly',
    billingBn: 'মাসিক বিল',
  },
  {
    id: 'Desi Commerce',
    title: 'Deshi Commerce',
    titleBn: 'ই-কমার্স দেশী',
    subtitle: 'Bengali theme designed for local businesses',
    subtitleBn: 'ক্রমবর্ধমান ব্যবসার জন্য',
    price: '999',
    currency: 'bdt',
    billing: 'Billed monthly',
    billingBn: 'মাসিক বিল',
  },
  {
    id: 'Premium Commerce',
    title: 'Premium Commerce',
    titleBn: 'ই-কমার্স প্রিমিয়াম',
    subtitle: 'Premium theme designed for niche businesses',
    subtitleBn: 'প্রতিষ্ঠিত ব্যবসার জন্য',
    price: '1199',
    currency: 'bdt',
    billing: 'Billed monthly',
    billingBn: 'মাসিক বিল',
  },
];

export default function Pricing() {
  const { language } = useLanguage();

  return (
    <section id='pricing' className="min-h-screen bg-[#0a0a0a] px-8 md:px-16 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block text-white">
              {language === 'en' ? 'CHOOSE THE WEBSITE' : 'ওয়েবসাইট নির্বাচন করুন'}
            </span>
            <span className="block text-purple-400">
              {language === 'en' ? "THAT'S RIGHT FOR YOU" : 'যা আপনার জন্য সঠিক'}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            {language === 'en'
              ? 'We take care of your web world, so you can focus where it matters – on your business'
              : 'আমরা আপনার ওয়েব জগতের যত্ন নিই, যাতে আপনি গুরুত্বপূর্ণ বিষয়ে মনোনিবেশ করতে পারেন – আপনার ব্যবসায়'}
          </p>
          <p className="text-base md:text-lg text-gray-400 mt-4">
            {language === 'en'
              ? 'Choose from the pricing plans that best suit your business needs.'
              : 'আপনার ব্যবসায়িক চাহিদার সাথে সবচেয়ে উপযুক্ত মূল্য পরিকল্পনা বেছে নিন।'}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.id}
              className="bg-linear-to-br from-gray-900 via-black to-gray-900 border border-white/10  p-8 md:p-10 hover:border-purple-900/50 hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-500 flex flex-col  group relative overflow-hidden"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-900/0 via-purple-900/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Card Header */}
              <div className="text-center mb-8 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {language === 'en' ? tier.title : tier.titleBn}
                </h3>
                <p className="text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {language === 'en' ? tier.subtitle : tier.subtitleBn}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 my-6 group-hover:border-purple-900/30 transition-colors duration-300"></div>

              {/* Pricing */}
              <div className="text-center mb-8 relative z-10">
                <p className="text-sm text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">
                  {language === 'en' ? 'Starting from' : 'শুরু হয়'}
                </p>
                <div className="flex items-start justify-center mb-2">
                  <span className="text-lg font-semibold text-purple-500 mt-2 group-hover:text-purple-400 transition-colors duration-300">{tier.currency}</span>
                  <span className="text-5xl md:text-6xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">{tier.price}</span>
                  <span className="text-lg text-gray-400 mt-4 ml-1 group-hover:text-gray-300 transition-colors duration-300">
                    /{language === 'en' ? 'Month' : 'মাস'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  ({language === 'en' ? tier.billing : tier.billingBn})
                </p>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-purple-900 text-white py-4 px-6 rounded-full text-base md:text-lg font-semibold hover:bg-purple-800 hover:shadow-lg hover:shadow-purple-900/50 transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-auto relative z-10">
                {language === 'en' ? "Let's get started" : 'শুরু করা যাক'}
                <svg
                  className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-purple-900/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm md:text-base">
            {language === 'en'
              ? '🎉 Special offer: Get 2 months free with annual billing'
              : '🎉 বিশেষ অফার: বার্ষিক বিলিংয়ের সাথে 2 মাস বিনামূল্যে পান'}
          </p>
        </div>
      </div>
    </section>
  );
}
