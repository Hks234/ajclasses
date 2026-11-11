import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COURSES_DATA } from '../data/coursesData';

interface AdmissionEnquiryProps {
  initialCourse?: string;
  onSuccess?: () => void;
}

export const AdmissionEnquiry: React.FC<AdmissionEnquiryProps> = ({
  initialCourse = '',
  onSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(initialCourse || 'CA Foundation');
  const [educationLevel, setEducationLevel] = useState('12th Commerce');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{ id: string; name: string } | null>(null);

  // Sync if initialCourse changes externally
  React.useEffect(() => {
    if (initialCourse) {
      setCourse(initialCourse);
    }
  }, [initialCourse]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMsg('Please enter your full name (minimum 2 characters).');
      return;
    }

    const cleanMobile = mobile.replace(/[^0-9]/g, '');
    if (cleanMobile.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!course) {
      setErrorMsg('Please select your course of interest.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          mobile: cleanMobile,
          email,
          course,
          educationLevel,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit enquiry. Please try again.');
      }

      // Success
      setSubmittedData({
        id: data.enquiryId || 'enq-confirmed',
        name: fullName.trim(),
      });

      // Confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D6B779', '#F3E3B6', '#10182B', '#ffffff'],
        });
      } catch {
        // ignore if canvas not supported
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMsg(err.message || 'Network error occurred. Please contact us directly at 079843 44294.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setMobile('');
    setEmail('');
    setMessage('');
    setSubmittedData(null);
    setErrorMsg(null);
  };

  const whatsAppUrl = `https://wa.me/917984344294?text=${encodeURIComponent(
    `Hello AJ Classes! My name is ${fullName || 'Student'}. I am interested in joining ${course}. Please provide batch timings and fee details.`
  )}`;

  return (
    <section id="enquire" className="relative py-24 bg-[#08090D] border-b border-[#1A2234]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(214,183,121,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Direct Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-mono-luxury text-[#D6B779]">
                <Sparkles className="w-3.5 h-3.5 text-[#D6B779]" />
                <span>Admissions 2026-2027</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#F7F4EC] tracking-tight mb-4">
                TAKE THE FIRST STEP <br />
                <span className="italic font-serif gold-text-gradient">TOWARDS EXCELLENCE.</span>
              </h2>
              <p className="text-sm text-[#969AA5] leading-relaxed font-light">
                Secure your seat in our upcoming batches for CA, CS, CMA, and International Finance. Inquire today for personal academic counseling and scholarship evaluation.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:07984344294"
                className="glass-card p-5 rounded-sm border border-[#1E283D] hover:border-[#D6B779]/40 transition-colors flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-sm bg-[#121A2D] border border-[#232F4C] flex items-center justify-center text-[#D6B779] group-hover:border-[#D6B779]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-luxury uppercase tracking-wider text-[#969AA5] block">
                    Direct Admissions Hotline
                  </span>
                  <span className="text-base font-serif font-bold text-[#F7F4EC] group-hover:text-[#D6B779] transition-colors">
                    079843 44294
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/917984344294?text=Hello%20AJ%20Classes%2C%20I%20would%20like%20to%20enquire%20about%20admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-sm border border-[#1E283D] hover:border-[#25D366]/40 transition-colors flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-sm bg-[#121A2D] border border-[#232F4C] flex items-center justify-center text-[#25D366] group-hover:border-[#25D366]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-luxury uppercase tracking-wider text-[#969AA5] block">
                    Instant WhatsApp Support
                  </span>
                  <span className="text-base font-serif font-bold text-[#F7F4EC] group-hover:text-[#25D366] transition-colors">
                    Chat on WhatsApp (079843 44294)
                  </span>
                </div>
              </a>
            </div>

            {/* Scholarship Notice */}
            <div className="p-4 rounded-sm bg-[#111728] border border-[#D6B779]/30 text-xs text-[#969AA5] leading-relaxed">
              <strong className="text-[#D6B779] block mb-1">Free-of-Cost Education Opportunities:</strong>
              AJ Classes is dedicated to ensuring no deserving student is held back due to financial constraints. Inquire about our scholarship assessments.
            </div>
          </div>

          {/* Right Column: Admission Form / Success Screen (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-sm border border-[#D6B779]/30 relative shadow-2xl">
              {submittedData ? (
                /* Success Screen */
                <div className="text-center py-10 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#D6B779]/20 border border-[#D6B779] flex items-center justify-center mx-auto text-[#D6B779]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono-luxury uppercase tracking-widest text-[#D6B779] block mb-2">
                      Enquiry Registered
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#F7F4EC] mb-2">
                      Thank You, {submittedData.name}!
                    </h3>
                    <p className="text-sm text-[#969AA5] max-w-md mx-auto leading-relaxed">
                      Your admission enquiry has been securely logged in our academic system. Aditya Sir and our academic counselor will contact you at your mobile number.
                    </p>
                  </div>

                  <div className="p-4 rounded-sm bg-[#111728] border border-[#1E283D] max-w-md mx-auto text-xs text-left space-y-1 font-mono-luxury">
                    <div className="text-[#969AA5]">Reference ID: <span className="text-[#D6B779]">{submittedData.id}</span></div>
                    <div className="text-[#969AA5]">Selected Course: <span className="text-[#F7F4EC]">{course}</span></div>
                    <div className="text-[#969AA5]">Next Step: <span className="text-[#E5E7EB]">Counselor Callback within 24 Hours</span></div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-sm bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:opacity-95"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue on WhatsApp</span>
                    </a>

                    <button
                      onClick={handleReset}
                      className="px-6 py-3 rounded-sm border border-[#232F4A] text-xs font-semibold text-[#969AA5] hover:text-white transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Standard Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#1A2338] pb-4 mb-6">
                    <h3 className="text-xl font-serif font-bold text-[#F7F4EC]">
                      Admission & Counseling Form
                    </h3>
                    <p className="text-xs text-[#969AA5] mt-1">
                      Complete this form to receive syllabus copies, fee schedules, and demo lecture access.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-sm bg-rose-950/60 border border-rose-500/50 flex items-start gap-2.5 text-xs text-rose-200">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Full Name & Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-luxury uppercase tracking-wider text-[#969AA5] mb-2">
                        Full Name <span className="text-[#D6B779]">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        required
                        className="w-full px-4 py-3 rounded-sm bg-[#0B0F1A] border border-[#222E47] text-sm text-[#F7F4EC] placeholder-zinc-600 focus:outline-none focus:border-[#D6B779] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-luxury uppercase tracking-wider text-[#969AA5] mb-2">
                        Mobile Number <span className="text-[#D6B779]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="10-digit mobile (e.g. 9825012345)"
                        required
                        className="w-full px-4 py-3 rounded-sm bg-[#0B0F1A] border border-[#222E47] text-sm text-[#F7F4EC] placeholder-zinc-600 focus:outline-none focus:border-[#D6B779] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Education Level */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-luxury uppercase tracking-wider text-[#969AA5] mb-2">
                        Email Address <span className="text-[#D6B779]">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. rahul@example.com"
                        required
                        className="w-full px-4 py-3 rounded-sm bg-[#0B0F1A] border border-[#222E47] text-sm text-[#F7F4EC] placeholder-zinc-600 focus:outline-none focus:border-[#D6B779] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-luxury uppercase tracking-wider text-[#969AA5] mb-2">
                        Current Education Level
                      </label>
                      <select
                        value={educationLevel}
                        onChange={(e) => setEducationLevel(e.target.value)}
                        className="w-full px-4 py-3 rounded-sm bg-[#0B0F1A] border border-[#222E47] text-sm text-[#F7F4EC] focus:outline-none focus:border-[#D6B779] transition-colors cursor-pointer"
                      >
                        <option value="10th Standard">10th Standard</option>
                        <option value="11th Commerce">11th Commerce</option>
                        <option value="12th Commerce">12th Commerce</option>
                        <option value="B.Com / BBA Pursuing">B.Com / BBA Pursuing</option>
                        <option value="Commerce Graduate">Commerce Graduate</option>
                        <option value="CA / CS / CMA Intermediate Cleared">CA / CS / CMA Intermediate Cleared</option>
                        <option value="Working Professional">Working Professional</option>
                      </select>
                    </div>
                  </div>

                  {/* Course Interested In */}
                  <div>
                    <label className="block text-xs font-mono-luxury uppercase tracking-wider text-[#969AA5] mb-2">
                      Course Interested In <span className="text-[#D6B779]">*</span>
                    </label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-sm bg-[#0B0F1A] border border-[#222E47] text-sm text-[#F7F4EC] focus:outline-none focus:border-[#D6B779] transition-colors cursor-pointer"
                    >
                      <optgroup label="Chartered Accountancy (CA)">
                        <option value="CA Foundation">CA Foundation</option>
                        <option value="CA Intermediate">CA Intermediate</option>
                        <option value="CA Final">CA Final</option>
                      </optgroup>
                      <optgroup label="Company Secretary (CS)">
                        <option value="CS Foundation / CSEET">CS Foundation / CSEET</option>
                        <option value="CS Executive">CS Executive</option>
                        <option value="CS Professional">CS Professional</option>
                      </optgroup>
                      <optgroup label="Cost & Management Accountancy (CMA)">
                        <option value="CMA Foundation">CMA Foundation</option>
                        <option value="CMA Intermediate">CMA Intermediate</option>
                        <option value="CMA Final">CMA Final</option>
                      </optgroup>
                      <optgroup label="Global Professional Programs">
                        <option value="CFA (Chartered Financial Analyst)">CFA (Chartered Financial Analyst)</option>
                        <option value="ACCA (Global Chartered Accountant)">ACCA (Global Chartered Accountant)</option>
                        <option value="US-CMA (USA)">US-CMA (USA)</option>
                      </optgroup>
                    </select>
                  </div>

                  {/* Message / Specific Queries */}
                  <div>
                    <label className="block text-xs font-mono-luxury uppercase tracking-wider text-[#969AA5] mb-2">
                      Specific Inquiries / Scholarship Requests (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Mention your preferred batch timings, test series requirements, or scholarship queries..."
                      className="w-full px-4 py-3 rounded-sm bg-[#0B0F1A] border border-[#222E47] text-sm text-[#F7F4EC] placeholder-zinc-600 focus:outline-none focus:border-[#D6B779] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-sm bg-gradient-to-r from-[#D6B779] via-[#E8CF9B] to-[#C49B55] text-[#08090D] font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(214,183,121,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-[0.99]"
                    >
                      {loading ? (
                        <span>Submitting to Database...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Admission Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#969AA5] font-mono-luxury pt-2">
                    <span>* Zero spam guarantee</span>
                    <span>Direct WhatsApp: 079843 44294</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
