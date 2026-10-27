import React from 'react';
import { IMPACT_METRICS } from '../data/ngoData';
import { Award, CheckCircle } from 'lucide-react';

interface QuickImpactStripProps {
  lang: 'en' | 'hi';
}

export const QuickImpactStrip: React.FC<QuickImpactStripProps> = ({ lang }) => {
  return (
    <section className="bg-white py-12 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Verification Lead-In */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-stone-100 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#164E33] uppercase tracking-wider font-mono">
              <CheckCircle className="w-4 h-4 text-[#C2671A]" />
              <span>{lang === 'en' ? 'Our Impact · Verified Numbers Only' : 'हमारा धरातलीय प्रभाव · केवल प्रमाणित आंकड़े'}</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              {lang === 'en'
                ? 'Field metrics substantiated by annual audits, village surveys, and district committee records.'
                : 'वार्षिक ऑडिट, ग्रामीण सर्वेक्षणों एवं जिला समिति अभिलेखों द्वारा विधिवत सत्यापित आंकड़े।'}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-600 bg-[#FAF8F5] px-3.5 py-1.5 rounded-lg border border-stone-200 shrink-0">
            <Award className="w-4 h-4 text-[#E07A2A]" />
            <span className="font-medium">ISO 9001:2015 & 80G Certified</span>
          </div>
        </div>

        {/* Tabular KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {IMPACT_METRICS.map((item, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-heading font-extrabold text-[#143D2B] tabular-nums tracking-tight">
                {item.value}
              </span>
              <span className="text-xs font-semibold text-stone-800 mt-2 leading-tight">
                {item.label}
              </span>
              <span className="text-[11px] text-stone-600 mt-1">
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
