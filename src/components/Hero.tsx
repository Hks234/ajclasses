import React from 'react';
import { ArrowDown, Sparkles, Phone, Compass, Award } from 'lucide-react';
import { HeroSculpture } from './3d/HeroSculpture';

interface HeroProps {
  onExploreCourses: () => void;
  onTalkToExpert: () => void;
  onOpenExperienceModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCourses,
  onTalkToExpert,
  onOpenExperienceModal,
}) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-10 bg-[#08090D]">
      {/* Background Three.js 3D Golden Kinetic Sculpture */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <HeroSculpture />
      </div>

      {/* Subtle Background Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(214,183,121,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(16,24,43,0.9)_0%,transparent_70%)] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl">
          {/* Institutional Trust Kicker (Clean unboxed text) */}
          <div className="inline-flex items-center gap-2 mb-6 text-xs tracking-widest uppercase font-mono-luxury text-[#D6B779]">
            <Award className="w-4 h-4 text-[#D6B779]" />
            <span>CA CS CMA ADITYA JHAWAR EDUCATION</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#969AA5]">SURAT, GUJARAT</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-[#F7F4EC] leading-[1.08] mb-6 font-bold">
            YOUR AMBITION. <br />
            <span className="gold-text-gradient italic font-serif">OUR EXPERTISE.</span> <br />
            YOUR LEGACY.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#969AA5] leading-relaxed max-w-2xl mb-10 font-light">
            Unlock your potential with professional education designed to take you beyond examinations and towards extraordinary careers in Chartered Accountancy, Company Secretaryship, Cost & Management Accountancy, and Global Finance.
          </p>

          {/* Action Callouts */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
            <button
              onClick={onExploreCourses}
              className="px-8 py-4 rounded-sm bg-gradient-to-r from-[#D6B779] via-[#F0DFA8] to-[#C49B55] text-[#08090D] font-bold text-xs tracking-widest uppercase hover:shadow-[0_0_30px_rgba(214,183,121,0.4)] transition-all duration-300 flex items-center gap-2.5 active:scale-95 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Our Courses</span>
            </button>

            <button
              onClick={onTalkToExpert}
              className="px-7 py-4 rounded-sm border border-[#D6B779]/40 text-[#F7F4EC] hover:text-[#D6B779] hover:border-[#D6B779] font-semibold text-xs tracking-widest uppercase bg-[#10182B]/60 backdrop-blur-md transition-all duration-300 flex items-center gap-2.5 cursor-pointer hover:bg-[#10182B]"
            >
              <Phone className="w-4 h-4 text-[#D6B779]" />
              <span>Talk to an Expert</span>
            </button>

            <button
              onClick={onOpenExperienceModal}
              className="group flex items-center gap-2 text-xs font-mono-luxury text-[#969AA5] hover:text-[#D6B779] transition-colors py-2 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D6B779] group-hover:rotate-12 transition-transform" />
              <span className="underline underline-offset-4 decoration-[#D6B779]/40">Explore 3D Kinetic Model</span>
            </button>
          </div>

          {/* Verified Highlights Bar (No pills, clean text with separators) */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono-luxury text-[#969AA5] pt-6 border-t border-[#1C2334]/80">
            <span className="text-[#E5E7EB]">4.8 Google Rating</span>
            <span aria-hidden="true" className="text-[#D6B779]/60">·</span>
            <span className="text-[#E5E7EB]">270+ Verified Reviews</span>
            <span aria-hidden="true" className="text-[#D6B779]/60">·</span>
            <span className="text-[#D6B779]">Free Education Opportunities Available</span>
            <span aria-hidden="true" className="text-[#D6B779]/60">·</span>
            <span className="text-[#E5E7EB]">Rank Holder Mentorship</span>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Animated Ticker & Scroll Indicator */}
      <div className="relative z-10 w-full pt-8">
        {/* Subtle Horizontal Ticker */}
        <div className="w-full overflow-hidden border-y border-[#D6B779]/15 bg-[#08090D]/80 backdrop-blur-sm py-3">
          <div className="flex gap-8 whitespace-nowrap animate-ticker text-xs font-mono-luxury tracking-widest text-[#969AA5]">
            <div className="flex gap-8 items-center shrink-0">
              <span className="text-[#D6B779] font-bold">CA</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#D6B779] font-bold">CS</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#D6B779] font-bold">CMA</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#E5E7EB]">CFA (USA)</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#E5E7EB]">ACCA (UK)</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#E5E7EB]">US-CMA</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#F7F4EC]">FACULTY-LED LEARNING EXPERIENCE</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#D6B779]">KABOOTAR CIRCLE, SURAT</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#E5E7EB]">WORLD RECORD HOLDER FOUNDER</span>
              <span className="text-zinc-600">✦</span>
            </div>
            <div className="flex gap-8 items-center shrink-0" aria-hidden="true">
              <span className="text-[#D6B779] font-bold">CA</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#D6B779] font-bold">CS</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#D6B779] font-bold">CMA</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#E5E7EB]">CFA (USA)</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#E5E7EB]">ACCA (UK)</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#E5E7EB]">US-CMA</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#F7F4EC]">FACULTY-LED LEARNING EXPERIENCE</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#D6B779]">KABOOTAR CIRCLE, SURAT</span>
              <span className="text-zinc-600">✦</span>
              <span className="text-[#E5E7EB]">WORLD RECORD HOLDER FOUNDER</span>
              <span className="text-zinc-600">✦</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#about"
            className="group flex flex-col items-center text-[10px] tracking-widest text-[#969AA5] uppercase font-mono-luxury hover:text-[#D6B779] transition-colors"
          >
            <span className="mb-1">Scroll to Explore</span>
            <div className="w-5 h-8 rounded-full border border-[#D6B779]/40 flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-[#D6B779] rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
