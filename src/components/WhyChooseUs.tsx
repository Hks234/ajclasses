import React from 'react';
import { ShieldCheck, Sparkles, GraduationCap, Coins, Gift, Compass, Globe, Building2 } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/coursesData';

const ICONS = [
  GraduationCap,
  Sparkles,
  Coins,
  Gift,
  Compass,
  ShieldCheck,
  Globe,
  Building2,
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-aj" className="relative py-24 bg-[#08090D] border-b border-[#1A2234]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(214,183,121,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-mono-luxury text-[#D6B779]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D6B779]" />
            <span>The AJ Classes Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
            ENGINEERED FOR <br className="hidden sm:inline" />
            <span className="italic font-serif gold-text-gradient">ACADEMIC SUPERIORITY.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#969AA5] leading-relaxed font-light">
            Why premier commerce aspirants across Surat and Western India choose Aditya Jhawar Education to build their professional careers.
          </p>
        </div>

        {/* 8 Features Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => {
            const IconComponent = ICONS[index % ICONS.length];
            return (
              <div
                key={item.id}
                className="glass-card p-6 rounded-sm border border-[#1A243A] hover:border-[#D6B779]/40 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-sm bg-[#12192B] border border-[#212E4A] flex items-center justify-center text-[#D6B779] group-hover:border-[#D6B779] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono-luxury text-xs text-[#969AA5] group-hover:text-[#D6B779] transition-colors">
                      {item.id}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#F7F4EC] group-hover:text-[#D6B779] transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#969AA5] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#161F33] flex items-center gap-1.5 text-[11px] font-mono-luxury text-[#D6B779]/80 group-hover:text-[#D6B779] transition-colors">
                  <span>Institute Standard</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
