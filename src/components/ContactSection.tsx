import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink, Youtube, Facebook, Twitter, Mail } from 'lucide-react';
import { SiteSettings } from '../types';

interface ContactSectionProps {
  settings?: SiteSettings;
  onEnquireNow: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  settings,
  onEnquireNow,
}) => {
  const address = settings?.address || '2nd Floor, Kabootar Circle, AJ Classes, Aai Mata Road, Above Shopping Basti, Near Annapurna Poojan Store, Surat, Gujarat 395010, India.';
  const phone = settings?.phone || '079843 44294';
  const businessHours = settings?.businessHours || 'Monday to Saturday: 8:00 AM – 8:30 PM | Sunday: 9:00 AM – 1:00 PM';

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'AJ Classes Kabootar Circle Aai Mata Road Surat Gujarat 395010'
  )}`;

  return (
    <section id="contact" className="relative py-24 bg-[#08090D] border-b border-[#1A2234]">
      {/* Background ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(214,183,121,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-mono-luxury text-[#D6B779]">
            <MapPin className="w-3.5 h-3.5 text-[#D6B779]" />
            <span>Connect & Visit Our Campus</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
            BEGIN YOUR JOURNEY <br className="hidden sm:inline" />
            <span className="italic font-serif gold-text-gradient">AT AJ CLASSES SURAT.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#969AA5] leading-relaxed font-light">
            Conveniently located at the landmark Kabootar Circle on Aai Mata Road. Visit our admissions office for one-on-one academic counseling.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Address & Office Details (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Campus Address Card */}
            <div className="glass-card p-6 rounded-sm border border-[#1E283D] flex items-start gap-4">
              <div className="w-11 h-11 rounded-sm bg-[#12192B] border border-[#222E49] flex items-center justify-center text-[#D6B779] shrink-0 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-mono-luxury uppercase tracking-widest text-[#D6B779]">
                  Official Institute Address
                </span>
                <h4 className="text-base font-semibold text-[#F7F4EC]">
                  CA CS CMA Aditya Jhawar Education (AJ CLASSES)
                </h4>
                <p className="text-xs sm:text-sm text-[#969AA5] leading-relaxed">
                  {address}
                </p>
                <div className="pt-2">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#D6B779] hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Calling & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                className="glass-card p-5 rounded-sm border border-[#1E283D] hover:border-[#D6B779]/40 transition-colors flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-sm bg-[#12192B] border border-[#222E49] flex items-center justify-center text-[#D6B779] group-hover:border-[#D6B779]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-luxury uppercase text-[#969AA5] block">
                    Admissions Call
                  </span>
                  <span className="text-sm font-bold text-[#F7F4EC] group-hover:text-[#D6B779]">
                    {phone}
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/917984344294"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-sm border border-[#1E283D] hover:border-[#25D366]/40 transition-colors flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-sm bg-[#12192B] border border-[#222E49] flex items-center justify-center text-[#25D366] group-hover:border-[#25D366]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-luxury uppercase text-[#969AA5] block">
                    WhatsApp Desk
                  </span>
                  <span className="text-sm font-bold text-[#F7F4EC] group-hover:text-[#25D366]">
                    079843 44294
                  </span>
                </div>
              </a>
            </div>

            {/* Business Hours */}
            <div className="glass-card p-5 rounded-sm border border-[#1E283D] flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-sm bg-[#12192B] border border-[#222E49] flex items-center justify-center text-[#D6B779] shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono-luxury uppercase tracking-widest text-[#D6B779] block mb-1">
                  Campus Operating Hours
                </span>
                <p className="text-xs sm:text-sm text-[#E5E7EB]">
                  {businessHours}
                </p>
                <span className="text-[11px] text-[#969AA5] font-mono-luxury mt-1 block">
                  Library access remains open for enrolled scholars during exam months.
                </span>
              </div>
            </div>

            {/* Verified Social Channels */}
            <div className="p-4 rounded-sm bg-[#10182B]/60 border border-[#1E283D] flex items-center justify-between">
              <span className="text-xs font-mono-luxury uppercase text-[#969AA5]">
                Official Social Profiles:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-[#151F33] hover:bg-[#D6B779] hover:text-black flex items-center justify-center text-[#969AA5] transition-colors"
                  aria-label="AJ Classes YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-[#151F33] hover:bg-[#D6B779] hover:text-black flex items-center justify-center text-[#969AA5] transition-colors"
                  aria-label="AJ Classes Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-[#151F33] hover:bg-[#D6B779] hover:text-black flex items-center justify-center text-[#969AA5] transition-colors"
                  aria-label="AJ Classes X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed (6 cols) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="glass-card rounded-sm overflow-hidden border border-[#D6B779]/30 flex-1 flex flex-col relative min-h-[380px]">
              <iframe
                title="AJ Classes Surat Campus Location"
                src="https://maps.google.com/maps?q=Kabootar%20Circle%20Aai%20Mata%20Road%20Surat%20Gujarat%20395010&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px', flex: 1, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Card */}
              <div className="p-4 bg-[#08090D]/95 border-t border-[#1E283D] flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-[#F7F4EC]">
                    Surat Flagship Center
                  </h5>
                  <span className="text-[11px] text-[#969AA5] font-mono-luxury">
                    Kabootar Circle, Aai Mata Road
                  </span>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-sm bg-[#D6B779] text-[#08090D] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:opacity-95"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
