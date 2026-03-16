'use client';

export default function AboutUs() {
  const stats = [
    { value: '100+', label: 'Startups Empowered' },
    { value: '24/7', label: 'Support Available' },
    { value: '0%', label: 'Cancellation Fees' },
  ];

  const pillars = [
    {
      num: '01',
      title: 'Our Vision',
      body: 'We envision a future where every startup in Bangladesh has access to world-class e-commerce solutions without breaking the bank. Your success shouldn\'t be limited by budget constraints.',
    },
    {
      num: '02',
      title: 'Our Mission',
      body: 'Empowering entrepreneurs with affordable, cutting-edge technology. Whether you\'re just starting or scaling up, WebKart provides enterprise-grade solutions at startup-friendly prices.',
    },
    {
      num: '03',
      title: 'Our Promise',
      body: 'No lock-ins. No hidden fees. Just transparent pricing, zero-risk subscriptions, and a team that genuinely cares about your growth — every step of the way.',
    },
  ];

  return (
    <section id="about" className="bg-[#0a0a0a] text-white px-6 md:px-16 py-24 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-800/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-20 pb-10 md:pb-12 border-b border-white/10">
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] text-purple-400 mb-5 uppercase">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Bangladesh's Most<br />
              <span className="text-purple-400">Affordable</span> E-Commerce
            </h2>
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed lg:max-w-xs lg:text-right">
            Built for local startups. Powered by world-class technology. Priced for real people.
          </p>
        </div>

        {/* Main content: pillars left, features right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

          {/* Left — numbered pillars */}
          <div className="space-y-0 divide-y divide-white/10">
            {pillars.map((p) => (
              <div key={p.num} className="group flex gap-6 py-8 hover:bg-white/[0.02] transition-colors duration-300 -mx-4 px-4 rounded-xl">
                <span className="shrink-0 text-sm font-mono font-semibold text-purple-400/60 group-hover:text-purple-400 mt-1 transition-colors duration-300">
                  {p.num}
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-100 transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors duration-300">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — feature highlights */}
          <div className="space-y-4">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                ),
                title: 'Launch in Days, Not Months',
                body: 'Your store goes live in 5–10 working days. Skip the lengthy development cycles and start selling faster.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                title: 'Zero-Risk Subscription',
                body: 'Cancel anytime with no penalties. We earn your loyalty by delivering results, not through contracts.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                ),
                title: 'Scales With Your Growth',
                body: 'Upgrade your plan at any time without rebuilding anything. From launch to enterprise, we grow with you.',
              },
            ].map((feat) => (
              <div
                key={feat.title}
                className="group flex gap-5 p-6 border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-purple-500/30 transition-all duration-400 rounded-2xl"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors duration-300">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1.5 group-hover:text-purple-100 transition-colors duration-300">
                    {feat.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feat.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="border border-white/10 bg-white/[0.03] rounded-2xl grid grid-cols-3 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 text-center group hover:bg-white/[0.03] transition-colors duration-300">
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-purple-400 mb-1.5 sm:mb-2 md:mb-3 group-hover:scale-105 transition-transform duration-300 inline-block">
                {s.value}
              </div>
              <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10">
          <p className="text-gray-400 text-base">
            Ready to launch your store and grow your business?
          </p>
          <a
            href="#pricing"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold tracking-wide transition-colors duration-200 rounded-full"
          >
            View Pricing Plans
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

