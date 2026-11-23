import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Cpu, 
  Coins, 
  Printer, 
  HeartHandshake,
  Sparkles
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Customer-Controlled OTPs',
      desc: 'You enter OTPs and PINs yourself. We never ask for or store confidential credentials.',
      tag: 'Zero Data Stored',
      icon: ShieldCheck,
      gradient: 'from-emerald-500 to-teal-600',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-100'
    },
    {
      title: 'Patient & Trained Staff',
      desc: 'Careful double-check of candidate name, DOB, and category quotas before payment.',
      tag: 'Error-Free Filing',
      icon: HeartHandshake,
      gradient: 'from-indigo-500 to-blue-600',
      tagColor: 'bg-indigo-50 text-brand-blue-700 border-indigo-100'
    },
    {
      title: 'Exact Portal Sizing',
      desc: 'Guaranteed 20KB–50KB and 200 DPI compliance — zero photo or signature rejections.',
      tag: '100% Compliant',
      icon: Cpu,
      gradient: 'from-amber-500 to-orange-600',
      tagColor: 'bg-amber-50 text-amber-800 border-amber-100'
    },
    {
      title: 'Dual Lasers + Power Backup',
      desc: 'Heavy-duty dual printers and inverter backup ensure zero delays during peak rush.',
      tag: 'Zero Downtime',
      icon: Printer,
      gradient: 'from-purple-500 to-indigo-600',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-100'
    },
    {
      title: '100% Itemized Receipts',
      desc: 'Transparent billing separating shop assistance fees from official government pass-through fees.',
      tag: 'Clear Accounting',
      icon: Coins,
      gradient: 'from-teal-500 to-cyan-600',
      tagColor: 'bg-teal-50 text-teal-700 border-teal-100'
    },
    {
      title: 'Prime Location & 12h Open',
      desc: 'Centrally located near Tehsil Complex. Open 8:30 AM to 8:30 PM for convenient visits.',
      tag: '8:30 AM – 8:30 PM',
      icon: Clock,
      gradient: 'from-rose-500 to-pink-600',
      tagColor: 'bg-rose-50 text-rose-700 border-rose-100'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-brand-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue-500" />
            <span>The Local Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Hundreds Trust Us Daily
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
            High-speed dual laser printers, zero password storage, and 100% portal compliance.
          </p>
        </div>

        {/* Enhanced 6 Vibrant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/70 hover:border-indigo-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 overflow-hidden relative"
              >
                {/* Top subtle gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${r.gradient}`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${r.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${r.tagColor}`}>
                      {r.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-brand-blue-600 transition-colors">
                    {r.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-400 group-hover:text-slate-600 transition-colors">
                  <span>Guaranteed at our counter</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
