import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { VERIFIED_TESTIMONIALS } from '../data/coursesData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % VERIFIED_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + VERIFIED_TESTIMONIALS.length) % VERIFIED_TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="relative py-24 bg-[#08090D] border-b border-[#1A2234]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(214,183,121,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-mono-luxury text-[#D6B779]">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#D6B779]" />
            <span>Verified Student Voices</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
            TESTIMONIALS OF <br className="hidden sm:inline" />
            <span className="italic font-serif gold-text-gradient">TRANSFORMATION & SUCCESS.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#969AA5] leading-relaxed font-light">
            Real feedback from students and families who experienced the rigorous, faculty-led training of AJ Classes.
          </p>
        </div>

        {/* Featured Slider / Spotlight Review */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8 sm:p-12 rounded-sm border border-[#D6B779]/30 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex text-[#D6B779]">
                {[...Array(VERIFIED_TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D6B779]" />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#D6B779] font-mono-luxury">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Public Review</span>
              </div>
            </div>

            <p className="text-xl sm:text-2xl font-serif italic text-[#F7F4EC] leading-relaxed mb-8">
              "{VERIFIED_TESTIMONIALS[currentIndex].quote}"
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-[#1E293F]">
              <div>
                <h4 className="text-base font-semibold text-[#F7F4EC]">
                  {VERIFIED_TESTIMONIALS[currentIndex].name}
                </h4>
                <div className="flex items-center gap-2 text-xs text-[#969AA5] font-mono-luxury mt-0.5">
                  <span>{VERIFIED_TESTIMONIALS[currentIndex].role}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#D6B779]">{VERIFIED_TESTIMONIALS[currentIndex].course}</span>
                </div>
              </div>

              {/* Slider Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-sm border border-[#232F4A] hover:border-[#D6B779] text-[#969AA5] hover:text-[#D6B779] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono-luxury text-[#969AA5] px-2 tabular-nums">
                  {currentIndex + 1} / {VERIFIED_TESTIMONIALS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-sm border border-[#232F4A] hover:border-[#D6B779] text-[#969AA5] hover:text-[#D6B779] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {VERIFIED_TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="glass-card p-6 rounded-sm border border-[#1A253C] hover:border-[#D6B779]/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#D6B779] mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D6B779]" />
                  ))}
                </div>
                <p className="text-sm font-serif italic text-[#E5E7EB] leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#182136]">
                <h5 className="text-xs font-bold text-[#F7F4EC]">{item.name}</h5>
                <span className="text-[11px] text-[#969AA5] font-mono-luxury">{item.course}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Google Maps Action */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=AJ+Classes+Aditya+Jhawar+Surat+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-[#D6B779]/40 text-xs font-semibold uppercase tracking-wider text-[#F7F4EC] hover:text-[#D6B779] hover:border-[#D6B779] bg-[#10182B] transition-all hover:shadow-[0_0_20px_rgba(214,183,121,0.2)]"
          >
            <span>Read 270+ Student Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D6B779]" />
          </a>
        </div>
      </div>
    </section>
  );
};
