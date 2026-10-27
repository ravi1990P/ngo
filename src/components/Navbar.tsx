import React, { useState } from 'react';
import { Menu, X, Heart, ShieldCheck, PhoneCall } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  lang: 'en' | 'hi';
  setLang: (lang: 'en' | 'hi') => void;
  openDonationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  openDonationModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: lang === 'en' ? 'Home' : 'मुख्य पृष्ठ' },
    { id: 'about', label: lang === 'en' ? 'About Us' : 'संस्था परिचय' },
    { id: 'programs', label: lang === 'en' ? 'Programs' : 'कार्यक्रम' },
    { id: 'donate-volunteer', label: lang === 'en' ? 'Donate & Volunteer' : 'सहयोग एवं स्वयंसेवक' },
    { id: 'gallery', label: lang === 'en' ? 'Stories & Gallery' : 'चित्र एवं गाथाएं' },
    { id: 'transparency', label: lang === 'en' ? 'Transparency & Contact' : 'पारदर्शिता व संपर्क' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Institutional Top Trust Strip */}
      <div className="bg-[#143D2B] text-stone-200 text-xs py-1.5 px-4 sm:px-8 border-b border-emerald-950">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 truncate">
            <span className="flex items-center gap-1.5 text-stone-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E07A2A]" />
              <span>Reg. No. {NGO_INFO.regNumber}</span>
              <span aria-hidden="true" className="text-stone-500">·</span>
              <span>{NGO_INFO.isoCert}</span>
              <span aria-hidden="true" className="text-stone-500 hidden sm:inline">·</span>
              <span className="hidden sm:inline">80G Tax Exemption Certified</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs shrink-0">
            <a
              href={NGO_INFO.facebook}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1877F2]/90 hover:bg-[#1877F2] text-white font-medium text-[11px] transition-colors"
              title="Official Facebook Page"
            >
              <span className="font-bold">f</span>
              <span>Facebook</span>
            </a>

            <a
              href={`tel:${NGO_INFO.mobiles[0]}`}
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#E07A2A]" />
              <span className="tabular-nums">{NGO_INFO.mobiles[0]}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center bg-black/25 rounded p-0.5 border border-white/10">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 text-xs rounded transition-colors ${
                  lang === 'en' ? 'bg-[#E07A2A] text-white font-semibold' : 'text-stone-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('hi')}
                className={`px-2 py-0.5 text-xs rounded transition-colors ${
                  lang === 'hi' ? 'bg-[#E07A2A] text-white font-semibold' : 'text-stone-300 hover:text-white'
                }`}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation: 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with Gandhiji Portrait */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#164E33] rounded"
        >
          <img
            src={NGO_INFO.logoPath}
            alt="Mahatma Gandhi Portrait Logo"
            className="w-12 h-12 object-cover rounded-full bg-stone-100 p-0.5 border-2 border-[#164E33] shadow-xs shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="min-w-0">
            <div className="font-heading font-bold text-base sm:text-lg leading-tight text-[#143D2B] tracking-tight group-hover:text-[#1B4D3E] transition-colors truncate">
              {lang === 'en' ? 'Mahatma Gandhi' : 'महात्मा गाँधी'}
            </div>
            <div className="text-xs font-medium text-stone-600 truncate">
              {lang === 'en' ? 'Agriculture & Rural Welfare Society · Since 1989' : 'एग्रीकल्चर एण्ड रूरल वेलफेयर सोसायटी · सन् 1989'}
            </div>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-700">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-all ${
                  isActive
                    ? 'border-[#164E33] text-[#143D2B] font-semibold'
                    : 'border-transparent text-stone-600 hover:text-stone-900 hover:border-stone-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={openDonationModal}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#C2671A] hover:bg-[#A95713] active:bg-[#92490F] rounded-lg shadow-xs hover:shadow-sm transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2671A]"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>{lang === 'en' ? 'Support & Donate' : 'दान करें'}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#164E33]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-stone-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-[#164E33] text-white'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openDonationModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#C2671A] hover:bg-[#A95713] rounded-lg shadow-xs"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>{lang === 'en' ? 'Donate Now (80G Tax Deductible)' : 'अभी दान करें (80G छूट)'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
