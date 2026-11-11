import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Credibility } from './components/Credibility';
import { CoursesSection } from './components/CoursesSection';
import { CourseModal } from './components/CourseModal';
import { FounderSection } from './components/FounderSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CampusGallery } from './components/CampusGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AdmissionEnquiry } from './components/AdmissionEnquiry';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';
import { NineDExperienceModal } from './components/NineDExperienceModal';
import { CourseLevel, SiteSettings } from './types';
import { Sparkles, Phone, MessageSquare } from 'lucide-react';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<CourseLevel | null>(null);
  const [enquiryCourseName, setEnquiryCourseName] = useState<string>('CA Foundation');
  const [adminOpen, setAdminOpen] = useState(false);
  const [nineDModalOpen, setNineDModalOpen] = useState(false);

  // Live site settings from API
  const [siteSettings, setSiteSettings] = useState<SiteSettings>({
    founderMessage: "Professional exams are not a test of mere memory—they are a test of resilience, conceptual clarity, and structured discipline. At AJ Classes, our mission is to eliminate fear, instill unshakeable confidence, and guide every student to the pinnacle of professional excellence.",
    announcementBanner: "Admissions Open for CA / CS / CMA New Batches | Free Counseling & Demo Classes Available at Surat Campus",
    announcementActive: true,
    phone: "079843 44294",
    address: "2nd Floor, Kabootar Circle, AJ Classes, Aai Mata Road, Above Shopping Basti, Near Annapurna Poojan Store, Surat, Gujarat 395010, India.",
    businessHours: "Monday to Saturday: 8:00 AM – 8:30 PM | Sunday: 9:00 AM – 1:00 PM"
  });

  const loadSettings = async () => {
    try {
      const res = await fetch('/api/content');
      const data = await res.json();
      if (res.ok && data.success && data.settings) {
        setSiteSettings(data.settings);
      }
    } catch {
      // fallback to initial settings
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const scrollToEnquiry = (courseName?: string) => {
    if (courseName) {
      setEnquiryCourseName(courseName);
    }
    const elem = document.getElementById('enquire');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCourses = () => {
    const elem = document.getElementById('courses');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-[#E5E7EB] font-sans selection:bg-[#D6B779]/30 selection:text-[#F7F4EC]">
      {/* Top Announcement Bar (if active) */}
      {siteSettings.announcementActive && siteSettings.announcementBanner && (
        <div className="relative z-50 bg-gradient-to-r from-[#10182B] via-[#1A2642] to-[#10182B] border-b border-[#D6B779]/30 py-2 px-4 text-center">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-[11px] sm:text-xs font-mono-luxury tracking-wide text-[#F7F4EC]">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B779] shrink-0" />
            <span className="truncate">{siteSettings.announcementBanner}</span>
            <span aria-hidden="true" className="hidden sm:inline text-[#D6B779]">·</span>
            <a
              href="tel:07984344294"
              className="hidden sm:inline text-[#D6B779] hover:underline whitespace-nowrap font-semibold"
            >
              Call: {siteSettings.phone}
            </a>
          </div>
        </div>
      )}

      {/* Floating Top Navigation */}
      <Navbar
        onOpenEnquiry={() => scrollToEnquiry()}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Cinematic Hero Section with 3D Kinetic Sculpture */}
        <Hero
          onExploreCourses={scrollToCourses}
          onTalkToExpert={() => scrollToEnquiry()}
          onOpenExperienceModal={() => setNineDModalOpen(true)}
        />

        {/* 2. Credibility & Verified Reviews Section */}
        <Credibility />

        {/* 3. Comprehensive Courses Exploration */}
        <CoursesSection
          onSelectCourse={(course) => setSelectedCourse(course)}
          onEnquireCourse={(cName) => scrollToEnquiry(cName)}
        />

        {/* 4. Founder Profile & Verified Milestones */}
        <FounderSection
          founderMessage={siteSettings.founderMessage}
          onTalkToFounder={() => scrollToEnquiry('Founder Mentorship')}
        />

        {/* 5. Why Choose AJ Classes (8 Verified USPs) */}
        <WhyChooseUs />

        {/* 6. Campus & Learning Environment Gallery */}
        <CampusGallery />

        {/* 7. Student Voices & Verified Testimonials */}
        <TestimonialsSection />

        {/* 8. Functional Admission Enquiry System */}
        <AdmissionEnquiry
          initialCourse={enquiryCourseName}
          onSuccess={() => {
            // refresh data if needed
          }}
        />

        {/* 9. Contact & Surat Campus Directions */}
        <ContactSection
          settings={siteSettings}
          onEnquireNow={() => scrollToEnquiry()}
        />
      </main>

      {/* Footer */}
      <Footer
        settings={siteSettings}
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenEnquiry={() => scrollToEnquiry()}
      />

      {/* Course Detail Modal */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onApplyForCourse={(name) => scrollToEnquiry(name)}
      />

      {/* 9D Multi-Layered Pedagogy Modal */}
      <NineDExperienceModal
        isOpen={nineDModalOpen}
        onClose={() => setNineDModalOpen(false)}
        onEnquire={() => scrollToEnquiry()}
      />

      {/* Admin Control Center Modal */}
      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        onSettingsUpdated={loadSettings}
      />

      {/* Floating Quick Action Widget (WhatsApp & Call) */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <a
          href="https://wa.me/917984344294?text=Hello%20AJ%20Classes%2C%20I%20would%20like%20to%20enquire%20about%20admissions"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
          title="Instant WhatsApp Enquiry"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
        <a
          href="tel:07984344294"
          className="w-12 h-12 rounded-full bg-[#D6B779] text-[#08090D] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
          title="Direct Admissions Call (079843 44294)"
        >
          <Phone className="w-5 h-5 font-bold" />
        </a>
      </aside>
    </div>
  );
}
