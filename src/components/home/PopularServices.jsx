import React from 'react';
import {
  FileText,
  Printer,
  Briefcase,
  ScanLine,
  CreditCard,
  ArrowRight,
  Sparkles,
  Clock,
  ChevronRight
} from 'lucide-react';

import { servicesData } from '../../data/servicesData';

export default function PopularServices({
  onSelectService,
  onViewAllClick
}) {

  // Filter popular services
  const popularList = servicesData
    .filter(s => s.popular)
    .slice(0, 6);

  // Individual icon and badge colours
  const getServiceVisuals = (id) => {
    switch (id) {

      case 'xerox-bw':
        return {
          icon: Printer,
          gradient: 'from-indigo-500 to-blue-600',
          lightBg: 'bg-indigo-100',
          textColor: 'text-indigo-600',
          tag: 'High Speed'
        };

      case 'print-phone-email':
        return {
          icon: Printer,
          gradient: 'from-emerald-500 to-teal-600',
          lightBg: 'bg-emerald-100',
          textColor: 'text-emerald-600',
          tag: 'WhatsApp Print'
        };

      case 'govt-job-forms':
        return {
          icon: Briefcase,
          gradient: 'from-purple-500 to-indigo-600',
          lightBg: 'bg-purple-100',
          textColor: 'text-purple-600',
          tag: 'Assisted'
        };

      case 'admit-card-print':
        return {
          icon: Briefcase,
          gradient: 'from-amber-500 to-orange-600',
          lightBg: 'bg-orange-100',
          textColor: 'text-orange-600',
          tag: 'Instant'
        };

      case 'doc-scan':
        return {
          icon: ScanLine,
          gradient: 'from-cyan-500 to-blue-500',
          lightBg: 'bg-cyan-100',
          textColor: 'text-cyan-600',
          tag: '600 DPI'
        };

      case 'pan-card-assist':
        return {
          icon: CreditCard,
          gradient: 'from-rose-500 to-orange-500',
          lightBg: 'bg-rose-100',
          textColor: 'text-rose-600',
          tag: 'e-KYC'
        };

      default:
        return {
          icon: FileText,
          gradient: 'from-indigo-500 to-purple-600',
          lightBg: 'bg-violet-100',
          textColor: 'text-violet-600',
          tag: 'Verified'
        };
    }
  };

  return (
    <section className="py-16 bg-slate-50/70 border-b border-slate-200/60 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">

          <div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-saffron-600 uppercase tracking-wider mb-2">

              <Sparkles className="w-3.5 h-3.5" />

              <span>Instant Counter Favorites</span>

            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">

              Most Requested Daily Services

            </h2>

            <p className="text-sm text-slate-500 mt-1 max-w-xl">

              Our fastest, highest-demand counter tasks ready in under 5 minutes.

            </p>

          </div>

          {/* View All Categories Button */}
          <button
            type="button"
            onClick={onViewAllClick}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-brand-blue-600 border border-slate-200 text-xs font-bold uppercase tracking-wider shadow-sm transition hover:border-indigo-300 group"
          >

            <span>View All Categories</span>

            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />

          </button>

        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {popularList.map((service) => {

            const visual = getServiceVisuals(service.id);
            const Icon = visual.icon;

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (
                    event.key === 'Enter' ||
                    event.key === ' '
                  ) {
                    event.preventDefault();
                    onSelectService(service);
                  }
                }}
                className="group relative bg-[#eef4ff] border-[#d5e2f5] hover:border-indigo-400 rounded-3xl p-6 border shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden"
              >

                {/* Animated Top Colour Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${visual.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div>

                  {/* Icon and Tag */}
                  <div className="flex items-center justify-between mb-4">

                    {/* Service Icon */}
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${visual.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >

                      <Icon className="w-6 h-6" />

                    </div>

                    {/* Service Tag */}
                    <div className="flex items-center gap-1.5">

                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${visual.lightBg} ${visual.textColor} border border-current/20`}
                      >

                        {visual.tag}

                      </span>

                    </div>

                  </div>

                  {/* Service Category */}
                  <span
                    className={`text-[11px] font-bold ${visual.textColor} uppercase tracking-wider block mb-1`}
                  >

                    {service.categoryName}

                  </span>

                  {/* Service Title */}
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-brand-blue-600 transition-colors mb-2 leading-snug">

                    {service.title}

                  </h3>

                  {/* Service Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">

                    {service.description}

                  </p>

                </div>

                {/* Pricing and Turnaround */}
                <div className="pt-3.5 border-t border-slate-300/40 flex flex-wrap items-center justify-between gap-2">

                  {/* Indicative Fee */}
                  <div className="min-w-0">

                    <span className="text-[10px] text-slate-500 block uppercase font-medium">

                      Indicative Fee

                    </span>

                    <span className="font-extrabold text-slate-900 text-sm tracking-tight">

                      {service.indicativePrice}

                    </span>

                  </div>

                  {/* Turnaround and Arrow */}
                  <div className="flex items-center gap-3">

                    {/* Turnaround Time */}
                    <span className="text-[11px] text-slate-600 flex items-center gap-1 font-medium bg-white/80 px-2.5 py-1 rounded-lg border border-white">

                      <Clock className="w-3 h-3 text-brand-saffron-500 shrink-0" />

                      {service.turnaround}

                    </span>

                    {/* Arrow Button */}
                    <div
                      className={`w-8 h-8 shrink-0 rounded-full ${visual.lightBg} ${visual.textColor} group-hover:bg-brand-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300`}
                    >

                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}