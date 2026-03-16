'use client';

import { useLanguage } from '../contexts/LanguageContext';

interface Feature {
  id: string;
  icon: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
}

const features: Feature[] = [
  {
    id: 'affordable',
    icon: '💰',
    title: 'Budget-Friendly Pricing',
    titleBn: 'সাশ্রয়ী মূল্য',
    description: 'Start your e-commerce journey without breaking the bank. No need to spend ৳20,000+ — get enterprise features at startup prices.',
    descriptionBn: 'ব্যাংক না ভেঙে আপনার ই-কমার্স যাত্রা শুরু করুন। ২০,০০০+ টাকা খরচ করার প্রয়োজন নেই — স্টার্টআপ মূল্যে এন্টারপ্রাইজ বৈশিষ্ট্য পান।',
  },
  {
    id: 'cancellation',
    icon: '🔄',
    title: 'Zero-Risk Cancellation',
    titleBn: 'ঝুঁকিমুক্ত বাতিলকরণ',
    description: 'Business not growing as expected? Cancel anytime with zero penalties. We believe in earning your trust, not locking you in.',
    descriptionBn: 'ব্যবসা প্রত্যাশিত বৃদ্ধি পাচ্ছে না? যেকোনো সময় শূন্য জরিমানা সহ বাতিল করুন। আমরা আপনার বিশ্বাস অর্জনে বিশ্বাস করি।',
  },
  {
    id: 'support',
    icon: '🤝',
    title: 'Dedicated Support Team',
    titleBn: 'নিবেদিত সাপোর্ট টিম',
    description: 'Get friendly, responsive support whenever you need it. Our team is here to ensure your success every step of the way.',
    descriptionBn: 'যখনই প্রয়োজন বন্ধুত্বপূর্ণ, প্রতিক্রিয়াশীল সহায়তা পান। আপনার সাফল্য নিশ্চিত করতে আমাদের টিম এখানে আছে।',
  },
  {
    id: 'analytics',
    icon: '📊',
    title: 'Powerful Analytics Dashboard',
    titleBn: 'শক্তিশালী এনালিটিক্স ড্যাশবোর্ড',
    description: 'Make data-driven decisions with our intuitive analytics. Track sales, customer behavior, and growth metrics in real-time.',
    descriptionBn: 'আমাদের স্বজ্ঞাত বিশ্লেষণের সাথে ডেটা-চালিত সিদ্ধান্ত নিন। রিয়েল-টাইমে বিক্রয়, গ্রাহক আচরণ এবং বৃদ্ধি ট্র্যাক করুন।',
  },
  {
    id: 'admin',
    icon: '⚙️',
    title: 'Intuitive Admin Panel',
    titleBn: 'সহজ অ্যাডমিন প্যানেল',
    description: 'Manage your entire store effortlessly. User-friendly interface designed for entrepreneurs, not tech experts.',
    descriptionBn: 'সহজেই আপনার সম্পূর্ণ স্টোর পরিচালনা করুন। উদ্যোক্তাদের জন্য ডিজাইন করা ব্যবহারকারী-বান্ধব ইন্টারফেস।',
  },
  {
    id: 'products',
    icon: '📦',
    title: 'Up to 500 Products',
    titleBn: '৫০০টি পর্যন্ত পণ্য',
    description: 'Scale your inventory without limits. List up to 500 products with unlimited variations and categories.',
    descriptionBn: 'সীমা ছাড়া আপনার ইনভেন্টরি স্কেল করুন। সীমাহীন বৈচিত্র্য এবং বিভাগ সহ ৫০০টি পর্যন্ত পণ্য তালিকাভুক্ত করুন।',
  },
  {
    id: 'seo',
    icon: '🚀',
    title: 'SEO-Optimized',
    titleBn: 'এসইও-অপ্টিমাইজড',
    description: 'Get discovered on Google. Built-in SEO best practices to boost your visibility and drive organic traffic.',
    descriptionBn: 'গুগলে আবিষ্কৃত হন। আপনার দৃশ্যমানতা বাড়াতে এবং জৈব ট্রাফিক চালাতে বিল্ট-ইন এসইও সেরা অনুশীলন।',
  },
  {
    id: 'nextjs',
    icon: '⚡',
    title: 'Lightning-Fast Performance',
    titleBn: 'বিদ্যুৎ-দ্রুত পারফরম্যান্স',
    description: 'Powered by Next.js 15 — the latest technology for blazing-fast load times and seamless user experience.',
    descriptionBn: 'Next.js 15 দ্বারা চালিত — জ্বলন্ত-দ্রুত লোড সময় এবং নিরবচ্ছিন্ন ব্যবহারকারী অভিজ্ঞতার জন্য সর্বশেষ প্রযুক্তি।',
  },
  {
    id: 'responsive',
    icon: '📱',
    title: 'Mobile-First Design',
    titleBn: 'মোবাইল-প্রথম ডিজাইন',
    description: 'Perfect experience on every device. Your customers can shop seamlessly whether on mobile, tablet, or desktop.',
    descriptionBn: 'প্রতিটি ডিভাইসে নিখুঁত অভিজ্ঞতা। আপনার গ্রাহকরা মোবাইল, ট্যাবলেট বা ডেস্কটপে নিরবচ্ছিন্নভাবে কেনাকাটা করতে পারবেন।',
  },
];

export default function WhyChooseUs() {
  const { language } = useLanguage();

  return (
    <section id="why-choose-us" className="min-h-screen bg-[#0a0a0a] text-white px-8 md:px-16 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="text-sm font-medium tracking-[0.3em] mb-4 text-gray-400">
            {language === 'en' ? 'WHY CHOOSE US' : 'কেন আমাদের বেছে নেবেন'}
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block text-white">
              {language === 'en' ? 'Built For Startups,' : 'স্টার্টআপদের জন্য তৈরি,'}
            </span>
            <span className="block text-purple-400">
              {language === 'en' ? 'Designed For Success' : 'সাফল্যের জন্য ডিজাইন করা'}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Everything you need to launch and grow your e-commerce business — without the complexity or the hefty price tag.'
              : 'আপনার ই-কমার্স ব্যবসা শুরু এবং বৃদ্ধি করার জন্য আপনার যা প্রয়োজন — জটিলতা বা ভারী মূল্য ট্যাগ ছাড়াই।'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-500 group"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {language === 'en' ? feature.title : feature.titleBn}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {language === 'en' ? feature.description : feature.descriptionBn}
              </p>

              {/* Bottom Accent Line */}
              <div className="mt-6 h-1 w-0 bg-linear-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6 text-lg">
            {language === 'en'
              ? 'Ready to transform your business idea into reality?'
              : 'আপনার ব্যবসায়িক ধারণাকে বাস্তবে রূপান্তরিত করতে প্রস্তুত?'}
          </p>
          <button className="px-12 py-5 bg-purple-900 text-white rounded-full text-base font-medium hover:bg-purple-800 hover:shadow-lg hover:shadow-purple-900/50 transition-all duration-300 inline-flex items-center gap-3 group">
            {language === 'en' ? 'Start Your Journey Today' : 'আজই আপনার যাত্রা শুরু করুন'}
            <span className="w-2 h-2 bg-white rounded-full group-hover:translate-x-1 transition-transform"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
