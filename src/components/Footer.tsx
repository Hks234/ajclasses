import React from 'react';
import { ArrowUp, ShieldCheck, Phone, MapPin, ExternalLink } from 'lucide-react';
import { SiteSettings } from '../types';

interface FooterProps {
  settings?: SiteSettings;
  onOpenAdmin: () => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ settings, onOpenAdmin, onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050609] border-t border-[#161D2B] text-[#969AA5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-[#141B28]">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-sm border border-[#D6B779]/60 bg-[#10182B] flex items-center justify-center">
                <span className="font-serif text-[#D6B779] font-bold text-base">AJ</span>
              </div>
              <span className="font-serif text-lg tracking-wider text-[#F7F4EC] font-bold">
                AJ CLASSES
              </span>
            </div>

            <p className="text-xs text-[#969AA5] leading-relaxed max-w-sm">
              CA CS CMA Aditya Jhawar Education — India's premier boutique institute for Chartered Accountancy, Company Secretary, Cost & Management Accountancy, and Global Financial Charters.
            </p>

            <div className="text-xs font-mono-luxury text-[#D6B779] pt-1">
              "Dream Bigger. Learn Smarter. Become Extraordinary."
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-luxury uppercase tracking-widest text-[#F7F4EC] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#D6B779] transition-colors">About AJ Classes</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#D6B779] transition-colors">Course Catalog</a>
              </li>
              <li>
                <a href="#founder" className="hover:text-[#D6B779] transition-colors">Founder Profile</a>
              </li>
              <li>
                <a href="#why-aj" className="hover:text-[#D6B779] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#campus" className="hover:text-[#D6B779] transition-colors">Campus Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D6B779] transition-colors">Student Reviews</a>
              </li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-luxury uppercase tracking-widest text-[#F7F4EC] font-bold">
              Programs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#courses" className="hover:text-[#D6B779] transition-colors">CA (Foundation, Inter, Final)</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#D6B779] transition-colors">CS (CSEET, Exec, Prof)</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#D6B779] transition-colors">CMA (Foundation, Inter, Final)</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#D6B779] transition-colors">CFA (Chartered Financial Analyst)</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#D6B779] transition-colors">ACCA (Global Chartered Accountancy)</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#D6B779] transition-colors">US-CMA (USA)</a>
              </li>
            </ul>
          </div>

          {/* Campus Office Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-luxury uppercase tracking-widest text-[#F7F4EC] font-bold">
              Campus Office
            </h4>
            <p className="text-xs leading-relaxed text-[#969AA5]">
              2nd Floor, Kabootar Circle, AJ Classes, Aai Mata Road, Above Shopping Basti, Surat, Gujarat 395010
            </p>
            <div className="pt-1">
              <a href="tel:07984344294" className="text-xs font-semibold text-[#D6B779] hover:underline block">
                079843 44294
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="px-4 py-2 rounded-sm bg-[#10182B] border border-[#D6B779]/40 text-xs text-[#D6B779] hover:bg-[#D6B779] hover:text-black transition-colors"
              >
                Apply for Admission
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-luxury">
          <div className="flex flex-wrap items-center gap-4 text-[#969AA5]">
            <span>© {currentYear} CA CS CMA Aditya Jhawar Education. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span className="text-[11px]">Free-of-cost education opportunities subject to institute's applicable terms.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmin}
              className="text-[#969AA5] hover:text-[#D6B779] transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D6B779]" />
              <span>Admin Portal</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm border border-[#1A253C] hover:border-[#D6B779] text-[#969AA5] hover:text-[#D6B779] transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
