'use client';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-10 md:py-16 w-full">
      {/* Large WEBKART Text */}
      <div className="w-full overflow-hidden">
        <h2 className="text-[18.25vw] font-bold leading-none text-center m-0 p-0 whitespace-nowrap">
          WEBKART
        </h2>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Facebook
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Instagram
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Twitter
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:contact@webkart.com"
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          Email
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 md:mt-8">
        <p className="text-xs text-gray-500">
          © 2026 WebKart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

