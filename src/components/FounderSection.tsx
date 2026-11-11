import React from 'react';
import { Award, BookOpen, CheckCircle, Trophy, Sparkles, ChevronRight, Quote } from 'lucide-react';
import { FOUNDER_MILESTONES } from '../data/coursesData';
import founderImg from '../assets/images/founder_aditya_jhawar_1794385011431.jpg';

interface FounderSectionProps {
  founderMessage?: string;
  onTalkToFounder: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  founderMessage,
  onTalkToFounder,
}) => {
  const verifiedAchievements = [
    'World Records Holder for Exceptional Academic Milestone Accomplishments',
    'India Book of Records Holder — Formally Verified National Record',
    'Youngest CA, CS and CMA Triple Qualified Professional in India at Age 21',
    'Youngest Company Secretary (CS) at Just 18 Years of Age',
    'All India Rank Holder in Prestigious CS and CMA Examinations',
    'Founder & Chief Academic Director of AJ Classes, Surat'
  ];

  return (
    <section id="founder" className="relative py-24 bg-[#08090D] border-b border-[#1A2234] overflow-hidden">
      {/* Background Gold Ambient Bloom */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(214,183,121,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-mono-luxury text-[#D6B779]">
            <Trophy className="w-3.5 h-3.5 text-[#D6B779]" />
            <span>Academic Leadership & Record Holder</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
            LEARN FROM EXPERIENCE. <br className="hidden sm:inline" />
            <span className="italic font-serif gold-text-gradient">GET INSPIRED BY EXCELLENCE.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#969AA5] leading-relaxed font-light">
            Guided directly by Aditya Jhawar — one of India’s most celebrated young finance scholars and national record holders.
          </p>
        </div>

        {/* Main Grid: Portrait + Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md group">
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-2 rounded-sm bg-gradient-to-tr from-[#D6B779]/40 via-transparent to-[#D6B779]/20 blur-sm group-hover:blur-md transition-all duration-500" />
              
              <div className="relative rounded-sm overflow-hidden border border-[#D6B779]/40 bg-[#0E1526] shadow-2xl">
                <img
                  src={founderImg}
                  alt="Aditya Jhawar — Founder of AJ Classes, Surat"
                  referrerPolicy="no-referrer"
                  className="w-full h-[480px] sm:h-[540px] object-cover object-top filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Scrim overlay for luxury name badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#08090D] via-[#08090D]/80 to-transparent">
                  <div className="inline-block px-2.5 py-0.5 rounded-sm bg-[#D6B779] text-[#08090D] font-mono-luxury text-[10px] font-bold uppercase tracking-wider mb-2">
                    Founder & Educator
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#F7F4EC] tracking-wide">
                    Aditya Jhawar
                  </h3>
                  <p className="text-xs text-[#D6B779] font-mono-luxury tracking-wider mt-0.5">
                    CA · CS · CMA · World Record Holder
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Biography & Verified Achievements (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase font-mono-luxury tracking-widest text-[#D6B779]">
                Verified Credentials & Honors
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F4EC] leading-snug">
                Redefining What Is Possible in Professional Commerce Education.
              </h3>
              <p className="text-sm text-[#969AA5] leading-relaxed">
                Aditya Jhawar made history by accomplishing the rare triple qualification of Chartered Accountancy (CA), Company Secretary (CS), and Cost & Management Accountancy (CMA) by age 21, having already cleared CS at the remarkable age of 18. His scholastic feats have been officially chronicled in the <strong className="text-[#E5E7EB]">World Records</strong> and <strong className="text-[#E5E7EB]">India Book of Records</strong>.
              </p>
            </div>

            {/* Verified Achievements Checklist */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {verifiedAchievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-sm bg-[#10182B]/60 border border-[#1E283D] flex items-start gap-3 hover:border-[#D6B779]/40 transition-colors"
                >
                  <Award className="w-4 h-4 text-[#D6B779] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#E5E7EB] font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Founder Quote Card */}
            <div className="p-6 rounded-sm bg-[#121A2D] border border-[#D6B779]/30 relative mt-6">
              <Quote className="w-8 h-8 text-[#D6B779]/20 absolute top-4 right-4" />
              <span className="text-[10px] font-mono-luxury uppercase tracking-widest text-[#D6B779] block mb-2">
                Founder's Philosophy
              </span>
              <p className="text-sm font-serif italic text-[#F7F4EC] leading-relaxed mb-4">
                "{founderMessage || "Professional exams are not a test of mere memory—they are a test of resilience, conceptual clarity, and structured discipline. At AJ Classes, our mission is to eliminate fear, instill unshakeable confidence, and guide every student to the pinnacle of professional excellence."}"
              </p>
              <div className="flex items-center justify-between text-xs text-[#969AA5]">
                <span>— Aditya Jhawar (CA, CS, CMA)</span>
                <button
                  onClick={onTalkToFounder}
                  className="text-[#D6B779] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <span>Book Mentorship Call</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Milestones Timeline */}
        <div className="pt-10 border-t border-[#1C253B]">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-mono-luxury tracking-widest text-[#D6B779] block mb-1">
              Scholastic Journey & Milestones
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F4EC]">
              From Prodigy to Master Educator
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUNDER_MILESTONES.map((mile, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-sm border border-[#1E293F] hover:border-[#D6B779]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-luxury text-sm font-bold text-[#D6B779]">
                      {mile.yearOrAge}
                    </span>
                    {mile.recordBadge && (
                      <span className="text-[10px] font-mono-luxury px-2 py-0.5 rounded-sm bg-[#D6B779]/15 text-[#D6B779] border border-[#D6B779]/30">
                        {mile.recordBadge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#F7F4EC] mb-1">
                    {mile.title}
                  </h4>
                  <span className="text-xs text-[#D6B779] font-mono-luxury block mb-3">
                    {mile.subtitle}
                  </span>
                  <p className="text-xs text-[#969AA5] leading-relaxed">
                    {mile.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
