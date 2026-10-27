import React, { useState } from 'react';
import { NGO_INFO, TIMELINE, MENTORS_AND_LEADERS, POEM } from '../data/ngoData';
import { ShieldCheck, History, Award, BookOpen, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  lang: 'en' | 'hi';
  onViewTransparency: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onViewTransparency }) => {
  const [selectedYear, setSelectedYear] = useState<string>('1987');
  const [showFullPoem, setShowFullPoem] = useState<boolean>(false);

  const activeTimelineEvent =
    TIMELINE.find((t) => t.year === selectedYear) || TIMELINE[0];

  return (
    <section id="about" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#C2671A] mb-2 font-mono">
            {lang === 'en' ? 'Since 1987 · 37+ Years of Dedicated Service' : '1987 से निरन्तर · 37 से अधिक वर्षों की अनवरत सेवा'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-stone-900 tracking-tight">
            {lang === 'en' ? 'About Our Society & Legacy' : 'संस्था परिचय, दृष्टि एवं ऐतिहासिक पृष्ठभूमि'}
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-body">
            {lang === 'en'
              ? 'Founded on Gandhian values, rural self-reliance, and environmental preservation of the Panchatattva (Soil, Water, Fire, Sky, and Air).'
              : 'गांधीवादी मूल्यों, ग्रामीण आत्मनिर्भरता और पंचतत्व (जल, थल, नभ, पावक, गगन) के पावन संरक्षण पर आधारित जन सेवा संस्था।'}
          </p>
        </div>

        {/* 2-Column Split: Vision/Mission & Official Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          
          {/* Left Column: Vision & Origin */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-stone-200/90 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#164E33] font-semibold uppercase">
                <History className="w-4 h-4 text-[#C2671A]" />
                <span>{lang === 'en' ? 'Origin & Ideology' : 'संस्था परिचय एवं उद्देश्य'}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-stone-900">
                {lang === 'en'
                  ? 'From Grassroots Agriculture Council to National Social Impact'
                  : 'इंडियन एग्रीकल्चर काउन्सिल से राष्ट्रीय जन कल्याण तक'}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-body">
                <p>
                  {lang === 'en'
                    ? 'The journey began in 1987 under the divine inspiration of Brahmalin Mahamandaleshwar 1008 Swami Gurumukhanand Ji Maharaj and patrons Smt. Parvati Devi and Shri Basantilal Dharwa. Initially established as the Indian Agriculture and Rural Development Council, it was formally incorporated under the Madhya Pradesh Society Registration Act in 1989.'
                    : 'परम पिता परमेश्वर की असीम कृपा, परम श्रद्धेय पूज्य गुरुदेव ब्रह्मलीन महामण्डलेश्वर 1008 स्वामी श्री गुरुमुखानन्द जी महाराज की प्रेरणा और मार्गदर्शक संरक्षक स्व. श्रीमती पार्वतीदेवी एवं स्व. श्री बसन्तीलाल जी धारवा के संकल्प से 1987 में इंडियन एग्रीकल्चर एण्ड रूरल डेवलपमेन्ट काउन्सिल के रूप में प्रारंभ हुई, जिसे 1989 में सोसायटी के रूप में विधिवत पंजीयन प्राप्त हुआ।'}
                </p>

                <p>
                  {lang === 'en'
                    ? 'Guided by founder Pt. Dr. Bhupendra Dharwa (former National Member of the National Child Labour Committee, Ministry of Labour, Govt. of India), the society has worked tirelessly across environmental protection, women Self-Help Groups, child nutrition, cow protection (Gau Seva), and disaster relief.'
                    : 'संस्था संस्थापक पर्यावरणविद् ज्योतिर्विद वैज्ञानिक पं. डॉ. भूपेन्द्र धारवा के नेतृत्व में संस्था ने देश के राष्ट्रपतियों, प्रधानमंत्रियों, मुख्य चुनाव आयुक्तों और केंद्रीय मंत्रियों के साथ मिलकर जन कल्याणकारी योजनाओं के निर्माण और क्रियान्वयन में ऐतिहासिक भूमिका निभाई है।'}
                </p>
              </div>

              {/* Core Philosophy Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-stone-800 font-medium bg-white p-2.5 rounded-lg border border-stone-200/80">
                  <CheckCircle2 className="w-4 h-4 text-[#164E33] shrink-0" />
                  <span>{lang === 'en' ? 'Panchatattva Nature Harmony' : 'पंचतत्व संरक्षण'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-800 font-medium bg-white p-2.5 rounded-lg border border-stone-200/80">
                  <CheckCircle2 className="w-4 h-4 text-[#164E33] shrink-0" />
                  <span>{lang === 'en' ? 'Rural Women SHG Leadership' : 'महिला स्वयं सहायता समूह'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-800 font-medium bg-white p-2.5 rounded-lg border border-stone-200/80">
                  <CheckCircle2 className="w-4 h-4 text-[#164E33] shrink-0" />
                  <span>{lang === 'en' ? 'Safe Drinking Water & Nutrition' : 'स्वच्छ जल एवं कुपोषण मुक्ति'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-800 font-medium bg-white p-2.5 rounded-lg border border-stone-200/80">
                  <CheckCircle2 className="w-4 h-4 text-[#164E33] shrink-0" />
                  <span>{lang === 'en' ? 'Compassionate Animal Welfare' : 'गौ सेवा व मूक प्राणी कल्याण'}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200/80 flex items-center justify-between">
              <span className="text-xs font-mono text-stone-600">
                Reg. Office: 20-A, Main Street, Mhow, Indore (M.P.)
              </span>
              <button
                type="button"
                onClick={onViewTransparency}
                className="text-xs font-semibold text-[#164E33] hover:text-[#C2671A] inline-flex items-center gap-1"
              >
                <span>{lang === 'en' ? 'View Legal Documents' : 'दस्तावेज देखें'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Official Registration & Credentials */}
          <div className="lg:col-span-5 bg-[#143D2B] text-white p-8 sm:p-10 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#E07A2A] font-semibold uppercase tracking-wider mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>{lang === 'en' ? 'Official Registrations & Compliance' : 'वैधानिक मान्यता एवं प्रमाणन'}</span>
              </div>

              <h3 className="text-xl font-heading font-bold mb-6 text-stone-100">
                {lang === 'en'
                  ? 'Recognized by State & Central Government Bodies'
                  : 'शासन एवं आयकर विभाग से मान्यता प्राप्त'}
              </h3>

              <div className="space-y-4">
                <div className="bg-black/25 p-4 rounded-xl border border-white/10">
                  <div className="text-[11px] font-mono text-stone-400 uppercase">
                    {lang === 'en' ? 'Society Registration No.' : 'संस्था पंजीयन क्रमांक'}
                  </div>
                  <div className="text-lg font-bold font-heading text-white tracking-wide mt-0.5">
                    {NGO_INFO.regNumber}
                  </div>
                  <div className="text-xs text-stone-300 mt-1">
                    {lang === 'en' ? 'Registered under Madhya Pradesh Societies Act, 1989' : 'म.प्र. सोसायटी रजिस्ट्रीकरण अधिनियम के अंतर्गत पंजीकृत'}
                  </div>
                </div>

                <div className="bg-black/25 p-4 rounded-xl border border-white/10">
                  <div className="text-[11px] font-mono text-stone-400 uppercase">
                    {lang === 'en' ? 'Income Tax Exemption' : 'आयकर अधिनियम 80G छूट'}
                  </div>
                  <div className="text-base font-bold font-heading text-[#FFBA7A] tracking-wide mt-0.5">
                    {NGO_INFO.citExemption}
                  </div>
                  <div className="text-xs text-stone-300 mt-1">
                    {lang === 'en' ? 'Donations eligible for 50% deduction under Section 80G' : 'दानदाताओं को आयकर की धारा 80G के तहत 50% छूट की पात्रता'}
                  </div>
                </div>

                <div className="bg-black/25 p-4 rounded-xl border border-white/10">
                  <div className="text-[11px] font-mono text-stone-400 uppercase">
                    {lang === 'en' ? 'Quality Standard' : 'गुणवत्ता प्रमाणन'}
                  </div>
                  <div className="text-base font-bold font-heading text-white tracking-wide mt-0.5">
                    {NGO_INFO.isoCert}
                  </div>
                  <div className="text-xs text-stone-300 mt-1">
                    {lang === 'en' ? 'Certified Quality Management in Non-Profit Service' : 'सामाजिक सेवा प्रबंधन में अंतर्राष्ट्रीय गुणवत्ता मानक'}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15">
              <a
                href={NGO_INFO.pdfDocumentPath}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#E07A2A] hover:bg-[#C2671A] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === 'en' ? 'Download Official Brochure (PDF)' : 'संस्था विवरण पुस्तिका डाउनलोड करें (PDF)'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Milestone Timeline: 1987 to Present */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C2671A] mb-1 font-mono">
              {lang === 'en' ? 'Historical Chronicle' : 'ऐतिहासिक कालक्रम'}
            </div>
            <h3 className="text-2xl font-heading font-bold text-stone-900">
              {lang === 'en' ? 'Key Milestones Across 37+ Years' : '37+ वर्षों की प्रमुख उपलब्धियां एवं पड़ाव'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              {lang === 'en'
                ? 'Select a year to view key contributions, national delegations, and infrastructure projects.'
                : 'वर्ष का चयन कर राष्ट्रीय संवाद, विकास योजनाओं और धरातलीय कार्यों का विवरण देखें।'}
            </p>
          </div>

          {/* Timeline Year Scroller */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-stone-200">
            {TIMELINE.map((t) => {
              const isSelected = selectedYear === t.year;
              return (
                <button
                  key={t.year}
                  type="button"
                  onClick={() => setSelectedYear(t.year)}
                  className={`px-4 py-2 text-xs font-mono font-bold rounded-lg whitespace-nowrap transition-all focus:outline-none ${
                    isSelected
                      ? 'bg-[#143D2B] text-white shadow-xs'
                      : 'bg-[#FAF8F5] text-stone-600 hover:text-stone-900 border border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {t.year}
                </button>
              );
            })}
          </div>

          {/* Active Milestone Card */}
          <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200/80 gap-3">
              <div>
                <span className="text-xs font-mono font-bold text-[#C2671A] uppercase tracking-wider">
                  Year {activeTimelineEvent.year}
                </span>
                <h4 className="text-lg sm:text-xl font-heading font-bold text-stone-900 mt-0.5">
                  {lang === 'en' ? activeTimelineEvent.title : activeTimelineEvent.hindiTitle}
                </h4>
              </div>
              <div className="text-xs font-medium text-[#164E33] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md self-start sm:self-auto">
                {activeTimelineEvent.significance}
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base text-stone-700 leading-relaxed font-body">
              {activeTimelineEvent.description}
            </p>

            {activeTimelineEvent.keyDignitaries && activeTimelineEvent.keyDignitaries.length > 0 && (
              <div className="mt-4 pt-4 border-t border-stone-200/60 flex items-center gap-2 text-xs text-stone-600">
                <span className="font-semibold text-stone-800">{lang === 'en' ? 'Associated Dignitaries:' : 'संबद्ध विशिष्ट जन:'}</span>
                <span>{activeTimelineEvent.keyDignitaries.join(', ')}</span>
              </div>
            )}
          </div>
        </div>

        {/* Governing Body, Spiritual Mentors & Patrons */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C2671A] mb-1 font-mono">
              {lang === 'en' ? 'Governing Body & Mentors' : 'मार्गदर्शक एवं संरक्षक मंडल'}
            </div>
            <h3 className="text-2xl font-heading font-bold text-stone-900">
              {lang === 'en' ? 'Visionaries Behind the Mission' : 'संस्था के प्रेरणा स्रोत एवं संरक्षक'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              {lang === 'en'
                ? 'Photographs and biographical details directly archived from the official society registry.'
                : 'संस्था अभिलेखों से साभार प्राप्त मार्गदर्शक एवं संस्थापक छायाचित्र।'}
            </p>
          </div>

          {/* Mentors Archival Photo Showcase Board */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-stretch">
            {/* Founder Spotlight Card with Real Portrait */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <img
                src="/assets/extracted/founder_portrait.jpg"
                alt="Pt. Dr. Bhupendra Dharwa"
                className="w-32 h-40 sm:w-36 sm:h-44 object-cover rounded-xl border border-stone-300 shadow-xs shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-center sm:text-left">
                <div className="text-[11px] font-mono font-bold text-[#C2671A] uppercase">
                  Founder & National Member
                </div>
                <h4 className="text-lg font-heading font-bold text-stone-900 mt-0.5">
                  Pt. Dr. Bhupendra Dharwa
                </h4>
                <div className="text-xs text-stone-500 font-devanagari mt-0.5">
                  पं. डॉ. भूपेन्द्र भाई धारवा
                </div>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed font-body">
                  National Environmentalist, former National Member of National Child Labour Committee (Ministry of Labour, GOI) and Ministry of Environment & Forests Advisor. Leading continuous public service since 1987.
                </p>
              </div>
            </div>

            {/* Official Mentors Board Image from Brochure Page 3 */}
            <div className="lg:col-span-7 bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[11px] font-mono font-bold text-[#164E33] uppercase">
                    Margdarshak Mandal · Official Archive Record
                  </div>
                  <span className="text-[10px] bg-stone-200 px-2 py-0.5 rounded text-stone-700 font-mono">
                    From Brochure Page 3
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden border border-stone-300 bg-white">
                  <img
                    src="/assets/extracted/mentors_board.jpg"
                    alt="Margdarshak Evam Prerna Srot Mentors Board"
                    className="w-full h-44 sm:h-48 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-xs text-stone-600 mt-2 italic font-body">
                  Blessed by Brahmalin Mahamandaleshwar 1008 Swami Gurumukhanand Ji Maharaj, Smt. Parvati Devi & Basantilal Dharwa, Vaidya Dinesh Joshi & Prabha Joshi, Smt. Ganga Satish Vyas, and Shri Bhalchandra Bhatt.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENTORS_AND_LEADERS.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-semibold text-[#164E33] mb-1">
                    {leader.title}
                  </div>
                  <h4 className="text-base sm:text-lg font-heading font-bold text-stone-900 leading-snug">
                    {leader.name}
                  </h4>
                  <div className="text-xs text-stone-500 font-devanagari mt-0.5">
                    {leader.role}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-body">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bharat Ki Abhilasha Poem Showcase with Official Gandhi Heritage Image */}
        <div className="bg-[#143D2B] text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E07A2A] font-semibold uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4" />
                <span>{lang === 'en' ? 'Inspirational Verse · Official Brochure Page 1' : 'स्वरचित कविता · आधिकारिक विवरण पत्रिका पृष्ठ 1'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1">
                {POEM.title} ({POEM.englishTitle})
              </h3>
              <div className="text-xs text-stone-300 font-mono mb-4">
                स्वरचित : {POEM.author} · {POEM.year}
              </div>

              <div className="space-y-2 text-stone-200 text-sm sm:text-base font-devanagari italic leading-relaxed border-l-2 border-[#E07A2A] pl-4 sm:pl-6 my-4">
                {(showFullPoem ? POEM.stanzas : POEM.stanzas.slice(0, 6)).map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setShowFullPoem(!showFullPoem)}
                className="mt-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                {showFullPoem
                  ? (lang === 'en' ? 'Show Less' : 'संक्षिप्त रूप देखें')
                  : (lang === 'en' ? 'Read Full 13-Line Poem' : 'संपूर्ण कविता पढ़ें')}
              </button>
            </div>

            {/* Gandhi Portrait & Heritage Vignette */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-[#E07A2A]/40 shadow-xl bg-white p-2">
                <img
                  src="/assets/extracted/gandhi_portrait.jpg"
                  alt="Mahatma Gandhi - God is Nature"
                  className="w-full h-full object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 text-center">
                <div className="text-xs font-bold text-stone-200">
                  ॥ श्री गणेशाय नमो नमः ॥
                </div>
                <div className="text-[11px] text-[#FFBA7A] font-mono">
                  GOD IS NATURE · पूज्य बापू
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
