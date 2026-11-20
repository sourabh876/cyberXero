import React from 'react';
import { ShieldCheck, Scale, Zap, CheckCircle2, Award, Printer, Clock } from 'lucide-react';
import { trustHighlights } from '../../data/servicesData';

export default function TrustStrip() {
  const iconsMap = {
    ShieldCheck: ShieldCheck,
    Coins: Scale,
    Zap: Zap,
    CheckCircle2: CheckCircle2
  };

  return (
    <div className="bg-white border-y border-slate-200/90 py-6 select-none shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustHighlights.map((item, idx) => {
            const Icon = iconsMap[item.icon] || Award;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-blue-50 to-brand-blue-100/80 border border-brand-blue-200 flex items-center justify-center text-brand-blue-800 shrink-0 shadow-sm">
                  <Icon className="w-5 h-5 text-brand-blue-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-blue-950 mb-0.5">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
