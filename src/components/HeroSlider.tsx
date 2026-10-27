import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Users, ArrowRight, Sparkles } from 'lucide-react';
import { NGO_INFO } from '../data/ngoData';

interface HeroSliderProps {
  onDonateClick: () => void;
  onVolunteerClick: () => void;
  onExplorePrograms: () => void;
  lang: 'en' | 'hi';
}

interface Slide {
  id: number;
  tag: string;
  hindiTag: string;
  title: string;
  hindiTitle: string;
  subtitle: string;
  hindiSubtitle: string;
  badgeHighlight: string;
  accentColor: string;
  bgImage: string;
  photoContext: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    tag: 'Child Nutrition & Community Food Drives',
    hindiTag: 'अन्नपूर्णा सेवा एवं बाल पोषण',
    title: 'Nourishing Rural Lives. Daily Wholesome Community Meals.',
    hindiTitle: 'अन्नपूर्णा सेवा: वंचित परिवारों एवं बच्चों हेतु निःशुल्क पौष्टिक भोजन',
    subtitle: 'Serving freshly cooked, hot, nutritious meals to homeless mothers, elderly, and rural children across Mhow, Indore and rural Madhya Pradesh.',
    hindiSubtitle: 'प्रतिदिन जरूरतमंद माताओं, बच्चों और निर्धन परिवारों को गर्म व ताजा भोजन की निरंतर सेवा।',
    badgeHighlight: 'Daily Hot Meals & Nutrition',
    accentColor: '#E07A2A',
    bgImage: '/assets/aistudio/189502448_114830537454254_2191313892699588364_n_edb23059.jpg',
    photoContext: 'Real Field Service: Annapurna Hot Meal Distribution (Mhow / Indore)'
  },
  {
    id: 2,
    tag: 'Clean Drinking Water & Summer Relief',
    hindiTag: 'शुद्ध पेयजल एवं ग्रीष्मकालीन राहत',
    title: 'Safe Drinking Water Distribution & Direct Ground Relief.',
    hindiTitle: 'शुद्ध पेयजल वितरण: भीषण गर्मी में त्वरित जीवन रक्षक सेवा',
    subtitle: 'Dedicated volunteer teams delivering packaged safe drinking water, hydration support, and relief kits directly to roadside workers and unorganized laborers.',
    hindiSubtitle: 'भीषण गर्मी में राहगीरों, श्रमिकों और बस्तियों तक शुद्ध सीलबंद पेयजल और राहत सामग्री का त्वरित वितरण।',
    badgeHighlight: '10,000+ Litres Water Distributed',
    accentColor: '#F59E0B',
    bgImage: '/assets/aistudio/184202806_103383888598919_3059773326240974193_n_3990e375.jpg',
    photoContext: 'Field Action: Mobile Safe Water Distribution Volunteer Team'
  },
  {
    id: 3,
    tag: 'Panchatattva Environment & Swachhata',
    hindiTag: 'पंचतत्व संरक्षण एवं स्वच्छता अभियान',
    title: 'Protecting Mother Earth: Community Sanitation & Green Drives.',
    hindiTitle: 'स्वच्छता एवं पंचतत्व संरक्षण: जन-भागीदारी से स्वच्छ व स्वस्थ भारत',
    subtitle: 'Restoring public grounds, clearing plastic waste, propagating tree plantation, and educating rural communities on sanitation and water conservation.',
    hindiSubtitle: 'सार्वजनिक स्थलों की सफाई, प्लास्टिक मुक्त अभियान, वृक्षारोपण और पर्यावरण चेतना का जमीनी कार्य।',
    badgeHighlight: 'Panchatattva Nature Conservation',
    accentColor: '#10B981',
    bgImage: '/assets/aistudio/186291815_106857721584869_2193140446088829324_n__1__8fa82cf3.jpg',
    photoContext: 'Field Work: Active Swachhata Drive & Ground Cleaning by Volunteers'
  },
  {
    id: 4,
    tag: 'Animal Welfare & Summer Bird Feeding',
    hindiTag: 'मूक प्राणी सेवा एवं पक्षी दाना-पानी',
    title: 'Compassion for Mute Beings: Daily Bird Grains & Stray Care.',
    hindiTitle: 'जीव दया एवं पक्षी सेवा: ग्रीष्मकाल में दाना-पानी एवं मूक पशु संरक्षण',
    subtitle: 'Spreading grains for birds daily, installing water earthen pots (sakore) across trees, and providing fodder and care to stray animals.',
    hindiSubtitle: 'प्रतिदिन पक्षियों को दाना, छतों व पेड़ों पर जल सकोरे और बेसहारा मूक जीवों की निस्वार्थ सेवा।',
    badgeHighlight: 'Daily Bird Feeding & Stray Welfare',
    accentColor: '#E07A2A',
    bgImage: '/assets/aistudio/185628750_105926441677997_4962522418373883475_n_866e50e7.jpg',
    photoContext: 'Ground Activity: Daily Grain Feeding for Birds & Animal Protection'
  }
];

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onDonateClick,
  onVolunteerClick,
  onExplorePrograms,
  lang,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative overflow-hidden text-white bg-[#0A1A12] min-h-[620px] lg:min-h-[700px] flex items-center">
      
      {/* FULL BACKGROUND IMAGE: Full bleed cover with smooth crossfade */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.bgImage}
          alt={slide.title}
          className="w-full h-full object-cover object-center scale-105 transition-all duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Light gradient scrim: #0717106b overlay with gentle soft vertical gradient */}
        <div className="absolute inset-0 bg-[#0717106b]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071710]/80 via-[#071710]/30 to-black/20" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col justify-between min-h-[600px] lg:min-h-[660px]">
        
        {/* Top Operational Pill / Trust Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-200 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            <span className="text-[#FFBA7A] font-semibold">{slide.badgeHighlight}</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span>{lang === 'en' ? slide.tag : slide.hindiTag}</span>
            <span aria-hidden="true" className="text-stone-400 hidden md:inline">·</span>
            <span className="hidden md:inline text-stone-300">Reg. Office: Mhow, Indore</span>
          </div>
        </div>

        {/* Center Content: Headline & Purpose */}
        <div className="my-auto py-8 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#E07A2A]/25 text-[#FFD6A5] border border-[#E07A2A]/40 text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD6A5]" />
            <span>{NGO_INFO.hindiName} · {NGO_INFO.slogan}</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight sm:leading-tight drop-shadow-md">
            {lang === 'en' ? slide.title : slide.hindiTitle}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-stone-100 leading-relaxed font-body max-w-2xl drop-shadow-sm">
            {lang === 'en' ? slide.subtitle : slide.hindiSubtitle}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onDonateClick}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold rounded-lg bg-[#C2671A] hover:bg-[#A95713] text-white shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C2671A]"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>{lang === 'en' ? 'Support Our Mission' : 'मिशन में सहयोग दें'}</span>
            </button>

            <button
              type="button"
              onClick={onVolunteerClick}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium rounded-lg bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Users className="w-4 h-4" />
              <span>{lang === 'en' ? 'Become a Volunteer' : 'स्वयंसेवक बनें'}</span>
            </button>

            <button
              type="button"
              onClick={onExplorePrograms}
              className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-stone-200 hover:text-white transition-colors group drop-shadow-xs"
            >
              <span>{lang === 'en' ? 'Explore Programs' : 'समस्त कार्यक्रम देखें'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Slider Navigation (Without numbers or Full Background tag) */}
        <div className="pt-6 border-t border-white/20 flex items-center justify-between">
          {/* Subtle slide dot indicators without numbers */}
          <div className="flex items-center gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide
                    ? 'w-8 bg-[#C2671A]'
                    : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Previous / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors border border-white/20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors border border-white/20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
