import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, Award, ChevronRight, Check } from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { CourseLevel } from '../types';

interface CoursesSectionProps {
  onSelectCourse: (course: CourseLevel) => void;
  onEnquireCourse: (courseName: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onSelectCourse,
  onEnquireCourse,
}) => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'CA' | 'CS' | 'CMA' | 'GLOBAL'>('ALL');

  const categories = [
    { key: 'ALL', label: 'All Courses' },
    { key: 'CA', label: 'Chartered Accountancy (CA)' },
    { key: 'CS', label: 'Company Secretary (CS)' },
    { key: 'CMA', label: 'Cost & Management (CMA)' },
    { key: 'GLOBAL', label: 'Global (CFA / ACCA / US-CMA)' },
  ];

  const filteredCourses = activeCategory === 'ALL'
    ? COURSES_DATA
    : COURSES_DATA.filter((c) => c.category === activeCategory);

  return (
    <section id="courses" className="relative py-24 bg-[#08090D] border-b border-[#1A2234]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[radial-gradient(circle,rgba(214,183,121,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-mono-luxury text-[#D6B779]">
            <BookOpen className="w-3.5 h-3.5 text-[#D6B779]" />
            <span>Curated Academic Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
            MASTER INDIA’S PREMIER <br className="hidden sm:inline" />
            <span className="italic font-serif gold-text-gradient">COMMERCE & FINANCE CHARTERS.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#969AA5] leading-relaxed font-light">
            Comprehensive faculty-led curriculum engineered by rank holders for CA, CS, CMA, and international credentials.
          </p>
        </div>

        {/* Category Tabs (Segmented control) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14 p-1.5 max-w-4xl mx-auto bg-[#10182B]/60 rounded-sm border border-[#1E273C] backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as any)}
              className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-[#D6B779] to-[#C49B55] text-[#08090D] shadow-md font-bold'
                  : 'text-[#969AA5] hover:text-[#F7F4EC] hover:bg-[#162035]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="glass-card rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#D6B779]/40 transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-[#1A2338]">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono-luxury uppercase tracking-widest text-[#D6B779]">
                    {course.category}
                  </span>
                  {course.badge && (
                    <span className="text-[10px] font-mono-luxury px-2 py-0.5 rounded-sm bg-[#D6B779]/15 text-[#D6B779] border border-[#D6B779]/30">
                      {course.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-serif font-bold text-[#F7F4EC] group-hover:text-[#D6B779] transition-colors mb-1">
                  {course.name}
                </h3>
                <p className="text-xs text-[#969AA5] line-clamp-2">
                  {course.subtitle}
                </p>
              </div>

              {/* Card Meta & Core Subjects */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#969AA5]">
                    <Clock className="w-3.5 h-3.5 text-[#D6B779] shrink-0" />
                    <span>{course.duration}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-[#969AA5]">
                    <Award className="w-3.5 h-3.5 text-[#D6B779] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{course.eligibility}</span>
                  </div>
                </div>

                {/* Key Subjects Preview */}
                <div className="pt-3 border-t border-[#161F33]">
                  <span className="text-[10px] uppercase tracking-widest font-mono-luxury text-[#969AA5] block mb-2">
                    Key Curriculum Papers
                  </span>
                  <div className="space-y-1.5">
                    {course.keySubjects.slice(0, 3).map((sub, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#D1D5DB]">
                        <span className="text-[#D6B779] font-mono-luxury text-[10px] shrink-0 mt-0.5">·</span>
                        <span className="line-clamp-1">{sub}</span>
                      </div>
                    ))}
                    {course.keySubjects.length > 3 && (
                      <span className="text-[11px] text-[#D6B779] font-mono-luxury block pt-1">
                        + {course.keySubjects.length - 3} more specialized papers
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => onSelectCourse(course)}
                  className="flex-1 py-2.5 px-3 rounded-sm border border-[#232F4A] hover:border-[#D6B779]/60 text-xs font-semibold text-[#E5E7EB] hover:text-[#D6B779] transition-colors flex items-center justify-center gap-1.5 cursor-pointer bg-[#0F1626]"
                >
                  <span>Syllabus & Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onEnquireCourse(course.name)}
                  className="py-2.5 px-4 rounded-sm bg-gradient-to-r from-[#D6B779] to-[#C49B55] hover:opacity-95 text-[#08090D] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
                  title={`Enquire for ${course.name}`}
                >
                  <span>Apply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
