import React, { useState } from 'react';
import {
  FileText, Printer, Briefcase, ShieldCheck, ScanLine, CreditCard,
  ArrowRight, Sparkles, Clock, ChevronRight, Zap, Star
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { scrollToSection } from '../../utils/navigation';
import WhatsAppIcon from '../common/WhatsAppIcon';
import { shopInfo } from '../../data/servicesData';

export default function PopularServices({ onSelectService, onViewAllClick }) {
  const [hovered, setHovered] = useState(null);

  const handleViewAll = () => {
    if (onViewAllClick) onViewAllClick();
    else scrollToSection('services', '/services');
  };

  const popularList = servicesData.filter(s => s.popular).slice(0, 6);

  const visuals = {
    'xerox-bw':          { icon: Printer,     grad: 'from-indigo-500 via-blue-500 to-cyan-500',        lightBg: 'bg-indigo-50',  iconBg: 'from-indigo-500 to-blue-600',  textColor: 'text-indigo-600', tag: 'High Speed',    tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',   wa: 'I%20need%20B%26W%20Xerox%2FPhotocopy.%20Please%20let%20me%20know%20the%20rate%20per%20page.' },
    'print-phone-email': { icon: Printer,     grad: 'from-emerald-500 via-teal-500 to-cyan-500',       lightBg: 'bg-emerald-50', iconBg: 'from-emerald-500 to-teal-600', textColor: 'text-emerald-600', tag: 'WhatsApp Print', tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200', wa: 'I%20want%20to%20print%20from%20my%20phone%2FWhatsApp.%20Please%20share%20the%20number.' },
    'govt-job-forms':    { icon: Briefcase,   grad: 'from-purple-500 via-violet-500 to-indigo-500',    lightBg: 'bg-purple-50',  iconBg: 'from-purple-500 to-indigo-600', textColor: 'text-purple-600', tag: 'Assisted',       tagBg: 'bg-purple-50 text-purple-700 border-purple-200',   wa: 'I%20need%20help%20filling%20a%20Government%20Job%20Form%20(SSC%2FUPSC%2FRailway).%20Please%20guide%20me.' },
    'admit-card-print':  { icon: Briefcase,   grad: 'from-amber-500 via-orange-500 to-rose-400',       lightBg: 'bg-amber-50',   iconBg: 'from-amber-500 to-orange-600', textColor: 'text-amber-600', tag: 'Instant',         tagBg: 'bg-amber-50 text-amber-700 border-amber-200',      wa: 'I%20need%20to%20print%20my%20Admit%20Card.%20Please%20confirm%20availability.' },
    'doc-scan':          { icon: ScanLine,    grad: 'from-cyan-500 via-sky-500 to-blue-500',           lightBg: 'bg-cyan-50',    iconBg: 'from-cyan-500 to-blue-500',    textColor: 'text-cyan-600', tag: '600 DPI',          tagBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',         wa: 'I%20need%20document%20scanning%20to%20PDF%20or%20JPG.%20How%20much%20does%20it%20cost%3F' },
    'pan-card-assist':   { icon: CreditCard,  grad: 'from-rose-500 via-pink-500 to-orange-400',        lightBg: 'bg-rose-50',    iconBg: 'from-rose-500 to-orange-500',  textColor: 'text-rose-600', tag: 'e-KYC',            tagBg: 'bg-rose-50 text-rose-700 border-rose-200',         wa: 'I%20need%20PAN%20Card%20assistance%20or%20correction.%20Please%20guide%20me.' },
  };
  const fallback = { icon: FileText, grad: 'from-indigo-500 to-purple-600', lightBg: 'bg-indigo-50', iconBg: 'from-indigo-500 to-purple-600', textColor: 'text-indigo-600', tag: 'Verified', tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-200', wa: 'I%20need%20help%20with%20a%20service.' };

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-200/60 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb w-72 h-72 bg-indigo-400/8 -top-16 -left-16 pointer-events-none" />
      <div className="orb w-56 h-56 bg-pink-400/8 bottom-0 right-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="section-label bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
              <span>POPULAR AT THE COUNTER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              The Everyday Essentials,{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Sorted at One Counter.
              </span>
            </h2>
            <p className="text-sm text-slate-500 mt-1.5 max-w-xl">
              From A Quick Photocopy To An Important Online Application, Find The Services People Come In For Most — With Helpful Guidance When You Need It.
            </p>
          </div>

          <button
            onClick={handleViewAll}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold uppercase tracking-wider transition-all group hover-lift"
          >
            <span>Browse All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* ── Service Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularList.map((service, idx) => {
            const v = visuals[service.id] ?? fallback;
            const Icon = v.icon;
            const isHov = hovered === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onSelectService(service)}
                className="card-3d group relative bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-indigo-300 shadow-sm cursor-pointer flex flex-col justify-between overflow-hidden animate-card-enter"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* Full-width gradient stripe on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${v.grad} transition-opacity duration-300 ${isHov ? 'opacity-100' : 'opacity-40'}`} />

                {/* Soft glow fill on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${v.grad} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-400 pointer-events-none`} />

                <div>
                  {/* Icon + Tag row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-13 h-13 w-14 h-14 rounded-2xl bg-gradient-to-tr ${v.iconBg} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-[-6deg] transition-all duration-300 relative`}>
                      <Icon className="w-6 h-6" />
                      {/* Orbit dot */}
                      <span className={`absolute w-2.5 h-2.5 rounded-full bg-white/70 top-0.5 right-0.5 transition-opacity ${isHov ? 'opacity-100 animate-orbit' : 'opacity-0'}`} />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${v.tagBg} flex items-center gap-1`}>
                      <Zap className="w-2.5 h-2.5" />
                      {v.tag}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    {service.categoryName}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Bottom row */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">Service charge from</span>
                    <span className="font-extrabold text-slate-900 text-sm">{service.indicativePrice}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium bg-slate-50 px-2 py-1 rounded-xl border border-slate-100">
                      <Clock className="w-3 h-3 text-amber-500" />
                      {service.turnaround}
                    </span>

                    {/* WhatsApp quick-send */}
                    <a
                      href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent(
                        `Hello cyberXero, I visited your website and want to enquire about "${service.title}" (${service.categoryName} | Rate: ${service.indicativePrice} | Time: ${service.turnaround}). Please guide me.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="w-8 h-8 rounded-full bg-emerald-50 hover:bg-emerald-500 text-emerald-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm border border-emerald-200 hover:border-emerald-500 hover:scale-110"
                      title="Quick WhatsApp enquiry"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                    </a>

                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-indigo-600 text-slate-500 group-hover:text-white flex items-center justify-center transition-all duration-300">
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
