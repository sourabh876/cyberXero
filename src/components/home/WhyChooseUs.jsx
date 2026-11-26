import React, { useState } from 'react';
import {
  ShieldCheck, Clock, Cpu, Coins, Printer, HeartHandshake,
  Sparkles, CheckCircle2, ArrowRight
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function WhyChooseUs() {
  const [hovered, setHovered] = useState(null);

  const reasons = [
    {
      title: 'Customer-Controlled Details',
      desc: 'Your passwords, PINs and OTPs stay with you. Enter sensitive details yourself.',
      tag: 'Zero Data Stored',
      icon: ShieldCheck,
      grad: 'from-emerald-500 to-teal-600',
      softBg: 'bg-emerald-50 border-emerald-200',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      waMsg: 'Hello%20cyberXero%2C%20I%20want%20to%20know%20more%20about%20how%20customer-controlled%20OTPs%20and%20privacy%20work%20at%20your%20centre.',
    },
    {
      title: 'Patient, Practical Guidance',
      desc: 'Get help understanding the steps, documents and information a service may require.',
      tag: 'Step-by-Step Help',
      icon: HeartHandshake,
      grad: 'from-indigo-500 to-blue-600',
      softBg: 'bg-indigo-50 border-indigo-200',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      waMsg: 'Hello%20cyberXero%2C%20I%20need%20guidance%20on%20an%20online%20form%20and%20required%20documents.',
    },
    {
      title: 'Clear Service Charges',
      desc: 'Know our assistance charge upfront, with official or third-party fees identified separately.',
      tag: 'Upfront Rates',
      icon: Coins,
      grad: 'from-teal-500 to-cyan-600',
      softBg: 'bg-teal-50 border-teal-200',
      tagColor: 'bg-teal-50 text-teal-700 border-teal-200',
      waMsg: 'Hello%20cyberXero%2C%20what%20is%20the%20service%20charge%20breakdown%20for%20your%20services%3F',
    },
    {
      title: 'Useful Services, One Place',
      desc: 'Handle common printing, scanning, document and online tasks at a single counter.',
      tag: 'One Counter',
      icon: Printer,
      grad: 'from-purple-500 to-indigo-600',
      softBg: 'bg-purple-50 border-purple-200',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
      waMsg: 'Hello%20cyberXero%2C%20I%20need%20help%20with%20printing%2C%20scanning%20or%20an%20online%20task.',
    },
    {
      title: 'Careful Document Formatting',
      desc: 'Photos, signatures and PDFs prepared carefully according to portal upload requirements.',
      tag: 'Portal Ready',
      icon: Cpu,
      grad: 'from-amber-500 to-orange-600',
      softBg: 'bg-amber-50 border-amber-200',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
      waMsg: 'Hello%20cyberXero%2C%20I%20need%20help%20resizing%20my%20photo%20or%20signature%20for%20a%20portal%20upload.',
    },
    {
      title: 'Convenient Hours & Location',
      desc: 'Open 8:30 AM to 8:30 PM daily so you can visit when it fits your schedule.',
      tag: '8:30 AM – 8:30 PM',
      icon: Clock,
      grad: 'from-rose-500 to-pink-600',
      softBg: 'bg-rose-50 border-rose-200',
      tagColor: 'bg-rose-50 text-rose-700 border-rose-200',
      waMsg: 'Hello%20cyberXero%2C%20what%20are%20your%20opening%20hours%20and%20exact%20location%3F',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200/70 relative overflow-hidden render-content-auto">
      {/* Decorative elements */}
      <div className="orb w-96 h-96 bg-indigo-400/8 -top-20 -right-20 pointer-events-none animate-pulse-glow" />
      <div className="orb w-72 h-72 bg-pink-400/8 bottom-0 left-0 pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="line-grid absolute inset-0 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 text-indigo-700 mb-3 mx-auto w-fit">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-spin-slow" />
            <span>The Local Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Thoughtful Service. Clear Steps.{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Work Done with Care.
            </span>
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
            Good Service Is More Than Getting A Printout Quickly. It's Clear Information, Careful Document Handling And A Helpful Person When A Process Gets Confusing.
          </p>
        </div>

        {/* ── Reason Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            const isHov = hovered === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                className="card-3d group relative p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-indigo-300 shadow-sm flex flex-col justify-between overflow-hidden animate-card-enter"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                {/* gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${r.grad} transition-opacity duration-300 ${isHov ? 'opacity-100' : 'opacity-50'}`} />
                {/* soft bg glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${r.grad} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-400 pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${r.grad} text-white flex items-center justify-center shadow-lg transition-all duration-300 ${isHov ? 'scale-110 rotate-[-6deg]' : ''}`}
                      style={isHov ? { boxShadow: `0 0 24px rgba(0,0,0,0.15)` } : {}}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${r.tagColor}`}>
                      {r.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5 group-hover:text-slate-600 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Guaranteed at our counter
                  </span>
                  <a
                    href={`https://wa.me/${shopInfo.whatsappNumber}?text=${r.waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${isHov ? 'bg-emerald-500 scale-110 shadow-md' : 'bg-emerald-50'}`}
                    title="Quick WhatsApp question"
                  >
                    <WhatsAppIcon className={`w-3.5 h-3.5 fill-current transition-colors ${isHov ? 'text-white' : 'text-emerald-600'}`} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        

      </div>
    </section>
  );
}
