import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Cpu, 
  CheckCircle2, 
  Coins, 
  Printer, 
  HeartHandshake 
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Customer-Controlled OTP Security',
      desc: 'We never ask you to disclose OTPs, PINs, or banking passwords. You type them directly into the secure portal window.',
      icon: ShieldCheck,
      color: 'text-brand-emerald-600',
      bg: 'bg-brand-emerald-50'
    },
    {
      title: 'Trained & Patient Operators',
      desc: 'No rushing. We double check spelling of father’s name, candidate DOB, category quotas, and portal guidelines before payment.',
      icon: HeartHandshake,
      color: 'text-brand-blue-700',
      bg: 'bg-brand-blue-50'
    },
    {
      title: 'Exact Portal File Specifications',
      desc: 'Guaranteed sizing for photos (20KB–50KB) and certificates (under 200KB) so your application is never rejected.',
      icon: Cpu,
      color: 'text-brand-saffron-600',
      bg: 'bg-brand-saffron-50'
    },
    {
      title: 'Dual Laser Printers with Power Backup',
      desc: 'Heavy-duty commercial laser printers and inverter backup ensure zero delays during power cuts or exam deadline rush.',
      icon: Printer,
      color: 'text-brand-blue-700',
      bg: 'bg-brand-blue-50'
    },
    {
      title: '100% Itemized Receipts',
      desc: 'Transparent itemized bills separating shop service fees from official government pass-through fees with portal receipts.',
      icon: Coins,
      color: 'text-brand-emerald-600',
      bg: 'bg-brand-emerald-50'
    },
    {
      title: 'Prime Location & Long Hours',
      desc: 'Centrally located near Tehsil Complex and Head Post Office. Open 8:30 AM to 8:30 PM for before-and-after work visits.',
      icon: Clock,
      color: 'text-brand-saffron-600',
      bg: 'bg-brand-saffron-50'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Commitment to Quality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
            Why Hundreds of Citizens Choose Us Daily
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Designed from the ground up for convenience, document confidentiality, and technical accuracy.
          </p>
        </div>

        {/* Grid of 6 Key Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-brand-blue-300 hover:bg-white hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-2xl ${r.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${r.color}`} />
                </div>

                <h3 className="text-base font-bold text-brand-blue-950 mb-2 group-hover:text-brand-blue-700 transition-colors">
                  {r.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
