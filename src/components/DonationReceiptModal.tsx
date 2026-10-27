import React from 'react';
import { NGO_INFO } from '../data/ngoData';
import { X, Printer, CheckCircle2, ShieldCheck, Download } from 'lucide-react';

interface ReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: {
    donorName: string;
    email: string;
    phone: string;
    panNumber: string;
    amount: number;
    program: string;
    paymentMethod: string;
  } | null;
  lang: 'en' | 'hi';
}

export const DonationReceiptModal: React.FC<ReceiptModalProps> = ({
  isOpen,
  onClose,
  details,
  lang,
}) => {
  if (!isOpen || !details) return null;

  const receiptNumber = `MGS-80G-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
  const dateStr = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-stone-300 shadow-2xl p-6 sm:p-8 relative print:border-none print:shadow-none print:m-0 print:p-0">
        
        {/* Modal Close Button (hidden during print) */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 bg-stone-100 rounded-full transition-colors print:hidden"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Official Header */}
        <div className="text-center pb-5 border-b-2 border-stone-800">
          <div className="flex items-center justify-center gap-2 mb-1">
            <img
              src={NGO_INFO.logoPath}
              alt="Logo"
              className="w-10 h-10 object-contain rounded"
              referrerPolicy="no-referrer"
            />
            <div className="text-left">
              <h2 className="font-heading font-extrabold text-base sm:text-lg text-[#143D2B] leading-tight tracking-tight uppercase">
                {NGO_INFO.name}
              </h2>
              <div className="text-xs text-stone-600 font-devanagari">
                {NGO_INFO.hindiName}
              </div>
            </div>
          </div>

          <div className="text-[11px] text-stone-500 font-mono mt-2 leading-relaxed">
            {NGO_INFO.address}
            <br />
            Reg. No: <strong>{NGO_INFO.regNumber}</strong> · ISO 9001:2015 · 80G Exemption: <strong>{NGO_INFO.citExemption}</strong>
          </div>
        </div>

        {/* Certificate Title Banner */}
        <div className="bg-[#FAF8F5] my-4 p-2 text-center border-y border-stone-200">
          <div className="text-xs font-mono font-bold tracking-widest uppercase text-stone-800">
            OFFICIAL DONATION RECEIPT & 80G CERTIFICATE
          </div>
        </div>

        {/* Receipt Key Metadata */}
        <div className="grid grid-cols-2 gap-4 text-xs font-mono mb-4 pb-3 border-b border-stone-200">
          <div>
            <span className="text-stone-500">Receipt No: </span>
            <strong className="text-stone-900">{receiptNumber}</strong>
          </div>
          <div className="text-right">
            <span className="text-stone-500">Date: </span>
            <strong className="text-stone-900">{dateStr}</strong>
          </div>
        </div>

        {/* Donor & Contribution Details */}
        <div className="space-y-3 text-xs text-stone-700 font-body">
          <div className="flex justify-between py-1 border-b border-stone-100">
            <span className="text-stone-500">Received with thanks from:</span>
            <span className="font-semibold text-stone-900">{details.donorName}</span>
          </div>

          <div className="flex justify-between py-1 border-b border-stone-100">
            <span className="text-stone-500">Donor PAN:</span>
            <span className="font-mono font-semibold text-stone-900">{details.panNumber}</span>
          </div>

          <div className="flex justify-between py-1 border-b border-stone-100">
            <span className="text-stone-500">Allocated Program:</span>
            <span className="font-semibold text-[#143D2B]">{details.program}</span>
          </div>

          <div className="flex justify-between py-1 border-b border-stone-100">
            <span className="text-stone-500">Payment Mode:</span>
            <span className="text-stone-900">{details.paymentMethod}</span>
          </div>

          <div className="flex justify-between items-center py-2.5 bg-emerald-50 px-3 rounded-lg border border-emerald-200">
            <span className="font-semibold text-emerald-900">Total Contribution:</span>
            <span className="text-lg font-bold font-mono text-emerald-950 tabular-nums">
              ₹{details.amount.toLocaleString('en-IN')}.00
            </span>
          </div>
        </div>

        {/* Statutory 80G Declaration */}
        <div className="mt-4 p-3 bg-[#FAF8F5] rounded-xl border border-stone-200 text-[11px] text-stone-600 leading-relaxed font-body">
          <strong>Tax Exemption Note:</strong> This donation is eligible for 50% deduction in taxable income under Section 80G(5)(vi) of the Income Tax Act, 1961 pursuant to order no. {NGO_INFO.citExemption}.
        </div>

        {/* Signature & Seal Block */}
        <div className="mt-8 pt-4 border-t border-stone-200 flex items-end justify-between">
          <div className="flex items-center gap-1.5 text-xs text-stone-500">
            <ShieldCheck className="w-4 h-4 text-[#C2671A]" />
            <span>Authorized Signatory</span>
          </div>
          <div className="text-right">
            <div className="font-heading font-semibold text-xs text-stone-900">
              For Mahatma Gandhi Agriculture & Rural Welfare Society
            </div>
            <div className="text-[10px] text-stone-400 font-mono mt-0.5">
              (Affixed Digitally at Mhow Central Office)
            </div>
          </div>
        </div>

        {/* Print / Action Buttons */}
        <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-end gap-3 print:hidden">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#143D2B] hover:bg-[#0F291E] rounded-lg shadow-xs transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
};
