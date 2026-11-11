import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ShieldCheck, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Founder', href: '#founder' },
    { name: 'Why AJ', href: '#why-aj' },
    { name: 'Campus', href: '#campus' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090D]/90 backdrop-blur-md border-b border-[#D6B779]/20 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="group flex items-center gap-2 whitespace-nowrap shrink-0 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-sm border border-[#D6B779]/60 bg-gradient-to-br from-[#10182B] to-[#08090D] flex items-center justify-center shadow-inner group-hover:border-[#D6B779] transition-colors">
            <span className="font-serif text-[#D6B779] font-bold text-lg tracking-wider">AJ</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-widest text-[#F7F4EC] font-semibold group-hover:text-[#D6B779] transition-colors">
              AJ CLASSES
            </span>
            <span className="text-[10px] tracking-widest text-[#969AA5] uppercase font-mono-luxury -mt-0.5">
              Aditya Jhawar Education
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Clean single-line text links) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-[#969AA5]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#D6B779] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D6B779] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Admin Portal Access */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenAdmin}
            title="Institute Admin Dashboard"
            className="hidden sm:flex items-center gap-1.5 text-xs text-[#969AA5] hover:text-[#D6B779] px-2.5 py-1.5 rounded transition-colors whitespace-nowrap border border-transparent hover:border-[#D6B779]/20"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#D6B779]" />
            <span className="font-mono-luxury text-[11px]">Portal</span>
          </button>

          <button
            onClick={onOpenEnquiry}
            className="relative group overflow-hidden px-5 py-2.5 rounded-sm bg-gradient-to-r from-[#D6B779] to-[#C49B55] text-[#08090D] font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(214,183,121,0.4)] whitespace-nowrap shrink-0 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#E5E7EB] hover:text-[#D6B779] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#08090D]/98 border-b border-[#D6B779]/20 px-6 py-6 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wider uppercase text-[#E5E7EB] hover:text-[#D6B779] py-2 border-b border-[#1E2538] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href="tel:07984344294"
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#D6B779] border border-[#D6B779]/40 rounded-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call: 079843 44294</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="flex items-center justify-center gap-2 py-2 text-xs text-[#969AA5] hover:text-white"
              >
                <ShieldCheck className="w-4 h-4 text-[#D6B779]" />
                <span>Administrator Dashboard</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
