export interface CourseLevel {
  id: string;
  name: string;
  subtitle: string;
  category: 'CA' | 'CS' | 'CMA' | 'GLOBAL';
  eligibility: string;
  duration: string;
  description: string;
  keySubjects: string[];
  features: string[];
  careerOpportunities: string[];
  examBody: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  rating: number;
  quote: string;
  verifiedReview: boolean;
  source: 'Google Reviews' | 'Direct Student Feedback';
  date?: string;
}

export interface Milestone {
  yearOrAge: string;
  title: string;
  subtitle: string;
  description: string;
  recordBadge?: string;
}

export interface EnquirySubmission {
  fullName: string;
  mobile: string;
  email: string;
  course: string;
  educationLevel: string;
  message: string;
}

export interface EnquiryRecord extends EnquirySubmission {
  id: string;
  status: 'new' | 'contacted' | 'enrolled' | 'archived';
  createdAt: string;
}

export interface SiteSettings {
  founderMessage: string;
  announcementBanner: string;
  announcementActive: boolean;
  phone: string;
  address: string;
  businessHours: string;
}
