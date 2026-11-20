import React from 'react';
import { 
  FileText, 
  Printer, 
  Briefcase, 
  ShieldCheck, 
  ScanLine, 
  CreditCard, 
  ArrowRight, 
  Sparkles,
  Clock
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export default function PopularServices({ onSelectService, onViewAllClick }) {
  // Filter popular services
  const popularList = servicesData.filter(s => s.popular).slice(0, 6);

  const getServiceIcon = (id) => {
    switch (id) {
      case 'xerox-bw':
      case 'print-phone-email':
        return Printer;
      case 'govt-job-forms':
      case 'admit-card-print':
        return Briefcase;
      case 'doc-scan':
      case 'photo-sig-resize':
        return ScanLine;
      case 'pan-card-assist':
        return CreditCard;
      default:
        return FileText;
    }
  };

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-saffron-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Most Requested Walk-in Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-blue-950 tracking-tight">
              Popular Services at Our Counter
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Quick access to our highest-volume daily documentation tasks
            </p>
          </div>

          <button
            onClick={onViewAllClick}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue-700 hover:text-brand-blue-800 uppercase tracking-wider group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularList.map((service) => {
            const Icon = getServiceIcon(service.id);
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-brand-blue-400 hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue-50 group-hover:bg-brand-blue-600 text-brand-blue-700 group-hover:text-white transition-colors flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-saffron-50 text-brand-saffron-700 border border-brand-saffron-200">
                      Popular
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-brand-blue-600 uppercase tracking-wider block mb-1">
                    {service.categoryName}
                  </span>

                  <h3 className="text-base font-bold text-brand-blue-950 group-hover:text-brand-blue-700 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">Indicative Fee</span>
                    <span className="font-extrabold text-brand-blue-900 text-sm">{service.indicativePrice}</span>
                  </div>

                  <div className="flex items-center gap-1 text-slate-500 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-brand-saffron-500" />
                    <span>{service.turnaround}</span>
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
