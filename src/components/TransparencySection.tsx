import React, { useState } from 'react';
import { NGO_INFO, PARTNERS } from '../data/ngoData';
import { ShieldCheck, FileText, Download, CheckCircle, ExternalLink, PieChart, Building, Award } from 'lucide-react';

interface TransparencySectionProps {
  lang: 'en' | 'hi';
}

export const TransparencySection: React.FC<TransparencySectionProps> = ({ lang }) => {
  const [showPdfViewer, setShowPdfViewer] = useState<boolean>(false);

  const financialBreakdown = [
    { category: 'Grassroots Program Operations (Nutrition, Water, Gau Seva)', percentage: 85, color: 'bg-[#143D2B]' },
    { category: 'Emergency Disaster Readiness & Seasonal Food Reserves', percentage: 9, color: 'bg-[#C2671A]' },
    { category: 'Administrative Governance, Audits & Regulatory Compliance', percentage: 6, color: 'bg-stone-400' },
  ];

  return (
    <section id="transparency" className="py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#C2671A] mb-2 font-mono">
            {lang === 'en' ? 'Institutional Integrity' : 'पारदर्शिता एवं वैधानिक अभिलेख'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-stone-900 tracking-tight">
            {lang === 'en' ? 'Transparency, Legal Registrations & Financial Disclosures' : 'पारदर्शिता, वैधानिक पंजीयन एवं वित्तीय विवरण'}
          </h2>
          <p className="mt-2 text-base text-stone-600 font-body">
            {lang === 'en'
              ? 'We uphold total fiduciary transparency. Review our official registrations, 80G tax exemption approval, and financial deployment ratios.'
              : 'संस्था पूर्ण वित्तीय एवं वैधानिक शुचिता में विश्वास रखती है। हमारे आधिकारिक दस्तावेज, 80G आयकर छूट और वित्तीय आवंटन विवरण यहां उपलब्ध हैं।'}
          </p>
        </div>

        {/* Legal Registrations & PDF Download Card */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-stone-200 shadow-xs mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-stone-100 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#164E33] uppercase">
                <ShieldCheck className="w-4 h-4 text-[#C2671A]" />
                <span>{lang === 'en' ? 'Verified Government Credentials' : 'प्रमाणित सरकारी अभिलेख'}</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-stone-900 mt-1">
                {lang === 'en' ? 'Official Documents & Brochure' : 'आधिकारिक दस्तावेज एवं ब्रोशर'}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setShowPdfViewer(!showPdfViewer)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-stone-200 bg-[#FAF8F5] hover:bg-stone-100 text-xs font-semibold text-stone-800 transition-colors"
              >
                <FileText className="w-4 h-4 text-[#164E33]" />
                <span>{showPdfViewer ? (lang === 'en' ? 'Hide Document Preview' : 'दस्तावेज छुपाएं') : (lang === 'en' ? 'Preview Official PDF' : 'आधिकारिक PDF देखें')}</span>
              </button>

              <a
                href={NGO_INFO.pdfDocumentPath}
                target="_blank"
                rel="noreferrer"
                download="Mahatma_Gandhi_Society_Official_Brochure.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#143D2B] hover:bg-[#0F291E] text-xs font-semibold text-white shadow-xs transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{lang === 'en' ? 'Download Full PDF Document' : 'संपूर्ण PDF डाउनलोड करें'}</span>
              </a>
            </div>
          </div>

          {/* Interactive Document Viewer if toggled */}
          {showPdfViewer && (
            <div className="mt-6 p-4 bg-[#FAF8F5] rounded-xl border border-stone-200">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200/60 text-xs">
                <span className="font-semibold text-stone-800">
                  Document: {NGO_INFO.pdfDocumentPath.split('/').pop()}
                </span>
                <a
                  href={NGO_INFO.pdfDocumentPath}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#C2671A] hover:underline flex items-center gap-1 font-mono"
                >
                  <span>Open in Full Window</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-96 bg-stone-100 rounded-lg overflow-hidden border border-stone-200">
                <iframe
                  src={NGO_INFO.pdfDocumentPath}
                  title="Official Brochure Document"
                  className="w-full h-full"
                />
              </div>
            </div>
          )}

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
              <div className="text-[11px] font-mono uppercase text-stone-500">Registration Number</div>
              <div className="text-base font-bold text-stone-900 mt-1 font-heading">{NGO_INFO.regNumber}</div>
              <div className="text-xs text-stone-600 mt-1">Registrar of Societies, Govt. of M.P. (1989)</div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
              <div className="text-[11px] font-mono uppercase text-stone-500">Income Tax Exemption</div>
              <div className="text-base font-bold text-[#C2671A] mt-1 font-heading">{NGO_INFO.citExemption}</div>
              <div className="text-xs text-stone-600 mt-1">Section 80G Certified for 50% Tax Deduction</div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
              <div className="text-[11px] font-mono uppercase text-stone-500">Quality Management</div>
              <div className="text-base font-bold text-stone-900 mt-1 font-heading">{NGO_INFO.isoCert}</div>
              <div className="text-xs text-stone-600 mt-1">Audited Compliance in Non-Profit Services</div>
            </div>
          </div>

          {/* Official Scanned Pages Visual Row */}
          <div className="mt-8 pt-6 border-t border-stone-100">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-mono font-semibold text-stone-700 uppercase">
                {lang === 'en' ? 'Original Document Scans (Click to View Full Page)' : 'मूल दस्तावेज छायाचित्र (बड़ा देखने हेतु क्लिक करें)'}
              </span>
              <span className="text-stone-400 font-mono text-[11px]">Pages 1–7</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {[
                { page: '01', title: 'Cover & Poem', file: '/assets/extracted/page_01.jpg' },
                { page: '02', title: 'Origin & Aims', file: '/assets/extracted/page_02.jpg' },
                { page: '03', title: 'Mentors Board', file: '/assets/extracted/page_03.jpg' },
                { page: '04', title: 'Govt. Projects', file: '/assets/extracted/page_04.jpg' },
                { page: '05', title: 'Reforms & Water', file: '/assets/extracted/page_05.jpg' },
                { page: '06', title: 'Water & Health 1', file: '/assets/extracted/page_06.jpg' },
                { page: '07', title: 'Water & Health 2', file: '/assets/extracted/page_07.jpg' },
              ].map((doc) => (
                <a
                  key={doc.page}
                  href={doc.file}
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-stone-50 p-1.5 rounded-lg border border-stone-200 hover:border-[#143D2B] transition-all flex flex-col items-center"
                >
                  <div className="h-28 w-full overflow-hidden rounded bg-white border border-stone-100 mb-1">
                    <img
                      src={doc.file}
                      alt={doc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="text-[10px] font-mono text-stone-600 truncate w-full text-center">
                    Page {doc.page}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Financial Transparency & Expenditure Deployment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#164E33] uppercase mb-1">
              <PieChart className="w-4 h-4 text-[#C2671A]" />
              <span>{lang === 'en' ? 'Fund Utilization Ratio' : 'धनराशि उपयोग अनुपात'}</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-stone-900 mb-2">
              {lang === 'en' ? 'Where Does Your Contribution Go?' : 'आपके सहयोग का धरातलीय उपयोग'}
            </h3>
            <p className="text-xs text-stone-600 mb-6 font-body">
              {lang === 'en'
                ? 'For every ₹100 contributed, 85 rupees directly reach on-ground nutrition kits, water filters, cattle feed, and emergency medicines.'
                : 'प्रत्येक 100 रुपये में से 85 रुपये सीधे जरूरतमंद बच्चों के भोजन, स्वच्छ जल, गौ ग्रास व दवाओं पर व्यय होते हैं।'}
            </p>

            <div className="space-y-4">
              {financialBreakdown.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between text-xs font-medium text-stone-800 mb-1.5">
                    <span className="truncate pr-2">{item.category}</span>
                    <span className="font-mono font-bold text-[#143D2B] shrink-0 tabular-nums">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500">
              * Independent annual audit conducted by Chartered Accountants as required under MP Society Act & Income Tax Rules.
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#143D2B] text-white p-6 sm:p-8 rounded-2xl shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#FFBA7A] uppercase mb-1">
              <Award className="w-4 h-4" />
              <span>{lang === 'en' ? 'Fiduciary Standards' : 'वित्तीय अनुशासन एवं मानक'}</span>
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 text-stone-100">
              {lang === 'en' ? 'Governance & Public Accountability' : 'पारदर्शी शासन एवं जन उत्तरदायित्व'}
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed font-body">
              <p>
                1. <strong>Dual Bank Authorization</strong>: All disbursements require dual approval by authorized office bearers.
              </p>
              <p>
                2. <strong>Zero Admin Extraction on Disaster Funds</strong>: 100% of emergency flood, winter relief, and medical aid funds reach beneficiaries directly without administrative overhead.
              </p>
              <p>
                3. <strong>Annual General Body Verification</strong>: Audited balance sheets and activity summaries are presented and ratified in the Annual General Meeting (AGM) at Mhow registered office.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 text-xs text-stone-400">
              Donors may request certified copies of annual audit reports by emailing <span className="text-[#FFBA7A]">{NGO_INFO.email}</span>.
            </div>
          </div>

        </div>

        {/* Confirmed Partners Section */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C2671A] mb-1 font-mono">
              {lang === 'en' ? 'Institutional Backing' : 'प्रमाणित सहयोगी संस्थाएं'}
            </div>
            <h3 className="text-2xl font-heading font-bold text-stone-900">
              {lang === 'en' ? 'Our Confirmed Partners & Institutional Associations' : 'हमारे प्रमाणित सहयोगी एवं संस्थागत संबंध'}
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              {lang === 'en'
                ? 'Only verified governmental, corporate, and spiritual partnerships on official record.'
                : 'केवल शासकीय, कॉरपोरेट एवं सामाजिक न्यास जो संस्था के अभिलेखों में विधिवत प्रमाणित हैं।'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#164E33] font-semibold mb-1">
                    {partner.category}
                  </div>
                  <h4 className="text-sm sm:text-base font-heading font-bold text-stone-900 leading-snug">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 font-body">
                    {partner.role}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-stone-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Confirmed Record</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
