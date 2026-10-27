import React, { useState } from 'react';
import { NGO_INFO } from '../data/ngoData';
import { ShieldCheck, Heart, Mail, Phone, MapPin, X, FileText } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: string) => void;
  lang: 'en' | 'hi';
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, lang }) => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'disclosures' | null>(null);

  return (
    <footer className="bg-[#0D241A] text-stone-300 border-t border-emerald-950 font-body">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={NGO_INFO.logoPath}
                alt="Mahatma Gandhi Portrait Logo"
                className="w-12 h-12 object-cover rounded-full bg-stone-100 p-0.5 border-2 border-[#E07A2A]"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="font-heading font-bold text-white text-base leading-tight">
                  {lang === 'en' ? 'Mahatma Gandhi' : 'महात्मा गाँधी'}
                </div>
                <div className="text-xs text-stone-400">
                  {lang === 'en' ? 'Agriculture & Rural Welfare Society' : 'एग्रीकल्चर एण्ड रूरल वेलफेयर सोसायटी'}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {lang === 'en'
                ? 'Dedicated since 1987 to grassroots rural development, safe drinking water, child nutrition, Gau Seva animal protection, and emergency relief across Madhya Pradesh.'
                : 'सन् 1987 से निरन्तर राष्ट्र विकास, पंचतत्व संरक्षण, कुपोषण मुक्ति, गौ सेवा एवं आपातकालीन जन सहायता हेतु पूर्णतः समर्पित।'}
            </p>

            {/* Official Badges */}
            <div className="pt-2 text-xs text-stone-400 space-y-1 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E07A2A]" />
                <span>Reg. No. {NGO_INFO.regNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E07A2A]" />
                <span>{NGO_INFO.isoCert} Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E07A2A]" />
                <span>{NGO_INFO.citExemption}</span>
              </div>
            </div>
          </div>

          {/* Key Programs */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-[#FFBA7A] tracking-wider">
              {lang === 'en' ? 'Our Programs' : 'प्रमुख कार्यक्रम'}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('programs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Child Nutrition & Safe Water
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('programs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Feeding Homeless Mothers (Annapurna)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('programs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Agriculture & Rural SHG Development
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('programs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Education & Girl-Child Awareness
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('programs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Animal Feeding & Gau Seva
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('programs')}
                  className="hover:text-white transition-colors text-left"
                >
                  Disaster Relief & Medical Emergency
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Institutional Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-[#FFBA7A] tracking-wider">
              {lang === 'en' ? 'Governance' : 'शासन व संस्था'}
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  History & Founder
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  Governing Body & Mentors
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('transparency')}
                  className="hover:text-white transition-colors text-left"
                >
                  Official 80G Documents
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('disclosures')}
                  className="hover:text-white transition-colors text-left"
                >
                  Financial Disclosures
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('gallery')}
                  className="hover:text-white transition-colors text-left"
                >
                  Impact Stories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavClick('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact & Office Map
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details & Verse */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-[#FFBA7A] tracking-wider">
              {lang === 'en' ? 'Central Office' : 'केंद्रीय कार्यालय'}
            </div>
            <div className="text-xs text-stone-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <span>20-A, Main Street, Mhow, Dist. Indore, M.P. - 453441</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-stone-500 shrink-0" />
                <a href={`tel:${NGO_INFO.phone}`} className="hover:text-white">{NGO_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-500 shrink-0" />
                <a href={`mailto:${NGO_INFO.email}`} className="hover:text-white truncate">{NGO_INFO.email}</a>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={NGO_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span className="w-5 h-5 rounded bg-[#1877F2] text-white flex items-center justify-center font-bold text-[11px]">
                  f
                </span>
                <span>facebook.com/mahatmagandhingo</span>
              </a>

              <a
                href={NGO_INFO.pdfDocumentPath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#FFBA7A] hover:underline"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Brochure PDF</span>
              </a>
            </div>
          </div>

        </div>

        {/* Lower Legal & Disclosures Bar */}
        <div className="mt-12 pt-8 border-t border-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © 1987 - 2026 Mahatma Gandhi Agriculture and Rural Welfare Society. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:text-stone-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="hover:text-stone-300 transition-colors"
            >
              Terms of Engagement
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setActiveModal('disclosures')}
              className="hover:text-stone-300 transition-colors"
            >
              80G & Legal Registrations
            </button>
          </div>
        </div>
      </div>

      {/* Legal & Policy Modals */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs text-stone-900 animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative max-h-[85vh] overflow-y-auto border border-stone-200 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 bg-stone-100 rounded-full"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'privacy' && (
              <div>
                <h3 className="text-xl font-heading font-bold text-stone-900 mb-3">
                  Donor & Volunteer Privacy Policy
                </h3>
                <div className="text-xs sm:text-sm text-stone-600 space-y-3 leading-relaxed">
                  <p>
                    Mahatma Gandhi Agriculture and Rural Welfare Society is committed to safeguarding the personal information of our donors, volunteers, and beneficiaries.
                  </p>
                  <p>
                    <strong>Data Collection:</strong> We collect contact information and PAN details strictly for issuing statutory receipts under Section 80G of the Income Tax Act. We do not sell, rent, or trade donor records with third-party telemarketers or advertisers.
                  </p>
                  <p>
                    <strong>Beneficiary Consent:</strong> Photographs and stories published on this platform are used solely with verified written or verbal consent honoring dignity and privacy.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'terms' && (
              <div>
                <h3 className="text-xl font-heading font-bold text-stone-900 mb-3">
                  Terms of Public Engagement
                </h3>
                <div className="text-xs sm:text-sm text-stone-600 space-y-3 leading-relaxed">
                  <p>
                    All contributions made to the society are voluntary donations for public non-profit charitable activities under our registered objectives.
                  </p>
                  <p>
                    <strong>Tax Exemption:</strong> Donations are exempt under Section 80G of the Indian Income Tax Act (CIT Exemption Bhopal /80G/43/2015-16).
                  </p>
                  <p>
                    <strong>Refund Policy:</strong> In case of accidental duplicate transfers, donors may notify our Mhow office within 7 days with the banking transaction reference for reconciliation.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'disclosures' && (
              <div>
                <h3 className="text-xl font-heading font-bold text-stone-900 mb-3">
                  Statutory Registrations & Financial Disclosures
                </h3>
                <div className="text-xs sm:text-sm text-stone-600 space-y-3 leading-relaxed">
                  <p>
                    <strong>Society Registration:</strong> No. 23259/1989 under the Madhya Pradesh Societies Registration Act. Continuous unbroken operation since 1987.
                  </p>
                  <p>
                    <strong>80G Income Tax Approval:</strong> Order No. CIT Exemption Bhopal / 80G/43/2015-16.
                  </p>
                  <p>
                    <strong>Quality Standard:</strong> Certified under ISO 9001:2015 for Social Welfare Administration.
                  </p>
                  <p>
                    <strong>Registered Office:</strong> 20-A, Main Street, Mhow, District Indore, Madhya Pradesh - 453441.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-stone-200 text-right">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
