export interface Program {
  id: string;
  title: string;
  hindiTitle: string;
  category: 'nutrition' | 'rural' | 'education' | 'animal' | 'relief' | 'medical';
  shortDesc: string;
  fullDesc: string;
  keyHighlights: string[];
  impactMetric: string;
  impactLabel: string;
  location: string;
  featured: boolean;
  image: string;
  beneficiaryStory: {
    quote: string;
    person: string;
    village: string;
  };
}

export interface TimelineEvent {
  year: string;
  title: string;
  hindiTitle: string;
  description: string;
  keyDignitaries?: string[];
  significance: string;
}

export interface MentorOrLeader {
  name: string;
  title: string;
  role: string;
  bio: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'nutrition' | 'rural' | 'animal' | 'medical' | 'archival';
  year: string;
  location: string;
  description: string;
  caption: string;
  image: string;
}

export interface ImpactStory {
  id: string;
  name: string;
  age?: number;
  location: string;
  program: string;
  story: string;
  outcome: string;
  consentVerified: boolean;
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  interests: string[];
  availability: 'weekends' | 'weekdays' | 'fulltime' | 'emergency';
  priorExperience?: string;
}

export interface DonationSubmission {
  donorName: string;
  email: string;
  phone: string;
  panNumber: string;
  amount: number;
  program: string;
  paymentMethod: 'upi' | 'bank_transfer' | 'card_netbanking';
  isAnonymous: boolean;
  timestamp: string;
  receiptNumber: string;
}
