import React, { useState } from 'react';
import { GALLERY_ITEMS, IMPACT_STORIES } from '../data/ngoData';
import { GalleryItem } from '../types';
import { CheckCircle2, MapPin, ZoomIn, X, Calendar, Quote, Sparkles } from 'lucide-react';

interface ImpactStoriesGalleryProps {
  lang: 'en' | 'hi';
}

export const ImpactStoriesGallery: React.FC<ImpactStoriesGalleryProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Activities' : 'समस्त गतिविधियां' },
    { id: 'nutrition', label: lang === 'en' ? 'Nutrition & Food' : 'पोषण व अन्नपूर्णा' },
    { id: 'rural', label: lang === 'en' ? 'Rural Agriculture' : 'कृषि व ग्रामीण' },
    { id: 'animal', label: lang === 'en' ? 'Gau Seva & Animal Care' : 'गौ सेवा व पशु रक्षा' },
    { id: 'medical', label: lang === 'en' ? 'Health & Medical' : 'स्वास्थ्य शिविर' },
    { id: 'archival', label: lang === 'en' ? 'Archival Chronicle (PDF)' : 'ऐतिहासिक अभिलेख' },
  ];

  const filteredGallery =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#C2671A] mb-2 font-mono">
            {lang === 'en' ? 'Voices & Visual Chronicle' : 'सच्ची कहानियां एवं गतिविधियां'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-stone-900 tracking-tight">
            {lang === 'en' ? 'Consent-Based Stories & Ground Activities' : 'सत्यापित लाभार्थी गाथाएं एवं गतिविधि चित्र'}
          </h2>
          <p className="mt-2 text-base text-stone-600 font-body">
            {lang === 'en'
              ? 'Real updates from our daily fieldwork in Mhow, Indore, and surrounding villages. All beneficiary testimonials shared with verified written consent.'
              : 'महू, इंदौर एवं मालवा-निमाड़ अंचल के गांवों में जारी सेवा कार्यों का वास्तविक विवरण। समस्त कहानियां लाभार्थियों की लिखित सहमति से प्रकाशित हैं।'}
          </p>
        </div>

        {/* Part 1: Consent-Based Beneficiary Impact Stories */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6 text-xs font-mono font-semibold text-[#164E33] uppercase">
            <Quote className="w-4 h-4 text-[#C2671A]" />
            <span>{lang === 'en' ? 'Beneficiary Impact Testimonials' : 'धरातलीय प्रभाव गाथाएं'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {IMPACT_STORIES.map((story) => (
              <div
                key={story.id}
                className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-3 pb-2 border-b border-stone-200/60">
                    <span className="text-[#164E33] font-semibold">{story.program}</span>
                    <span className="flex items-center gap-1 text-[11px] text-stone-400">
                      <MapPin className="w-3 h-3" />
                      <span>{story.location}</span>
                    </span>
                  </div>

                  <blockquote className="text-sm text-stone-800 leading-relaxed font-body italic">
                    &ldquo;{story.story}&rdquo;
                  </blockquote>

                  <div className="mt-4 pt-3 border-t border-stone-200/80 bg-white p-3 rounded-lg border border-stone-200/60">
                    <div className="text-[10px] font-mono font-semibold uppercase text-stone-500 mb-0.5">
                      {lang === 'en' ? 'Concrete Outcome' : 'ठोस परिणाम'}
                    </div>
                    <div className="text-xs font-medium text-stone-900 leading-snug">
                      {story.outcome}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-200/60 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-stone-900">{story.name}</span>
                    {story.age && <span className="text-xs text-stone-500">, {story.age} yrs</span>}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Consent on Record</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Ground Activity Visual Showcase */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-mono font-semibold text-[#164E33] uppercase">
                {lang === 'en' ? 'Activity Gallery' : 'गतिविधि दीर्घा'}
              </div>
              <h3 className="text-xl font-heading font-bold text-stone-900">
                {lang === 'en' ? 'Visual Evidence & Historical Archives' : 'सेवा कार्य एवं ऐतिहासिक चित्र'}
              </h3>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    activeCategory === c.id
                      ? 'bg-[#143D2B] text-white shadow-xs'
                      : 'bg-[#FAF8F5] text-stone-600 hover:text-stone-900 border border-stone-200'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Items Grid with Real Photographs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                className="group cursor-pointer bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Real Activity Photo Container */}
                <div className="h-52 relative overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 pointer-events-none" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono z-10">
                    <span className="bg-[#143D2B]/85 px-2 py-0.5 rounded text-[#FFBA7A] font-semibold uppercase">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1 bg-black/50 px-2 py-0.5 rounded text-stone-200">
                      <Calendar className="w-3 h-3" />
                      <span>{item.year}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <h4 className="text-sm font-heading font-bold text-white group-hover:text-[#FFBA7A] transition-colors leading-snug drop-shadow-sm">
                      {item.title}
                    </h4>
                  </div>

                  <div className="absolute right-3 bottom-3 p-1.5 bg-[#C2671A] rounded-full text-white shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Caption text */}
                <div className="p-4 bg-white flex flex-col justify-between flex-1">
                  <p className="text-xs text-stone-600 line-clamp-2 font-body">
                    {item.caption}
                  </p>
                  <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                    <span className="flex items-center gap-1 truncate max-w-[180px]">
                      <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </span>
                    <span className="text-[#164E33] font-semibold shrink-0">
                      {lang === 'en' ? 'Click to Enlarge' : 'बड़ा देखें'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Part 3: Official Brochure Archival Photo Sheets (Page 8 & 9) */}
          <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-stone-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200/80 gap-3 mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#C2671A] uppercase">
                  Historical Photo Compilation
                </span>
                <h4 className="text-lg font-heading font-bold text-stone-900 mt-0.5">
                  संस्था की विभिन्न गतिविधियों की चित्रावली (Archival Sheets)
                </h4>
                <p className="text-xs text-stone-600 mt-1">
                  Full 28-photo collage pages scanned directly from the official registration booklet.
                </p>
              </div>
              <div className="text-xs text-stone-500 font-mono">
                From Official PDF Booklet
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sheet 1 (Page 8) */}
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                <div className="flex items-center justify-between text-xs text-stone-600 font-mono mb-2">
                  <span className="font-semibold text-stone-900">Activity Sheet 1 (Page 8)</span>
                  <span>1987-2000 Era</span>
                </div>
                <div className="h-80 overflow-hidden rounded-lg border border-stone-200 bg-stone-100">
                  <img
                    src="/assets/extracted/page_08.jpg"
                    alt="Activity Collage Sheet Page 8"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedGalleryItem({
                      id: 'sheet-8',
                      title: 'संस्था की विभिन्न गतिविधियों की चित्रावली - भाग १',
                      category: 'archival',
                      year: '1987-2000',
                      location: 'Madhya Pradesh & National Centers',
                      caption: 'Official 14-photo archival montage featuring ministers, community meetings, and health drives.',
                      description: 'Scanned from Page 8 of the Mahatma Gandhi Agriculture & Rural Welfare Society official booklet.',
                      image: '/assets/extracted/page_08.jpg'
                    })}
                  />
                </div>
                <div className="text-[11px] text-stone-500 mt-2 text-center">
                  Click to inspect full high-resolution sheet
                </div>
              </div>

              {/* Sheet 2 (Page 9) */}
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs">
                <div className="flex items-center justify-between text-xs text-stone-600 font-mono mb-2">
                  <span className="font-semibold text-stone-900">Activity Sheet 2 (Page 9)</span>
                  <span>2000-2015 Era</span>
                </div>
                <div className="h-80 overflow-hidden rounded-lg border border-stone-200 bg-stone-100">
                  <img
                    src="/assets/extracted/page_09.jpg"
                    alt="Activity Collage Sheet Page 9"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedGalleryItem({
                      id: 'sheet-9',
                      title: 'संस्था की विभिन्न गतिविधियों की चित्रावली - भाग २',
                      category: 'archival',
                      year: '2000-Present',
                      location: 'Malwa, Ujjain, Indore & Delhi',
                      caption: 'Official 14-photo archival montage featuring Simhastha, Ashok Leyland farmer camps, and award ceremonies.',
                      description: 'Scanned from Page 9 of the Mahatma Gandhi Agriculture & Rural Welfare Society official booklet.',
                      image: '/assets/extracted/page_09.jpg'
                    })}
                  />
                </div>
                <div className="text-[11px] text-stone-500 mt-2 text-center">
                  Click to inspect full high-resolution sheet
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal with Real Image Display */}
      {selectedGalleryItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-stone-200 shadow-2xl p-6 relative">
            <button
              type="button"
              onClick={() => setSelectedGalleryItem(null)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 bg-stone-100 rounded-full"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-3 pr-8">
              <div className="text-xs font-mono text-[#C2671A] font-semibold uppercase mb-1">
                {selectedGalleryItem.category} · {selectedGalleryItem.year}
              </div>
              <h3 className="text-xl font-heading font-bold text-stone-900">
                {selectedGalleryItem.title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-1">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                <span>{selectedGalleryItem.location}</span>
              </div>
            </div>

            {/* High-Resolution Photograph Display */}
            <div className="rounded-xl overflow-hidden border border-stone-200 my-4 bg-stone-100 max-h-[420px] flex items-center justify-center">
              <img
                src={selectedGalleryItem.image}
                alt={selectedGalleryItem.title}
                className="w-full h-full object-contain max-h-[420px]"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 text-stone-700 text-sm leading-relaxed">
              <p className="font-semibold text-stone-900 mb-1">{selectedGalleryItem.caption}</p>
              <p className="text-xs sm:text-sm text-stone-600 font-body">{selectedGalleryItem.description}</p>
            </div>

            <div className="text-[11px] text-stone-400 font-mono border-t border-stone-100 pt-3 flex items-center justify-between">
              <span>Official Mahatma Gandhi Society Field Archive</span>
              <button
                type="button"
                onClick={() => setSelectedGalleryItem(null)}
                className="text-[#143D2B] font-semibold hover:underline"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
