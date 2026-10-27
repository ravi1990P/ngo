import React, { useState } from 'react';
import { Program } from '../types';
import { PROGRAMS } from '../data/ngoData';
import { Heart, ArrowRight, X, Check, MapPin, Sparkles, Utensils, Sprout, GraduationCap, HeartHandshake, ShieldAlert, Stethoscope } from 'lucide-react';

interface ProgramsSectionProps {
  onDonateForProgram: (programTitle: string) => void;
  lang: 'en' | 'hi';
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onDonateForProgram,
  lang,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Initiatives' : 'समस्त योजनाएं' },
    { id: 'nutrition', label: lang === 'en' ? 'Child & Mother Nutrition' : 'बाल पोषण व अन्नपूर्णा' },
    { id: 'rural', label: lang === 'en' ? 'Agriculture & Rural' : 'कृषि व ग्रामीण विकास' },
    { id: 'animal', label: lang === 'en' ? 'Animal Welfare & Gau Seva' : 'गौ सेवा व मूक प्राणी' },
    { id: 'education', label: lang === 'en' ? 'Education & Awareness' : 'शिक्षा व जन चेतना' },
    { id: 'relief', label: lang === 'en' ? 'Disaster Relief' : 'आपदा राहत' },
    { id: 'medical', label: lang === 'en' ? 'Medical Emergency' : 'चिकित्सा सहयोग' },
  ];

  const filteredPrograms =
    selectedCategory === 'all'
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === selectedCategory);

  const getProgramIcon = (category: Program['category']) => {
    switch (category) {
      case 'nutrition':
        return Utensils;
      case 'rural':
        return Sprout;
      case 'education':
        return GraduationCap;
      case 'animal':
        return HeartHandshake;
      case 'relief':
        return ShieldAlert;
      case 'medical':
        return Stethoscope;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="programs" className="py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C2671A] mb-2 font-mono">
              {lang === 'en' ? 'Dedicated Grassroots Interventions' : 'धरातलीय जन कल्याण योजनाएं'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-stone-900 tracking-tight">
              {lang === 'en' ? 'Our Core Social Programs' : 'संस्था के मुख्य सामाजिक कार्यक्रम'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 font-body">
              {lang === 'en'
                ? 'Every initiative is designed around sustainable rural upliftment, nutrition security, animal care, and emergency response.'
                : 'प्रत्येक कार्यक्रम ग्रामीण स्वावलंबन, बाल पोषण सुरक्षा, मूक प्राणी कल्याण एवं संकटकालीन त्वरित सहायता को समर्पित है।'}
            </p>
          </div>

          <div className="text-xs text-stone-500 font-mono hidden md:block">
            {lang === 'en' ? '7 Active Long-Term Programs' : '7 सक्रिय दीर्घकालिक कार्यक्रम'}
          </div>
        </div>

        {/* Filter Bar (Segmented Controls - Functional Buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all focus:outline-none ${
                  isSelected
                    ? 'bg-[#143D2B] text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:text-stone-900 border border-stone-200/90 hover:bg-stone-50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPrograms.map((program) => {
            const IconComponent = getProgramIcon(program.category);
            return (
              <div
                key={program.id}
                className="bg-white rounded-xl border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Real Activity Photograph */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-stone-100 border-b border-stone-200">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image path has issue
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1.5 font-medium drop-shadow-sm">
                      <IconComponent className="w-4 h-4 text-[#FFBA7A]" />
                      <span className="capitalize">{program.category}</span>
                    </span>
                    <span className="flex items-center gap-1 text-stone-200 text-[11px] drop-shadow-sm">
                      <MapPin className="w-3 h-3 text-[#FFBA7A]" />
                      <span className="truncate max-w-[120px]">{program.location}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Title & Hindi Title */}
                  <h3 className="text-lg font-heading font-bold text-stone-900 group-hover:text-[#164E33] transition-colors leading-snug">
                    {lang === 'en' ? program.title : program.hindiTitle}
                  </h3>
                  
                  {lang === 'en' && (
                    <div className="text-xs text-stone-500 mt-1 font-devanagari">
                      {program.hindiTitle}
                    </div>
                  )}

                  {/* Short Description */}
                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-body">
                    {program.shortDesc}
                  </p>

                  {/* Impact Metric Highlight */}
                  <div className="mt-5 pt-3 border-t border-stone-100 bg-[#FAF8F5]/80 p-3 rounded-lg border border-stone-200/60">
                    <div className="text-xl font-heading font-bold text-[#143D2B] tabular-nums">
                      {program.impactMetric}
                    </div>
                    <div className="text-[11px] text-stone-600 leading-tight">
                      {program.impactLabel}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 py-4 bg-[#FAF8F5] border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalProgram(program)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#164E33] hover:text-[#C2671A] transition-colors focus:outline-none"
                  >
                    <span>{lang === 'en' ? 'Program Details' : 'विस्तृत विवरण'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onDonateForProgram(program.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#C2671A] hover:bg-[#A95713] rounded-md transition-colors shadow-2xs focus:outline-none"
                  >
                    <Heart className="w-3 h-3 fill-current" />
                    <span>{lang === 'en' ? 'Support' : 'सहयोग करें'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Program Deep-Dive Modal */}
      {activeModalProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-2xl p-6 sm:p-8 relative">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-5 right-5 p-1.5 text-stone-400 hover:text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-8 mb-4">
              <div className="text-xs font-mono font-semibold uppercase text-[#C2671A] mb-1">
                {activeModalProgram.category} · {activeModalProgram.location}
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-stone-900">
                {lang === 'en' ? activeModalProgram.title : activeModalProgram.hindiTitle}
              </h3>
              <div className="text-sm text-stone-500 font-devanagari mt-0.5">
                {activeModalProgram.hindiTitle}
              </div>
            </div>

            {/* Real Field Activity Image */}
            <div className="relative h-56 rounded-xl overflow-hidden mb-5 border border-stone-200">
              <img
                src={activeModalProgram.image}
                alt={activeModalProgram.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 right-3 text-[11px] bg-black/60 text-white px-2 py-0.5 rounded font-mono">
                Field Archive: {activeModalProgram.location}
              </div>
            </div>

            {/* Impact Metric Banner */}
            <div className="bg-[#143D2B] text-white p-4 rounded-xl my-4 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold font-heading tabular-nums text-white">
                  {activeModalProgram.impactMetric}
                </div>
                <div className="text-xs text-stone-300">
                  {activeModalProgram.impactLabel}
                </div>
              </div>
              <div className="text-xs text-[#E07A2A] font-semibold uppercase tracking-wider bg-black/20 px-3 py-1 rounded">
                Verified Impact
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-4 text-stone-700 text-sm leading-relaxed font-body">
              <p>{activeModalProgram.fullDesc}</p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-2 font-mono">
                  {lang === 'en' ? 'Key Program Interventions' : 'प्रमुख कार्य बिंदु'}
                </h4>
                <ul className="space-y-2">
                  {activeModalProgram.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-0.5 p-0.5 rounded-full bg-emerald-100 text-[#164E33] shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="text-xs sm:text-sm text-stone-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Beneficiary Quote */}
              <div className="p-4 bg-[#FAF8F5] border border-stone-200 rounded-xl my-4">
                <div className="text-xs font-semibold text-[#C2671A] mb-1 font-mono uppercase">
                  {lang === 'en' ? 'Consent-Verified Beneficiary Story' : 'सत्यापित लाभार्थी अनुभव'}
                </div>
                <blockquote className="italic text-xs sm:text-sm text-stone-800">
                  &ldquo;{activeModalProgram.beneficiaryStory.quote}&rdquo;
                </blockquote>
                <div className="text-xs font-medium text-stone-600 mt-2">
                  — {activeModalProgram.beneficiaryStory.person}, {activeModalProgram.beneficiaryStory.village}
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-6 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setActiveModalProgram(null)}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
              >
                {lang === 'en' ? 'Close' : 'बंद करें'}
              </button>

              <button
                type="button"
                onClick={() => {
                  const title = activeModalProgram.title;
                  setActiveModalProgram(null);
                  onDonateForProgram(title);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#C2671A] hover:bg-[#A95713] rounded-lg shadow-xs transition-colors"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>{lang === 'en' ? `Sponsor ${activeModalProgram.title}` : 'इस योजना में सहयोग करें'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
