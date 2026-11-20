import React, { useState } from 'react';
import { 
  BadgePercent, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle, 
  Filter, 
  ShieldCheck, 
  ExternalLink 
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
    <section id="pricing" className="scroll-mt-24 py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-saffron-50 border border-brand-saffron-200 text-brand-saffron-700 text-xs font-bold uppercase tracking-wider mb-3">
            <BadgePercent className="w-3.5 h-3.5" />
            <span>Clear & Honest Counter Rates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
            Transparent Pricing & Rate Card
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            We maintain 100% price transparency. Shop technical assistance charges and official government fees are always billed separately with authentic receipts.
          </p>
        </div>

        {/* Interactive Estimator Component */}
        <div className="mb-14">
          <PriceCalculator />
        </div>

        {/* Pricing Table Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
          
          {/* Table Header & Category Filters */}
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-brand-blue-950">Standard Service Rate Card</h3>
              <p className="text-xs text-slate-500">Indicative shop assistance fees per service unit</p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                    filterCategory === cat
                      ? 'bg-brand-blue-700 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-6">Service Name</th>
                  <th className="py-3.5 px-6">Shop Assistance Fee</th>
                  <th className="py-3.5 px-6">Basis / Unit</th>
                  <th className="py-3.5 px-6">Operational Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-brand-blue-50/40 transition">
                    <td className="py-3.5 px-6 font-semibold text-brand-blue-950">
                      {row.service}
                    </td>
                    <td className="py-3.5 px-6 font-extrabold text-brand-blue-700">
                      {row.charge}
                    </td>
                    <td className="py-3.5 px-6 text-slate-500 text-xs">
                      {row.unit}
                    </td>
                    <td className="py-3.5 px-6 text-slate-500 text-xs">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fee Policy Rules Footer */}
          <div className="p-6 bg-slate-50/80 border-t border-slate-100 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-emerald-600" />
              <span>Official Fee Accounting Policy</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-600 pt-1">
              {feePolicyDisclaimers.map((note, i) => (
                <div key={i} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-saffron-500 shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{note}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
