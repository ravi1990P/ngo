import React, { useState, useEffect } from 'react';
import { NGO_INFO } from '../data/ngoData';
import { saveInquiry, getInquiries, downloadInquiriesJson, StoredInquiry } from '../utils/formStorage';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ExternalLink, Download, FileJson, Eye, X } from 'lucide-react';

interface ContactSectionProps {
  lang: 'en' | 'hi';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submittedInquiry, setSubmittedInquiry] = useState<StoredInquiry | null>(null);
  const [allInquiries, setAllInquiries] = useState<StoredInquiry[]>([]);
  const [showJsonViewer, setShowJsonViewer] = useState<boolean>(false);

  useEffect(() => {
    setAllInquiries(getInquiries());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const saved = saveInquiry({
      name,
      email,
      phone: phone || 'Not Provided',
      subject,
      message,
    });

    setSubmittedInquiry(saved);
    setAllInquiries(getInquiries());
  };

  const handleDownloadSingleJson = (inq: StoredInquiry) => {
    const jsonStr = JSON.stringify(inq, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `inquiry_${inq.id}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C2671A] mb-2 font-mono">
              {lang === 'en' ? 'Direct Communication & Registry' : 'संपर्क, कार्यालय एवं पंजीयन'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-stone-900 tracking-tight">
              {lang === 'en' ? 'Contact Our Central Office' : 'संस्था से संपर्क करें'}
            </h2>
            <p className="mt-2 text-base text-stone-600 font-body">
              {lang === 'en'
                ? 'Registered office in Mhow (Indore). Submit an enquiry online; every submission is verified, archived in structured JSON, and addressed by our team.'
                : 'महू (इंदौर) स्थित पंजीकृत कार्यालय। ऑनलाइन संदेश भेजें; प्रत्येक पूछताछ का विधिवत रिकॉर्ड रखा जाता है।'}
            </p>
          </div>

          {/* JSON Inquiries Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setShowJsonViewer(!showJsonViewer)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors border border-stone-300"
            >
              <Eye className="w-3.5 h-3.5 text-[#143D2B]" />
              <span>{lang === 'en' ? 'View Enquiries (JSON)' : 'पूछताछ देखें (JSON)'}</span>
            </button>

            <button
              type="button"
              onClick={downloadInquiriesJson}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#143D2B] hover:bg-[#0F291E] rounded-lg transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Export enquiries.json' : 'enquiries.json डाउनलोड करें'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Interactive Office Photo */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white text-[#143D2B] rounded-xl border border-stone-200 shadow-2xs shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold uppercase text-stone-500">
                    {lang === 'en' ? 'Registered Office' : 'पंजीकृत कार्यालय'}
                  </div>
                  <div className="text-sm font-semibold text-stone-900 mt-1 leading-snug">
                    {lang === 'en' ? NGO_INFO.address : NGO_INFO.hindiAddress}
                  </div>
                  <div className="text-xs text-stone-500 mt-1">
                    Near Mhow Cantonment & Railway Station, MP 453441
                  </div>
                </div>
              </div>

              {/* Telephone & Mobiles */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white text-[#143D2B] rounded-xl border border-stone-200 shadow-2xs shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold uppercase text-stone-500">
                    {lang === 'en' ? 'Phone & Helplines' : 'दूरभाष एवं मोबाइल'}
                  </div>
                  <div className="text-sm font-mono font-semibold text-stone-900 mt-1">
                    Landline: <a href={`tel:${NGO_INFO.phone}`} className="hover:underline">{NGO_INFO.phone}</a>
                  </div>
                  <div className="text-xs font-mono text-stone-700 mt-0.5 space-x-2">
                    {NGO_INFO.mobiles.map((mob, i) => (
                      <a key={i} href={`tel:${mob}`} className="hover:text-[#164E33] hover:underline">
                        {mob}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white text-[#143D2B] rounded-xl border border-stone-200 shadow-2xs shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold uppercase text-stone-500">
                    {lang === 'en' ? 'Official Email' : 'आधिकारिक ईमेल'}
                  </div>
                  <div className="text-sm font-semibold text-stone-900 mt-1">
                    <a href={`mailto:${NGO_INFO.email}`} className="text-[#164E33] hover:underline">
                      {NGO_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white text-[#143D2B] rounded-xl border border-stone-200 shadow-2xs shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold uppercase text-stone-500">
                    {lang === 'en' ? 'Office Timings' : 'कार्यालय समय'}
                  </div>
                  <div className="text-sm font-semibold text-stone-900 mt-1">
                    Monday – Saturday: 10:00 AM – 6:00 PM
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    Emergency relief teams on-call 24x7
                  </div>
                </div>
              </div>

              {/* Official Facebook Link */}
              <div className="pt-2">
                <a
                  href={NGO_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-between p-3.5 bg-blue-50/70 hover:bg-blue-100/80 border border-blue-200 rounded-xl text-blue-900 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
                      f
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight group-hover:underline">
                        facebook.com/mahatmagandhingo
                      </div>
                      <div className="text-[11px] text-blue-700">
                        {lang === 'en' ? 'Official NGO Page · Ground Updates' : 'आधिकारिक फेसबुक पेज · धरातलीय अपडेट्स'}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>

            {/* Visual Location Card with Real Image */}
            <div className="bg-[#143D2B] text-white p-6 rounded-2xl shadow-xs overflow-hidden relative">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-mono font-semibold uppercase text-[#FFBA7A]">
                  Location Map & Transit · Mhow, Indore
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=Mhow+Indore+Madhya+Pradesh+453441`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-stone-300 hover:text-white underline"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              
              <div className="bg-black/30 p-4 rounded-xl border border-white/10 text-xs text-stone-300 space-y-2">
                <p>
                  📍 <strong>Location Reference</strong>: Main Street, Dr. Ambedkar Nagar (Mhow), ~25 km from Indore Central Railway Station.
                </p>
                <p>
                  🚆 <strong>Transit Access</strong>: Accessible via regular local city buses from Indore Sarwate Bus Stand and Western Railway Mhow terminal.
                </p>
              </div>

              {/* Photo Stamp */}
              <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-stone-300">
                <span>MP Society Reg. No. 23259/1989</span>
                <span className="text-[#FFBA7A]">CIT Bhopal 80G Certified</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Inquiry Form with Instant JSON Output */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-stone-200 shadow-xs">
            <div className="text-xs font-mono font-semibold text-[#164E33] uppercase mb-1">
              <span>{lang === 'en' ? 'Send Us an Inquiry' : 'पूछताछ प्रपत्र (JSON समर्थित)'}</span>
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-stone-900 mb-2">
              {lang === 'en' ? 'Inquiry & Support Form' : 'पूछताछ एवं सुझाव प्रपत्र'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-8 font-body">
              {lang === 'en'
                ? 'Fill in the form below. Once submitted, your inquiry is recorded in structured format and can be instantly exported as JSON.'
                : 'नीचे दिए गए प्रपत्र में जानकारी भरें। फॉर्म जमा होने पर रसीद व JSON फाइल तुरंत प्राप्त होगी।'}
            </p>

            {submittedInquiry ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-emerald-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-stone-900">
                      {lang === 'en' ? 'Inquiry Successfully Registered!' : 'पूछताछ सफलतापूर्वक दर्ज हुई!'}
                    </h4>
                    <span className="text-xs font-mono text-emerald-800 font-semibold">
                      Reference ID: {submittedInquiry.id}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs space-y-1.5 font-mono text-stone-700">
                  <div><strong>Name:</strong> {submittedInquiry.name}</div>
                  <div><strong>Email:</strong> {submittedInquiry.email}</div>
                  <div><strong>Subject:</strong> {submittedInquiry.subject}</div>
                  <div><strong>Message:</strong> &ldquo;{submittedInquiry.message}&rdquo;</div>
                  <div><strong>Timestamp:</strong> {new Date(submittedInquiry.submittedAt).toLocaleString('en-IN')}</div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleDownloadSingleJson(submittedInquiry)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#143D2B] hover:bg-[#0F291E] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? `Download ${submittedInquiry.id}.json` : 'JSON फाइल डाउनलोड करें'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedInquiry(null);
                      setMessage('');
                    }}
                    className="px-4 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors"
                  >
                    {lang === 'en' ? 'Submit Another Inquiry' : 'अन्य संदेश भेजें'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'Your Name *' : 'आपका नाम *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Meera Joshi"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#164E33]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'Email Address *' : 'ईमेल पता *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="meera@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#164E33]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'Phone Number' : 'फ़ोन नंबर'}
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98270 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#164E33]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'Subject / Category' : 'विषय / श्रेणी'}
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#164E33]"
                    >
                      <option value="General Enquiry">General Public Enquiry</option>
                      <option value="Donation & 80G Receipt">Donation & 80G Tax Receipt</option>
                      <option value="Volunteering">Volunteering Opportunities</option>
                      <option value="Village Support Request">Village Community Support Request</option>
                      <option value="CSR / Institutional Partnership">CSR / Institutional Partnership</option>
                      <option value="Media & Press">Media & Press Relations</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    {lang === 'en' ? 'Your Message *' : 'आपका संदेश *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message, proposed village support, or query..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#164E33]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#143D2B] hover:bg-[#0F291E] text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Submit Inquiry & Generate Record' : 'पूछताछ दर्ज करें व रिकॉर्ड प्राप्त करें'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>

      {/* JSON Viewer Modal for Enquiries */}
      {showJsonViewer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-stone-900 text-stone-100 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-stone-700 shadow-2xl p-6 relative">
            <button
              type="button"
              onClick={() => setShowJsonViewer(false)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-white bg-stone-800 rounded-full"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <FileJson className="w-5 h-5 text-[#FFBA7A]" />
              <h3 className="text-lg font-heading font-bold text-white">
                Stored Inquiries Database (enquiries.json)
              </h3>
            </div>

            <p className="text-xs text-stone-400 mb-4 font-mono">
              All form submissions are structured and exported in real-time. Total records: {allInquiries.length}.
            </p>

            <pre className="bg-black/60 p-4 rounded-xl border border-stone-800 text-xs font-mono overflow-x-auto text-emerald-400 max-h-96">
              {JSON.stringify(allInquiries, null, 2)}
            </pre>

            <div className="mt-5 pt-3 border-t border-stone-800 flex items-center justify-between">
              <button
                type="button"
                onClick={downloadInquiriesJson}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#C2671A] hover:bg-[#A95713] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download enquiries.json</span>
              </button>

              <button
                type="button"
                onClick={() => setShowJsonViewer(false)}
                className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
