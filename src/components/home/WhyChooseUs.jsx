
import React from 'react';

import {
  ShieldCheck,
  HeartHandshake,
  Cpu,
  Printer,
  Coins,
  Clock,
  Sparkles
} from 'lucide-react';

export default function WhyChooseUs() {

  const reasons = [
    {
      title: 'Customer-Controlled OTPs',
      description:
        'You enter OTPs and PINs yourself. We never ask for or store confidential credentials.',
      icon: ShieldCheck,
      tag: 'ZERO DATA STORED',
      gradient: 'from-emerald-500 to-teal-600',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-100'
    },
    {
      title: 'Patient & Trained Staff',
      description:
        'Careful double-check of candidate name, DOB, and category quotas before payment.',
      icon: HeartHandshake,
      tag: 'ERROR-FREE FILING',
      gradient: 'from-blue-500 to-indigo-600',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-100'
    },
    {
      title: 'Exact Portal Sizing',
      description:
        'Guaranteed 20KB–50KB and 200 DPI compliance — zero photo or signature rejections.',
      icon: Cpu,
      tag: '100% COMPLIANT',
      gradient: 'from-amber-500 to-orange-600',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-100'
    },
    {
      title: 'Dual Lasers + Power Backup',
      description:
        'Heavy-duty dual printers and inverter backup ensure zero delays during peak rush.',
      icon: Printer,
      tag: 'ZERO DOWNTIME',
      gradient: 'from-purple-500 to-indigo-600',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-100'
    },
    {
      title: '100% Itemized Receipts',
      description:
        'Transparent billing separating shop assistance fees from official government pass-through fees.',
      icon: Coins,
      tag: 'CLEAR ACCOUNTING',
      gradient: 'from-teal-500 to-cyan-600',
      tagColor: 'bg-teal-50 text-teal-700 border-teal-100'
    },
    {
      title: 'Prime Location & 12h Open',
      description:
        'Centrally located near Tehsil Complex. Open 8:30 AM to 8:30 PM for convenient visits.',
      icon: Clock,
      tag: '8:30 AM - 8:30 PM',
      gradient: 'from-rose-500 to-pink-600',
      tagColor: 'bg-rose-50 text-rose-700 border-rose-100'
    }
  ];

  return (
    <section
      id="why-choose-us"
      style={{ backgroundColor: '#F8FAFF' }}
      className="scroll-mt-24 py-16 lg:py-24 border-b border-[#d5e2f5] relative"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#eef4ff] border border-[#d5e2f5] text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">

            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />

            <span>Why Choose Us</span>

          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">

            Why Choose CyberXero?

          </h2>

          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">

            High-speed dual laser printers, zero password storage,
            and 100% portal compliance.

          </p>

        </div>

        {/* Six Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {reasons.map((reason, index) => {

            const Icon = reason.icon;

            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl bg-[#eef4ff] border border-[#d5e2f5] p-6 shadow-xs hover:border-indigo-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >

                {/* Gradient Top Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient}`}
                />

                {/* Icon and Tag */}
                <div className="flex items-center justify-between gap-3 mb-5">

                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${reason.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}
                  >

                    <Icon className="w-6 h-6" />

                  </div>

                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${reason.tagColor}`}
                  >

                    {reason.tag}

                  </span>

                </div>

                {/* Card Title */}
                <h3 className="text-base font-extrabold text-slate-900 mb-2">

                  {reason.title}

                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">

                  {reason.description}

                </p>

                {/* Card Footer */}
                <div className="mt-4 pt-4 border-t border-[#d5e2f5]">

                  <span className="text-xs font-semibold text-indigo-600">

                    Guaranteed at our counter

                  </span>

                </div>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}
