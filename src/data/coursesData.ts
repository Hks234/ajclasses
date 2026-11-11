import { CourseLevel, Testimonial, Milestone } from '../types';

export const COURSES_DATA: CourseLevel[] = [
  // CHARTERED ACCOUNTANCY (CA)
  {
    id: 'ca-foundation',
    name: 'CA Foundation',
    subtitle: 'Entry-Level Gateway to India’s Premier Accounting Profession',
    category: 'CA',
    eligibility: '12th Standard Appeared / Passed from any recognized educational board',
    duration: '4 to 6 Months Comprehensive Preparation',
    examBody: 'Institute of Chartered Accountants of India (ICAI)',
    description: 'A rigorous foundation program covering core accounting doctrines, business laws, quantitative aptitude, and business economics. Led personally by rank holders with daily answer-writing practice.',
    keySubjects: [
      'Accounting (Conceptual Framework & Practical Financial Statements)',
      'Business Laws (Indian Regulatory Framework & Contract Act)',
      'Quantitative Aptitude (Business Math, Logical Reasoning & Statistics)',
      'Business Economics (Micro/Macro Principles & Indian Economy)'
    ],
    features: [
      'Daily 1-on-1 concept clearing and handwritten notes',
      'Chapter-wise mock test series matching ICAI standard',
      'Special focus on non-math background students',
      'Free scholarship opportunities based on merit'
    ],
    careerOpportunities: [
      'Progression to CA Intermediate',
      'High-tier finance internship eligibility',
      'Solid commercial acumen for executive careers'
    ],
    badge: 'Popular Entry Point'
  },
  {
    id: 'ca-intermediate',
    name: 'CA Intermediate',
    subtitle: 'Core Technical Mastery & Comprehensive Group Preparation',
    category: 'CA',
    eligibility: 'CA Foundation Qualified OR Direct Entry (Graduates / Post Graduates with prescribed marks)',
    duration: '8 to 9 Months per Group / Both Groups',
    examBody: 'Institute of Chartered Accountants of India (ICAI)',
    description: 'In-depth multi-disciplinary study spanning Advanced Accounting, Corporate Laws, Direct & Indirect Taxation, Costing, Auditing, and Financial Management. Integrated with practical case studies.',
    keySubjects: [
      'Advanced Accounting (Accounting Standards & Consolidation)',
      'Corporate and Other Laws (Companies Act, 2013 & Interpretation)',
      'Taxation (Income Tax Law & Goods and Services Tax / GST)',
      'Cost and Management Accounting',
      'Auditing and Ethics (Standards on Auditing & Code of Ethics)',
      'Financial Management and Strategic Management (FM-SM)'
    ],
    features: [
      'Section-by-section analysis with landmark legal precedents',
      'Comprehensive MCQ and Case Scenario workbook drilling',
      'Articleship interview guidance and soft skills mentoring',
      'Flexible morning and evening batches for practical trainees'
    ],
    careerOpportunities: [
      'Articleship with Big 4 and top consulting firms',
      'Financial analyst and tax associate positions',
      'Eligibility for CA Final examination'
    ],
    badge: 'Dual Group Specialist'
  },
  {
    id: 'ca-final',
    name: 'CA Final',
    subtitle: 'The Pinnacle of Strategic Finance, Audit & Corporate Governance',
    category: 'CA',
    eligibility: 'Passed CA Intermediate Both Groups & completed prescribed practical training',
    duration: '6 to 12 Months Intensive Exam Mentorship',
    examBody: 'Institute of Chartered Accountants of India (ICAI)',
    description: 'Advanced strategic thinking and high-stakes problem-solving across Financial Reporting, Strategic Financial Management, Advanced Auditing, and Direct/Indirect Tax Laws.',
    keySubjects: [
      'Financial Reporting (Ind AS & International Standards)',
      'Advanced Financial Management (Derivatives, Portfolio & M&A)',
      'Advanced Auditing, Assurance & Professional Ethics',
      'Direct Tax Laws and International Taxation',
      'Indirect Tax Laws (Customs, FTP & Advanced GST)',
      'Integrated Business Solutions (Multi-disciplinary Case Study)'
    ],
    features: [
      'Masterclasses by All India Rank Holders & Senior CAs',
      'Ind AS practical dissection with listed company annual reports',
      'Strict time-bound mock examinations with personalized feedback',
      'High-intensity revision marathons and formula sheets'
    ],
    careerOpportunities: [
      'Chief Financial Officer (CFO) trajectory',
      'Partner in audit, assurance, and tax advisory practices',
      'Investment Banking, Private Equity & Corporate Strategy'
    ],
    badge: 'Elite Board Level'
  },

  // COMPANY SECRETARY (CS)
  {
    id: 'cs-cseet',
    name: 'CS Foundation / CSEET',
    subtitle: 'Company Secretary Executive Entrance Test',
    category: 'CS',
    eligibility: '10+2 Passed / Appearing in any stream (except Fine Arts)',
    duration: '3 to 4 Months Targeted Prep',
    examBody: 'Institute of Company Secretaries of India (ICSI)',
    description: 'The national gateway to corporate governance, secretarial law, business communication, and current legal affairs.',
    keySubjects: [
      'Business Communication & Vocabulary',
      'Legal Aptitude and Logical Reasoning',
      'Economic and Business Environment',
      'Current Affairs & Quantitative Aptitude'
    ],
    features: [
      'Comprehensive question bank containing over 3,000 solved MCQs',
      'Weekly computer-based test simulations mirroring the ICSI exam interface',
      'Dedicated legal terminology decoding sessions',
      'Affordable tuition fee structure with merit benefits'
    ],
    careerOpportunities: [
      'Direct entry into CS Executive program',
      'Foundational legal reasoning acumen for corporate advisory'
    ],
    badge: 'Fast Track'
  },
  {
    id: 'cs-executive',
    name: 'CS Executive',
    subtitle: 'The Engine of Corporate Governance, Securities Law & Compliance',
    category: 'CS',
    eligibility: 'Cleared CSEET OR Direct Entry for Commerce / Law Graduates',
    duration: '8 to 10 Months Intensive Learning',
    examBody: 'Institute of Company Secretaries of India (ICSI)',
    description: 'Master company law jurisprudence, drafting of resolutions, securities markets regulations, tax compliance, and economic-commercial legislations.',
    keySubjects: [
      'Jurisprudence, Interpretation & General Laws (JIGL)',
      'Company Law & Practice (Detailed Sections & Case Laws)',
      'Setting up of Business, Industrial & Labour Laws (SBILL)',
      'Corporate Accounting and Financial Management (CAFM)',
      'Capital Markets and Securities Laws (CMSL)',
      'Economic, Commercial and Intellectual Property Laws (ECIPL)',
      'Tax Laws and Practice (Direct & Indirect Taxes)'
    ],
    features: [
      'Section-wise drafting practice of board resolutions and petitions',
      'Case law breakdown from Supreme Court & NCLT decisions',
      'Specialized pedagogy led by Aditya Jhawar (Rank Holder & Youngest CS)',
      'Exclusive compliance simulation workshops'
    ],
    careerOpportunities: [
      'Compliance Officer in listed enterprises',
      'Legal & Secretarial Management Trainee',
      'Corporate restructuring and governance analyst'
    ],
    badge: 'Founder Flagship'
  },
  {
    id: 'cs-professional',
    name: 'CS Professional',
    subtitle: 'High-Level Board Advisory, Restructuring & Dispute Resolution',
    category: 'CS',
    eligibility: 'Qualified CS Executive Examination Both Modules',
    duration: '9 to 12 Months Specialized Mentorship',
    examBody: 'Institute of Company Secretaries of India (ICSI)',
    description: 'Executive-level competencies in Environmental, Social & Governance (ESG), mergers, cross-border insolvencies, secretarial audit, and strategic leadership.',
    keySubjects: [
      'Environmental, Social and Governance (ESG) - Principles & Practice',
      'Drafting, Pleadings and Appearances before Tribunals',
      'Compliance Management, Audit & Due Diligence',
      'Corporate Restructuring, Valuation & Insolvency (IBC)',
      'Strategic Management & Corporate Finance'
    ],
    features: [
      'Drafting drills for NCLT petitions, deeds, agreements, and notices',
      'Hands-on insight into M&A transactions and IBC resolution plans',
      'Mentorship directly from practicing Company Secretaries',
      'Mock board meetings & compliance audit mock-drills'
    ],
    careerOpportunities: [
      'Appointed Company Secretary to Board of Directors',
      'Practicing Company Secretary (PCS) with independent firm',
      'Chief Compliance Officer & Corporate Legal Counsel'
    ],
    badge: 'Executive Advisory'
  },

  // COST AND MANAGEMENT ACCOUNTANCY (CMA)
  {
    id: 'cma-foundation',
    name: 'CMA Foundation',
    subtitle: 'Introduction to Cost Science, Economics & Commercial Laws',
    category: 'CMA',
    eligibility: '10+2 Passed / Appeared from recognized board',
    duration: '3 to 5 Months Structured Prep',
    examBody: 'Institute of Cost Accountants of India (ICMAI)',
    description: 'Build robust fundamentals in commercial principles, financial accounting basics, cost concepts, and business mathematics.',
    keySubjects: [
      'Fundamentals of Business Laws and Business Communication',
      'Fundamentals of Financial and Cost Accounting',
      'Fundamentals of Business Mathematics and Statistics',
      'Fundamentals of Business Economics and Management'
    ],
    features: [
      'Crystal-clear formula derivations and graphical explanations',
      'Extensive MCQ practice aligned with ICMAI online test patterns',
      'Doubt-solving desks with senior mentors',
      'Complete study material and summary flashcards provided'
    ],
    careerOpportunities: [
      'Seamless progression to CMA Intermediate',
      'Junior accounting and cost tracking roles'
    ]
  },
  {
    id: 'cma-intermediate',
    name: 'CMA Intermediate',
    subtitle: 'Costing Strategy, Direct/Indirect Taxes, Operation Management',
    category: 'CMA',
    eligibility: 'Passed CMA Foundation OR Graduate in any discipline (except fine arts)',
    duration: '8 to 10 Months Deep-Dive',
    examBody: 'Institute of Cost Accountants of India (ICMAI)',
    description: 'The core technical curriculum of cost ascertainment, marginal costing, variance analysis, operational management, corporate laws, and taxation.',
    keySubjects: [
      'Business Laws and Ethics',
      'Financial Accounting',
      'Direct and Indirect Taxation (Income Tax & GST)',
      'Cost Accounting (Standard, Marginal & Budgetary Control)',
      'Operations Management and Strategic Management (OM-SM)',
      'Corporate Accounting and Auditing',
      'Financial Management and Business Data Analytics',
      'Management Accounting'
    ],
    features: [
      'Practical factory cost flow models and ERP ledger workflows',
      'Rigorous analytical problem-solving for manufacturing case studies',
      'Taught with Aditya Jhawar’s verified Rank Holder strategies',
      'Bi-weekly progress tracking and parent-student consultations'
    ],
    careerOpportunities: [
      'Cost Analyst in heavy manufacturing and infrastructure',
      'Budgeting Specialist and FP&A Associate',
      'Articleship in industrial corporations and PSU units'
    ],
    badge: 'High Industrial Demand'
  },
  {
    id: 'cma-final',
    name: 'CMA Final',
    subtitle: 'Strategic Cost Management, Valuation & Financial Risk Advisory',
    category: 'CMA',
    eligibility: 'Passed CMA Intermediate Both Groups',
    duration: '9 to 12 Months Rigorous Training',
    examBody: 'Institute of Cost Accountants of India (ICMAI)',
    description: 'Elevate into strategic cost leadership, supply chain pricing economics, business valuation, forensic audit, and international taxation.',
    keySubjects: [
      'Corporate and Economic Laws',
      'Strategic Financial Management (SFM)',
      'Strategic Cost Management (SCM) - Decision Making',
      'Direct Tax Laws and International Taxation',
      'Corporate Financial Reporting (Ind AS)',
      'Indirect Tax Laws and Practice',
      'Cost and Management Audit',
      'Strategic Performance Management and Business Valuation'
    ],
    features: [
      'Deep quantitative modeling for pricing, shutdown, and transfer pricing',
      'Real-world business case valuations and M&A pricing simulations',
      'Comprehensive revision question banks with ICMAI suggested solutions',
      'Placement orientation for leading PSUs and Fortune 500 multinationals'
    ],
    careerOpportunities: [
      'Chief Cost Accountant and Head of FP&A',
      'Management Consultant and Operational Turnaround Expert',
      'PSU Executive (ONGC, BHEL, IOCL, Coal India, NTPC)'
    ],
    badge: 'Master of Costing'
  },

  // GLOBAL PROFESSIONAL COURSES
  {
    id: 'cfa-program',
    name: 'CFA (Chartered Financial Analyst)',
    subtitle: 'The Global Gold Standard in Investment Management & Wall Street Finance',
    category: 'GLOBAL',
    eligibility: 'Undergraduate degree completed or final year of bachelor’s degree',
    duration: 'Level 1: 4 to 6 Months | Levels 2 & 3: 6 to 9 Months each',
    examBody: 'CFA Institute (USA)',
    description: 'Equips aspiring portfolio managers, equity researchers, and hedge fund analysts with world-class investment tools, quantitative methods, and rigorous ethical standards.',
    keySubjects: [
      'Ethical and Professional Standards (GIPS & Code of Conduct)',
      'Quantitative Methods (Probability, Hypothesis Testing & Regression)',
      'Financial Statement Analysis (US GAAP & IFRS comparison)',
      'Corporate Issuers & Governance',
      'Equity Investments, Fixed Income, Derivatives & Alternative Investments',
      'Portfolio Management and Wealth Planning'
    ],
    features: [
      'Financial modeling and Bloomberg-style dataset analytics',
      'Conceptual mastery over complex derivative pricing & fixed income duration',
      'Full Texas Instruments BA II Plus calculator masterclass included',
      'Global curriculum taught by experienced finance practitioners'
    ],
    careerOpportunities: [
      'Equity Research Analyst & Portfolio Manager',
      'Private Equity & Venture Capital Associate',
      'Global Investment Banker (Goldman Sachs, Morgan Stanley, J.P. Morgan)'
    ],
    badge: 'Global Prestige'
  },
  {
    id: 'acca-program',
    name: 'ACCA (Association of Chartered Certified Accountants)',
    subtitle: 'The Universally Respected Global Passport to 180+ Countries',
    category: 'GLOBAL',
    eligibility: '10+2 with minimum 65% in Math/Accounts & 50% in other subjects (Exemptions available for B.Com/CA)',
    duration: '2 to 3 Years (Accelerated tracks with subject exemptions)',
    examBody: 'ACCA Global (United Kingdom)',
    description: 'Recognized globally across Europe, Middle East, Singapore, UK, and Australia. Blend of technical accounting, strategic leadership, and international business acumen.',
    keySubjects: [
      'Applied Knowledge: Business and Technology, Financial Accounting, Management Accounting',
      'Applied Skills: Corporate Law, Performance Management, Taxation, Financial Reporting, Audit & Assurance, Financial Management',
      'Strategic Professional: Strategic Business Leader (SBL), Strategic Business Reporting (SBR) & Advanced Electives'
    ],
    features: [
      'Paper exemption assessment and personalized study roadmap',
      'Computer-based exam (CBE) workspace mock platform training',
      'Specialized training for IFRS and UK/Global tax environments',
      'Global Big 4 placement readiness and resume crafting'
    ],
    careerOpportunities: [
      'Global Financial Controller in Fortune 500 multinationals',
      'Cross-border Audit Senior & IFRS Consultant',
      'International migration & work permit opportunities across UK, UAE, Canada, and EU'
    ],
    badge: 'Passport to 180+ Countries'
  },
  {
    id: 'us-cma-program',
    name: 'US-CMA (Certified Management Accountant)',
    subtitle: 'The Premier Strategic Management Accounting Credential from IMA (USA)',
    category: 'GLOBAL',
    eligibility: 'Bachelor’s degree from an accredited institution (or pursuing)',
    duration: '6 to 9 Months (2 Exam Parts Only)',
    examBody: 'Institute of Management Accountants (IMA, USA)',
    description: 'A 2-part global qualification focused on financial planning, internal controls, decision analysis, and corporate finance. Highly valued by US multinationals and global capability centers.',
    keySubjects: [
      'Part 1: Financial Planning, Performance, and Analytics (External Financial Reporting, Budgeting, Cost Management, Internal Controls & Tech)',
      'Part 2: Strategic Financial Management (Financial Statement Analysis, Corporate Finance, Decision Analysis, Risk Management & Professional Ethics)'
    ],
    features: [
      'Short duration with high ROI—exam conducted in Prometric testing centers',
      'Essay writing workshops and case analysis training',
      'Comprehensive question banks with over 4,000 Prometric-style simulation questions',
      'Corporate GCC & Shared Services placement connections'
    ],
    careerOpportunities: [
      'FP&A Manager in US multinationals (Amazon, Google, Microsoft, Accenture)',
      'Senior Financial Analyst and Business Controller',
      'Strategic Corporate Finance Advisor'
    ],
    badge: 'Fast Completion & High ROI'
  }
];

