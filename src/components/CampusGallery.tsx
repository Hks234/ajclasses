import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import classroomImg from '../assets/images/campus_smart_classroom_1794385013305.jpg';
import seminarImg from '../assets/images/campus_seminar_session_1794385014934.jpg';
import loungeImg from '../assets/images/campus_study_lounge_1794385014407.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
}

export const CampusGallery: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'Executive Smart Amphitheater',
      category: 'Smart Classrooms',
      description: 'Tiered executive lecture amphitheater equipped with ultra-wide market data displays, digital tablets, and acoustic optimization for immersive masterclasses.',
      src: classroomImg,
    },
    {
      id: 'gal-2',
      title: 'Live Finance Seminar & Boardroom Drill',
      category: 'Masterclasses & Seminars',
      description: 'Faculty-led interactive seminar session dissecting real-world corporate portfolio theories, tax cases, and Company Law litigation.',
      src: seminarImg,
    },
    {
      id: 'gal-3',
      title: 'Scholars Research Library & Study Pods',
      category: 'Focused Study Environment',
      description: 'Private dark walnut study pods with brass reading lamps and high-speed research terminals, providing silence for intensive exam preparation.',
      src: loungeImg,
    },
  ];

  const handleNext = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % galleryItems.length);
    }
  };

  const handlePrev = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="campus" className="relative py-24 bg-[#08090D] border-b border-[#1A2234]">
      {/* Decorative ambient flare */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(214,183,121,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-mono-luxury text-[#D6B779]">
            <Camera className="w-3.5 h-3.5 text-[#D6B779]" />
            <span>Campus & Learning Environment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
            DESIGNED FOR <br className="hidden sm:inline" />
            <span className="italic font-serif gold-text-gradient">UNRIVALED FOCUS & INTELLECT.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#969AA5] leading-relaxed font-light">
            Step inside our flagship center at Kabootar Circle, Surat. Experience academic facilities built to the highest architectural and technological standards.
          </p>
        </div>

        {/* Gallery Grid (Asymmetric Bento Arrangement) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Feature Item (7 cols) */}
          <div
            onClick={() => setActiveLightboxIndex(0)}
            className="md:col-span-7 glass-card rounded-sm overflow-hidden group relative cursor-pointer border border-[#1E293F] hover:border-[#D6B779]/50 transition-all duration-300"
          >
            <div className="relative h-[340px] sm:h-[420px] overflow-hidden">
              <img
                src={galleryItems[0].src}
                alt={galleryItems[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-[#08090D]/40 to-transparent" />

              <div className="absolute top-4 right-4 p-2.5 rounded-sm bg-[#08090D]/80 backdrop-blur-md text-[#D6B779] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-[11px] font-mono-luxury uppercase tracking-widest text-[#D6B779] block mb-1">
                  {galleryItems[0].category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F7F4EC] mb-2">
                  {galleryItems[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#969AA5] line-clamp-2">
                  {galleryItems[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Two Items (5 cols stacked) */}
          <div className="md:col-span-5 flex flex-col gap-8 justify-between">
            {galleryItems.slice(1, 3).map((item, idx) => {
              const actualIndex = idx + 1;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveLightboxIndex(actualIndex)}
                  className="glass-card rounded-sm overflow-hidden group relative cursor-pointer border border-[#1E293F] hover:border-[#D6B779]/50 transition-all duration-300 flex-1"
                >
                  <div className="relative h-[200px] sm:h-[195px] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-[#08090D]/50 to-transparent" />

                    <div className="absolute top-3 right-3 p-2 rounded-sm bg-[#08090D]/80 backdrop-blur-md text-[#D6B779] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-3.5 h-3.5" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <span className="text-[10px] font-mono-luxury uppercase tracking-widest text-[#D6B779] block mb-0.5">
                        {item.category}
                      </span>
                      <h4 className="text-base font-serif font-bold text-[#F7F4EC] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#969AA5] line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Campus Facilities Feature Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-[#1C253B]">
          <div className="text-center">
            <span className="text-xs font-mono-luxury uppercase text-[#D6B779] block mb-1">Acoustic Engineering</span>
            <p className="text-xs text-[#969AA5]">Sound-isolated study suites for maximum focus</p>
          </div>
          <div className="text-center">
            <span className="text-xs font-mono-luxury uppercase text-[#D6B779] block mb-1">Digital Smart Boards</span>
            <p className="text-xs text-[#969AA5]">High-resolution equation & financial model projections</p>
          </div>
          <div className="text-center">
            <span className="text-xs font-mono-luxury uppercase text-[#D6B779] block mb-1">Surat Prime Landmark</span>
            <p className="text-xs text-[#969AA5]">2nd Floor, Kabootar Circle, Aai Mata Road</p>
          </div>
          <div className="text-center">
            <span className="text-xs font-mono-luxury uppercase text-[#D6B779] block mb-1">Library & Wi-Fi</span>
            <p className="text-xs text-[#969AA5]">Comprehensive reference textbooks & mock tests</p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fadeIn"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#08090D] border border-[#D6B779]/40 rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-between p-4 border-b border-[#1E283D] bg-[#0E1526]">
              <div>
                <span className="text-xs font-mono-luxury text-[#D6B779] uppercase">
                  {galleryItems[activeLightboxIndex].category}
                </span>
                <h3 className="text-lg font-serif text-[#F7F4EC] font-bold">
                  {galleryItems[activeLightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="p-2 text-[#969AA5] hover:text-white rounded-full bg-[#182033]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Container */}
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={galleryItems[activeLightboxIndex].src}
                alt={galleryItems[activeLightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] w-auto object-contain"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#08090D]/80 hover:bg-[#D6B779] text-white hover:text-black transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#08090D]/80 hover:bg-[#D6B779] text-white hover:text-black transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Description */}
            <div className="p-4 bg-[#0B0F1A] border-t border-[#1C253B]">
              <p className="text-xs sm:text-sm text-[#969AA5]">
                {galleryItems[activeLightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
