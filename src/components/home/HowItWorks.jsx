import React, { useState } from 'react';
import {
  Search,
  Send,
  Cpu,
  Receipt,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';
import WhatsAppIcon from '../common/WhatsAppIcon';

const STEPS = [
  {
    num: '01',
    title: 'Tell Us What You Need',
    desc: 'Share the form, document or task you want help with. We\'ll clarify the service and explain what is required.',
    icon: Search,
    iconAnim: 'animate-icon-scan',
    grad: 'from-blue-500 to-indigo-600',
    softBg: 'bg-blue-50 border-blue-200 text-blue-700',
    glowColor: 'rgba(99,102,241,0.32)',
    badge: 'Step 1',
    tip: 'Tell us what you\'re trying to get done and we\'ll point you in the right direction.',
  },
  {
    num: '02',
    title: 'Get Your Documents Ready',
    desc: 'Bring the relevant documents and details. We\'ll help check the basic requirements before starting.',
    icon: Send,
    iconAnim: 'animate-icon-glide',
    grad: 'from-indigo-500 to-purple-600',
    softBg: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    glowColor: 'rgba(139,92,246,0.32)',
    badge: 'Step 2',
    tip: 'Message us first to check required documents before you visit.',
  },
  {
    num: '03',
    title: 'Review Before Submission',
    desc: 'Check the information carefully. You remain in control of your personal details and enter your own OTPs or authentication codes.',
    icon: Cpu,
    iconAnim: 'animate-icon-cpu',
    grad: 'from-purple-500 to-pink-600',
    softBg: 'bg-purple-50 border-purple-200 text-purple-700',
    glowColor: 'rgba(236,72,153,0.32)',
    badge: 'Step 3',
    tip: 'Enter sensitive details and OTPs yourself.',
  },
  {
    num: '04',
    title: 'Collect the Result',
    desc: 'Receive your printouts, copies or available submission acknowledgement. We\'ll explain any next steps where applicable.',
    icon: Receipt,
    iconAnim: 'animate-bounce-soft',
    grad: 'from-amber-500 to-emerald-500',
    softBg: 'bg-amber-50 border-amber-200 text-amber-700',
    glowColor: 'rgba(16,185,129,0.32)',
    badge: 'Step 4',
    tip: 'Clear assistance receipts provided for every shop service.',
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 py-16 lg:py-24 bg-mesh-gradient border-b border-slate-200/70 relative overflow-hidden render-content-auto"
    >
      {/* Lightweight GPU-accelerated workflow background animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="dot-grid absolute inset-0 opacity-45" />
        <div className="orb w-72 h-72 bg-indigo-400/10 -top-16 -left-16 animate-float" />
        <div className="orb w-64 h-64 bg-emerald-400/10 bottom-8 -right-12 animate-float-delayed" />
        <div className="absolute top-10 right-10 w-28 h-28 rounded-full border-4 border-dashed border-indigo-200/60 animate-spin-slow" />
        <div
          className="absolute bottom-14 left-8 w-20 h-20 rounded-full border-4 border-dashed border-emerald-200/60 animate-spin-slow"
          style={{ animationDirection: 'reverse', animationDuration: '12s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-emerald-700 mb-3 mx-auto w-fit">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-spin-slow" />
            <span>Simple &amp; Stress-Free</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bring the Requirement.{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              We'll Help You Through the Steps.
            </span>
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
            Getting A Document Or Online Task Done Should Feel Straightforward. Here's How We Take You From Your First Question To The Completed Shop-Side Service.
          </p>
        </div>

        {/* ── Steps Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Animated workflow connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-1 rounded-full bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200 overflow-hidden pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-1/4 h-full rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-emerald-400 animate-flow-right" />
          </div>

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(isActive ? null : idx)}
                className={`card-3d group relative bg-white rounded-3xl p-6 border shadow-sm cursor-pointer flex flex-col justify-between overflow-hidden transition-all duration-300 animate-card-enter ${
                  isActive
                    ? 'border-indigo-400 shadow-xl ring-2 ring-indigo-100'
                    : 'border-slate-200/80 hover:border-indigo-300'
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Gradient top strip */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${step.grad} transition-opacity duration-300 z-10 ${
                    isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                  }`}
                />

                {/* Simple, visible GPU-composited card background animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl" aria-hidden="true">
                  <div
                    className={`absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-gradient-to-tr ${step.grad} opacity-[0.12] group-hover:opacity-[0.2] blur-xl animate-float transition-opacity duration-300`}
                    style={{ animationDelay: `${idx * 450}ms` }}
                  />
                  <div
                    className={`absolute -top-8 -right-8 w-24 h-24 rounded-full border-2 border-dashed border-indigo-200/70 animate-spin-slow`}
                    style={{ animationDuration: '16s' }}
                  />
                  <div
                    className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-indigo-50/70 to-transparent animate-card-sheen"
                    style={{ animationDelay: `${idx * 700}ms` }}
                  />
                </div>

                <div className="relative z-10">
                  {/* Animated Icon + Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="relative">
                      {/* Soft pulse halo on hover/active */}
                      <span
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${step.grad} blur-md transition-opacity duration-300 ${
                          isActive ? 'opacity-45 animate-pulse-glow' : 'opacity-0 group-hover:opacity-35'
                        }`}
                        aria-hidden="true"
                      />
                      <div
                        className={`relative w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.grad} text-white flex items-center justify-center shadow-lg transition-transform duration-300 ${
                          isActive
                            ? 'scale-110 -rotate-6'
                            : 'group-hover:scale-110 group-hover:-rotate-6'
                        }`}
                        style={isActive ? { boxShadow: `0 0 20px ${step.glowColor}` } : undefined}
                      >
                        <Icon className={`w-6 h-6 ${step.iconAnim} group-hover:animate-icon-pop`} />
                      </div>
                    </div>

                    <span className="text-4xl font-black font-mono text-slate-100 group-hover:text-indigo-100 transition-colors select-none">
                      {step.num}
                    </span>
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-2.5 inline-block ${step.softBg}`}>
                    {step.badge}
                  </span>

                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Expandable tip */}
                  <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-24 mt-3' : 'max-h-0'}`}>
                    <div className={`p-2.5 rounded-xl text-[11px] font-semibold border ${step.softBg} flex items-center gap-2`}>
                      <ChevronRight className="w-3.5 h-3.5 shrink-0 animate-float-x" />
                      <span>{step.tip}</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 pt-3.5 border-t border-slate-100 flex items-center text-[11px] font-bold text-emerald-600 gap-1.5 mt-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                  <span>Verified Workflow</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── WhatsApp Express Banner ── */}
        <div className="mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 p-6 sm:p-8 text-white shadow-2xl border border-indigo-800/50">
          <div className="orb w-72 h-72 bg-emerald-500/15 -right-20 -bottom-20 animate-pulse-glow" />
          <div className="orb w-48 h-48 bg-purple-500/15 left-0 top-0 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          <div className="dot-grid absolute inset-0 opacity-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Need Help Choosing a Service?
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold">Start with a Message. Visit with a Plan.</h4>
              <p className="text-xs text-slate-300 max-w-xl">
                Not sure which service you need or what documents to bring? Message us first. We'll help you understand the requirements before you visit.
              </p>
              <p className="text-[11px] text-amber-300/90 font-medium">
                Please don't send passwords, PINs, OTPs or sensitive identity details over chat.
              </p>
            </div>

            <a
              href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20cyberXero%2C%20I%20visited%20your%20website%20and%20need%20help%20choosing%20a%20service%20and%20understanding%20what%20documents%20to%20bring.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2.5 shrink-0 relative z-10"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white animate-bounce-soft" />
              <span>Message Us on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