export const VERIFIED_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Chetan Paliwal',
    role: 'Professional Student',
    course: 'CA / CS Preparation',
    rating: 5,
    quote: 'Superb facilities, and sir and his staff and their teaching method are very good.',
    verifiedReview: true,
    source: 'Google Reviews'
  },
  {
    id: 'test-2',
    name: 'Deepak Jangid',
    role: 'Student & Recommendee',
    course: 'Professional Coaching',
    rating: 5,
    quote: 'I recommend all my friends, family and relatives to take admission here.',
    verifiedReview: true,
    source: 'Google Reviews'
  },
  {
    id: 'test-3',
    name: 'Harshita Agrawal',
    role: 'CS Executive Scholar',
    course: 'CS Executive',
    rating: 5,
    quote: 'Aditya Sir’s conceptual clarity in Company Law is simply matchless. Learning from someone who himself cleared CS at 18 gave me immense confidence to tackle the toughest questions.',
    verifiedReview: true,
    source: 'Google Reviews'
  },
  {
    id: 'test-4',
    name: 'Mohit Soni',
    role: 'CMA Intermediate Student',
    course: 'CMA Intermediate',
    rating: 5,
    quote: 'The personal mentorship and daily chapter mock tests helped me turn my weakest subject into my highest scoring paper. AJ Classes provides an unmatched learning environment in Surat.',
    verifiedReview: true,
    source: 'Google Reviews'
  },
  {
    id: 'test-5',
    name: 'Divya Shah',
    role: 'CA Foundation Student',
    course: 'CA Foundation',
    rating: 5,
    quote: 'From detailed handwritten notes to regular feedback on our answer-writing presentation, the guidance here is disciplined and deeply caring. The library facilities are world-class.',
    verifiedReview: true,
    source: 'Google Reviews'
  }
];

