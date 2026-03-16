'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div id="home" className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Main Content */}
      <main className="relative min-h-screen flex items-center px-16 py-24">
        {/* Left Content */}
        <div className="w-1/2 pr-12 z-10">
          <div className="mb-16">
            <h1 className="text-[140px] leading-none font-bold tracking-tight">
              WebKart<sup className="text-6xl">®</sup>
            </h1>
            <p className="text-base font-medium tracking-[0.3em] mt-4 ml-2">
              E-COMMERCE SOLUTION
            </p>
          </div>
          
          <div className="max-w-lg mb-16">
            <p className="text-lg leading-relaxed opacity-90">
              <span className="text-2xl">/</span> Empowering Bangladesh's startups with affordable e-commerce solutions. World-class technology, flexible plans, and zero-risk subscriptions—because your success shouldn't be limited by budget.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="px-10 py-4 bg-white text-black rounded-full text-base font-medium hover:bg-gray-200 transition flex items-center gap-3">
              View Our Works
              <span className="w-2 h-2 bg-black rounded-full"></span>
            </button>
            <button className="px-10 py-4 border border-white/20 rounded-full text-base font-medium hover:bg-white/5 transition flex items-center gap-3">
              Connect Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="w-1/2  z-10 flex items-center justify-end ">
          <div className="relative w-135 h-135 rotate-90 mt-16 ">
            <Image
              src="/hero.jpg"
              alt="Hero visual"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* 3D Flowing Element */}
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-150 h-150 z-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-linear-to-br from-gray-700 via-gray-800 to-black rounded-[40%] blur-2xl opacity-80 animate-blob"></div>
            <div className="absolute inset-0 bg-linear-to-tr from-gray-600 via-gray-700 to-gray-900 rounded-[45%] blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute inset-0 bg-linear-to-bl from-gray-800 via-gray-900 to-black rounded-[50%] blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
          </div>
        </div>

      

        {/* Scroll Down Text */}
        <div className="fixed right-12 top-1/2 -translate-y-1/2 z-50">
          <div className="writing-mode-vertical text-sm tracking-widest opacity-60">
            Scroll down
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9) rotate(240deg);
          }
        }
        
        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
