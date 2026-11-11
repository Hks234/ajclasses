import React from 'react';
import { X, Check, ArrowRight, BookOpen, Clock, Award, Shield, FileText } from 'lucide-react';
import { CourseLevel } from '../types';

interface CourseModalProps {
  course: CourseLevel | null;
  onClose: () => void;
  onApplyForCourse: (courseName: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  onApplyForCourse,
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl my-8 bg-[#0D121E] border border-[#D6B779]/40 rounded-sm shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#10182B] via-[#0E1526] to-[#0A0E1A] border-b border-[#D6B779]/20 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#969AA5] hover:text-white rounded-full bg-[#182033] hover:bg-[#202C45] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[11px] font-mono-luxury uppercase tracking-widest text-[#D6B779]">
              {course.category} Professional Track
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-[11px] font-mono-luxury text-[#969AA5]">
              {course.examBody}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F7F4EC] mb-2">
            {course.name}
          </h3>
          <p className="text-sm text-[#D6B779] italic font-serif">
            {course.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6 text-[#E5E7EB]">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-sm bg-[#12192B] border border-[#1E273C]">
              <div className="flex items-center gap-2 text-xs font-mono-luxury uppercase text-[#969AA5] mb-1">
                <Clock className="w-3.5 h-3.5 text-[#D6B779]" />
                <span>Duration</span>
              </div>
              <p className="text-sm font-medium text-[#F7F4EC]">{course.duration}</p>
            </div>

            <div className="p-4 rounded-sm bg-[#12192B] border border-[#1E273C]">
              <div className="flex items-center gap-2 text-xs font-mono-luxury uppercase text-[#969AA5] mb-1">
                <Award className="w-3.5 h-3.5 text-[#D6B779]" />
                <span>Eligibility</span>
              </div>
              <p className="text-sm font-medium text-[#F7F4EC]">{course.eligibility}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono-luxury text-[#969AA5] mb-2">
              Course Overview
            </h4>
            <p className="text-sm text-[#D1D5DB] leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Key Subjects / Syllabus Modules */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono-luxury text-[#969AA5] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#D6B779]" />
              <span>Core Syllabus & Exam Papers</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {course.keySubjects.map((sub, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-sm bg-[#111726] border border-[#1C253B]"
                >
                  <span className="font-mono-luxury text-xs text-[#D6B779] mt-0.5">
                    {(idx + 1).toString().padStart(2, '0')}.
                  </span>
                  <span className="text-xs sm:text-sm text-[#E5E7EB]">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AJ Classes Pedagogical Advantage */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono-luxury text-[#969AA5] mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#D6B779]" />
              <span>AJ Classes Advantage & Methodology</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#969AA5]">
                  <Check className="w-4 h-4 text-[#D6B779] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono-luxury text-[#969AA5] mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#D6B779]" />
              <span>Career Pathways & Professional Trajectory</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {course.careerOpportunities.map((opp, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-sm bg-[#161F33] text-[#F7F4EC] border border-[#232F4D]"
                >
                  {opp}
                </span>
              ))}
            </div>
          </div>

          {/* Transparent Fee & Scholarship Notice */}
          <div className="p-4 rounded-sm bg-[#161D2E]/80 border border-[#D6B779]/30 text-xs text-[#D1D5DB] leading-relaxed">
            <strong className="text-[#D6B779] block mb-1">Scholarship & Fee Policy:</strong>
            AJ Classes adheres to transparent, affordable fee structures with zero hidden charges. Meritorious students and candidates with financial hardships are eligible for free-of-cost education opportunities subject to institute terms.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#0B0F1A] border-t border-[#1C253B] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#969AA5]">
            <span>Admissions currently open for upcoming examination cycle.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-sm border border-[#2A354E] text-xs font-semibold text-[#969AA5] hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onApplyForCourse(course.name);
                onClose();
              }}
              className="px-6 py-2.5 rounded-sm bg-gradient-to-r from-[#D6B779] to-[#C49B55] text-[#08090D] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(214,183,121,0.4)] transition-all flex items-center gap-2 active:scale-95"
            >
              <span>Apply for {course.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
