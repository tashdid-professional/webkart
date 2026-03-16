export interface Testimonial {
  id: number;
  name: string;
  nameBn: string;
  position: string;
  positionBn: string;
  testimonial: string;
  testimonialBn: string;
  rating: number;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Arif Rahman',
    nameBn: 'আরিফ রহমান',
    position: 'Founder, Fashion BD',
    positionBn: 'প্রতিষ্ঠাতা, ফ্যাশন বিডি',
    testimonial: 'WebKart transformed our small clothing business into a thriving online store. The affordable pricing and excellent support made it possible for us to compete with bigger brands.',
    testimonialBn: 'WebKart আমাদের ছোট পোশাক ব্যবসাকে একটি সমৃদ্ধশালী অনলাইন স্টোরে রূপান্তরিত করেছে। সাশ্রয়ী মূল্য এবং চমৎকার সাপোর্ট আমাদের বড় ব্র্যান্ডের সাথে প্রতিযোগিতা করতে সক্ষম করেছে।',
    rating: 5,
    avatar: '👔',
  },
  {
    id: 2,
    name: 'Nusrat Jahan',
    nameBn: 'নুসরাত জাহান',
    position: 'CEO, Organic Bazar',
    positionBn: 'সিইও, অর্গানিক বাজার',
    testimonial: 'The flexible subscription model is a game-changer. We started small and scaled up as our business grew. No long-term commitment pressure, just pure value!',
    testimonialBn: 'নমনীয় সাবস্ক্রিপশন মডেল একটি গেম-চেঞ্জার। আমরা ছোট শুরু করেছি এবং আমাদের ব্যবসা বাড়ার সাথে সাথে স্কেল আপ করেছি। কোনো দীর্ঘমেয়াদী প্রতিশ্রুতির চাপ নেই, শুধু খাঁটি মূল্য!',
    rating: 5,
    avatar: '🌱',
  },
  {
    id: 3,
    name: 'Kamal Hossain',
    nameBn: 'কামাল হোসেন',
    position: 'Owner, Tech Gadgets Hub',
    positionBn: 'মালিক, টেক গ্যাজেট হাব',
    testimonial: 'Best investment for our startup! The platform is intuitive, fast, and the zero-risk policy gave us confidence to launch without fear. Highly recommended!',
    testimonialBn: 'আমাদের স্টার্টআপের জন্য সেরা বিনিয়োগ! প্ল্যাটফর্মটি স্বজ্ঞাত, দ্রুত, এবং শূন্য-ঝুঁকি নীতি আমাদের ভয় ছাড়াই লঞ্চ করার আত্মবিশ্বাস দিয়েছে। অত্যন্ত সুপারিশকৃত!',
    rating: 5,
    avatar: '📱',
  },
  {
    id: 4,
    name: 'Fatema Begum',
    nameBn: 'ফাতেমা বেগম',
    position: 'Managing Director, Home Decor Plus',
    positionBn: 'ব্যবস্থাপনা পরিচালক, হোম ডেকোর প্লাস',
    testimonial: 'Outstanding service and amazing features! Within just 2 months, we tripled our online sales. The dashboard is so easy to use, even for non-tech people like me.',
    testimonialBn: 'অসাধারণ সেবা এবং আশ্চর্যজনক বৈশিষ্ট্য! মাত্র ২ মাসের মধ্যে, আমরা আমাদের অনলাইন বিক্রয় তিনগুণ করেছি। ড্যাশবোর্ড ব্যবহার করা এত সহজ, এমনকি আমার মতো নন-টেক মানুষের জন্যও।',
    rating: 5,
    avatar: '🏠',
  },
  {
    id: 5,
    name: 'Rahim Ahmed',
    nameBn: 'রহিম আহমেদ',
    position: 'Director, Books World BD',
    positionBn: 'পরিচালক, বুকস ওয়ার্ল্ড বিডি',
    testimonial: 'WebKart made our transition from physical to online seamless. The inventory management system is top-notch, and customer payment integration is flawless.',
    testimonialBn: 'WebKart আমাদের ফিজিক্যাল থেকে অনলাইনে রূপান্তরকে নির্বিঘ্ন করেছে। ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম শীর্ষ-মানের, এবং কাস্টমার পেমেন্ট ইন্টিগ্রেশন নিখুঁত।',
    rating: 5,
    avatar: '📚',
  },
  {
    id: 6,
    name: 'Sadia Islam',
    nameBn: 'সাদিয়া ইসলাম',
    position: 'Founder, Beauty Essentials',
    positionBn: 'প্রতিষ্ঠাতা, বিউটি এসেনশিয়ালস',
    testimonial: 'Love the 24/7 support team! They helped us customize everything perfectly. Our customers love the smooth checkout experience. Worth every penny!',
    testimonialBn: '২৪/৭ সাপোর্ট টিম পছন্দ করি! তারা আমাদের সবকিছু নিখুঁতভাবে কাস্টমাইজ করতে সাহায্য করেছে। আমাদের গ্রাহকরা মসৃণ চেকআউট অভিজ্ঞতা পছন্দ করে। প্রতিটি পয়সার মূল্য!',
    rating: 5,
    avatar: '💄',
  },
  {
    id: 7,
    name: 'Tanvir Hassan',
    nameBn: 'তানভীর হাসান',
    position: 'Co-Founder, Sports Arena',
    positionBn: 'সহ-প্রতিষ্ঠাতা, স্পোর্টস এরিনা',
    testimonial: 'The analytics dashboard gives us insights we never had before. Understanding customer behavior helped us increase conversions by 40%. Simply amazing!',
    testimonialBn: 'অ্যানালিটিক্স ড্যাশবোর্ড আমাদের এমন অন্তর্দৃষ্টি দেয় যা আমরা আগে কখনো পাইনি। গ্রাহক আচরণ বোঝা আমাদের রূপান্তর ৪০% বৃদ্ধি করতে সাহায্য করেছে। সত্যিই আশ্চর্যজনক!',
    rating: 5,
    avatar: '⚽',
  },
  {
    id: 8,
    name: 'Ayesha Siddique',
    nameBn: 'আয়েশা সিদ্দিকী',
    position: 'Owner, Jewelry Collection',
    positionBn: 'মালিক, জুয়েলারি কালেকশন',
    testimonial: 'Security features are excellent! Our customers feel safe shopping with us. The mobile-responsive design means we get orders from anywhere, anytime.',
    testimonialBn: 'নিরাপত্তা বৈশিষ্ট্য চমৎকার! আমাদের গ্রাহকরা আমাদের সাথে কেনাকাটা করতে নিরাপদ বোধ করে। মোবাইল-রেসপন্সিভ ডিজাইন মানে আমরা যেকোনো জায়গা থেকে, যেকোনো সময় অর্ডার পাই।',
    rating: 5,
    avatar: '💎',
  },
  {
    id: 9,
    name: 'Mahbub Rahman',
    nameBn: 'মাহবুব রহমান',
    position: 'CEO, Electronics Hub',
    positionBn: 'সিইও, ইলেকট্রনিক্স হাব',
    testimonial: 'Integration with local payment gateways was seamless. bKash, Nagad, everything works perfectly. This is exactly what Bangladeshi businesses need!',
    testimonialBn: 'স্থানীয় পেমেন্ট গেটওয়ে-র সাথে ইন্টিগ্রেশন নির্বিঘ্ন ছিল। বিকাশ, নগদ, সবকিছু নিখুঁতভাবে কাজ করে। এটি ঠিক যা বাংলাদেশী ব্যবসার প্রয়োজন!',
    rating: 5,
    avatar: '🔌',
  },
];
