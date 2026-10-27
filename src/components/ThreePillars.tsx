import React from 'react';
import { Target, Activity, HeartHandshake, ArrowRight } from 'lucide-react';

interface ThreePillarsProps {
  onLearnPurpose: () => void;
  onExploreImpact: () => void;
  onGetInvolved: () => void;
  lang: 'en' | 'hi';
}

export const ThreePillars: React.FC<ThreePillarsProps> = ({
  onLearnPurpose,
  onExploreImpact,
  onGetInvolved,
  lang,
}) => {
  const pillars = [
    {
      id: 'purpose',
      icon: Target,
      tag: '01 / PURPOSE',
      title: lang === 'en' ? 'Our Guiding Purpose' : 'हमारा उद्देश्य',
      subtitle:
        lang === 'en'
          ? 'Dedicated to the five elements of nature (Panchatattva: Soil, Water, Air, Sky, Fire) and upliftment of marginalized rural communities, destitute mothers, and vulnerable beings.'
          : 'जल, जमीन, अग्नि, आकाश व वायु के संरक्षण और ग्रामीण कृषकों, निराश्रित माताओं व मूक जीवों के समग्र कल्याण हेतु समर्पित।',
      actionText: lang === 'en' ? 'Read Our History & Vision' : 'इतिहास एवं दृष्टि जानें',
      onClick: onLearnPurpose,
      accentBorder: 'hover:border-[#164E33]'
    },
    {
      id: 'impact',
      icon: Activity,
      tag: '02 / IMPACT',
      title: lang === 'en' ? 'Ground-Level Action' : 'धरातलीय कार्य व प्रभाव',
      subtitle:
        lang === 'en'
          ? 'From daily child nutrition and drinking water purification to women SHG formation, Gau Seva, and disaster relief camps across Madhya Pradesh.'
          : 'बाल पोषण, स्वच्छ पेयजल शोधन, महिला स्वयं सहायता समूह, गौ सेवा और आपातकालीन आपदा राहत शिविरों का निरंतर क्रियान्वयन।',
      actionText: lang === 'en' ? 'See Verified Programs' : 'सत्यापित कार्यक्रम देखें',
      onClick: onExploreImpact,
      accentBorder: 'hover:border-[#C2671A]'
    },
    {
      id: 'get-involved',
      icon: HeartHandshake,
      tag: '03 / GET INVOLVED',
      title: lang === 'en' ? 'Join Our Mission' : 'सहयोग व सहभागिता',
      subtitle:
        lang === 'en'
          ? 'Contribute through 80G tax-exempt donations, volunteer your time on the ground, or initiate CSR partnerships for sustainable community growth.'
          : '80G कर-मुक्त दान, धरातलीय स्वयंसेवा अथवा सीएसआर साझेदारी के माध्यम से राष्ट्र निर्माण में अपना योगदान दें।',
      actionText: lang === 'en' ? 'Donate, Volunteer or Partner' : 'दान करें या स्वयंसेवक बनें',
      onClick: onGetInvolved,
      accentBorder: 'hover:border-[#164E33]'
    }
  ];

  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#C2671A] mb-2 font-mono">
            {lang === 'en' ? 'Core Foundation' : 'संस्था के तीन मूल आधार'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-stone-900 tracking-tight">
            {lang === 'en'
              ? 'Three Things Every Supporter Should Know'
              : 'संस्था से जुड़ने से पूर्व तीन अनिवार्य बातें'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 font-body">
            {lang === 'en'
              ? 'Our organization operates with absolute grassroots accountability, transparent governance, and verified community outcomes.'
              : 'हमारा कार्य पूर्णतः धरातलीय जवाबदेही, पारदर्शी शासन और प्रमाणित सामाजिक परिणामों पर आधारित है।'}
          </p>
        </div>

        {/* 3 Pillars Grid: Zero-pill, Clean hairline cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs transition-all flex flex-col justify-between ${pillar.accentBorder}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-[#FAF8F5] rounded-lg text-[#164E33] border border-stone-200/80">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs tracking-wider text-stone-600 font-semibold">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-stone-900 mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed font-body">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={pillar.onClick}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#164E33] hover:text-[#C2671A] transition-colors group focus:outline-none"
                  >
                    <span>{pillar.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
