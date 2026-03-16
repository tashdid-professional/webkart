'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-5 md:py-8 flex items-center justify-between">
      <div className="text-xl md:text-2xl font-semibold">
        WEBKART<sup className="text-sm">°</sup>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition">
          Studio
        </a>
        <a href="#pricing" className="text-sm font-medium hover:text-gray-300 transition">
          Pricing
        </a>
        <a href="#" className="text-sm font-medium hover:text-gray-300 transition flex items-center gap-2">
          Project <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">02</span>
        </a>
       
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Language Switcher */}
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 transition"
          title="Switch Language"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M1 8H15M8 1C9.5 3 10 5.5 10 8C10 10.5 9.5 13 8 15C6.5 13 6 10.5 6 8C6 5.5 6.5 3 8 1Z" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span>{language === 'en' ? 'EN' : 'বাং'}</span>
        </button>
        
        <button className="flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition">
          Menu
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="1.5" fill="currentColor"/>
            <circle cx="14" cy="5" r="1.5" fill="currentColor"/>
            <circle cx="5" cy="10" r="1.5" fill="currentColor"/>
            <circle cx="14" cy="10" r="1.5" fill="currentColor"/>
            <circle cx="5" cy="15" r="1.5" fill="currentColor"/>
            <circle cx="14" cy="15" r="1.5" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}

