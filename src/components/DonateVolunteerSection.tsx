import React, { useState } from 'react';
import { NGO_INFO, DONATION_TIERS, PROGRAMS } from '../data/ngoData';
import { saveVolunteer, saveDonationRecord, downloadVolunteersJson, downloadDonationsJson } from '../utils/formStorage';
import { Heart, Users, Building2, CheckCircle2, Copy, Check, QrCode, ShieldCheck, Download, Sparkles, Send, FileJson, Image as ImageIcon } from 'lucide-react';

interface DonateVolunteerSectionProps {
  initialSubTab?: 'donate' | 'volunteer' | 'partner';
  onGenerateReceipt: (details: {
    donorName: string;
    email: string;
    phone: string;
    panNumber: string;
    amount: number;
    program: string;
    paymentMethod: string;
  }) => void;
  lang: 'en' | 'hi';
}

export const DonateVolunteerSection: React.FC<DonateVolunteerSectionProps> = ({
  initialSubTab = 'donate',
  onGenerateReceipt,
  lang,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'donate' | 'volunteer' | 'partner'>(initialSubTab);

  // Donation state
  const [selectedAmount, setSelectedAmount] = useState<number>(1500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedProgram, setSelectedProgram] = useState<string>('Child Nutrition Program');
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [donorPhone, setDonorPhone] = useState<string>('');
  const [donorPan, setDonorPan] = useState<string>('');
  const [copiedUpi, setCopiedUpi] = useState<boolean>(false);
  const [copiedBank, setCopiedBank] = useState<boolean>(false);
  const [donationSuccess, setDonationSuccess] = useState<boolean>(false);

  // Volunteer state
  const [volunteerName, setVolunteerName] = useState<string>('');
  const [volunteerEmail, setVolunteerEmail] = useState<string>('');
  const [volunteerPhone, setVolunteerPhone] = useState<string>('');
  const [volunteerCity, setVolunteerCity] = useState<string>('');
  const [volunteerAvailability, setVolunteerAvailability] = useState<string>('weekends');
  const [selectedVolunteerInterests, setSelectedVolunteerInterests] = useState<string[]>([
    'Child Nutrition Drives',
    'Animal Welfare & Gau Seva'
  ]);
  const [volunteerExperience, setVolunteerExperience] = useState<string>('');
  const [volunteerSubmitted, setVolunteerSubmitted] = useState<boolean>(false);
  const [lastVolunteerId, setLastVolunteerId] = useState<string>('');

  // Partner state
  const [partnerOrg, setPartnerOrg] = useState<string>('');
  const [partnerContactPerson, setPartnerContactPerson] = useState<string>('');
  const [partnerEmail, setPartnerEmail] = useState<string>('');
  const [partnerPhone, setPartnerPhone] = useState<string>('');
  const [partnerMessage, setPartnerMessage] = useState<string>('');
  const [partnerSubmitted, setPartnerSubmitted] = useState<boolean>(false);

  const effectiveAmount = customAmount ? Math.max(100, parseInt(customAmount, 10) || 0) : selectedAmount;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(NGO_INFO.bankDetails.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleCopyBank = () => {
    const text = `A/C Name: ${NGO_INFO.bankDetails.accountName}\nA/C No: ${NGO_INFO.bankDetails.accountNumber}\nIFSC: ${NGO_INFO.bankDetails.ifscCode}\nBank: ${NGO_INFO.bankDetails.bankName}, ${NGO_INFO.bankDetails.branch}`;
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorEmail || effectiveAmount < 100) return;

    const receiptNum = `MGS-80G-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    // Save to persistent storage in JSON
    saveDonationRecord({
      id: `DON-${Date.now()}`,
      receiptNumber: receiptNum,
      donorName,
      email: donorEmail,
      phone: donorPhone || 'Not Provided',
      panNumber: donorPan || 'APPLIED_FOR',
      amount: effectiveAmount,
      program: selectedProgram,
      paymentMethod: 'UPI / Direct Bank Transfer',
      timestamp: new Date().toISOString()
    });

    onGenerateReceipt({
      donorName,
      email: donorEmail,
      phone: donorPhone || 'Not Provided',
      panNumber: donorPan || 'APPLIED_FOR',
      amount: effectiveAmount,
      program: selectedProgram,
      paymentMethod: 'UPI / Direct Bank Transfer'
    });

    setDonationSuccess(true);
  };

  const handleVolunteerInterestToggle = (interest: string) => {
    setSelectedVolunteerInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerName || !volunteerEmail || !volunteerPhone) return;

    // Save to JSON storage
    const saved = saveVolunteer({
      fullName: volunteerName,
      email: volunteerEmail,
      phone: volunteerPhone,
      city: volunteerCity,
      interests: selectedVolunteerInterests,
      availability: volunteerAvailability,
      priorExperience: volunteerExperience
    });

    setLastVolunteerId(saved.id);
    setVolunteerSubmitted(true);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerOrg || !partnerEmail || !partnerPhone) return;
    setPartnerSubmitted(true);
  };

  return (
    <section id="donate-volunteer" className="py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#C2671A] mb-2 font-mono">
            {lang === 'en' ? 'Get Involved' : 'सहयोग एवं सहभागिता'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-stone-900 tracking-tight">
            {lang === 'en' ? 'Support Our Mission or Join as a Volunteer' : 'दान द्वारा सहयोग दें या स्वयंसेवक के रूप में जुड़ें'}
          </h2>
          <p className="mt-2 text-base text-stone-600 font-body">
            {lang === 'en'
              ? 'Choose your mode of contribution. Every rupee is 80G tax-deductible and channeled directly to field operations in Madhya Pradesh.'
              : 'अपनी सुविधानुसार सहयोग का माध्यम चुनें। आपका प्रत्येक अंशदान 80G के अंतर्गत कर-मुक्त है और सीधे धरातलीय कार्य में उपयोग होता है।'}
          </p>
        </div>

        {/* Distinct Segmented Tabs: Donation in Saffron, Volunteer in Forest Green */}
        <div className="flex flex-wrap items-center gap-3 p-1.5 bg-stone-200/70 rounded-xl mb-12 max-w-xl">
          
          {/* Donation Tab (Saffron Styled) */}
          <button
            type="button"
            onClick={() => {
              setActiveSubTab('donate');
              setDonationSuccess(false);
            }}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all focus:outline-none ${
              activeSubTab === 'donate'
                ? 'bg-[#C2671A] text-white shadow-sm ring-2 ring-[#C2671A]/20'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Heart className="w-4 h-4 fill-current" />
            <span>{lang === 'en' ? 'Donate (80G Tax-Exempt)' : 'दान करें (80G छूट)'}</span>
          </button>

          {/* Volunteer Tab (Forest Green Styled) */}
          <button
            type="button"
            onClick={() => {
              setActiveSubTab('volunteer');
              setVolunteerSubmitted(false);
            }}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all focus:outline-none ${
              activeSubTab === 'volunteer'
                ? 'bg-[#143D2B] text-white shadow-sm ring-2 ring-[#143D2B]/20'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>{lang === 'en' ? 'Become a Volunteer' : 'स्वयंसेवक बनें'}</span>
          </button>

          {/* CSR / Institutional Tab */}
          <button
            type="button"
            onClick={() => {
              setActiveSubTab('partner');
              setPartnerSubmitted(false);
            }}
            className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all focus:outline-none ${
              activeSubTab === 'partner'
                ? 'bg-stone-800 text-white shadow-sm'
                : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>{lang === 'en' ? 'CSR / Partner' : 'संस्थागत साझेदारी'}</span>
          </button>
        </div>

        {/* ===================== TAB 1: DONATION ===================== */}
        {activeSubTab === 'donate' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form & Amount Selection */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-stone-900">
                    {lang === 'en' ? 'Choose Your Contribution' : 'अपनी सहयोग राशि चुनें'}
                  </h3>
                  <div className="text-xs text-stone-500 mt-0.5">
                    {lang === 'en' ? 'Direct 50% Tax Relief under Section 80G' : 'आयकर धारा 80G के तहत 50% की सीधी कर छूट'}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    CIT Bhopal Approved
                  </span>
                </div>
              </div>

              {/* Preset Impact Tiers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {DONATION_TIERS.map((tier) => {
                  const isSelected = selectedAmount === tier.amount && !customAmount;
                  return (
                    <button
                      key={tier.amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(tier.amount);
                        setCustomAmount('');
                      }}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        isSelected
                          ? 'border-[#C2671A] bg-[#FFF8F0] shadow-xs ring-1 ring-[#C2671A]'
                          : 'border-stone-200 hover:border-stone-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-lg font-heading font-bold text-[#143D2B] tabular-nums">
                          ₹{tier.amount.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-[#C2671A]">
                          {tier.badge}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-stone-800">
                        {lang === 'en' ? tier.title : tier.hindiTitle}
                      </div>
                      <div className="text-[11px] text-stone-500 mt-1 leading-snug">
                        {tier.impact}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {lang === 'en' ? 'Or Enter Custom Amount (₹)' : 'अथवा अपनी इच्छानुसार राशि लिखें (₹)'}
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 font-bold">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="100"
                    placeholder="e.g. 10000"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C2671A]"
                  />
                </div>
              </div>

              {/* Cause Allocation Dropdown */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {lang === 'en' ? 'Allocate Contribution Towards' : 'सहयोग हेतु योजना का चयन करें'}
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C2671A]"
                >
                  {PROGRAMS.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                  <option value="General Corpus / Where Most Needed">
                    General Corpus / Where Most Needed
                  </option>
                </select>
              </div>

              {/* Donor Details for 80G Receipt */}
              <form onSubmit={handleDonationSubmit} className="space-y-4 pt-4 border-t border-stone-100">
                <div className="text-xs font-mono font-semibold uppercase text-stone-500 tracking-wider">
                  {lang === 'en' ? 'Donor Details (For 80G Exemption Receipt)' : 'दानदाता विवरण (80G रसीद हेतु)'}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'Full Name *' : 'पूरा नाम *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C2671A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'Email Address *' : 'ईमेल पता *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rajesh@example.com"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C2671A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'Mobile Number' : 'मोबाइल नंबर'}
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98270 00000"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C2671A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'PAN Number (Mandatory for 80G)' : 'पैन कार्ड नंबर (80G रसीद हेतु)'}
                    </label>
                    <input
                      type="text"
                      placeholder="ABCDE1234F"
                      maxLength={10}
                      value={donorPan}
                      onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                      className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm font-mono text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C2671A]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#C2671A] hover:bg-[#A95713] text-white text-sm font-semibold shadow-xs transition-colors focus:outline-none"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>
                    {lang === 'en'
                      ? `Contribute ₹${effectiveAmount.toLocaleString('en-IN')} & Generate 80G Receipt`
                      : `₹${effectiveAmount.toLocaleString('en-IN')} का सहयोग दें व 80G रसीद प्राप्त करें`}
                  </span>
                </button>
              </form>

              {donationSuccess && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-emerald-900">
                      {lang === 'en' ? 'Contribution Acknowledged & 80G Receipt Generated!' : 'सहयोग प्राप्त हुआ व 80G रसीद तैयार है!'}
                    </div>
                    <div className="text-xs text-emerald-700 mt-0.5">
                      {lang === 'en'
                        ? 'Thank you for empowering grassroots beneficiaries. Your printable receipt modal is ready.'
                        : 'धरातलीय जन सेवा में आपके पावन योगदान हेतु हार्दिक आभार।'}
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Direct Bank Transfer & UPI Details */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* UPI Quick Transfer Card */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-900 font-mono">
                    <QrCode className="w-4 h-4 text-[#C2671A]" />
                    <span>{lang === 'en' ? 'Direct UPI Transfer' : 'सीधा यूपीआई ट्रांसफर'}</span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-mono">Instant & Zero-Fee</span>
                </div>

                <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200 flex items-center justify-between gap-2">
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-stone-500 uppercase">Official Society UPI ID</div>
                    <div className="text-xs sm:text-sm font-mono font-bold text-stone-900 truncate">
                      {NGO_INFO.bankDetails.upiId}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyUpi}
                    className="p-2 bg-white hover:bg-stone-100 rounded-lg border border-stone-200 text-stone-700 transition-colors shrink-0"
                    title="Copy UPI ID"
                  >
                    {copiedUpi ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="text-[11px] text-stone-500 mt-2">
                  Works with Google Pay, PhonePe, Paytm, BHIM and all banking apps.
                </div>
              </div>

              {/* Official Bank Account Card */}
              <div className="bg-[#143D2B] text-white p-6 rounded-2xl shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#FFBA7A] font-mono">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Official SBI Account (NEFT / RTGS)' : 'आधिकारिक एसबीआई खाता विवरण'}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyBank}
                    className="flex items-center gap-1 text-[11px] text-stone-300 hover:text-white bg-white/10 px-2.5 py-1 rounded transition-colors"
                  >
                    {copiedBank ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedBank ? 'Copied' : 'Copy All'}</span>
                  </button>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <div className="text-stone-400 font-mono text-[10px] uppercase">Account Name</div>
                    <div className="font-semibold text-stone-100 text-sm">{NGO_INFO.bankDetails.accountName}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div>
                      <div className="text-stone-400 font-mono text-[10px] uppercase">Account Number</div>
                      <div className="font-mono font-bold text-stone-100 text-sm">{NGO_INFO.bankDetails.accountNumber}</div>
                    </div>
                    <div>
                      <div className="text-stone-400 font-mono text-[10px] uppercase">IFSC Code</div>
                      <div className="font-mono font-bold text-[#FFBA7A] text-sm">{NGO_INFO.bankDetails.ifscCode}</div>
                    </div>
                  </div>
                  <div className="pt-1">
                    <div className="text-stone-400 font-mono text-[10px] uppercase">Bank & Branch</div>
                    <div className="text-stone-200">{NGO_INFO.bankDetails.bankName}, {NGO_INFO.bankDetails.branch}</div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/15 text-[11px] text-stone-300">
                  Please share transaction reference to <span className="text-[#FFBA7A] underline">{NGO_INFO.email}</span> for priority receipt generation.
                </div>
              </div>

              {/* Tax Savings Quick Calculation Card */}
              <div className="bg-[#FAF8F5] p-5 rounded-xl border border-stone-200 text-xs text-stone-600">
                <div className="font-semibold text-stone-900 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#C2671A]" />
                  <span>80G Tax Benefit Summary</span>
                </div>
                <p>
                  As an Indian taxpayer, 50% of your total donation amount is fully deductible from your taxable income under Section 80G of the Income Tax Act.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* ===================== TAB 2: VOLUNTEER REGISTRATION ===================== */}
        {activeSubTab === 'volunteer' && (
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-stone-200 shadow-xs max-w-3xl mx-auto">
            <div className="max-w-xl mb-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#164E33] uppercase tracking-wider font-mono mb-1">
                <Users className="w-4 h-4 text-[#164E33]" />
                <span>{lang === 'en' ? 'Community Field Force' : 'ग्राम सेवा स्वयंसेवक'}</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-stone-900">
                {lang === 'en' ? 'Register as a Volunteer' : 'स्वयंसेवक पंजीयन फॉर्म'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                {lang === 'en'
                  ? 'Join our on-ground drives in nutrition distribution, Gaushala animal care, medical camps, or youth digital literacy.'
                  : 'बाल पोषण वितरण, गौ सेवा, निःशुल्क स्वास्थ्य शिविरों अथवा युवा साक्षरता अभियान में अपना समय व सहयोग दें।'}
              </p>
            </div>

            {volunteerSubmitted ? (
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-emerald-200 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-heading font-bold text-stone-900">
                  {lang === 'en' ? 'Registration Confirmed, ' + volunteerName + '!' : 'पंजीयन सफलतापूर्वक प्राप्त हुआ, ' + volunteerName + '!'}
                </h4>
                <div className="text-xs font-mono text-emerald-800 font-semibold">
                  Volunteer ID: {lastVolunteerId}
                </div>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  {lang === 'en'
                    ? 'Our volunteer coordinator from Mhow Central Office will contact you on ' + volunteerPhone + ' for orientation.'
                    : 'महू स्थित हमारे कार्यालय समन्वयक शीघ्र आपसे संपर्क कर सेवा शिविरों का विवरण साझा करेंगे।'}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={downloadVolunteersJson}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#143D2B] text-white text-xs font-semibold rounded-lg hover:bg-[#0F291E] transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download volunteers.json</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setVolunteerSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold text-[#143D2B] bg-white border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors"
                  >
                    {lang === 'en' ? 'Submit Another Registration' : 'अन्य पंजीयन करें'}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Volunteer Action Photography Strip */}
                <div className="mb-6 grid grid-cols-3 gap-3">
                  <div className="h-24 rounded-lg overflow-hidden border border-stone-200 relative">
                    <img
                      src="/assets/extracted/photo_tree_plantation.jpg"
                      alt="Tree Plantation Volunteer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 left-1.5 bg-black/60 text-white text-[9px] font-mono px-1 rounded">
                      Eco Drives
                    </span>
                  </div>
                  <div className="h-24 rounded-lg overflow-hidden border border-stone-200 relative">
                    <img
                      src="/assets/extracted/hygiene_washing.jpg"
                      alt="Child Nutrition Drive"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 left-1.5 bg-black/60 text-white text-[9px] font-mono px-1 rounded">
                      Nutrition
                    </span>
                  </div>
                  <div className="h-24 rounded-lg overflow-hidden border border-stone-200 relative">
                    <img
                      src="/assets/extracted/photo_health_checkup.jpg"
                      alt="Health Camp Volunteers"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 left-1.5 bg-black/60 text-white text-[9px] font-mono px-1 rounded">
                      Health Aid
                    </span>
                  </div>
                </div>

                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'Full Name *' : 'पूरा नाम *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={volunteerName}
                      onChange={(e) => setVolunteerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#164E33]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'Mobile Number *' : 'मोबाइल नंबर *'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98270 00000"
                      value={volunteerPhone}
                      onChange={(e) => setVolunteerPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#164E33]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'Email Address *' : 'ईमेल पता *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="anand@example.com"
                      value={volunteerEmail}
                      onChange={(e) => setVolunteerEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#164E33]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'City / Tehsil / District *' : 'शहर / तहसील / जिला *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mhow / Indore"
                      value={volunteerCity}
                      onChange={(e) => setVolunteerCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#164E33]"
                    />
                  </div>
                </div>

                {/* Areas of Interest */}
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-2">
                    {lang === 'en' ? 'Select Areas of Interest (Multiple Allowed)' : 'रुचि के क्षेत्र चुनें'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Child Nutrition & Midday Meals',
                      'Animal Welfare & Gau Seva',
                      'Medical Health Camps',
                      'Rural Agriculture & SHG Training',
                      'Disaster & Emergency First-Aid',
                      'Digital Literacy & Youth Mentoring'
                    ].map((interest) => {
                      const checked = selectedVolunteerInterests.includes(interest);
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleVolunteerInterestToggle(interest)}
                          className={`text-left px-3 py-2 rounded-lg text-xs font-medium border flex items-center justify-between transition-colors ${
                            checked
                              ? 'bg-emerald-50 border-[#143D2B] text-[#143D2B]'
                              : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                          }`}
                        >
                          <span>{interest}</span>
                          {checked && <Check className="w-3.5 h-3.5 text-[#143D2B]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    {lang === 'en' ? 'Availability' : 'उपलब्धता'}
                  </label>
                  <select
                    value={volunteerAvailability}
                    onChange={(e) => setVolunteerAvailability(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#164E33]"
                  >
                    <option value="weekends">Weekends Only (Saturday/Sunday)</option>
                    <option value="weekdays">Weekdays (Part-Time)</option>
                    <option value="emergency">On-Call During Emergency / Relief Operations</option>
                    <option value="fulltime">Full-Time Field Fellowship</option>
                  </select>
                </div>

                {/* Prior Experience */}
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    {lang === 'en' ? 'Skills / Prior Experience (Optional)' : 'पूर्व अनुभव या विशेष कौशल (वैकल्पिक)'}
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us briefly about any past community work or medical/technical skills..."
                    value={volunteerExperience}
                    onChange={(e) => setVolunteerExperience(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#164E33]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#143D2B] hover:bg-[#0F291E] text-white text-sm font-semibold shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Submit Volunteer Application' : 'आवेदन जमा करें'}</span>
                </button>
              </form>
            </div>
          )}
        </div>
      )}

        {/* ===================== TAB 3: CSR & PARTNERSHIP ===================== */}
        {activeSubTab === 'partner' && (
          <div className="bg-white p-6 sm:p-10 rounded-2xl border border-stone-200 shadow-xs max-w-3xl mx-auto">
            <div className="max-w-xl mb-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-800 uppercase tracking-wider font-mono mb-1">
                <Building2 className="w-4 h-4 text-[#C2671A]" />
                <span>{lang === 'en' ? 'Institutional & CSR Tie-ups' : 'सीएसआर एवं संस्थागत साझेदारी'}</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-stone-900">
                {lang === 'en' ? 'Corporate CSR & Institutional Collaboration' : 'सीएसआर साझेदारी हेतु संपर्क'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                {lang === 'en'
                  ? 'We collaborate with corporate foundations, trusts, and government departments for targeted watershed development, tractor operator safety, and child malnutrition eradication.'
                  : 'कॉरपोरेट प्रतिष्ठानों, न्यासों एवं शासन के साथ मिलकर जल संरक्षण, कृषक सुरक्षा एवं कुपोषण मुक्ति हेतु दीर्घकालिक साझेदारी।'}
              </p>
            </div>

            {partnerSubmitted ? (
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-3">
                <div className="w-12 h-12 bg-[#143D2B] text-white rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-heading font-bold text-stone-900">
                  {lang === 'en' ? 'Partnership Enquiry Received' : 'साझेदारी प्रस्ताव प्राप्त हुआ'}
                </h4>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  {lang === 'en'
                    ? 'Our managing committee will review your proposal and respond to ' + partnerEmail + ' within 2 business days.'
                    : 'हमारी प्रबंध समिति आपके प्रस्ताव का अवलोकन कर शीघ्र संपर्क करेगी।'}
                </p>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'Company / Organization Name *' : 'संस्था या कंपनी का नाम *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. ABC Foundation"
                      value={partnerOrg}
                      onChange={(e) => setPartnerOrg(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'Contact Person Name *' : 'संपर्क अधिकारी का नाम *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suman Gupta, CSR Head"
                      value={partnerContactPerson}
                      onChange={(e) => setPartnerContactPerson(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'Official Email Address *' : 'आधिकारिक ईमेल *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="csr@company.com"
                      value={partnerEmail}
                      onChange={(e) => setPartnerEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {lang === 'en' ? 'Phone / Mobile *' : 'दूरभाष / मोबाइल *'}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98270 00000"
                      value={partnerPhone}
                      onChange={(e) => setPartnerPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    {lang === 'en' ? 'Scope of Collaboration / Project Interest' : 'साझेदारी का कार्यक्षेत्र या प्रस्ताव'}
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your organization's CSR mandate, targeted village count, or co-funding scope..."
                    value={partnerMessage}
                    onChange={(e) => setPartnerMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Send Partnership Proposal' : 'साझेदारी प्रस्ताव प्रेषित करें'}</span>
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
