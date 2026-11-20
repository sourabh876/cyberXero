import React, { useState } from 'react';
import { Calculator, Plus, Minus, RotateCcw, AlertCircle, CheckCircle2, MessageSquare } from 'lucide-react';
import { shopInfo } from '../../data/servicesData';

export default function PriceCalculator() {
  const [bwPages, setBwPages] = useState(10);
  const [colorPages, setColorPages] = useState(0);
  const [scanPages, setScanPages] = useState(0);
  const [formsCount, setFormsCount] = useState(0);
  const [laminationCount, setLaminationCount] = useState(0);
  const [passportPhotoSet, setPassportPhotoSet] = useState(0);

  // Unit rate assumptions
  const RATE_BW = 2; // ₹2/page
  const RATE_COLOR = 10; // ₹10/page
  const RATE_SCAN = 5; // ₹5/page
  const RATE_FORM = 100; // ₹100 assistance
  const RATE_LAMINATION = 30; // ₹30/doc
  const RATE_PHOTO = 50; // ₹50/set of 8

  const totalShopEstimate = 
    (bwPages * RATE_BW) +
    (colorPages * RATE_COLOR) +
    (scanPages * RATE_SCAN) +
    (formsCount * RATE_FORM) +
    (laminationCount * RATE_LAMINATION) +
    (passportPhotoSet * RATE_PHOTO);

  const resetAll = () => {
    setBwPages(0);
    setColorPages(0);
    setScanPages(0);
    setFormsCount(0);
    setLaminationCount(0);
    setPassportPhotoSet(0);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Digital Seva Centre, I used your website price calculator for: ${bwPages} B&W prints, ${colorPages} Color prints, ${scanPages} Scans, ${formsCount} Online forms, ${laminationCount} Laminations, ${passportPhotoSet} Photo sets. Estimated shop charge: ₹${totalShopEstimate}. Can I get this done today?`
  );

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-saffron-50 border border-brand-saffron-200 flex items-center justify-center text-brand-saffron-600">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-brand-blue-950 text-base sm:text-lg">
              Instant Service Cost Estimator
            </h3>
            <p className="text-xs text-slate-500">Calculate your counter bill based on typical requirements</p>
          </div>
        </div>

        <button
          onClick={resetAll}
          className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1 transition"
          title="Reset"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* Item 1: B&W Xerox / Print */}
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-800 block">B&W Xerox / Print</span>
            <span className="text-[11px] text-slate-500">₹2 per page</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setBwPages(Math.max(0, bwPages - 5))}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-bold font-mono">{bwPages}</span>
            <button
              onClick={() => setBwPages(bwPages + 5)}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Item 2: Color Laser Print */}
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-800 block">Color Print</span>
            <span className="text-[11px] text-slate-500">₹10 per page</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setColorPages(Math.max(0, colorPages - 1))}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-bold font-mono">{colorPages}</span>
            <button
              onClick={() => setColorPages(colorPages + 1)}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Item 3: Document Scanning */}
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-800 block">Document Scanning</span>
            <span className="text-[11px] text-slate-500">₹5 per page (PDF)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setScanPages(Math.max(0, scanPages - 1))}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-bold font-mono">{scanPages}</span>
            <button
              onClick={() => setScanPages(scanPages + 1)}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Item 4: Online Form Assistance */}
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-800 block">Govt / Exam Forms</span>
            <span className="text-[11px] text-slate-500">₹100 assistance</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFormsCount(Math.max(0, formsCount - 1))}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-bold font-mono">{formsCount}</span>
            <button
              onClick={() => setFormsCount(formsCount + 1)}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Item 5: Thermal Lamination */}
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-800 block">Certificate Lamination</span>
            <span className="text-[11px] text-slate-500">₹30 per document</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLaminationCount(Math.max(0, laminationCount - 1))}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-bold font-mono">{laminationCount}</span>
            <button
              onClick={() => setLaminationCount(laminationCount + 1)}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Item 6: Passport Photo Set */}
        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-slate-800 block">Passport Photo Set</span>
            <span className="text-[11px] text-slate-500">₹50 (8 photos + softcopy)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPassportPhotoSet(Math.max(0, passportPhotoSet - 1))}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-bold font-mono">{passportPhotoSet}</span>
            <button
              onClick={() => setPassportPhotoSet(passportPhotoSet + 1)}
              className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 font-bold"
            >
              +
            </button>
          </div>
        </div>

      </div>

      {/* Total Banner */}
      <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-brand-blue-900 to-brand-blue-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs text-brand-saffron-300 font-medium block">
            Estimated Counter Service Fee:
          </span>
          <div className="text-3xl font-extrabold font-mono text-white">
            ₹{totalShopEstimate}
          </div>
          <p className="text-[11px] text-slate-300 mt-0.5">
            *Indicative estimate. Official exam portal fees and statutory duties are billed separately at actuals.
          </p>
        </div>

        <a
          href={`https://wa.me/${shopInfo.whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-brand-emerald-500 hover:bg-brand-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-md shrink-0"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>Confirm Quote on WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
