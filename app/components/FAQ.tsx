'use client';

import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FaqItem {
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'How quickly can my store go live?',
    questionBn: 'আমার স্টোর কত দ্রুত লাইভ হবে?',
    answer: 'Most stores are ready within 5-10 working days depending on your content and requirements.',
    answerBn: 'আপনার কনটেন্ট ও প্রয়োজন অনুযায়ী বেশিরভাগ স্টোর ৫-১০ কার্যদিবসের মধ্যে লাইভ করা যায়।',
  },
  {
    question: 'Can I manage products and orders myself?',
    questionBn: 'আমি কি নিজেই প্রোডাক্ট ও অর্ডার ম্যানেজ করতে পারব?',
    answer: 'Yes. You get a simple admin dashboard where you can manage products, inventory, and orders anytime.',
    answerBn: 'হ্যাঁ। আপনি একটি সহজ অ্যাডমিন ড্যাশবোর্ড পাবেন, যেখানে যেকোনো সময় প্রোডাক্ট, ইনভেন্টরি ও অর্ডার ম্যানেজ করতে পারবেন।',
  },
  {
    question: 'Do you provide support after launch?',
    questionBn: 'লঞ্চের পরে কি আপনারা সাপোর্ট দেন?',
    answer: 'Absolutely. All plans include post-launch support for fixes, guidance, and basic updates.',
    answerBn: 'অবশ্যই। সব প্ল্যানে লঞ্চ-পরবর্তী ফিক্স, গাইডলাইন এবং বেসিক আপডেটের সাপোর্ট রয়েছে।',
  },
  {
    question: 'Can I upgrade my plan later?',
    questionBn: 'পরে কি আমি প্ল্যান আপগ্রেড করতে পারব?',
    answer: 'Yes, you can upgrade anytime as your business grows without rebuilding your whole website.',
    answerBn: 'হ্যাঁ, আপনার ব্যবসা বাড়ার সাথে সাথে যেকোনো সময় পুরো ওয়েবসাইট নতুন করে না বানিয়েই প্ল্যান আপগ্রেড করতে পারবেন।',
  },
];

export default function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section id="faq" className="bg-[#0a0a0a] text-white px-6 md:px-16 py-24 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header — split layout */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="lg:max-w-xl">
            <p className="text-xs font-semibold tracking-[0.35em] text-purple-400 mb-5 uppercase">
              {language === 'en' ? 'Questions & Answers' : 'প্রশ্ন ও উত্তর'}
            </p>
            <h2 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              {language === 'en' ? (
                <>Frequently<br />Asked Questions</>
              ) : (
                'প্রায় জিজ্ঞাসিত প্রশ্ন'
              )}
            </h2>
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed lg:max-w-sm lg:text-right">
            {language === 'en'
              ? 'Everything you need to know before launching your store with WebKart.'
              : 'WebKart দিয়ে শুরু করার আগে যা জানা প্রয়োজন।'}
          </p>
        </div>

        {/* Accordion items */}
        <div className="divide-y divide-white/10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const num = String(index + 1).padStart(2, '0');

            return (
              <div key={item.question} className="group">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full py-7 md:py-8 flex items-start gap-6 md:gap-10 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  {/* Number */}
                  <span
                    className={`shrink-0 text-sm font-mono font-semibold mt-1 transition-colors duration-300 ${
                      isOpen ? 'text-purple-400' : 'text-white/25 group-hover:text-white/40'
                    }`}
                  >
                    {num}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 text-lg md:text-xl font-semibold leading-snug transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'
                    }`}
                  >
                    {language === 'en' ? item.question : item.questionBn}
                  </span>

                  {/* Chevron */}
                  <span
                    className={`shrink-0 mt-1 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'border-purple-500 bg-purple-500/15 text-purple-400 rotate-180'
                        : 'border-white/15 bg-white/5 text-white/50 group-hover:border-white/30 group-hover:text-white/80'
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-[3.25rem] md:pl-[5rem] pb-8">
                    <div className="border-l-2 border-purple-500/40 pl-5">
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        {language === 'en' ? item.answer : item.answerBn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-base text-center sm:text-left">
            {language === 'en' ? "Still have questions? We're happy to help." : 'আরও প্রশ্ন আছে? আমরা সাহায্য করতে সদা প্রস্তুত।'}
          </p>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-400 text-black text-sm font-bold tracking-wide transition-colors duration-200"
          >
            {language === 'en' ? 'Contact Us' : 'যোগাযোগ করুন'}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
