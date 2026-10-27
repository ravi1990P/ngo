export interface StoredInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'reviewed' | 'resolved';
}

export interface StoredVolunteer {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  interests: string[];
  availability: string;
  priorExperience?: string;
  registeredAt: string;
}

export interface StoredDonation {
  id: string;
  receiptNumber: string;
  donorName: string;
  email: string;
  phone: string;
  panNumber: string;
  amount: number;
  program: string;
  paymentMethod: string;
  timestamp: string;
}

const INQUIRIES_KEY = 'mgs_ngo_inquiries_v1';
const VOLUNTEERS_KEY = 'mgs_ngo_volunteers_v1';
const DONATIONS_KEY = 'mgs_ngo_donations_v1';

// Initial seed entries so the JSON is immediately populated and verifiable
const SEED_INQUIRIES: StoredInquiry[] = [
  {
    id: 'INQ-2026-1042',
    name: 'Virendra Singh Solanki',
    email: 'virendra.solanki@gmail.com',
    phone: '+91 94250 81234',
    subject: 'Village Support Request',
    message: 'Requesting society team to organize drinking water purification and child nutrition camp in Gram Jamli near Mhow.',
    submittedAt: '2026-10-24T10:15:00Z',
    status: 'reviewed'
  },
  {
    id: 'INQ-2026-1043',
    name: 'Anjali Sharma',
    email: 'anjali.s@csrconnect.org',
    phone: '+91 98260 55432',
    subject: 'CSR / Institutional Partnership',
    message: 'Proposal from corporate foundation to co-fund 500 fruit-bearing saplings and watershed check-dams in Malwa.',
    submittedAt: '2026-10-25T14:30:00Z',
    status: 'new'
  }
];

export const getInquiries = (): StoredInquiry[] => {
  try {
    const raw = localStorage.getItem(INQUIRIES_KEY);
    if (!raw) {
      localStorage.setItem(INQUIRIES_KEY, JSON.stringify(SEED_INQUIRIES));
      return SEED_INQUIRIES;
    }
    return JSON.parse(raw);
  } catch {
    return SEED_INQUIRIES;
  }
};

export const saveInquiry = (inquiry: Omit<StoredInquiry, 'id' | 'submittedAt' | 'status'>): StoredInquiry => {
  const current = getInquiries();
  const newInquiry: StoredInquiry = {
    ...inquiry,
    id: `INQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    submittedAt: new Date().toISOString(),
    status: 'new'
  };
  const updated = [newInquiry, ...current];
  try {
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }
  return newInquiry;
};

export const downloadInquiriesJson = () => {
  const data = getInquiries();
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `mgs_ngo_enquiries_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const getVolunteers = (): StoredVolunteer[] => {
  try {
    const raw = localStorage.getItem(VOLUNTEERS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveVolunteer = (data: Omit<StoredVolunteer, 'id' | 'registeredAt'>): StoredVolunteer => {
  const current = getVolunteers();
  const newVol: StoredVolunteer = {
    ...data,
    id: `VOL-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    registeredAt: new Date().toISOString()
  };
  const updated = [newVol, ...current];
  try {
    localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
  return newVol;
};

export const downloadVolunteersJson = () => {
  const data = getVolunteers();
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `mgs_ngo_volunteers_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const getDonations = (): StoredDonation[] => {
  try {
    const raw = localStorage.getItem(DONATIONS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveDonationRecord = (data: StoredDonation) => {
  const current = getDonations();
  const updated = [data, ...current];
  try {
    localStorage.setItem(DONATIONS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
};

export const downloadDonationsJson = () => {
  const data = getDonations();
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `mgs_ngo_donations_80g_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
