import React, { useState } from 'react';
import { 
  Calculator, 
  RotateCcw, 
  MessageSquare, 
  Sparkles,
  Printer,
  ScanLine,
  Briefcase,
  Layers,
  Camera
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';

export default function PriceCalculator() {
  const [bwPages, setBwPages] = useState(10);
  const [colorPages, setColorPages] = useState(0);
  const [scanPages, setScanPages] = useState(0);
  const [formsCount, setFormsCount] = useState(0);
  const [laminationCount, setLaminationCount] = useState(0);
  const [passportPhotoSet, setPassportPhotoSet] = useState(0);

  // Unit rates
  const RATE_BW = 2;
  const RATE_COLOR = 10;
  const RATE_SCAN = 5;
  const RATE_FORM = 100;
  const RATE_LAMINATION = 30;
  const RATE_PHOTO = 50;

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

  const applyPreset = (preset) => {
    if (preset === 'admit') {
      setBwPages(2);
      setColorPages(1);
      setScanPages(0);
      setFormsCount(0);
      setLaminationCount(1);
      setPassportPhotoSet(0);
    } else if (preset === 'job') {
      setBwPages(4);
      setColorPages(0);
      setScanPages(2);
      setFormsCount(1);
      setLaminationCount(0);
      setPassportPhotoSet(1);
    } else if (preset === 'notes') {
      setBwPages(40);
      setColorPages(0);
      setScanPages(0);
      setFormsCount(0);
      setLaminationCount(0);
      setPassportPhotoSet(0);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello cyberXero, I used your website price estimator for: ${bwPages} B&W prints, ${colorPages} Color prints, ${scanPages} Scans, ${formsCount} Online forms, ${laminationCount} Laminations, ${passportPhotoSet} Photo sets. Estimated total: ₹${totalShopEstimate}. Can I get this done today?`
  );

  return (
    <div className="bg-white/95 rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-sm hover:shadow-lg transition-all duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-5 mb-6 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-saffron-500 to-amber-400 flex items-center justify-center text-white shadow-md shadow-brand-saffron-500/30">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">
              Know the Cost Before You Get Started.
            </h3>
            <p className="text-xs text-slate-500">Choose The Services You Need And Get A Quick Estimate Of The Shop's Assistance Charges. No Guesswork At The Counter — Review The Estimate Before Proceeding.</p>
          </div>
        </div>

        {/* Quick Presets & Reset */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider hidden md:inline">Quick Presets:</span>
          <button
            onClick={() => applyPreset('admit')}
            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 text-brand-blue-700 hover:bg-indigo-100 transition border border-indigo-100"
          >
            Admit Card Set
          </button>
          <button
            onClick={() => applyPreset('job')}
            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition border border-purple-100"
          >
            Job Form + Docs
          </button>
          <button
            onClick={() => applyPreset('notes')}
            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 transition border border-amber-100"
          >
            Bulk Xerox
          </button>
          <button
            onClick={resetAll}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition ml-1"
            title="Reset All"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stepper Grid with Vibrant Item Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Item 1: B&W Xerox */}
        <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex items-center justify-between hover:bg-indigo-50 transition">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Printer className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">B&W Xerox / Print</span>
              <span className="text-[11px] text-indigo-700 font-semibold">₹2 / page</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-indigo-200/80 shadow-xs">
            <button
              onClick={() => setBwPages(Math.max(0, bwPages - 5))}
              className="w-6 h-6 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-sm flex items-center justify-center transition"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-black font-mono text-slate-800">{bwPages}</span>
            <button
              onClick={() => setBwPages(bwPages + 5)}
              className="w-6 h-6 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-sm flex items-center justify-center transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Item 2: Color Print */}
        <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100 flex items-center justify-between hover:bg-orange-50 transition">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-saffron-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Printer className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Color Print</span>
              <span className="text-[11px] text-amber-700 font-semibold">₹10 / page</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-orange-200/80 shadow-xs">
            <button
              onClick={() => setColorPages(Math.max(0, colorPages - 1))}
              className="w-6 h-6 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-sm flex items-center justify-center transition"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-black font-mono text-slate-800">{colorPages}</span>
            <button
              onClick={() => setColorPages(colorPages + 1)}
              className="w-6 h-6 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-sm flex items-center justify-center transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Item 3: Document Scanning */}
        <div className="p-4 rounded-2xl bg-cyan-50/50 border border-cyan-100 flex items-center justify-between hover:bg-cyan-50 transition">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <ScanLine className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Doc Scan (PDF)</span>
              <span className="text-[11px] text-cyan-700 font-semibold">₹5 / page</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-cyan-200/80 shadow-xs">
            <button
              onClick={() => setScanPages(Math.max(0, scanPages - 1))}
              className="w-6 h-6 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-sm flex items-center justify-center transition"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-black font-mono text-slate-800">{scanPages}</span>
            <button
              onClick={() => setScanPages(scanPages + 1)}
              className="w-6 h-6 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-sm flex items-center justify-center transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Item 4: Online Form Filing */}
        <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 flex items-center justify-between hover:bg-purple-50 transition">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Govt Job Form</span>
              <span className="text-[11px] text-purple-700 font-semibold">₹100 / form</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-purple-200/80 shadow-xs">
            <button
              onClick={() => setFormsCount(Math.max(0, formsCount - 1))}
              className="w-6 h-6 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-sm flex items-center justify-center transition"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-black font-mono text-slate-800">{formsCount}</span>
            <button
              onClick={() => setFormsCount(formsCount + 1)}
              className="w-6 h-6 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-sm flex items-center justify-center transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Item 5: Thermal Lamination */}
        <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex items-center justify-between hover:bg-emerald-50 transition">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Lamination</span>
              <span className="text-[11px] text-emerald-700 font-semibold">₹30 / doc</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-emerald-200/80 shadow-xs">
            <button
              onClick={() => setLaminationCount(Math.max(0, laminationCount - 1))}
              className="w-6 h-6 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-sm flex items-center justify-center transition"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-black font-mono text-slate-800">{laminationCount}</span>
            <button
              onClick={() => setLaminationCount(laminationCount + 1)}
              className="w-6 h-6 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-sm flex items-center justify-center transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Item 6: Passport Photo Set */}
        <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 flex items-center justify-between hover:bg-rose-50 transition">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Photo Pack (8 pcs)</span>
              <span className="text-[11px] text-rose-700 font-semibold">₹50 / pack</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-rose-200/80 shadow-xs">
            <button
              onClick={() => setPassportPhotoSet(Math.max(0, passportPhotoSet - 1))}
              className="w-6 h-6 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-sm flex items-center justify-center transition"
            >
              -
            </button>
            <span className="w-8 text-center text-xs font-black font-mono text-slate-800">{passportPhotoSet}</span>
            <button
              onClick={() => setPassportPhotoSet(passportPhotoSet + 1)}
              className="w-6 h-6 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-bold text-sm flex items-center justify-center transition"
            >
              +
            </button>
          </div>
        </div>

      </div>

      {/* Vibrant Total Estimate Banner */}
      <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-brand-blue-700 via-indigo-600 to-brand-purple-600 text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl shadow-indigo-500/20">
        <div>
          <span className="text-xs font-bold text-indigo-100 uppercase tracking-wider block">
            YOUR ESTIMATED SERVICE TOTAL
          </span>
          <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight mt-0.5">
            ₹{totalShopEstimate}
          </div>
          <p className="text-[11px] text-indigo-200/90 mt-1">
            Estimates cover the listed shop services only. Official, portal or third-party fees may be additional and will be shown separately wherever applicable.
          </p>
        </div>

        <a
          href={`https://wa.me/${shopInfo.whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-brand-blue-700 hover:text-brand-blue-800 font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-md shrink-0 transform hover:scale-105"
        >
          <MessageSquare className="w-4 h-4 text-emerald-500" />
          <span>Review Your Estimate</span>
        </a>
      </div>

    </div>
  );
}
