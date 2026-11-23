import React from 'react';
import { ShieldCheck, Scale, Zap, CheckCircle2, Award } from 'lucide-react';
import { trustHighlights } from '../../data/servicesData';

export default function TrustStrip() {
  const iconsMap = {
    ShieldCheck: ShieldCheck,
    Coins: Scale,
    Zap: Zap,
    CheckCircle2: CheckCircle2
  };

  const accentStyles = [
    { bg: 'from-emerald-50 to-teal-50', iconBg: 'bg-emerald-500', text: 'text-emerald-700', border: 'border-emerald-200/60' },
    { bg: 'from-amber-50 to-orange-50', iconBg: 'bg-brand-saffron-500', text: 'text-amber-800', border: 'border-amber-200/60' },
    { bg: 'from-indigo-50 to-blue-50', iconBg: 'bg-brand-blue-600', text: 'text-brand-blue-800', border: 'border-indigo-200/60' },
    { bg: 'from-purple-50 to-violet-50', iconBg: 'bg-brand-purple-600', text: 'text-purple-800', border: 'border-purple-200/60' }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-md border-y border-slate-200/70 py-6 select-none shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustHighlights.map((item, idx) => {
            const Icon = iconsMap[item.icon] || Award;
            const style = accentStyles[idx % accentStyles.length];
            return (
              <div 
                key={idx} 
                className={`flex items-center gap-3.5 p-3.5 rounded-2xl bg-gradient-to-r ${style.bg} border ${style.border} hover:shadow-md transition-all duration-300 group`}
              >
                <div className={`w-11 h-11 rounded-xl ${style.iconBg} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight">{item.title}</h4>
                  <p className="text-xs text-slate-500 font-normal leading-snug">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