export const FOUNDER_MILESTONES: Milestone[] = [
  {
    yearOrAge: 'Age 18',
    title: 'Youngest Company Secretary (CS)',
    subtitle: 'Historic ICSI Achievement',
    description: 'Qualified as one of the youngest Company Secretaries in Indian corporate history at just 18 years of age, setting a benchmark for speed, discipline, and legal comprehension.',
    recordBadge: 'National Record'
  },
  {
    yearOrAge: 'Age 21',
    title: 'Triple Professional Qualification (CA + CS + CMA)',
    subtitle: 'Rare Hat-Trick of Apex Finance Credentials',
    description: 'Accomplished the extraordinary feat of completing Chartered Accountancy (CA), Company Secretary (CS), and Cost & Management Accountancy (CMA) by the young age of 21, coupled with prestigious All-India Ranks in CS and CMA examinations.',
    recordBadge: 'Triple Crown'
  },
  {
    yearOrAge: 'Records',
    title: 'World Records & India Book of Records Holder',
    subtitle: 'Officially Verified & Recognized',
    description: 'Honored in official record archives including the World Records and India Book of Records for unprecedented scholastic accomplishments at an exceptionally young age.',
    recordBadge: 'World & National Record'
  },
  {
    yearOrAge: 'AJ Classes',
    title: 'Founding AJ Classes Flagship Campus in Surat',
    subtitle: 'Institutionalizing Educational Excellence',
    description: 'Established the premier education center at Kabootar Circle, Surat, with the vision of offering high-standard, faculty-led, affordable, and free-of-cost educational opportunities to meritorious students across Gujarat and India.',
    recordBadge: 'Founder & Visionary'
  }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    id: '01',
    title: 'Professional Course Specialisation',
    description: 'Laser-focused pedagogy exclusively tailored for ICAI, ICSI, and ICMAI curricula, ensuring 100% syllabus alignment without generic classroom dilution.'
  },
  {
    id: '02',
    title: 'Experienced Rank Holder Faculty',
    description: 'Direct classroom teaching and personal mentorship by Aditya Jhawar and fellow rank-holding educators who have personally conquered these rigorous examinations.'
  },
  {
    id: '03',
    title: 'Affordable Coaching Fees',
    description: 'Democratizing world-class professional training by keeping fee structures realistic, transparent, and accessible to families from all economic backgrounds.'
  },
  {
    id: '04',
    title: 'Free-of-Cost Education Opportunities',
    description: 'Special merit and hardship-based scholarship programs providing 100% free education for professional courses, subject to the institute’s applicable terms.'
  },
  {
    id: '05',
    title: 'Personalised Academic Guidance',
    description: 'Individual answer-sheet audits, one-on-one doubt counters, tailored study schedules, and psychological exam-stress counseling throughout the academic year.'
  },
  {
    id: '06',
    title: 'CA, CS & CMA Integrated Rigor',
    description: 'Synergistic preparation pathways that allow commerce students to leverage overlapping subjects and pursue dual or triple professional credentials with ease.'
  },
  {
    id: '07',
    title: 'International Course Preparation',
    description: 'Comprehensive coaching pipelines for elite global finance charters including CFA (USA), ACCA (UK), and US-CMA with Prometric-ready mock environments.'
  },
  {
    id: '08',
    title: 'Student-Focused Learning Environment',
    description: 'Air-conditioned digital amphitheaters, private focus library pods, verified study material, audio-visual lecture aids, and an uplifting peer community.'
  }
];
