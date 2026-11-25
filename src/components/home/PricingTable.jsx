
import React, { useState } from 'react';

import {
  ShieldCheck,
  Sparkles
} from 'lucide-react';

import { pricingRows } from '../../data/pricingData';
import PriceCalculator from './PriceCalculator';

export default function PricingTable() {

  const [filterCategory, setFilterCategory] = useState('All');

  const categories = [
    'All',
    'Print',
    'Scan',
    'Forms',
    'Govt',
    'KYC',
    'Finishing',
    'Typing'
  ];

  const filteredRows =
    filterCategory === 'All'
      ? pricingRows
      : pricingRows.filter(r => r.category === filterCategory);

  return (
    <section
      id="pricing"
      className="scroll-mt-24 py-16 lg:py-24 bg-[#f0fafc] border-b border-cyan-200/70 relative"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">

            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />

            <span>Honest & Upfront</span>

          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">

            Clear Rates, Zero Surprises

          </h2>

          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">

            Every service charge is clearly itemized
            with separate official government receipts.

          </p>

        </div>

        {/* Interactive Estimator Component */}
        <div className="mb-12">

          <PriceCalculator />

        </div>

        {/* Pricing Table Card */}
        <div className="bg-[#f0f9ff] rounded-3xl border border-[#bae6fd] shadow-sm overflow-hidden">

          {/* Table Header & Category Filters */}
          <div className="p-5 sm:p-6 bg-[#e6f7fa] border-b border-cyan-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

            <div>

              <div className="flex items-center gap-2">

                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">

                  Official Rate Card

                </h3>

                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">

                  {filteredRows.length} Services

                </span>

              </div>

              <p className="text-xs text-slate-600 mt-0.5">

                Fixed, transparent fees per task or page

              </p>

            </div>

            {/* Category Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto py-1 px-1 scrollbar-none no-scrollbar justify-start">

              {categories.map((cat) => {

                const isActive = filterCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-600 to-sky-600 text-white shadow-sm shadow-cyan-500/20 ring-2 ring-cyan-400/30'
                        : 'bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200/70'
                    }`}
                  >

                    {cat}

                  </button>
                );

              })}

            </div>

          </div>

          {/* Desktop & Tablet Table */}
          <div className="hidden sm:block overflow-x-auto">

            <table className="w-full text-left text-xs sm:text-sm">

              {/* Table Column Headings */}
              <thead className="bg-[#e0f2fe] border-b border-cyan-200 text-cyan-800 font-bold uppercase text-[11px] tracking-wider">

                <tr>

                  <th className="py-3.5 px-4 sm:px-6">

                    Service Name

                  </th>

                  <th className="py-3.5 px-4 sm:px-6 whitespace-nowrap min-w-[150px]">

                    Shop Assistance Fee

                  </th>

                  <th className="py-3.5 px-4 sm:px-6 whitespace-nowrap">

                    Basis / Unit

                  </th>

                  <th className="py-3.5 px-4 sm:px-6">

                    Notes

                  </th>

                </tr>

              </thead>

              {/* Table Rows */}
              <tbody className="divide-y divide-cyan-200/50 text-slate-700">

                {filteredRows.map((row, idx) => (

                  <tr
                    key={idx}
                    className="bg-[#f0f9ff] hover:bg-[#e0f2fe] transition-colors"
                  >

                    {/* Service Name */}
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">

                      {row.service}

                    </td>

                    {/* Service Price */}
                    <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap">

                      <span className="inline-flex items-center justify-center font-black text-cyan-800 bg-[#e0f2fe] px-3 py-1.5 rounded-xl border border-cyan-200 text-xs sm:text-sm whitespace-nowrap shadow-xs">

                        {row.charge}

                      </span>

                    </td>

                    {/* Basis / Unit */}
                    <td className="py-3.5 px-4 sm:px-6 text-slate-600 text-xs whitespace-nowrap font-medium">

                      {row.unit}

                    </td>

                    {/* Service Notes */}
                    <td className="py-3.5 px-4 sm:px-6 text-slate-600 text-xs leading-relaxed">

                      {row.note}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Mobile Optimized Cards List */}
          <div className="sm:hidden divide-y divide-cyan-200/60">

            {filteredRows.map((row, idx) => (

              <div
                key={idx}
                className="p-4 bg-[#f0f9ff] hover:bg-[#e0f2fe] transition-colors flex flex-col gap-2.5"
              >

                <div className="flex items-start justify-between gap-3">

                  <div className="flex-1 min-w-0">

                    <h4 className="font-extrabold text-slate-900 text-sm leading-snug">

                      {row.service}

                    </h4>

                    <span className="text-[11px] text-slate-600 font-medium inline-block mt-0.5">

                      {row.unit}

                    </span>

                  </div>

                  {/* Responsive Price Badge */}
                  <div className="shrink-0 text-right">

                    <span className="text-[9px] font-bold text-cyan-700 uppercase tracking-wider block mb-0.5">

                      Shop Fee

                    </span>

                    <span className="inline-flex items-center justify-center font-black text-cyan-800 bg-[#e0f2fe] px-3 py-1.5 rounded-xl border border-cyan-200 text-xs shadow-xs whitespace-nowrap">

                      {row.charge}

                    </span>

                  </div>

                </div>

                {/* Service Notes */}
                {row.note && (

                  <p className="text-[11px] text-slate-600 bg-[#e6f7fa] px-2.5 py-1.5 rounded-xl border border-cyan-200/60 leading-relaxed">

                    {row.note}

                  </p>

                )}

              </div>

            ))}

          </div>

          {/* Fee Policy Rules Footer */}
          <div className="p-5 sm:p-6 bg-[#e6f7fa] border-t border-cyan-200">

            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-800 flex items-center gap-1.5 mb-3">

              <ShieldCheck className="w-4 h-4 text-emerald-600" />

              <span>Official Fee Accounting Policy</span>

            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-600">

              {/* Policy Card 1 */}
              <div className="flex items-start gap-2 bg-[#f0f9ff] p-3 rounded-xl border border-cyan-200 shadow-xs hover:border-cyan-400 transition-colors">

                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />

                <span>

                  <strong>Transparent Assistance:</strong>
                  {' '}Counter charges cover operator expertise,
                  high-speed gear, and consumables.

                </span>

              </div>

              {/* Policy Card 2 */}
              <div className="flex items-start gap-2 bg-[#f0f9ff] p-3 rounded-xl border border-cyan-200 shadow-xs hover:border-cyan-400 transition-colors">

                <span className="w-1.5 h-1.5 rounded-full bg-brand-saffron-500 shrink-0 mt-1.5" />

                <span>

                  <strong>Statutory Fees at Actuals:</strong>
                  {' '}Exam portal fees, RTO road tax,
                  or passport fees are paid directly without markup.

                </span>

              </div>

              {/* Policy Card 3 */}
              <div className="flex items-start gap-2 bg-[#f0f9ff] p-3 rounded-xl border border-cyan-200 shadow-xs hover:border-cyan-400 transition-colors">

                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />

                <span>

                  <strong>Official Receipts:</strong>
                  {' '}You always receive a printed portal
                  acknowledgement for every rupee of government fees paid.

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
