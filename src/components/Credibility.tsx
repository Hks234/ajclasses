import React from 'react';
import { Star, ExternalLink, Quote, CheckCircle2, Shield, Users } from 'lucide-react';
import { VERIFIED_TESTIMONIALS } from '../data/coursesData';

export const Credibility: React.FC = () => {
  const primaryReviews = VERIFIED_TESTIMONIALS.slice(0, 2);

  return (
    <section id="about" className="relative py-24 bg-[#08090D] border-b border-[#1A2234]">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(214,183,121,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-mono-luxury text-[#D6B779]">
            <Shield className="w-3.5 h-3.5 text-[#D6B779]" />
            <span>Institutional Credibility & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
            EDUCATION THAT GOES <br className="hidden sm:inline" />
            <span className="italic font-serif gold-text-gradient">BEYOND EXPECTATIONS.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#969AA5] leading-relaxed font-light">
            Founded on the bedrock of uncompromising academic discipline, AJ Classes unites elite qualification pedagogy with genuine student care right in the heart of Surat.
          </p>
        </div>

        {/* Verified Stats Strip (Tabular Numerals, High-End Design) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-card p-6 rounded-sm border border-[#D6B779]/20 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-mono-luxury tracking-wider text-[#969AA5]">Google Rating</span>
              <div className="flex text-[#D6B779]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D6B779]" />
                ))}
              </div>
            </div>
            <div className="text-4xl sm:text-5xl font-serif font-bold text-[#F7F4EC] tabular-nums mb-1">
              4.8<span className="text-xl text-[#D6B779]">/5</span>
            </div>
            <p className="text-xs text-[#969AA5]">Consistently rated top tier by finance scholars</p>
          </div>

          <div className="glass-card p-6 rounded-sm border border-[#D6B779]/20 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-mono-luxury tracking-wider text-[#969AA5]">Student Feedback</span>
              <CheckCircle2 className="w-4 h-4 text-[#D6B779]" />
            </div>
            <div className="text-4xl sm:text-5xl font-serif font-bold text-[#F7F4EC] tabular-nums mb-1">
              270<span className="text-2xl text-[#D6B779]">+</span>
            </div>
            <p className="text-xs text-[#969AA5]">Verified public Google Reviews</p>
          </div>

          <div className="glass-card p-6 rounded-sm border border-[#D6B779]/20 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-mono-luxury tracking-wider text-[#969AA5]">Faculty Leadership</span>
              <Shield className="w-4 h-4 text-[#D6B779]" />
            </div>
            <div className="text-4xl sm:text-5xl font-serif font-bold text-[#F7F4EC] tabular-nums mb-1">
              100<span className="text-2xl text-[#D6B779]">%</span>
            </div>
            <p className="text-xs text-[#969AA5]">Rank holder and practitioner-led batches</p>
          </div>

          <div className="glass-card p-6 rounded-sm border border-[#D6B779]/20 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-mono-luxury tracking-wider text-[#969AA5]">Equal Opportunity</span>
              <Users className="w-4 h-4 text-[#D6B779]" />
            </div>
            <div className="text-4xl sm:text-5xl font-serif font-bold text-[#F7F4EC] tabular-nums mb-1">
              FREE
            </div>
            <p className="text-xs text-[#969AA5]">Education schemes available as per terms</p>
          </div>
        </div>

        {/* Selected Verified Reviews Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {primaryReviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card p-8 rounded-sm relative overflow-hidden group hover:border-[#D6B779]/40 transition-colors"
            >
              <Quote className="w-10 h-10 text-[#D6B779]/20 absolute -top-1 -left-1" />
              <div className="flex items-center gap-1 text-[#D6B779] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D6B779]" />
                ))}
              </div>
              <p className="text-lg text-[#F7F4EC] font-serif italic mb-6 leading-relaxed">
                "{rev.quote}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#1F273D]">
                <div>
                  <h4 className="text-sm font-semibold text-[#E5E7EB]">{rev.name}</h4>
                  <span className="text-xs text-[#969AA5] font-mono-luxury">{rev.role}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#D6B779] font-mono-luxury">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Verified Google Business Profile */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=AJ+Classes+Aditya+Jhawar+Kabootar+Circle+Surat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm border border-[#D6B779]/40 text-xs font-semibold uppercase tracking-wider text-[#F7F4EC] hover:text-[#D6B779] hover:border-[#D6B779] bg-[#10182B]/80 transition-all hover:shadow-[0_0_20px_rgba(214,183,121,0.2)]"
          >
            <span>View All 270+ Google Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D6B779]" />
          </a>
        </div>
      </div>
    </section>
  );
};
