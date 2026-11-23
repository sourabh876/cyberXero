import React from 'react';
import { 
  Search, 
  Send, 
  Cpu, 
  Receipt, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone,
  Sparkles
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Pick Service & Checklist',
      desc: 'Check required ID proofs, marksheets, and photo sizes before you visit.',
      icon: Search,
      gradient: 'from-blue-500 to-indigo-600',
      badge: 'Step 1'
    },
    {
      num: '02',
      title: 'WhatsApp or Walk In',
      desc: 'Forward files to WhatsApp ahead of time or walk straight to our counter.',
      icon: Send,
      gradient: 'from-indigo-500 to-purple-600',
      badge: 'Step 2'
    },
    {
      num: '03',
      title: 'Assisted Filing & Resize',
      desc: 'We format files to portal rules, and you type your confidential OTPs yourself.',
      icon: Cpu,
      gradient: 'from-purple-500 to-pink-600',
      badge: 'Step 3'
    },
    {
      num: '04',
      title: 'Instant Prints & Receipt',
      desc: 'Collect sharp laser copies, laminated cards, and your official portal bill.',
      icon: Receipt,
      gradient: 'from-amber-500 to-emerald-600',
      badge: 'Step 4'
    }
  ];

  return (
    <section id="how-it-works" className="scroll-mt-24 py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-indigo-50/20 to-slate-50 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Simple & Stress-Free</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            4 Easy Steps to Done
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
            No portal confusion, no long waits. Here is how your walk-in gets solved from arrival to print.
          </p>
        </div>

        {/* Steps Grid with Connected Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="relative bg-white/95 rounded-3xl p-6 border border-slate-200/70 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Top gradient highlight strip */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient}`} />

                <div>
                  {/* Top Bar: Icon Capsule & Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black font-mono text-slate-200 group-hover:text-indigo-300 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 mb-2.5 inline-block">
                    {step.badge}
                  </span>
                  
                  <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-brand-blue-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center text-[11px] font-bold text-emerald-600 gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Verified Workflow</span>
                </div>

              </div>
            );
          })}

        </div>

        {/* Express WhatsApp Queue Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-indigo-900/50 relative overflow-hidden">
          {/* Subtle glow orb */}
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-1.5 text-center md:text-left relative z-10">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-1">
              ⚡ Express WhatsApp Queue
            </span>
            <h4 className="text-lg sm:text-xl font-extrabold">Skip the Line with WhatsApp</h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Send files before you leave home. We'll have your prints ready the moment you walk in.
            </p>
          </div>

          <a
            href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hi%2C%20sending%20my%20documents%20for%20advance%20printing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30 hover:shadow-glow-emerald transition shrink-0 flex items-center gap-2 transform hover:scale-105 relative z-10"
          >
            <Smartphone className="w-4 h-4" />
            <span>Send Files: {shopInfo.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
