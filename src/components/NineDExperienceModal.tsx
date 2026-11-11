import React, { useState } from 'react';
import { X, Sparkles, Layers, Compass, Check, Sliders, Volume2, VolumeX, Eye } from 'lucide-react';

interface NineDExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnquire: () => void;
}

export const NineDExperienceModal: React.FC<NineDExperienceModalProps> = ({
  isOpen,
  onClose,
  onEnquire,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'dimensions' | 'pedagogy'>('dimensions');

  const nineDimensions = [
    {
      num: '01',
      title: 'Conceptual Core Mastery',
      subtitle: 'Eliminating Rote Memorization',
      desc: 'Deconstructing every Accounting Standard, Ind AS, and Companies Act provision from first economic principles.'
    },
    {
      num: '02',
      title: 'Daily Answer-Writing Presentation',
      subtitle: 'Exam Hall Precision',
      desc: 'Systematic drills in step-marking formatting, working note alignment, and legal citation architecture.'
    },
    {
      num: '03',
      title: 'Rank-Holder Psychological Conditioning',
      subtitle: 'Resilience Under Pressure',
      desc: 'Techniques from Aditya Jhawar to manage negative marking, time stress, and multi-subject revision marathons.'
    },
    {
      num: '04',
      title: 'Articleship & Big 4 Interview Readiness',
      subtitle: 'Bridging Classroom to Corporate',
      desc: 'Practical grooming in corporate etiquette, financial modeling basics, and senior partner interview readiness.'
    },
    {
      num: '05',
      title: 'Case Law & Landmark Precedent Drills',
      subtitle: 'High-Scoring Legal Insight',
      desc: 'Deep-dive analysis of NCLT, Supreme Court, and High Court rulings that differentiate pass marks from rank marks.'
    },
    {
      num: '06',
      title: 'Rigorous 3-Tier Mock Exam Engine',
      subtitle: 'Simulating Exact ICAI/ICSI/ICMAI Standards',
      desc: 'Uncompromised exam hall conditions with detailed faculty audit sheets returned within 72 hours.'
    },
    {
      num: '07',
      title: 'Free & Affordable Equal Opportunity',
      subtitle: 'Democratizing Elite Education',
      desc: 'Special merit and hardship scholarship allocations ensuring top-caliber coaching is never denied by finances.'
    },
    {
      num: '08',
      title: '1-on-1 Faculty Mentorship Desks',
      subtitle: 'Zero Unanswered Doubts',
      desc: 'Private daily query resolution hours where individual bottlenecks are resolved face-to-face.'
    },
    {
      num: '09',
      title: 'Global Career Character & Ethics',
      subtitle: 'Pinnacle of Commercial Leadership',
      desc: 'Inculcating integrity, regulatory compliance conscience, and preparation for global charters like CFA and ACCA.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#090D17] border border-[#D6B779]/40 rounded-sm shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#10182B] via-[#0E1528] to-[#0A0F1D] border-b border-[#D6B779]/20 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-4 h-4 text-[#D6B779]" />
              <span className="text-[11px] font-mono-luxury uppercase tracking-widest text-[#D6B779]">
                The Signature 9D Pedagogy Architecture
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F7F4EC]">
              A Multi-Layered Educational Odyssey
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#162035] text-[#969AA5] hover:text-white hover:bg-[#202C48] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-[#1A253C] bg-[#0B0F1A] px-6">
          <button
            onClick={() => setActiveTab('dimensions')}
            className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'dimensions'
                ? 'border-[#D6B779] text-[#D6B779]'
                : 'border-transparent text-[#969AA5] hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>9 Dimensions of Excellence</span>
          </button>
          <button
            onClick={() => setActiveTab('pedagogy')}
            className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'pedagogy'
                ? 'border-[#D6B779] text-[#D6B779]'
                : 'border-transparent text-[#969AA5] hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Faculty-Led Blueprint</span>
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#E5E7EB]">
          {activeTab === 'dimensions' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {nineDimensions.map((d) => (
                <div
                  key={d.num}
                  className="p-5 rounded-sm bg-[#101729] border border-[#1C263D] hover:border-[#D6B779]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono-luxury text-sm font-bold text-[#D6B779]">
                        {d.num}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#D6B779]/40" />
                    </div>
                    <h4 className="text-sm font-serif font-bold text-[#F7F4EC] mb-1">
                      {d.title}
                    </h4>
                    <span className="text-[11px] font-mono-luxury text-[#D6B779] block mb-2">
                      {d.subtitle}
                    </span>
                    <p className="text-xs text-[#969AA5] leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-6 rounded-sm bg-[#101729] border border-[#D6B779]/30">
                <h4 className="text-lg font-serif font-bold text-[#F7F4EC] mb-2">
                  The Aditya Jhawar Pedagogical Standard
                </h4>
                <p className="text-sm text-[#969AA5] leading-relaxed mb-4">
                  Ordinary coaching institutes focus on syllabus completion. At AJ Classes, our multi-layered approach treats professional commerce examinations as competitive corporate tournaments.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#E5E7EB]">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D6B779] shrink-0 mt-0.5" />
                    <span>Every lecture connects theory to actual NCLT and appellate tribunal jurisprudence.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D6B779] shrink-0 mt-0.5" />
                    <span>Weekly mock examinations audited with line-by-line mark deductions to simulate ICAI standards.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D6B779] shrink-0 mt-0.5" />
                    <span>Special acceleration batches for students aiming for single and dual-digit All India Ranks.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#D6B779] shrink-0 mt-0.5" />
                    <span>Ethical, affordable, and transparent structure with free education opportunities for deserving scholars.</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-[#12192B] border border-[#1E283D] flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-[#F7F4EC]">Ready to experience the 9D standard?</h5>
                  <span className="text-[11px] text-[#969AA5]">Attend our free counseling session and demo classes at Surat campus.</span>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onEnquire();
                  }}
                  className="px-5 py-2.5 rounded-sm bg-[#D6B779] text-[#08090D] font-bold text-xs uppercase tracking-wider hover:opacity-95"
                >
                  Book Demo Seat
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-[#0B0F1A] border-t border-[#1C253B] flex items-center justify-between">
          <span className="text-xs font-mono-luxury text-[#969AA5]">
            AJ Classes Surat · Official Pedagogy Charter
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-sm border border-[#24314C] text-xs font-semibold text-[#969AA5] hover:text-white"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
