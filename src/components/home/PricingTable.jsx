import React, { useState } from 'react';
import { 
  BadgePercent, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Tag,
  Info
} from 'lucide-react';
import { pricingRows, feePolicyDisclaimers } from '../../data/pricingData';
import PriceCalculator from './PriceCalculator';

export default function PricingTable() {
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Print', 'Scan', 'Forms', 'Govt', 'KYC', 'Finishing', 'Typing'];

  const filteredRows = filterCategory === 'All' 
    ? pricingRows 
    : pricingRows.filter(r => r.category === filterCategory);

  return (
    <section id="pricing" className="scroll-mt-24 py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-saffron-500" />
            <span>Honest & Upfront Rates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent Pricing & Rate Card
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
            100% price transparency. Shop assistance and official statutory fees are always itemized separately.
          </p>
        </div>

        {/* Interactive Estimator Component */}
        <div className="mb-12">
          <PriceCalculator />
        </div>

        {/* Pricing Table Card */}
        <div className="bg-white/95 rounded-3xl border border-slate-200/70 shadow-sm overflow-hidden">
          
          {/* Table Header & Category Filters */}
          <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Standard Service Rate Card</h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-brand-blue-700 border border-indigo-100">
                  {filteredRows.length} Services
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Indicative counter assistance fees per unit</p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => {
                const isActive = filterCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-blue-600 to-indigo-600 text-white shadow-sm shadow-indigo-500/20 scale-[1.02]'
                        : 'bg-slate-100/80 hover:bg-slate-200/80 text-slate-600'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop & Tablet Table (>= sm screens) */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50/80 border-b border-slate-200/70 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Service Name</th>
                  <th className="py-3.5 px-4 sm:px-6 whitespace-nowrap min-w-[150px]">Shop Assistance Fee</th>
                  <th className="py-3.5 px-4 sm:px-6 whitespace-nowrap">Basis / Unit</th>
                  <th className="py-3.5 px-4 sm:px-6">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      {row.service}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap">
                      <span className="inline-flex items-center justify-center font-black text-brand-blue-600 bg-indigo-50/90 px-3 py-1.5 rounded-xl border border-indigo-200/80 text-xs sm:text-sm whitespace-nowrap shadow-xs">
                        {row.charge}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500 text-xs whitespace-nowrap font-medium">
                      {row.unit}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-500 text-xs leading-relaxed">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Optimized Cards List (< sm screens) */}
          <div className="sm:hidden divide-y divide-slate-100">
            {filteredRows.map((row, idx) => (
              <div key={idx} className="p-4 hover:bg-indigo-50/20 transition-colors flex flex-col gap-2.5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-extrabold text-slate-900 text-sm leading-snug">
                      {row.service}
                    </h4>
                    <span className="text-[11px] text-slate-500 font-medium inline-block mt-0.5">
                      {row.unit}
                    </span>
                  </div>

                  {/* Fully Responsive & Non-Wrapping Price Badge */}
                  <div className="shrink-0 text-right">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                      Shop Fee
                    </span>
                    <span className="inline-flex items-center justify-center font-black text-brand-blue-700 bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-200 text-xs shadow-xs whitespace-nowrap">
                      {row.charge}
                    </span>
                  </div>
                </div>

                {row.note && (
                  <p className="text-[11px] text-slate-500 bg-slate-50/80 px-2.5 py-1.5 rounded-xl border border-slate-100 leading-relaxed">
                    {row.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Fee Policy Rules Footer */}
          <div className="p-5 sm:p-6 bg-slate-50/60 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Official Fee Accounting Policy</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                <span><strong>Transparent Assistance:</strong> Counter charges cover operator expertise, high-speed gear, and consumables.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-saffron-500 shrink-0 mt-1.5" />
                <span><strong>Statutory Fees at Actuals:</strong> Exam portal fees, RTO road tax, or passport fees are paid directly without markup.</span>
              </div>
              <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                <span><strong>Official Receipts:</strong> You always receive a printed portal acknowledgement for every rupee of government fees paid.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
