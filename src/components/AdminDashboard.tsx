import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  LogOut,
  Search,
  Filter,
  Download,
  CheckCircle,
  Clock,
  Trash2,
  Save,
  Users,
  Settings,
  Shield,
  FileSpreadsheet,
  AlertTriangle,
  RefreshCw,
  PhoneCall,
  Mail,
  BookOpen
} from 'lucide-react';
import { EnquiryRecord, SiteSettings } from '../types';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  onSettingsUpdated?: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  onSettingsUpdated,
}) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('aj_admin_token'));
  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);

  // Dashboard Data State
  const [activeTab, setActiveTab] = useState<'enquiries' | 'settings'>('enquiries');
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [loadingData, setLoadingData] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [courseFilter, setCourseFilter] = useState<string>('all');

  // Settings State
  const [settings, setSettings] = useState<SiteSettings>({
    founderMessage: '',
    announcementBanner: '',
    announcementActive: true,
    phone: '079843 44294',
    address: '2nd Floor, Kabootar Circle, AJ Classes, Aai Mata Road, Above Shopping Basti, Near Annapurna Poojan Store, Surat, Gujarat 395010, India.',
    businessHours: 'Monday to Saturday: 8:00 AM – 8:30 PM | Sunday: 9:00 AM – 1:00 PM',
  });
  const [newPin, setNewPin] = useState('');
  const [savingSettings, setSavingSettings] = useState(false);
  const [settingsSuccess, setSettingsSuccess] = useState(false);

  // Fetch Enquiries
  const fetchEnquiries = async (authToken: string) => {
    setLoadingData(true);
    try {
      const res = await fetch('/api/admin/enquiries', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setEnquiries(data.enquiries || []);
      } else {
        if (res.status === 401) {
          handleLogout();
        }
      }
    } catch (err) {
      console.error('Error fetching enquiries:', err);
    } finally {
      setLoadingData(false);
    }
  };

  // Fetch Settings
  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/content');
      const data = await res.json();
      if (res.ok && data.success && data.settings) {
        setSettings(data.settings);
      }
    } catch (err) {
      console.error('Error fetching settings:', err);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchSettings();
      if (token) {
        fetchEnquiries(token);
      }
    }
  }, [isOpen, token]);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoginLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: pinInput }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Authentication failed. Please verify credentials.');
      }

      setToken(data.token);
      localStorage.setItem('aj_admin_token', data.token);
      setPinInput('');
      fetchEnquiries(data.token);
    } catch (err: any) {
      setLoginError(err.message || 'Login failed.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('aj_admin_token');
    setEnquiries([]);
  };

  // Status Change
  const handleStatusChange = async (id: string, newStatus: string) => {
    if (!token) return;
    try {
      const res = await fetch(`/api/admin/enquiries/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status: newStatus as any } : e))
        );
      }
    } catch (err) {
      console.error('Failed to update enquiry status:', err);
    }
  };

  // Delete Enquiry
  const handleDeleteEnquiry = async (id: string) => {
    if (!token) return;
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;

    try {
      const res = await fetch(`/api/admin/enquiries/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setEnquiries((prev) => prev.filter((e) => e.id !== id));
      }
    } catch (err) {
      console.error('Failed to delete enquiry:', err);
    }
  };

  // Save Settings
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setSavingSettings(true);
    setSettingsSuccess(false);

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          settings,
          newPin: newPin || undefined,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSettingsSuccess(true);
        setNewPin('');
        if (onSettingsUpdated) onSettingsUpdated();
        setTimeout(() => setSettingsSuccess(false), 4000);
      }
    } catch (err) {
      console.error('Error saving settings:', err);
    } finally {
      setSavingSettings(false);
    }
  };

  // Export Enquiries as CSV
  const handleExportCSV = () => {
    if (enquiries.length === 0) return;
    const headers = ['ID', 'Full Name', 'Mobile', 'Email', 'Course', 'Education Level', 'Status', 'Date', 'Message'];
    const rows = enquiries.map((e) => [
      `"${e.id}"`,
      `"${e.fullName}"`,
      `"${e.mobile}"`,
      `"${e.email}"`,
      `"${e.course}"`,
      `"${e.educationLevel}"`,
      `"${e.status}"`,
      `"${new Date(e.createdAt).toLocaleString()}"`,
      `"${(e.message || '').replace(/"/g, '""')}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `aj_classes_enquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  // Filtered enquiries
  const filteredEnquiries = enquiries.filter((item) => {
    const matchesSearch =
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mobile.includes(searchQuery) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.course.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesCourse = courseFilter === 'all' || item.course === courseFilter;

    return matchesSearch && matchesStatus && matchesCourse;
  });

  const newCount = enquiries.filter((e) => e.status === 'new').length;
  const contactedCount = enquiries.filter((e) => e.status === 'contacted').length;
  const enrolledCount = enquiries.filter((e) => e.status === 'enrolled').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div
        className="relative w-full max-w-6xl max-h-[94vh] bg-[#090D17] border border-[#D6B779]/40 rounded-sm shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#10182B] via-[#0E1528] to-[#0A0F1D] border-b border-[#D6B779]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-[#121A2D] border border-[#D6B779]/40 flex items-center justify-center text-[#D6B779]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#F7F4EC]">
                AJ Classes Executive Control Center
              </h3>
              <p className="text-xs text-[#969AA5] font-mono-luxury">
                Aditya Jhawar Education · Secure Administrative Suite
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {token && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[#26324A] text-xs font-semibold text-[#969AA5] hover:text-rose-400 hover:border-rose-500/40 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#162035] text-[#969AA5] hover:text-white hover:bg-[#202C48] transition-colors"
              aria-label="Close admin modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auth Screen (If not logged in) */}
        {!token ? (
          <div className="p-8 sm:p-12 max-w-md mx-auto w-full my-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#10182B] border border-[#D6B779]/40 flex items-center justify-center mx-auto text-[#D6B779]">
              <Lock className="w-7 h-7" />
            </div>

            <div>
              <h4 className="text-xl font-serif font-bold text-[#F7F4EC] mb-2">
                Restricted Administrative Access
              </h4>
              <p className="text-xs text-[#969AA5] leading-relaxed">
                Please enter your authorized security key or administrative PIN to manage admissions, update syllabus configurations, and edit site announcements.
              </p>
            </div>

            {loginError && (
              <div className="p-3 rounded-sm bg-rose-950/70 border border-rose-500/50 text-xs text-rose-300">
                {loginError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter Security PIN (e.g. AJ@2026)"
                  required
                  className="w-full px-4 py-3 rounded-sm bg-[#0B0F1A] border border-[#222E47] text-sm text-[#F7F4EC] text-center placeholder-zinc-600 focus:outline-none focus:border-[#D6B779]"
                />
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3 rounded-sm bg-gradient-to-r from-[#D6B779] to-[#C49B55] text-[#08090D] font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity disabled:opacity-50"
              >
                {loginLoading ? 'Verifying Session...' : 'Authenticate & Unlock'}
              </button>

              <div className="p-3 rounded-sm bg-[#10182B]/60 border border-[#1E283D] text-[11px] text-[#969AA5] font-mono-luxury">
                <span className="text-[#D6B779]">Verification Helper:</span> Default master key is <code className="text-[#F7F4EC] bg-black/40 px-1 py-0.5 rounded">AJ@2026</code>
              </div>
            </form>
          </div>
        ) : (
          /* Logged In Dashboard View */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Stat Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:px-6 bg-[#0B0F1A] border-b border-[#1A253C]">
              <div className="p-3 rounded-sm bg-[#101729] border border-[#1C253B]">
                <span className="text-[10px] font-mono-luxury uppercase text-[#969AA5]">Total Leads</span>
                <div className="text-xl font-bold font-serif text-[#F7F4EC] tabular-nums mt-0.5">
                  {enquiries.length}
                </div>
              </div>
              <div className="p-3 rounded-sm bg-[#101729] border border-[#1C253B]">
                <span className="text-[10px] font-mono-luxury uppercase text-amber-400">New & Pending</span>
                <div className="text-xl font-bold font-serif text-amber-400 tabular-nums mt-0.5">
                  {newCount}
                </div>
              </div>
              <div className="p-3 rounded-sm bg-[#101729] border border-[#1C253B]">
                <span className="text-[10px] font-mono-luxury uppercase text-blue-400">Counseling Active</span>
                <div className="text-xl font-bold font-serif text-blue-400 tabular-nums mt-0.5">
                  {contactedCount}
                </div>
              </div>
              <div className="p-3 rounded-sm bg-[#101729] border border-[#1C253B]">
                <span className="text-[10px] font-mono-luxury uppercase text-emerald-400">Enrolled Scholars</span>
                <div className="text-xl font-bold font-serif text-emerald-400 tabular-nums mt-0.5">
                  {enrolledCount}
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-[#1A253C] bg-[#090D17] px-6">
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === 'enquiries'
                    ? 'border-[#D6B779] text-[#D6B779]'
                    : 'border-transparent text-[#969AA5] hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Admission Enquiries ({enquiries.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === 'settings'
                    ? 'border-[#D6B779] text-[#D6B779]'
                    : 'border-transparent text-[#969AA5] hover:text-white'
                }`}
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Site Content & Announcements</span>
              </button>
            </div>

            {/* Tab 1: Enquiries Manager */}
            {activeTab === 'enquiries' && (
              <div className="flex-1 flex flex-col p-4 sm:p-6 overflow-hidden">
                {/* Search & Actions Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex flex-wrap items-center gap-3 flex-1">
                    <div className="relative min-w-[220px] max-w-xs">
                      <Search className="w-4 h-4 text-[#969AA5] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search student, mobile, course..."
                        className="w-full pl-9 pr-3 py-2 rounded-sm bg-[#0B0F1A] border border-[#222E47] text-xs text-[#F7F4EC] placeholder-zinc-600 focus:outline-none focus:border-[#D6B779]"
                      />
                    </div>

                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-3 py-2 rounded-sm bg-[#0B0F1A] border border-[#222E47] text-xs text-[#E5E7EB] focus:outline-none focus:border-[#D6B779]"
                    >
                      <option value="all">All Statuses</option>
                      <option value="new">New Only</option>
                      <option value="contacted">Contacted</option>
                      <option value="enrolled">Enrolled</option>
                      <option value="archived">Archived</option>
                    </select>

                    <button
                      onClick={() => fetchEnquiries(token)}
                      title="Refresh Leads"
                      className="p-2 rounded-sm bg-[#111728] border border-[#222E47] text-[#969AA5] hover:text-white"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${loadingData ? 'animate-spin' : ''}`} />
                    </button>
                  </div>

                  <button
                    onClick={handleExportCSV}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-sm bg-[#12192B] border border-[#D6B779]/40 text-xs font-semibold text-[#D6B779] hover:bg-[#D6B779] hover:text-black transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export CSV</span>
                  </button>
                </div>

                {/* Table View */}
                <div className="flex-1 overflow-auto border border-[#1A253C] rounded-sm bg-[#0B0F1A]">
                  <table className="w-full text-left text-xs text-[#E5E7EB]">
                    <thead className="bg-[#101729] text-[#969AA5] uppercase font-mono-luxury sticky top-0 border-b border-[#1A253C]">
                      <tr>
                        <th className="py-3 px-4">Student</th>
                        <th className="py-3 px-4">Contact</th>
                        <th className="py-3 px-4">Course & Education</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#161F33]">
                      {filteredEnquiries.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="py-12 text-center text-[#969AA5]">
                            {loadingData ? 'Loading enquiries from database...' : 'No enquiries match your search criteria.'}
                          </td>
                        </tr>
                      ) : (
                        filteredEnquiries.map((enq) => (
                          <tr key={enq.id} className="hover:bg-[#121A2D]/50 transition-colors">
                            <td className="py-3 px-4">
                              <span className="font-semibold text-[#F7F4EC] block">{enq.fullName}</span>
                              <span className="text-[10px] text-[#969AA5] font-mono-luxury">{enq.id}</span>
                            </td>
                            <td className="py-3 px-4 space-y-0.5">
                              <div className="flex items-center gap-1.5 text-xs text-[#E5E7EB]">
                                <PhoneCall className="w-3 h-3 text-[#D6B779]" />
                                <a href={`tel:${enq.mobile}`} className="hover:underline">{enq.mobile}</a>
                              </div>
                              <div className="flex items-center gap-1.5 text-[11px] text-[#969AA5]">
                                <Mail className="w-3 h-3" />
                                <span>{enq.email}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <span className="font-medium text-[#D6B779] block">{enq.course}</span>
                              <span className="text-[11px] text-[#969AA5]">{enq.educationLevel}</span>
                              {enq.message && (
                                <p className="text-[11px] text-zinc-400 italic line-clamp-1 mt-0.5">
                                  "{enq.message}"
                                </p>
                              )}
                            </td>
                            <td className="py-3 px-4">
                              <select
                                value={enq.status}
                                onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                                className={`px-2 py-1 rounded text-[11px] font-semibold uppercase font-mono-luxury border cursor-pointer ${
                                  enq.status === 'new'
                                    ? 'bg-amber-950/60 text-amber-400 border-amber-500/40'
                                    : enq.status === 'contacted'
                                    ? 'bg-blue-950/60 text-blue-400 border-blue-500/40'
                                    : enq.status === 'enrolled'
                                    ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40'
                                    : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                                }`}
                              >
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="enrolled">Enrolled</option>
                                <option value="archived">Archived</option>
                              </select>
                            </td>
                            <td className="py-3 px-4 font-mono-luxury text-[11px] text-[#969AA5] whitespace-nowrap">
                              {new Date(enq.createdAt).toLocaleDateString()}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <button
                                onClick={() => handleDeleteEnquiry(enq.id)}
                                className="p-1.5 text-[#969AA5] hover:text-rose-400 rounded transition-colors"
                                title="Delete enquiry"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 2: Site Settings & Announcements */}
            {activeTab === 'settings' && (
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                <form onSubmit={handleSaveSettings} className="max-w-3xl space-y-6">
                  {settingsSuccess && (
                    <div className="p-3.5 rounded-sm bg-emerald-950/70 border border-emerald-500/50 text-xs text-emerald-300 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Institute settings and announcements have been updated and persisted to db.json.</span>
                    </div>
                  )}

                  {/* Announcement Banner */}
                  <div className="space-y-3 p-5 rounded-sm bg-[#101729] border border-[#1C253B]">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono-luxury uppercase tracking-wider text-[#D6B779] font-bold">
                        Top Announcement Banner Text
                      </label>
                      <label className="flex items-center gap-2 text-xs text-[#969AA5] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.announcementActive}
                          onChange={(e) => setSettings({ ...settings, announcementActive: e.target.checked })}
                          className="rounded"
                        />
                        <span>Banner Active</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      value={settings.announcementBanner}
                      onChange={(e) => setSettings({ ...settings, announcementBanner: e.target.value })}
                      placeholder="e.g. Admissions Open for CA / CS / CMA New Batches"
                      className="w-full px-4 py-2.5 rounded-sm bg-[#0B0F1A] border border-[#222E47] text-xs text-[#F7F4EC] focus:outline-none focus:border-[#D6B779]"
                    />
                  </div>

                  {/* Founder's Message */}
                  <div className="space-y-2 p-5 rounded-sm bg-[#101729] border border-[#1C253B]">
                    <label className="text-xs font-mono-luxury uppercase tracking-wider text-[#D6B779] font-bold">
                      Founder's Personal Statement & Philosophy
                    </label>
                    <p className="text-xs text-[#969AA5]">
                      Displayed on the Founder section of the homepage under Aditya Jhawar’s portrait.
                    </p>
                    <textarea
                      rows={4}
                      value={settings.founderMessage}
                      onChange={(e) => setSettings({ ...settings, founderMessage: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm bg-[#0B0F1A] border border-[#222E47] text-xs text-[#F7F4EC] focus:outline-none focus:border-[#D6B779] resize-none"
                    />
                  </div>

                  {/* Campus Address & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 p-4 rounded-sm bg-[#101729] border border-[#1C253B]">
                      <label className="text-xs font-mono-luxury uppercase tracking-wider text-[#D6B779] font-bold">
                        Admissions Phone
                      </label>
                      <input
                        type="text"
                        value={settings.phone}
                        onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-sm bg-[#0B0F1A] border border-[#222E47] text-xs text-[#F7F4EC]"
                      />
                    </div>

                    <div className="space-y-2 p-4 rounded-sm bg-[#101729] border border-[#1C253B]">
                      <label className="text-xs font-mono-luxury uppercase tracking-wider text-[#D6B779] font-bold">
                        Business Hours
                      </label>
                      <input
                        type="text"
                        value={settings.businessHours}
                        onChange={(e) => setSettings({ ...settings, businessHours: e.target.value })}
                        className="w-full px-3 py-2 rounded-sm bg-[#0B0F1A] border border-[#222E47] text-xs text-[#F7F4EC]"
                      />
                    </div>
                  </div>

                  {/* Change Security PIN */}
                  <div className="space-y-2 p-5 rounded-sm bg-[#101729] border border-[#1C253B]">
                    <label className="text-xs font-mono-luxury uppercase tracking-wider text-[#D6B779] font-bold">
                      Update Security PIN / Master Password
                    </label>
                    <input
                      type="password"
                      value={newPin}
                      onChange={(e) => setNewPin(e.target.value)}
                      placeholder="Leave blank to keep current PIN"
                      className="w-full px-4 py-2.5 rounded-sm bg-[#0B0F1A] border border-[#222E47] text-xs text-[#F7F4EC] max-w-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={savingSettings}
                    className="px-6 py-3 rounded-sm bg-gradient-to-r from-[#D6B779] to-[#C49B55] text-[#08090D] font-bold text-xs uppercase tracking-wider hover:opacity-95 flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>{savingSettings ? 'Saving to Database...' : 'Save All Settings'}</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
