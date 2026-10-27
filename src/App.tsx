import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { ThreePillars } from './components/ThreePillars';
import { QuickImpactStrip } from './components/QuickImpactStrip';
import { ProgramsSection } from './components/ProgramsSection';
import { AboutSection } from './components/AboutSection';
import { DonateVolunteerSection } from './components/DonateVolunteerSection';
import { ImpactStoriesGallery } from './components/ImpactStoriesGallery';
import { TransparencySection } from './components/TransparencySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DonationReceiptModal } from './components/DonationReceiptModal';
import { NGO_INFO, PROGRAMS } from './data/ngoData';
import { Heart, Users, ArrowRight, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [receiptModalOpen, setReceiptModalOpen] = useState<boolean>(false);
  const [receiptDetails, setReceiptDetails] = useState<{
    donorName: string;
    email: string;
    phone: string;
    panNumber: string;
    amount: number;
    program: string;
    paymentMethod: string;
  } | null>(null);

  const handleOpenDonation = (programTitle?: string) => {
    setActiveTab('donate-volunteer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVolunteer = () => {
    setActiveTab('donate-volunteer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGenerateReceipt = (details: {
    donorName: string;
    email: string;
    phone: string;
    panNumber: string;
    amount: number;
    program: string;
    paymentMethod: string;
  }) => {
    setReceiptDetails(details);
    setReceiptModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#E07A2A]/20 selection:text-[#164E33]">
      
      {/* 3-Zone Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        openDonationModal={() => handleOpenDonation()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* VIEW 1: HOME PAGE */}
        {activeTab === 'home' && (
          <div>
            {/* 1. Hero Video/Media Slider */}
            <HeroSlider
              onDonateClick={() => handleOpenDonation()}
              onVolunteerClick={handleOpenVolunteer}
              onExplorePrograms={() => setActiveTab('programs')}
              lang={lang}
            />

            {/* 2. Three Pillars: Purpose, Impact, Get Involved */}
            <ThreePillars
              onLearnPurpose={() => setActiveTab('about')}
              onExploreImpact={() => setActiveTab('programs')}
              onGetInvolved={() => setActiveTab('donate-volunteer')}
              lang={lang}
            />

            {/* 3. Verified Impact Numbers Strip */}
            <QuickImpactStrip lang={lang} />

            {/* 4. Highlighted Programs Section */}
            <ProgramsSection
              onDonateForProgram={(programTitle) => handleOpenDonation(programTitle)}
              lang={lang}
            />

            {/* 5. Recent Activities & Real updates preview */}
            <section className="py-16 bg-white border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                  <div>
                    <div className="text-xs font-semibold tracking-wider uppercase text-[#C2671A] mb-1 font-mono">
                      {lang === 'en' ? 'Field Updates' : 'धरातलीय अपडेट्स'}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-stone-900">
                      {lang === 'en' ? 'Recent Grassroots Activities' : 'हालिया सामाजिक गतिविधियां'}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab('gallery')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#164E33] hover:text-[#C2671A] transition-colors"
                  >
                    <span>{lang === 'en' ? 'View All Stories & Gallery' : 'समस्त चित्र एवं गाथाएं देखें'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Activity 1 */}
                  <div className="bg-[#FAF8F5] rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div className="h-44 overflow-hidden relative">
                      <img
                        src="/assets/aistudio/189502448_114830537454254_2191313892699588364_n_edb23059.jpg"
                        alt="Hot Cooked Nutrition Food Distribution"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#143D2B]/85 text-white text-[10px] font-mono px-2 py-0.5 rounded uppercase">
                        Child Nutrition & Annapurna
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <span className="text-[11px] font-mono text-[#C2671A] font-semibold">MHOW RURAL CLUSTER</span>
                        <h3 className="text-base font-heading font-bold text-stone-900 mt-1 mb-2">
                          Hot Cooked Meal & Nutrition Drive
                        </h3>
                        <p className="text-xs text-stone-600 leading-relaxed font-body">
                          Served wholesome freshly-prepared kadhi, khichdi and nutrition to over 350 rural primary school children and destitute mothers.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-stone-200/80 text-[11px] text-stone-500 flex items-center justify-between">
                        <span>Recent Drive</span>
                        <span className="text-emerald-700 font-semibold">350+ Beneficiaries</span>
                      </div>
                    </div>
                  </div>

                  {/* Activity 2 */}
                  <div className="bg-[#FAF8F5] rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div className="h-44 overflow-hidden relative">
                      <img
                        src="/assets/aistudio/186523968_109005234703451_4681535782306803869_n_f776c8d8.jpg"
                        alt="Green Fodder & Cow Care at Gaushala"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#143D2B]/85 text-white text-[10px] font-mono px-2 py-0.5 rounded uppercase">
                        Gau Seva & Animal Care
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <span className="text-[11px] font-mono text-[#C2671A] font-semibold">MHOW GAU SHALA</span>
                        <h3 className="text-base font-heading font-bold text-stone-900 mt-1 mb-2">
                          Green Fodder & Gaushala Cattle Feeding
                        </h3>
                        <p className="text-xs text-stone-600 leading-relaxed font-body">
                          Supplied fresh green fodder and nutritional feed to community shelters supporting 240+ rescued and aged cows.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-stone-200/80 text-[11px] text-stone-500 flex items-center justify-between">
                        <span>Daily Seva</span>
                        <span className="text-emerald-700 font-semibold">240+ Cattle</span>
                      </div>
                    </div>
                  </div>

                  {/* Activity 3 */}
                  <div className="bg-[#FAF8F5] rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div className="h-44 overflow-hidden relative">
                      <img
                        src="/assets/aistudio/189312192_114830564120918_6198032234799367481_n_34b7bd1b.jpg"
                        alt="Emergency Bottled Safe Drinking Water Distribution"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#143D2B]/85 text-white text-[10px] font-mono px-2 py-0.5 rounded uppercase">
                        Clean Drinking Water
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <span className="text-[11px] font-mono text-[#C2671A] font-semibold">TRANSIT VOLUNTEERS</span>
                        <h3 className="text-base font-heading font-bold text-stone-900 mt-1 mb-2">
                          Safe Drinking Water Bottle Distribution
                        </h3>
                        <p className="text-xs text-stone-600 leading-relaxed font-body">
                          Distributed sealed, purified drinking water bottles to outdoor laborers and travelers across city intersections during hot afternoon hours.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-stone-200/80 text-[11px] text-stone-500 flex items-center justify-between">
                        <span>Volunteer Drive</span>
                        <span className="text-emerald-700 font-semibold">500+ Bottles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Quick Volunteer Callout Banner */}
            <section className="bg-[#143D2B] text-white py-14">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <span className="text-xs font-mono font-semibold uppercase text-[#FFBA7A] tracking-wider">
                    {lang === 'en' ? 'Get Involved' : 'सेवा का अवसर'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold mt-1 text-white">
                    {lang === 'en' ? 'Become a Volunteer. Make an Instant Difference.' : 'स्वयंसेवक बनकर धरातल पर सकारात्मक परिवर्तन लाएं।'}
                  </h2>
                  <p className="text-sm text-stone-300 mt-2 font-body">
                    {lang === 'en'
                      ? 'Simple registration. Choose weekend drives, child nutrition camps, animal care, or disaster relief.'
                      : 'सरल पंजीयन। सप्ताहांत सेवा, बाल पोषण वितरण, गौ सेवा अथवा आपातकालीन शिविरों में भाग लें।'}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={handleOpenVolunteer}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E07A2A] hover:bg-[#C2671A] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                  >
                    <Users className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Register as Volunteer' : 'स्वयंसेवक पंजीयन'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenDonation()}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                    <span>{lang === 'en' ? 'Support Mission' : 'सहयोग दान'}</span>
                  </button>
                </div>
              </div>
            </section>

            {/* 7. Contact Section on Home */}
            <ContactSection lang={lang} />
          </div>
        )}

        {/* VIEW 2: ABOUT US */}
        {activeTab === 'about' && (
          <div>
            <AboutSection
              lang={lang}
              onViewTransparency={() => setActiveTab('transparency')}
            />
            <ContactSection lang={lang} />
          </div>
        )}

        {/* VIEW 3: OUR PROGRAMS */}
        {activeTab === 'programs' && (
          <div>
            <ProgramsSection
              onDonateForProgram={(title) => handleOpenDonation(title)}
              lang={lang}
            />
            {/* Impact stories snippet */}
            <ImpactStoriesGallery lang={lang} />
          </div>
        )}

        {/* VIEW 4: DONATE & VOLUNTEER (Dedicated Tab with Saffron and Forest Green sub-tabs) */}
        {activeTab === 'donate-volunteer' && (
          <div>
            <DonateVolunteerSection
              initialSubTab="donate"
              onGenerateReceipt={handleGenerateReceipt}
              lang={lang}
            />
          </div>
        )}

        {/* VIEW 5: GALLERY & IMPACT STORIES */}
        {activeTab === 'gallery' && (
          <div>
            <ImpactStoriesGallery lang={lang} />
            <ContactSection lang={lang} />
          </div>
        )}

        {/* VIEW 6: TRANSPARENCY & CONTACT */}
        {activeTab === 'transparency' && (
          <div>
            <TransparencySection lang={lang} />
            <ContactSection lang={lang} />
          </div>
        )}

      </main>

      {/* Global Footer */}
      <Footer onNavClick={(tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} lang={lang} />

      {/* Printable 80G Tax Exemption Receipt Modal */}
      <DonationReceiptModal
        isOpen={receiptModalOpen}
        onClose={() => setReceiptModalOpen(false)}
        details={receiptDetails}
        lang={lang}
      />

    </div>
  );
}
