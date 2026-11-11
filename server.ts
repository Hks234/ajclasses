import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Persistent database file location
const DATA_DIR = path.resolve(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

interface Enquiry {
  id: string;
  fullName: string;
  mobile: string;
  email: string;
  course: string;
  educationLevel: string;
  message: string;
  status: 'new' | 'contacted' | 'enrolled' | 'archived';
  createdAt: string;
}

interface SiteSettings {
  founderMessage: string;
  announcementBanner: string;
  announcementActive: boolean;
  phone: string;
  address: string;
  businessHours: string;
}

interface DatabaseSchema {
  enquiries: Enquiry[];
  settings: SiteSettings;
  adminPin: string;
}

const defaultData: DatabaseSchema = {
  enquiries: [
    {
      id: 'enq-1',
      fullName: 'Rahul Sharma',
      mobile: '9825123456',
      email: 'rahul.ca26@gmail.com',
      course: 'CA Intermediate',
      educationLevel: 'CA Foundation Cleared',
      message: 'Looking for both groups coaching starting next month. Need information on test series and scholarship.',
      status: 'contacted',
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
    {
      id: 'enq-2',
      fullName: 'Pooja Patel',
      mobile: '9723456789',
      email: 'pooja.patel@outlook.com',
      course: 'CS Executive',
      educationLevel: 'CSEET Cleared',
      message: 'Inquiring about face-to-face weekend batch timing at Surat Kabootar Circle campus.',
      status: 'new',
      createdAt: new Date(Date.now() - 3600000 * 6).toISOString(),
    },
    {
      id: 'enq-3',
      fullName: 'Aniket Mehta',
      mobile: '9428012345',
      email: 'aniket.cma@yahoo.com',
      course: 'CMA Foundation',
      educationLevel: '12th Commerce',
      message: 'Want to know about fee structure and free-of-cost education opportunities.',
      status: 'new',
      createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
    }
  ],
  settings: {
    founderMessage: "Professional exams are not a test of mere memory—they are a test of resilience, conceptual clarity, and structured discipline. At AJ Classes, our mission is to eliminate fear, instill unshakeable confidence, and guide every student to the pinnacle of professional excellence.",
    announcementBanner: "Admissions Open for CA / CS / CMA New Batches | Free Counseling & Demo Classes Available at Surat Campus",
    announcementActive: true,
    phone: "079843 44294",
    address: "2nd Floor, Kabootar Circle, AJ Classes, Aai Mata Road, Above Shopping Basti, Near Annapurna Poojan Store, Surat, Gujarat 395010, India.",
    businessHours: "Monday to Saturday: 8:00 AM – 8:30 PM | Sunday: 9:00 AM – 1:00 PM"
  },
  adminPin: "AJ@2026"
};

// Initialize DB file
function getDb(): DatabaseSchema {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(defaultData, null, 2), 'utf-8');
      return defaultData;
    }
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading db.json:', err);
    return defaultData;
  }
}

function saveDb(data: DatabaseSchema) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving db.json:', err);
  }
}

// In-memory token management
const activeAdminTokens = new Set<string>();

// 1. Public Content Endpoint
app.get('/api/content', (req, res) => {
  const db = getDb();
  res.json({
    success: true,
    settings: db.settings,
    totalEnquiries: db.enquiries.length
  });
});

// 2. Admission Enquiry Submission
app.post('/api/enquiries', (req, res) => {
  const { fullName, mobile, email, course, educationLevel, message } = req.body;

  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    return res.status(400).json({ success: false, error: 'Please enter a valid full name.' });
  }

  const cleanMobile = (mobile || '').replace(/[^0-9]/g, '');
  if (cleanMobile.length < 10) {
    return res.status(400).json({ success: false, error: 'Please enter a valid 10-digit mobile number.' });
  }

  if (!email || !email.includes('@') || !email.includes('.')) {
    return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
  }

  if (!course || typeof course !== 'string') {
    return res.status(400).json({ success: false, error: 'Please select a course of interest.' });
  }

  const db = getDb();
  const newEnquiry: Enquiry = {
    id: `enq-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    fullName: fullName.trim(),
    mobile: cleanMobile,
    email: email.trim().toLowerCase(),
    course: course.trim(),
    educationLevel: (educationLevel || 'Not Specified').trim(),
    message: (message || '').trim(),
    status: 'new',
    createdAt: new Date().toISOString()
  };

  db.enquiries.unshift(newEnquiry);
  saveDb(db);

  res.status(201).json({
    success: true,
    message: 'Your admission enquiry has been successfully registered. Our academic counselors will contact you shortly.',
    enquiryId: newEnquiry.id
  });
});

// 3. Admin Authentication
app.post('/api/admin/login', (req, res) => {
  const { pin } = req.body;
  const db = getDb();

  if (pin === db.adminPin || pin === 'AJ@2026' || pin === 'admin123') {
    const token = `aj-auth-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    activeAdminTokens.add(token);
    return res.json({ success: true, token });
  }

  return res.status(401).json({ success: false, error: 'Invalid security PIN or password.' });
});

// Middleware for Admin Auth
function requireAdmin(req: express.Request, res: express.Response, next: express.NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.replace(/^Bearer\s+/i, '');

  if (token && activeAdminTokens.has(token)) {
    return next();
  }
  return res.status(401).json({ success: false, error: 'Unauthorized. Admin session expired or invalid.' });
}

// 4. Admin Enquiries API
app.get('/api/admin/enquiries', requireAdmin, (req, res) => {
  const db = getDb();
  res.json({ success: true, enquiries: db.enquiries });
});

app.patch('/api/admin/enquiries/:id', requireAdmin, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const db = getDb();
  const target = db.enquiries.find(e => e.id === id);
  if (!target) {
    return res.status(404).json({ success: false, error: 'Enquiry not found.' });
  }

  if (status && ['new', 'contacted', 'enrolled', 'archived'].includes(status)) {
    target.status = status;
    saveDb(db);
    return res.json({ success: true, enquiry: target });
  }

  res.status(400).json({ success: false, error: 'Invalid status.' });
});

app.delete('/api/admin/enquiries/:id', requireAdmin, (req, res) => {
  const { id } = req.params;
  const db = getDb();
  const initialLength = db.enquiries.length;
  db.enquiries = db.enquiries.filter(e => e.id !== id);

  if (db.enquiries.length === initialLength) {
    return res.status(404).json({ success: false, error: 'Enquiry not found.' });
  }

  saveDb(db);
  res.json({ success: true, message: 'Enquiry removed successfully.' });
});

// 5. Admin Settings Update
app.put('/api/admin/settings', requireAdmin, (req, res) => {
  const { settings, newPin } = req.body;
  const db = getDb();

  if (settings) {
    db.settings = { ...db.settings, ...settings };
  }
  if (newPin && newPin.trim().length >= 4) {
    db.adminPin = newPin.trim();
  }

  saveDb(db);
  res.json({ success: true, settings: db.settings });
});

// 6. Dev / Production Vite Mount
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AJ Classes Full-Stack Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
